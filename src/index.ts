/** 广告追踪 SDK - @chihqiang/ad-tracker */

export { AdTracker } from './AdTracker'
export type { Config } from './AdTracker'
export { UrlResolver } from './UrlResolver'
export type { PageLocation } from './UrlResolver'
export { genUuid } from './Uuid'
export { ActionType } from './ActionType'
export { BasePlatform } from './platforms/BasePlatform'
export type { PlatformOptions, ClickParams, Event, Payload, Platform, ReportHandler, GetUid } from './platforms/BasePlatform'
export { TencentPlatform } from './platforms/TencentPlatform'
export { OceanEnginePlatform } from './platforms/OceanEnginePlatform'
export { MemoryStorage, SessionStorageWrapper, LocalStorageWrapper, createDefaultStorage } from './Storage'
export type { IStorage } from './Storage'
