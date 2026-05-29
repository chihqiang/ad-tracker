# ad-tracker

ad-tracker 是一款轻量的 TypeScript 广告追踪 SDK。自动解析广告点击链接中的参数并缓存，提供统一的上报接口，兼容各类广告平台，接入简单、扩展性强。

## 安装

```bash
npm install @chihqiang/ad-tracker
```

## CDN

### 方式一：script 标签（IIFE）

通过 `<script>` 标签直接引入，全局暴露 `window.AdTracker`（命名空间，包含所有导出）。

```html
<!-- unpkg -->
<script src="https://unpkg.com/@chihqiang/ad-tracker@latest/dist/index.global.js"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@chihqiang/ad-tracker@latest/dist/index.global.js"></script>

<script>
  const { AdTracker: AdTrackerClass, TencentPlatform } = AdTracker

  const tracker = new AdTrackerClass({
    handler: async (platform, payload) => {
      const res = await fetch('https://your-server.com/api/ad/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform, ...payload }),
      })
      return res.json()
    },
  })

  tracker.use(new TencentPlatform())
  tracker.init()
  window.tracker = tracker
</script>

<!-- 其他页面/模块通过 window.tracker 上报 -->
<script>
  window.tracker.report({ action_type: AdTracker.ActionType.REGISTER })
  window.tracker.report({ action_type: AdTracker.ActionType.RESERVATION })
  window.tracker.report({ action_type: AdTracker.ActionType.PURCHASE })
  window.tracker.report({ action_type: AdTracker.ActionType.CLAIM_OFFER })
  window.tracker.report({ action_type: AdTracker.ActionType.VIEW })
</script>
```

### 方式二：ESM import（Vue / React 等工程化项目，免安装）

```html
<!-- Vue SFC / main.ts 中直接 import CDN 地址 -->
<script setup>
import { AdTracker, TencentPlatform, ActionType } from 'https://esm.sh/@chihqiang/ad-tracker@latest'

const tracker = new AdTracker({
  handler: async (platform, payload) => {
    const res = await fetch('https://your-server.com/api/ad/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, ...payload }),
    })
    return res.json()
  },
})

tracker.use(new TencentPlatform())
tracker.init()

function onRegister() {
  tracker.report({ action_type: ActionType.REGISTER })
}
</script>
```

也可使用 jsdelivr：

```typescript
import { AdTracker } from 'https://cdn.jsdelivr.net/npm/@chihqiang/ad-tracker@latest/dist/index.mjs'
```

## 快速开始

```typescript
import { AdTracker, TencentPlatform, ActionType } from '@chihqiang/ad-tracker'

const tracker = new AdTracker({
  handler: async (platform, payload) => {
    const res = await fetch('https://your-server.com/api/ad/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, ...payload }),
    })
    return res.json()
  },
})

tracker.use(new TencentPlatform())

// 页面加载时解析 URL 中的广告参数，自动按平台存储
tracker.init()

// 在埋点时机手动上报（action_time 由 SDK 自动填充，无需传入）
await tracker.report({
  action_type: ActionType.REGISTER,
  value: 9900,
})
```

## 流程

1. 用户通过广告链接进入页面，`init()` 匹配所有已注册平台，缓存参数到 `localStorage`，key 为 `AD_PARAMS_{平台名}`（全大写）
2. 用户在项目中调用 `tracker.report()` 传入转化事件
3. SDK 遍历所有已注册平台，逐个检查是否有缓存参数，有则调用 `handler` 回调，传入 `(platform, payload)`
4. 用户在自己的 `handler` 中决定如何发送数据（fetch / axios / 本地存储等）

## API

### ActionType（int 枚举）

```typescript
enum ActionType {
  REGISTER,       // 0 - 注册
  RESERVATION,    // 1 - 表单预约
  PURCHASE,       // 2 - 付费
  CLAIM_OFFER,    // 3 - 领取优惠
  VIEW,           // 4 - 浏览内容
}
```

### AdTracker

```typescript
import { AdTracker } from '@chihqiang/ad-tracker'

const tracker = new AdTracker({
  handler?: ReportHandler   // 上报回调，接收 (platform, payload)
  storage?: IStorage        // 存储方式，默认 localStorage（浏览器）或内存
  debug?: boolean           // 开启调试日志，默认 false（等同于 LogLevel.DEBUG）
  logger?: Logger           // 自定义日志实例，可控制日志级别
  getUid?: GetUid           // 获取 uid 的回调，传入平台名，返回 Promise<string | number>
})
```

#### .use(platform)

注册广告平台适配器。可注册多个。

```typescript
tracker.use(new TencentPlatform())
tracker.use(new BaiduPlatform())
```

#### .init(page?)

解析页面中的广告参数，按平台分别存储。不传参时默认读取 `window.location`。返回 `this` 支持链式调用。

