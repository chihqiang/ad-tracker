/** 标准转化事件类型（int 枚举，各平台通过 mapActionType 转换为平台字符串） */
export enum ActionType {
  REGISTER,     // 注册
  RESERVATION,  // 表单预约
  PURCHASE,     // 付费
  CLAIM_OFFER,  // 领取优惠
  VIEW,         // 浏览内容
}

/** 内置广告平台名称枚举 */
export enum PlatformName {
  TENCENT = "tencent",
  OCEAN_ENGINE = "oceanengine",
}
