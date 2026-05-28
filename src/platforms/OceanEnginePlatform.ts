import { BasePlatform } from "./BasePlatform";
import { ActionType } from "../ActionType";
import type { PageLocation } from "../UrlResolver";

/**
 * 巨量引擎（OceanEngine）广告平台适配器
 *
 * 匹配规则：URL 中包含 clickid 且 ad=oceanengine
 * 事件映射：ActionType 枚举转为巨量引擎事件字符串（如 REGISTER → "active_register"）
 *
 * 落地页 API 回传：https://event-manager.oceanengine.com/docs/8650/h5_api_docs
 * 事件管理操作手册：https://event-manager.oceanengine.com/docs/8650/omnichannel_api_doc
 * 商业开放平台：https://open.oceanengine.com/
 * 上报事件列表：https://event-manager.oceanengine.com/docs/8650/all_events
 */
export class OceanEnginePlatform extends BasePlatform {
  readonly name = "oceanengine";
  actionMap: Record<number, string | number> = {
    [ActionType.REGISTER]: "active_register",
    [ActionType.RESERVATION]: "form",
    [ActionType.PURCHASE]: "active_pay",
    [ActionType.CLAIM_OFFER]: "coupon",
    [ActionType.VIEW]: "view",
  };

  protected defaultMatch(page: PageLocation): boolean {
    return !!(page.query.clickid && page.query.ad === this.name);
  }
}