```typescript
tracker.init()
// 或传入 PageLocation
import { toPage } from '@chihqiang/ad-tracker'
tracker.init(toPage('https://example.com/click?click_id=abc&ad=tencent')).report({ action_type: ActionType.REGISTER })

// 小程序环境
tracker.init(toPage('pages/index/index?click_id=abc&ad=tencent'))
```

#### .report(event)

上报转化事件。遍历所有已注册平台，逐个检查缓存数据，有则调用 `handler`。

```typescript
await tracker.report({
  action_type: ActionType.REGISTER,  // 必填
  uid: 'user_123',                    // 自定义参数
})
// action_time 由 SDK 自动填充 Date.now()，无需传入
```

#### .dispose()

释放所有平台资源和日志输出。

```typescript
tracker.dispose()
```

### BasePlatform

所有平台适配器的基类。

子类必须定义三个成员：

| 成员 | 说明 |
|------|------|
| `name` | 平台唯一标识（如 `'tencent'`） |
| `actionMap` | ActionType → 平台标准事件字符串的映射 |
| `defaultMatch()` | 判断页面是否属于本平台的匹配规则 |

BasePlatform 内置 `match()` 方法的优先级：**`options.match` > `defaultMatch()`**。即构造时传入 `match` 可覆盖子类默认规则。

每个平台实例拥有独立的 Logger，tag 为平台 `name`（如 `"tencent"`），日志前缀 `【AD-TRACKER.tencent】`。

#### PlatformOptions

```typescript
interface PlatformOptions {
  tag?: string                              // 标记多实例，追加到 storageKey
  match?: (page: PageLocation) => boolean   // 自定义匹配，优先级高于 defaultMatch
}
```

| 用法 | 说明 |
|------|------|
| `new TencentPlatform()` | 默认行为 |
| `new TencentPlatform({ tag: 'app1' })` | 区分多实例，key 为 `AD_PARAMS_TENCENT_APP1` |
| `new TencentPlatform({ match: fn })` | 覆盖内置匹配规则 |
| `new BasePlatform({ tag: 'ad', match: fn })` | 无需创建子类，直接使用 |

#### .buildPayload(event)

组装完整上报参数（无缓存参数时返回 `null`）。

```typescript
const payload = await platform.buildPayload({
  action_type: ActionType.REGISTER,
  value: 9900,
})
// payload: { params: {...}, action_type: 'REGISTER', action_time: ..., uid: ..., uuid: ..., options: { tag: 'app1' } }
```

### ReportHandler

`handler` 接收 `(platform, payload)` 后自由处理（发送请求、写入队列等）。

```typescript
const tracker = new AdTracker({
  async handler(platform, payload) {
    // platform: 'tencent'
    // payload: { params, action_type, action_time, uid?, uuid?, options?, ...event }
    const res = await fetch('https://your-server.com/api/ad/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, ...payload }),
    })
    return res.json()
  },
})
```

payload 结构：

```json
{
  "params": {
    "click_id": "24oi6xq2aaakvagnqu7a",
    "account_id": "9471147",
    "click_time": "1586437362"
  },
  "action_type": "REGISTER",
  "action_time": 1717000000,
  "value": 9900,
  "uid": "user_123",
  "uuid": "ae988a05-3cfd-46c2-b640-586a26273a0a",
  "options": {
    "tag": "app1"
  }
}
```

### Logger

日志工具，按级别控制输出。`AdTracker` 构造时可传入自定义 Logger 实例。

```typescript
import { Logger, LogLevel } from '@chihqiang/ad-tracker'

// 自定义日志级别
const tracker = new AdTracker({
  logger: new Logger('AdTracker', LogLevel.WARN),  // 仅输出 warn
})

// 或简写为 debug: true（等价于 LogLevel.DEBUG）
const tracker = new AdTracker({ debug: true })
```

级别枚举（数字越小越详细）：

| LogLevel | 值 | 说明 |
|----------|----|------|
| `DEBUG` | 0 | 全部输出 |
| `WARN` | 1 | 仅输出警告 |
| `NONE` | 2 | 关闭所有日志 |

```typescript
const logger = new Logger('MyTag')

logger.debug('查询用户信息', { userId: 123 })  // 对象参数在控制台可展开
logger.warn('接口超时', { url: '/api' })

// 也支持按级别写入
logger.log(LogLevel.DEBUG, '查询用户信息', { userId: 123 })

logger.setLevel(LogLevel.WARN)   // 运行时动态调整级别
logger.dispose()                  // 释放日志（关闭输出）
```

日志输出格式：

```
[2026-05-29 12:00:00] 【AD-TRACKER.MyTag】 DEBUG 查询用户信息 {userId: 123}
[2026-05-29 12:00:00] 【AD-TRACKER.MyTag】 WARN 接口超时
```

