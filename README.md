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
  debug?: boolean           // 开启调试日志，默认 false
  getUid?: GetUid           // 获取 uid 的回调，传入平台名，返回 Promise<string | number>
  urlResolver?: UrlResolver // URL 解析器，默认自动检测环境（浏览器 / 小程序）
})
```

#### .use(platform)

注册广告平台适配器。可注册多个。

```typescript
tracker.use(new TencentPlatform())
tracker.use(new BaiduPlatform())
```

#### .init(url?)

解析 URL 中的广告参数，按平台分别存储。不传参时默认读取 `window.location.href`。

```typescript
const matched = tracker.init()
// matched: ['tencent', 'baidu']  — 返回所有匹配到的平台名，未匹配返回 []
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

### BasePlatform

所有平台适配器的基类。

子类必须定义三个成员：

| 成员 | 说明 |
|------|------|
| `name` | 平台唯一标识（如 `'tencent'`） |
| `actionMap` | ActionType → 平台标准事件字符串的映射 |
| `defaultMatch()` | 判断页面是否属于本平台的匹配规则 |

BasePlatform 内置 `match()` 方法的优先级：**`options.match` > `defaultMatch()`**。即构造时传入 `match` 可覆盖子类默认规则。

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

### IStorage

存储接口，浏览器环境默认使用 `localStorage`（跨页面不丢失），Node/SSR 环境回退到内存存储。

```typescript
import { MemoryStorage, SessionStorageWrapper, LocalStorageWrapper } from '@chihqiang/ad-tracker'

const tracker = new AdTracker({
  storage: new LocalStorageWrapper(),
})
```

### UrlResolver

URL 解析器，自动检测运行环境（浏览器 / 微信 / 支付宝 / 抖音 / 快手 / 百度小程序），返回结构化页面信息。

```typescript
import { UrlResolver } from '@chihqiang/ad-tracker'

// 自动检测环境
const resolver = new UrlResolver()

// 手动指定环境
const resolver = new UrlResolver('wx')

resolver.envName          // 当前环境，如 'browser' | 'wx' | 'alipay'
resolver.getCurrentUrl()  // 当前页面 URL 字符串
resolver.getCurrentPage() // PageLocation 对象
resolver.getPageFromUrl('https://example.com?a=1') // 从 URL 字符串解析
```

### PageLocation

```typescript
interface PageLocation {
  href: string                      // 完整 URL / 小程序 path?query
  host: string                      // 域名（小程序为空）
  protocol: string                  // 协议（小程序为空）
  port: string                      // 端口（小程序为空）
  pathname: string                  // 路径
  search: string                    // 查询字符串
  query: Record<string, string>     // 解析后的查询参数对象
}
```

`.init()` 内部流程：

1. `resolver.getPageFromUrl(url)` 解析传入 URL，或 `resolver.getCurrentPage()` 自动获取当前页面，得到 `PageLocation`
2. 遍历已注册平台，调用 `platform.match(page)` — 优先用 `options.match`，否则走 `defaultMatch()`
3. 匹配成功的平台调用 `platform.savePage(page)` — 从 `page.query` 提取参数，过滤 `ad` 后缓存

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
