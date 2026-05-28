import { createDefaultStorage } from "./Storage";
import type { IStorage } from "./Storage";
import { UrlResolver } from "./UrlResolver";
import type { Event, Platform, ReportHandler, GetUid } from "./platforms/BasePlatform";

/** AdTracker 配置 */
export interface Config {
  storage?: IStorage
  handler?: ReportHandler
  debug?: boolean
  getUid?: GetUid
  urlResolver?: UrlResolver
}

/**
 * 广告追踪 SDK 入口
 *
 * 职责：
 * - 注册平台适配器（use）
 * - 解析页面 URL 并将广告参数分发给匹配的平台（init）
 * - 触发转化事件上报（report）
 */
export class AdTracker {
  private platforms: Platform[] = [];
  private storage: IStorage;
  private handler?: ReportHandler;
  private getUid?: GetUid;
  private debug: boolean;
  private urlResolver: UrlResolver;

  constructor(config: Config = {}) {
    this.storage = config.storage ?? createDefaultStorage();
    this.handler = config.handler;
    this.getUid = config.getUid;
    this.debug = config.debug ?? false;
    this.urlResolver = config.urlResolver ?? new UrlResolver();
  }

  /** 调试日志 */
  private log(method: string, ...args: unknown[]): void {
    if (this.debug) {
      console.log(`[ad-tracker] AdTracker.${method} -`, ...args);
    }
  }

  /**
   * 注册平台适配器
   * 自动注入 storage / handler / getUid / debug 配置，重复注册自动跳过
   */
  use(platform: Platform): this {
    if (this.platforms.some((p) => p.storageKey === platform.storageKey)) {
      this.log("use", `${platform.storageKey} already registered`);
      return this;
    }
    platform.configure({
      storage: this.storage,
      handler: this.handler,
      getUid: this.getUid,
      debug: this.debug,
    });
    this.platforms.push(platform);
    this.log("use", platform.storageKey);
    return this;
  }

  /**
   * 解析 URL 并匹配平台，将参数存储到各平台
   * @param url - 广告点击 URL，默认读取 window.location.href
   * @returns 匹配到的平台名列表
   */
  init(url?: string): string[] {
    if (this.platforms.length === 0) {
      this.log("init", "no platforms registered");
      return [];
    }

    const page = url ? this.urlResolver.getPageFromUrl(url) : this.urlResolver.getCurrentPage();
    if (!page) {
      this.log("init", "no page available");
      return [];
    }

    this.log("init", page.href);
    const matched: string[] = [];

    for (const platform of this.platforms) {
      if (platform.match(page)) {
        platform.savePage(page);
        matched.push(platform.name);
      }
    }

    this.log("init", "matched", matched);
    return matched;
  }

  /**
   * 上报转化事件
   * 遍历所有已注册平台，对有缓存数据的逐个调用 handler
   */
  async report(event: Event): Promise<void> {
    if (!this.handler) {
      this.log("report", "skipped, no handler configured");
      return;
    }
    const enriched = event.current_url
      ? event
      : { ...event, current_url: this.urlResolver.getCurrentUrl() }
    this.log("report", enriched);
    for (const platform of this.platforms) {
      await platform.report(enriched);
    }
  }

}