- 时间戳精确到秒
- `【AD-TRACKER.tag】` 标识来源，tag 为传入的标识名
- 仅对象类型的 data 会展开输出到控制台，字符串/原始值不输出

### IStorage

存储接口，浏览器环境默认使用 `localStorage`（跨页面不丢失），Node/SSR 环境回退到内存存储。

```typescript
import { MemoryStorage, SessionStorageWrapper, LocalStorageWrapper } from '@chihqiang/ad-tracker'

const tracker = new AdTracker({
  storage: new LocalStorageWrapper(),
})
```

### PageLocation

页面结构化信息，浏览器环境包含完整 URL 字段，小程序环境仅 `href` / `pathname` / `search` / `query` 有值。

```typescript
interface PageLocation {
  href: string                       // 完整 URL（浏览器），或 path?query（小程序）
  host?: string                      // 域名，小程序无此字段
  protocol?: string                  // 协议，小程序无此字段
  port?: string                      // 端口，小程序无此字段
  pathname: string                   // 路径
  search: string                     // 查询字符串（含 ?）
  query: Record<string, string>      // 解析后的查询参数
}
```

### toPage

将 href 字符串解析为 `PageLocation`，同时支持浏览器 URL 和小程序 `path?query` 格式。

```typescript
import { toPage } from '@chihqiang/ad-tracker'

// 浏览器 URL → 包含 host / protocol / port
const page = toPage('https://example.com/click?click_id=abc&ad=tencent')
// { href: '...', host: 'example.com', protocol: 'https', port: '', pathname: '/click', search: '?...', query: { click_id: 'abc', ad: 'tencent' } }

// 小程序 path?query → 仅 href / pathname / search / query 有值
const page = toPage('pages/index/index?click_id=abc&ad=tencent')
// { href: '...', pathname: '/pages/index/index', search: '?...', query: { click_id: 'abc', ad: 'tencent' } }
```

### genUuid

UUID v4 生成函数，自实现无外部依赖。

```typescript
import { genUuid } from '@chihqiang/ad-tracker'

const id = genUuid()  // 'ae988a05-3cfd-46c2-b640-586a26273a0a'
```

优先使用 `crypto.randomUUID()`，降级到 `crypto.getRandomValues()`，兜底 `Math.random()`。

## 内置平台

### TencentPlatform

匹配包含 `click_id` 且 `ad=tencent` 的腾讯广告点击链接，存储 key 为 `AD_PARAMS_TENCENT`。

`actionMap` 将 ActionType 映射为腾讯标准事件字符串。可通过 `setActionMap()` 覆盖或追加映射。

```typescript
import { TencentPlatform } from '@chihqiang/ad-tracker'
const tencent = new TencentPlatform()
tencent.setActionMap({
  [ActionType.REGISTER]: 'my_register',  // 覆盖
  99: 'custom_event',                     // 追加
})
tracker.use(tencent)
```

### OceanEnginePlatform

匹配包含 `clickid` 且 `ad=oceanengine` 的巨量引擎广告点击链接，存储 key 为 `AD_PARAMS_OCEANENGINE`。

`actionMap` 将 ActionType 映射为巨量引擎事件字符串。可通过 `setActionMap()` 覆盖或追加。

```typescript
import { OceanEnginePlatform } from '@chihqiang/ad-tracker'
tracker.use(new OceanEnginePlatform())
```

## 接入其他广告平台

继承 `BasePlatform`，必须覆盖 `name`、`actionMap`、`defaultMatch()`。也可通过构造参数 `PlatformOptions` 覆盖默认行为。

```typescript
import { BasePlatform, AdTracker, ActionType } from '@chihqiang/ad-tracker'
import type { PageLocation } from '@chihqiang/ad-tracker'

// 方式一：创建子类（推荐，复用性强）
class BaiduPlatform extends BasePlatform {
  readonly name = 'baidu'
  actionMap: Record<number, string | number> = {
    [ActionType.REGISTER]: 'signup',
    [ActionType.PURCHASE]: 'order',
  }
  protected defaultMatch(page: PageLocation): boolean {
    return !!page.query.bd_click_id
  }
}

// 多个实例用 tag 区分 storage
tracker.use(new BaiduPlatform({ tag: 'app1' }))
tracker.use(new BaiduPlatform({ tag: 'app2' }))
const tracker = new AdTracker({ handler: async () => {} })
tracker.use(new BaiduPlatform())
tracker.init()
await tracker.report({ action_type: ActionType.REGISTER, user_id: '123' })

// 方式二：直接传入 match，无需创建子类
tracker.use(new BasePlatform({
  tag: 'my_ad',
  match: (page) => !!page.query.my_click_id,
}))
```
