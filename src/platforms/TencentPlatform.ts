import { BasePlatform } from "./BasePlatform";
import { ActionType, PlatformName } from "../Types";
import type { PageLocation } from "../PageLocation";

/**
 * 腾讯广告平台适配器
 *
 * 匹配规则：URL 中包含 click_id 且 ad=tencent
 * 事件映射：ActionType 枚举直接转为腾讯标准字符串（如 REGISTER → "REGISTER"）
 *
 * 点击监测链接使用指南：https://developers.e.qq.com/docs/guide/conversion/new_version/dianjijiance
 * APP转化数据API自归因：https://developers.e.qq.com/docs/guide/conversion/new_version/APP_api
 * 开发者专区首页：https://developers.e.qq.com/docs
 */
export class TencentPlatform extends BasePlatform {
  readonly name = PlatformName.TENCENT;
  actionMap: Record<number, string | number> = {
    [ActionType.REGISTER]: "REGISTER",
    [ActionType.RESERVATION]: "RESERVATION",
    [ActionType.PURCHASE]: "PURCHASE",
    [ActionType.CLAIM_OFFER]: "CLAIM_OFFER",
    [ActionType.VIEW]: "VIEW_CONTENT",
  };

  protected defaultMatch(page: PageLocation): boolean {
    return !!(page.query.click_id && page.query.ad === this.name);
  }
}
