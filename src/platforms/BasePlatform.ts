import { v4 as uuidv4 } from "uuid";
import { ActionType } from "../ActionType";
import type { IStorage } from "../Storage";
import type { PageLocation } from "../UrlResolver";

/** 广告点击链接携带的参数（key-value 形式） */
export interface ClickParams {
  [key: string]: string | undefined;
}

/** 用户上报时传入的事件（action_type 必填，其余字段自由扩展） */
export interface Event {
  action_type: ActionType;
  current_url?: string;
  [key: string]: unknown;
}

/** 传给 handler 的载荷（第二个参数） */
export interface Payload {
  params: ClickParams;
  action_type: string | number;
  action_time: number;
  uid?: string | number;
  uuid?: string;
  options?: PlatformOptions;
  [key: string]: unknown;
}

/** 用户自定义上报回调 */
export type ReportHandler = (
  platform: string,
  payload: Payload,
) => Promise<unknown>;

/** 获取 uid 的回调，由用户调用自己的接口返回 uid */
export type GetUid = (platform: string) => Promise<string | number>;

/** BasePlatform 构造参数 */
export interface PlatformOptions {
  /** 实例标识，追加到 storageKey（如 tag="app1" → AD_PARAMS_TENCENT_APP1） */
  tag?: string;
  /** 自定义匹配规则，优先级高于子类的 defaultMatch */
  match?: (page: PageLocation) => boolean;
}

/** 由 AdTracker 注入的运行时配置 */
export interface PlatformConfig {
  storage?: IStorage;
  handler?: ReportHandler;
  getUid?: GetUid;
  debug?: boolean;
}

/** 平台适配器接口 */
export interface Platform {
  /** 平台唯一标识 */
  readonly name: string;
  /** ActionType → 平台事件字符串的映射表 */
  actionMap: Record<number, string | number>;
  /** 判断页面是否属于当前平台 */
  match(page: PageLocation): boolean;
  /** 注入运行时配置 */
  configure(config: PlatformConfig): void;
  /** 覆盖或追加 actionMap */
  setActionMap(map: Record<number, string | number>): void;
  /** 解析 page 参数并缓存 */
  savePage(page: PageLocation): void;
  /** 读取缓存的广告参数 */
  loadParams(): ClickParams | null;
  /** 组装完整上报载荷 */
  buildPayload(event: Event): Promise<Payload | null>;
  /** 上报转化事件 */
  report(event: Event): Promise<void>;
  /** 存储 key，格式 AD_PARAMS_{NAME}[_{TAG}] */
  readonly storageKey: string;
}

/**
 * 广告平台基类
 *
 * 子类必须定义：
 * - name           - 平台标识
 * - actionMap      - ActionType 枚举到平台事件字符串的映射
 * - defaultMatch() - 默认匹配规则
 *
 * 构造时可传入 PlatformOptions 覆盖默认行为：
 * - tag   标记多实例，追加到 storageKey
 * - match 自定义匹配规则，优先级高于 defaultMatch
 */
export abstract class BasePlatform implements Platform {
  abstract readonly name: string;
  actionMap: Record<number, string | number> = {};

  protected storage?: IStorage;
  protected handler?: ReportHandler;
  protected getUid?: GetUid;
  protected debug = false;
  protected options: PlatformOptions;

  constructor(options: PlatformOptions = {}) {
    this.options = options;
  }

  /** 各平台默认匹配规则，由子类实现 */
  protected abstract defaultMatch(page: PageLocation): boolean;

  /**
   * 注入平台运行时配置
   * 由 AdTracker.use() 自动调用
   */
  configure(config: PlatformConfig): void {
    if (config.storage !== undefined) this.storage = config.storage;
    if (config.handler !== undefined) this.handler = config.handler;
    if (config.getUid !== undefined) this.getUid = config.getUid;
    if (config.debug !== undefined) this.debug = config.debug;
  }

  protected log(method: string, ...args: unknown[]): void {
    if (this.debug) {
      console.log(`[ad-tracker] ${this.constructor.name}.${method} -`, ...args);
    }
  }

  /**
   * 判断页面是否属于当前平台
   * 优先使用构造参数传入的 options.match，否则使用子类的 defaultMatch
   */
  match(page: PageLocation): boolean {
    return this.options.match
      ? this.options.match(page)
      : this.defaultMatch(page);
  }

  /** 覆盖或追加 ActionType → 平台事件的映射 */
  setActionMap(map: Record<number, string | number>): void {
    Object.assign(this.actionMap, map);
  }

  /** 将 ActionType 枚举转为平台实际的事件类型 */
  mapActionType(actionType: ActionType): string | number {
    return (
      this.actionMap[actionType] ?? ActionType[actionType] ?? String(actionType)
    );
  }

  /**
   * 从 PageLocation 中提取广告参数并存入存储
   * 自动过滤内部参数（ad），不污染仓库
   */
  savePage(page: PageLocation): void {
    const filtered = { ...page.query };
    delete filtered.ad;
    this.storage?.set(this.storageKey, JSON.stringify(filtered));
    this.log("savePage", filtered);
  }

  /** 从存储读取广告参数，无缓存时返回 null */
  loadParams(): ClickParams | null {
    const raw = this.storage?.get(this.storageKey);
    if (!raw) {
      this.log("loadParams", "no stored params");
      return null;
    }
    try {
      const params = JSON.parse(raw);
      this.log("loadParams", params);
      return params;
    } catch {
      this.log("loadParams", "parse error", raw);
      return null;
    }
  }

  /**
   * 组装上报载荷
   * 无缓存参数时返回 null
   */
  async buildPayload(event: Event): Promise<Payload | null> {
    const params = this.loadParams();
    if (!params) {
      this.log("buildPayload", "no stored params");
      return null;
    }
    const uid = this.getUid ? await this.getUid(this.name) : undefined;
    const uuid = uuidv4();
    const { match, ...payloadOptions } = this.options;
    return {
      ...event,
      params,
      action_type: this.mapActionType(event.action_type),
      action_time: Date.now(),
      uid,
      uuid,
      options: payloadOptions,
    };
  }

  /**
   * 上报转化事件
   * 组装 payload 后交由 handler 处理
   */
  async report(event: Event): Promise<void> {
    if (!this.handler) {
      this.log("report", "skipped, no handler configured");
      return;
    }
    const payload = await this.buildPayload(event);
    if (!payload) {
      this.log("report", "skipped, no stored params");
      return;
    }
    this.log("report", payload);
    try {
      const result = await this.handler(this.name, payload);
      this.log("report", "handler result:", result);
    } catch (err) {
      this.log("report", "handler error:", err);
    }
  }

  /** storageKey 格式：AD_PARAMS_{NAME}[_{TAG}] */
  get storageKey(): string {
    return ["ad_params", this.name, this.options.tag]
      .filter(Boolean)
      .join("_")
      .toUpperCase();
  }
}
