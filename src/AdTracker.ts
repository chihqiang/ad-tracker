import { createDefaultStorage } from "./Storage";
import type { IStorage } from "./Storage";
import { getLocationPage, type PageLocation } from "./PageLocation";
import { Logger, LogLevel } from "./Logger";
import type { Event, Platform, ReportHandler, GetUid } from "./platforms/BasePlatform";

/** AdTracker 配置 */
export interface Config {
  storage?: IStorage
  handler?: ReportHandler
  debug?: boolean
  logger?: Logger
  getUid?: GetUid
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
  private logger: Logger;
  private pageLocation?: PageLocation;

  constructor(config: Config = {}) {
    this.storage = config.storage ?? createDefaultStorage();
    this.handler = config.handler;
    this.getUid = config.getUid;
    this.logger = config.logger ?? new Logger("main", config.debug ? LogLevel.DEBUG : LogLevel.NONE);
  }

  /**
   * 注册平台适配器
   * 自动注入 storage / handler / getUid / logger 配置，重复注册自动跳过
   */
  use(platform: Platform): this {
    if (this.platforms.some((p) => p.storageKey === platform.storageKey)) {
      this.logger.debug("注册平台适配器：检测到重复注册，自动跳过", { key: platform.storageKey });
      return this;
    }
    platform.configure({
      storage: this.storage,
      handler: this.handler,
      getUid: this.getUid,
      logLevel: this.logger.getLevel(),
    });
    this.platforms.push(platform);
    this.logger.debug("注册平台适配器", { key: platform.storageKey, name: platform.name });
    return this;
  }

  /** 获取所有已注册平台 */
  getPlatforms(): Platform[] {
    return this.platforms;
  }

  /**
   * 解析页面并匹配平台，将参数存储到各平台
   * @param page - 页面结构化信息，默认读取 window.location
   * @returns 匹配到的平台名列表
   */
  init(page?: PageLocation): this {
    const target = page ?? getLocationPage();

    if (this.platforms.length === 0) {
      this.logger.debug("页面匹配检查：暂无已注册平台适配器", target);
      return this;
    }
    if (!target) {
      this.logger.debug("页面匹配检查：无法获取当前页面信息");
      return this;
    }
    this.pageLocation = target;

    this.logger.debug("页面URL解析匹配", target);
    for (const platform of this.platforms) {
      if (platform.match(target)) {
        platform.savePage(target);
      }
    }

    return this;
  }

  dispose(): void {
    for (const platform of this.platforms) {
      platform.dispose()
    }
    this.platforms.length = 0
    this.logger.dispose()
  }

  /**
   * 上报转化事件
   * 遍历所有已注册平台，对有缓存数据的逐个调用 handler
   */
  async report(event: Event): Promise<void> {
    if (!this.handler) {
      this.logger.warn("handler 未配置，跳过上报", event);
      return;
    }
    const enriched = event.current_url
      ? event
      : { ...event, current_url: this.pageLocation?.href ?? "" };
    this.logger.debug("转换事件上报", enriched);
    await Promise.all(
      this.platforms.map(async (p) => {
        try {
          await p.report(enriched);
        } catch (err) {
          this.logger.warn("平台上报失败", { platform: p.name, error: err });
        }
      })
    );
  }

}
