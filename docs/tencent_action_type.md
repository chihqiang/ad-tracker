## 枚举值

授权账号身份类型

| 名称                               | 描述         |
| ---------------------------------- | ------------ |
| ACCOUNT_ROLE_TYPE_ADVERTISER       | 广告主       |
| ACCOUNT_ROLE_TYPE_AGENCY           | 代理商       |
| ACCOUNT_ROLE_TYPE_T1               | T1 账户      |
| ACCOUNT_ROLE_TYPE_BUSINESS_MANAGER | 商务管家账户 |
| ACCOUNT_ROLE_TYPE_DATA_NEXUS       | 有数账户     |

账号类型

| 名称                           | 描述       |
| ------------------------------ | ---------- |
| ACCOUNT_TYPE_UNKNOWN           | 未知       |
| ACCOUNT_TYPE_ADVERTISER        | 广告主     |
| ACCOUNT_TYPE_AGENCY            | 代理商     |
| ACCOUNT_TYPE_DSP               | DSP        |
| ACCOUNT_TYPE_DEVELOPER         | 开发者     |
| ACCOUNT_TYPE_MEMBER            | 流量主     |
| ACCOUNT_TYPE_EXTERNAL_SUPPLIER | 创意供应商 |
| ACCOUNT_TYPE_TDC               | TDC        |
| ACCOUNT_TYPE_TONE              | TONE       |
| ACCOUNT_TYPE_BM                | BM         |
| ACCOUNT_TYPE_DATA_NEXUS        | DATA_NEXUS |

角色

| 名称                               | 描述                             |
| ---------------------------------- | -------------------------------- |
| ROLE_TYPE_UNKNOWN                  | 其他                             |
| ROLE_TYPE_ADMIN                    | 管理员                           |
| ROLE_TYPE_OBSERVER                 | 观察者                           |
| ROLE_TYPE_OPERATOR                 | 操作者                           |
| ROLE_TYPE_TREASURER                | 财务                             |
| ROLE_TYPE_ASSISTANT                | 助手                             |
| ROLE_TYPE_SELF_OPERATOR            | 广告主自理投放管理员             |
| ROLE_TYPE_ROOT                     | ROOT 用户                        |
| ROLE_TYPE_AGENCY_BOSS              | 代理商 BOSS                      |
| ROLE_TYPE_AGENCY_ADMIN             | 代理商协作者系统管理员           |
| ROLE_TYPE_AGENCY_OBSERVER          | 代理商协作者报表分析员           |
| ROLE_TYPE_AGENCY_TREASURER         | 代理商协作者财务管理员           |
| ROLE_TYPE_AGENCY_OPERATOR          | 代理商协作者投放管理员           |
| ROLE_TYPE_AGENCY_PROVIDER_OPERATOR | 服务商协作者投放员               |
| ROLE_TYPE_AGENCY_PROVIDER_OBSERVER | 服务商协作者观察员               |
| ROLE_TYPE_AGENCY_YYB               | 代理商协作者应用宝运营           |
| ROLE_TYPE_AGENCY_AGENT_OPERATOR    | 代理商协作者代理投放管理员       |
| ROLE_TYPE_AGENCY_SELF_OPERATOR     | 代理商协作者自理投放管理员       |
| ROLE_TYPE_AGENCY_MDM_BOSS          | 代理商主体超级管理员             |
| ROLE_TYPE_AGENCY_MDM_ADMIN         | 代理商主体管理员                 |
| ROLE_TYPE_AGENCY_MDM_TREASURER     | 代理商主体财务人员               |
| ROLE_TYPE_AGENCY_MDM_OBSERVER      | 代理商主体报表人员               |
| ROLE_TYPE_AGENCY_MDM_OPERATOR      | 代理商主体运营管理员             |
| ROLE_TYPE_AGENCY_ORBAC             | 自定义权限，详细权限从 orbac 取  |
| ROLE_TYPE_AGENCY_DESIGNER          | 代理商设计师                     |
| ROLE_TYPE_SUB_AGENCY_ADMIN         | 代理商子账号管理员（二代代理商） |

账号类型

| 名称                | 描述              |
| ------------------- | ----------------- |
| ACCOUNT_TYPE_WECHAT | 微信账号          |
| ACCOUNT_TYPE_QQ     | QQ 账号（默认值） |

操作符

| 名称           | 描述      |
| -------------- | --------- |
| EQUALS         | 等于      |
| CONTAINS       | 模糊匹配  |
| LESS_EQUALS    | 小于等于  |
| LESS           | 小于      |
| GREATER_EQUALS | 大于等于  |
| GREATER        | 大于      |
| IN             | IN 操作符 |

分页方式

| 名称                   | 描述     |
| ---------------------- | -------- |
| PAGINATION_MODE_NORMAL | 普通翻页 |
| PAGINATION_MODE_CURSOR | 游标翻页 |

客户系统状态

| 名称                               | 描述           |
| ---------------------------------- | -------------- |
| CUSTOMER_STATUS_NORMAL             | 有效           |
| CUSTOMER_STATUS_PENDING            | 待审核         |
| CUSTOMER_STATUS_DENIED             | 审核不通过     |
| CUSTOMER_STATUS_FROZEN             | 封停           |
| CUSTOMER_STATUS_TOBE_ACCEPTED      | 待接受         |
| CUSTOMER_STATUS_TOBE_ACTIVATED     | 待激活         |
| CUSTOMER_STATUS_SUSPEND            | 暂停           |
| CUSTOMER_STATUS_MATERIAL_PREPARED  | 广告主资料准备 |
| CUSTOMER_STATUS_DELETED            | 删除           |
| CUSTOMER_STATUS_FROZEN_TEMPORARILY | 临时冻结       |
| CUSTOMER_STATUS_UNREGISTERED       | 未注册         |

推广链接系统状态

| 名称                   | 描述       |
| ---------------------- | ---------- |
| WEBSITE_STATUS_NORMAL  | 审核通过   |
| WEBSITE_STATUS_PENDING | 待审核     |
| WEBSITE_STATUS_DENIED  | 审核不通过 |

资质类型

| 名称                              | 描述         |
| --------------------------------- | ------------ |
| INDUSTRY_QUALIFICATION            | 行业资质     |
| AD_QUALIFICATION                  | 广告资质     |
| ADDITIONAL_INDUSTRY_QUALIFICATION | 附加行业资质 |

资质状态

| 名称                              | 描述     |
| --------------------------------- | -------- |
| QUALIFICATION_STATUS_NORMAL       | 审核通过 |
| QUALIFICATION_STATUS_PENDING      | 待审核   |
| QUALIFICATION_STATUS_DENIED       | 审核拒绝 |
| QUALIFICATION_STATUS_EXPIRED      | 已过期   |
| QUALIFICATION_STATUS_SOON_EXPIRED | 即将过期 |

资质共享状态

| 名称                        | 描述                    |
| --------------------------- | ----------------------- |
| AD_QUALIFICATION_SHARED_YES | 资质来自于 MDM 共享     |
| AD_QUALIFICATION_SHARED_NO  | 资质不是来自于 MDM 共享 |

账户交易类型

| 名称                          | 描述              |
| ----------------------------- | ----------------- |
| AGENCY_CHARGE                 | 服务商充值        |
| AGENCY_TRANSFER_TO_ADVERTISER | 服务商-广告主转账 |
| AGENCY_REFUND_FROM_ADVERTISER | 服务商-广告主退款 |
| AGENCY_CREDIT_REPAY           | 服务商还款        |
| AGENCY_REFUND                 | 服务商退款        |
| ADVERTISER_CHARGE             | 广告主充值        |
| ADVERTISER_TRANSFER           | 广告主银行转账    |

操作符

| 名称           | 描述     |
| -------------- | -------- |
| EQUALS         | 等于     |
| CONTAINS       | 模糊匹配 |
| LESS_EQUALS    | 小于等于 |
| LESS           | 小于     |
| GREATER_EQUALS | 大于等于 |
| GREATER        | 大于     |
| IN             | 包含     |
| NOT_EQUALS     | 不等于   |

资金类型

| 名称                        | 描述         |
| --------------------------- | ------------ |
| FUND_TYPE_UNSUPPORTED       | 不支持       |
| FUND_TYPE_UNKNOWN           | 未知         |
| FUND_TYPE_CASH              | 现金账户     |
| FUND_TYPE_GIFT              | 赠送账户     |
| FUND_TYPE_SPECIAL_PROMOTION | 专项推广资金 |
| FUND_TYPE_PAYMENT_DUE       | 账期         |
| FUND_TYPE_CREDIT_TEMPORARY  | 临时信用金   |
| FUND_TYPE_CREDIT_ROLL       | 固定信用金   |
| FUND_TYPE_TCC_GIFT          | TCC 赠送金   |

账户交易状态

| 名称                     | 描述   |
| ------------------------ | ------ |
| TRADE_STATUS_PROCESSING  | 处理中 |
| TRADE_STATUS_TRANSFERRED | 已完成 |
| TRADE_STATUS_DISAPPROVED | 未通过 |
| TRADE_STATUS_UNSUPPORTED | 不支持 |

附近推资质类型

| 名称                            | 描述       |
| ------------------------------- | ---------- |
| STUFF_BUSINESS_LICENSE          | 营业执照   |
| STUFF_ID_CARD_FRONT             | 身份证正面 |
| STUFF_ID_CARD_REVERSE           | 身份证反面 |
| STUFF_INDUSTRY_QUALIFICATION    | 行业许可证 |
| STUFF_ADDIITIONAL_QUALIFICATION | 额外资质   |

微信附近推资质审核状态

| 名称                                               | 描述     |
| -------------------------------------------------- | -------- |
| LOCAL_BUSINESS_QUALIFICATION_REVIEW_STATUS_PENDING | 待审核   |
| LOCAL_BUSINESS_QUALIFICATION_REVIEW_STATUS_NORMAL  | 审核通过 |
| LOCAL_BUSINESS_QUALIFICATION_REVIEW_STATUS_DENIED  | 审核驳回 |

资产类型

| 名称                             | 描述                   |
| -------------------------------- | ---------------------- |
| ASSET_TYPE_NDMP                  | 新人群包               |
| ASSET_TYPE_XIJING                | 蹊径落地页资产         |
| ASSET_TYPE_CANVAS_IMAGE          | 素材图片资产           |
| ASSET_TYPE_CANVAS_VIDEO          | 素材视频资产           |
| ASSET_TYPE_FENGYE                | 枫叶落地页资产         |
| ASSET_TYPE_DYNAMIC_AD_TEMPLATE   | 动态商品模板资产       |
| ASSET_TYPE_AD_QUALIFICATION      | 广告资质               |
| ASSET_TYPE_CATALOG               | 商品库资产             |
| ASSET_TYPE_ACTION_SET            | 行为数据源资产         |
| ASSET_TYPE_CONVERSION_SPEC       | 转化归因               |
| ASSET_TYPE_UNION_PACKAGE         | 流量包                 |
| ASSET_TYPE_ACCOUNT_WECHAT_CANVAS | 微信原生推广页资产(新) |
| ASSET_TYPE_PROFILE               | profile 页             |
| ASSET_TYPE_LOCAL_STORE           | 门店                   |
| ASSET_TYPE_SEARCH_BRAND_AREA     | 搜索广告超级品专       |

资产权限授予类型

| 名称                                | 描述           |
| ----------------------------------- | -------------- |
| ASSET_PERMISSION_GRANT_TYPE_ASSET   | 按资产层级授权 |
| ASSET_PERMISSION_GRANT_TYPE_ACCOUNT | 按账号层级授权 |

授权账号类型

| 名称                            | 描述                               |
| ------------------------------- | ---------------------------------- |
| ASSET_TYPE_ACCOUNT_BM           | BM 内指定账户                      |
| ASSET_TYPE_ACCOUNT_MDM          | 主体内指定账户                     |
| ASSET_TYPE_GROUP_BM             | BM 内所有账户                      |
| ASSET_TYPE_GROUP_MDM            | 主体内所有账户                     |
| ASSET_TYPE_GROUP_POINT_TO_POINT | 点对点                             |
| ASSET_TYPE_AGENCY               | 授权给服务商(授权给服务商自身使用) |

权限类型

| 名称                                       | 描述         |
| ------------------------------------------ | ------------ |
| PERMISSION_TYPE_AUDIENCE                   | 人群提取     |
| PERMISSION_TYPE_CLAIM                      | 精准归因     |
| PERMISSION_TYPE_ALLOW_ADVERTISE            | 允许投放     |
| PERMISSION_TYPE_ALLOW_INSIGHT              | 允许洞察     |
| PERMISSION_TYPE_ALLOW_REPROCESS            | 允许再加工   |
| PERMISSION_TYPE_DMP                        | 腾讯广告知数 |
| PERMISSION_TYPE_TRANSFORMATION_ATTRIBUTION | 转化归因     |
| PERMISSION_TYPE_PKAM                       | pKAM         |
| PERMISSION_TYPE_DPA                        | 动态商品广告 |

资产授权路径类型

| 名称                     | 描述                               |
| ------------------------ | ---------------------------------- |
| PATH_TYPE_BM             | BM 路径                            |
| PATH_TYPE_MDM            | MDM 路径                           |
| PATH_TYPE_POINT_TO_POINT | 点对点路径                         |
| PATH_TYPE_AGENCY         | 授权给服务商(授权给服务商自身使用) |

资产授权维度

| 名称          | 描述         |
| ------------- | ------------ |
| GRANT_ALL_YES | 全部维度授权 |
| GRANT_ALL_NO  | 帐号维度授权 |

商务管家-账号类型

| 名称                   | 描述             |
| ---------------------- | ---------------- |
| BM_ACCOUNT_TYPE_QQ     | 腾讯广告账户     |
| BM_ACCOUNT_TYPE_WECHAT | 微信 MP 广告账户 |

获取同主体同商务管家-关联类型

| 名称                   | 描述       |
| ---------------------- | ---------- |
| RELATION_TYPE_MDM      | 同客户主体 |
| RELATION_TYPE_BUSINESS | 同商务管家 |

服务商授权操作

| 名称                                      | 描述               |
| ----------------------------------------- | ------------------ |
| AUTH_ACTION_SEND_AUTHORIZATION_REQUEST    | 请求广告主授权     |
| AUTH_ACTION_CONFIRM_AUTHORIZATION_REQUEST | 确认授权/已绑定    |
| AUTH_ACTION_CONFIRM_CANCELATION_REQUEST   | 同意广告主撤销授权 |
| AUTH_ACTION_CANCEL_AUTHORIZATION_REQUEST  | 撤销授权请求       |

服务商员工角色

| 名称                           | 描述       |
| ------------------------------ | ---------- |
| ROLE_TYPE_SUPER_ADMINISTRATOR  | 超级管理员 |
| ROLE_TYPE_ADMINISTRATOR        | 管理员     |
| ROLE_TYPE_OPERATOR             | 运营人员   |
| ROLE_TYPE_FINANCIAL_OFFICER    | 财务人员   |
| ROLE_TYPE_OPERATION_SUPERVISOR | 运营管理员 |

服务商员工类型

| 名称                     | 描述           |
| ------------------------ | -------------- |
| USER_TYPE_ADVERTISER     | 服务商的广告主 |
| USER_TYPE_SECOND_AGENCY  | 服务商二级代理 |
| USER_TYPE_INNER_EMPLOYEE | 服务商内部员工 |
| USER_TYPE_OTHER          | 其他类型       |

微信广告账户类型

| 名称                           | 描述   |
| ------------------------------ | ------ |
| ACCOUNT_TYPE_OFFICIAL_ACCOUNTS | 公众号 |
| ACCOUNT_TYPE_MINI_PROGRAM      | 小程序 |
| ACCOUNT_TYPE_MINI_GAME         | 小游戏 |

微信广告账户授权状态

| 名称                         | 描述            |
| ---------------------------- | --------------- |
| STATUS_PRE_AUTHORIZATION     | 预授权          |
| STATUS_CONFIRM_AUTHORIZATION | 确认授权/已绑定 |
| STATUS_REQUEST_CANCELATION   | 请求撤销授权    |

微信广告账户类型

| 名称                                  | 描述   |
| ------------------------------------- | ------ |
| WECHAT_ACCOUNT_TYPE_OFFICIAL_ACCOUNTS | 公众号 |
| WECHAT_ACCOUNT_TYPE_MINI_PROGRAM      | 小程序 |
| WECHAT_ACCOUNT_TYPE_MINI_GAME         | 小游戏 |

操作日志类型

| 名称                               | 描述                   |
| ---------------------------------- | ---------------------- |
| LOG_TYPE_WECHAT_ACCOUNT_AUTHORIZED | 微信账户广告主绑定记录 |

微信附近推开户审核状态

| 名称                             | 描述     |
| -------------------------------- | -------- |
| ADVERTISER_REVIEW_STATUS_PENDING | 待审核   |
| ADVERTISER_REVIEW_STATUS_NORMAL  | 审核通过 |
| ADVERTISER_REVIEW_STATUS_DENIED  | 审核驳回 |

微信资金账户类型

| 名称            | 描述       |
| --------------- | ---------- |
| FUND_CASH       | 现金       |
| FUND_GIFT       | 抵用金     |
| FUND_INNER      | 专项金     |
| FUND_CREDIT     | 账期       |
| FUND_DEBT_TEMP  | 临时信用金 |
| FUND_DEBT_FIXED | 固定信用金 |
| FUND_TCC_GIFT   | TCC 赠送金 |

转账类型

| 名称                 | 描述               |
| -------------------- | ------------------ |
| AGENCY_TO_ADVERTISER | 代理商转账给子客户 |
| ADVERTISER_TO_AGENCY | 子客户转账给代理商 |

调整类型枚举

| 名称                         | 描述                                         |
| ---------------------------- | -------------------------------------------- |
| CAMPAIGN_TYPE_NORMAL         | 普通展示广告，可投放除微信朋友圈外的所有流量 |
| CAMPAIGN_TYPE_WECHAT_MOMENTS | 微信朋友圈广告，仅可投放微信朋友圈流量的广告 |

推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | IOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE                  | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT                | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT           | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LINK                       | 网页推广目标，已废弃，可切换其他推广目标进行创建广告         |
| PROMOTED_OBJECT_TYPE_QQ_MESSAGE                 | QQ 消息，创建广告时无需创建和指定推广目标                    |
| PROMOTED_OBJECT_TYPE_QZONE_VIDEO_PAGE           | 认证空间-视频说说，仅可读                                    |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_ARTICLE                    | 好文广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_LEAD_AD                    | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_TENCENT_KE                 | 腾讯课堂，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_ARTICLE         | QQ 空间日志页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_IFRAMED         | QQ 空间嵌入页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE                 | QQ 空间首页，仅可读                                          |
| PROMOTED_OBJECT_TYPE_APP_PC                     | PC 应用，仅可读                                              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_COUPON_WECHAT              | 微信-卡券，创建广告时需填写有效的卡券 id                     |
| PROMOTED_OBJECT_TYPE_APP_PROMOTION              | 通用应用                                                     |
| PROMOTED_OBJECT_TYPE_WECHAT_CHANNELS            | 微信视频号                                                   |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT    | 微信公众号                                                   |
| PROMOTED_OBJECT_TYPE_APP_QUICK_APP              | 快应用                                                       |

客户设置的状态

| 名称              | 描述 |
| ----------------- | ---- |
| AD_STATUS_NORMAL  | 有效 |
| AD_STATUS_SUSPEND | 暂停 |

投放速度模式

| 名称                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| SPEED_MODE_FAST     | 加速投放，广告会以较快的速度获得曝光，选择加速投放可能会导致您的预算较快地耗尽 |
| SPEED_MODE_STANDARD | 标准投放，系统会优化您的广告的投放，让您的预算在设定的投放时段内较为平稳地消耗，默认为标准投放 |

支持读取的推广计划类型

| 名称                                   | 描述                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| CAMPAIGN_TYPE_SEARCH                   | 搜索广告，仅支持读                                           |
| CAMPAIGN_TYPE_NORMAL                   | 普通展示广告，可投放全流量（微信和非微信）的广告             |
| CAMPAIGN_TYPE_WECHAT_OFFICIAL_ACCOUNTS | 微信公众号广告，仅可投放微信非朋友圈流量（公众号、小程序等）的广告 |
| CAMPAIGN_TYPE_WECHAT_MOMENTS           | 微信朋友圈广告，仅可投放微信朋友圈流量的广告（已废弃，可切换使用 CAMPAIGN_TYPE_NORMAL） |

广告流量售卖方式

| 名称                   | 描述         |
| ---------------------- | ------------ |
| BUYINGTYPE_AUCTION     | 竞价售卖     |
| BUYINGTYPE_CONTRACT    | 合约售卖     |
| BUYINGTYPE_RESERVED    | 独占售卖     |
| BUYINGTYPE_FIXED_PRICE | 固定价格售卖 |

否词操作执行状态

| 名称         | 描述     |
| ------------ | -------- |
| OPER_FAIL    | 操作失败 |
| OPER_SUCCESS | 操作成功 |

推广目标类型

| 名称                                         | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID             | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                 | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE               | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT             | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP       | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION       | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT        | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LINK                    | 网页推广目标，已废弃，可切换其他推广目标进行创建广告         |
| PROMOTED_OBJECT_TYPE_QQ_MESSAGE              | QQ 消息，创建广告时无需创建和指定推广目标                    |
| PROMOTED_OBJECT_TYPE_QZONE_VIDEO_PAGE        | 认证空间-视频说说，仅可读                                    |
| PROMOTED_OBJECT_TYPE_ARTICLE                 | 好文广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_LEAD_AD                 | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_TENCENT_KE              | 腾讯课堂，仅可读                                             |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_ARTICLE      | QQ 空间日志页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_IFRAMED      | QQ 空间嵌入页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE              | QQ 空间首页，仅可读                                          |
| PROMOTED_OBJECT_TYPE_APP_PC                  | PC 应用，仅可读                                              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT        | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ            | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT | 微信公众号                                                   |
| PROMOTED_OBJECT_TYPE_APP_QUICK_APP           | 快应用                                                       |

计费类型

| 名称                      | 描述             |
| ------------------------- | ---------------- |
| BILLINGEVENT_CLICK        | 按点击扣费       |
| BILLINGEVENT_APP_DOWNLOAD | 按照应用下载扣费 |
| BILLINGEVENT_IMPRESSION   | 按曝光扣费       |

优化目标类型

| 名称                                                    | 描述                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| OPTIMIZATIONGOAL_NONE                                   | none                                                         |
| OPTIMIZATIONGOAL_BRAND_CONVERSION                       | 指定页面曝光                                                 |
| OPTIMIZATIONGOAL_FOLLOW                                 | 关注                                                         |
| OPTIMIZATIONGOAL_CLICK                                  | 点击                                                         |
| OPTIMIZATIONGOAL_IMPRESSION                             | 曝光                                                         |
| OPTIMIZATIONGOAL_APP_DOWNLOAD                           | 下载                                                         |
| OPTIMIZATIONGOAL_APP_ACTIVATE                           | 激活                                                         |
| OPTIMIZATIONGOAL_APP_REGISTER                           | 注册                                                         |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION                      | 次日留存                                                     |
| OPTIMIZATIONGOAL_APP_PURCHASE                           | 付费次数，游戏客户如需优化付费行为，建议使用首次付费作为优化目标 |
| OPTIMIZATIONGOAL_ECOMMERCE_ORDER                        | 下单                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT                     | H5 付费次数（待废弃）                                        |
| OPTIMIZATIONGOAL_LEADS                                  | 表单预约（微信流量，待废弃）                                 |
| OPTIMIZATIONGOAL_ECOMMERCE_CART                         | 加入购物车                                                   |
| OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE               | H5 注册（待废弃）                                            |
| OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE                    | 商品详情页浏览                                               |
| OPTIMIZATIONGOAL_ONLINE_CONSULTATION                    | 在线咨询                                                     |
| OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION                 | 电话拨打                                                     |
| OPTIMIZATIONGOAL_PAGE_RESERVATION                       | 表单预约                                                     |
| OPTIMIZATIONGOAL_DELIVERY                               | 发货                                                         |
| OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW                   | 公众号内发消息                                               |
| OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW                | 公众号内点击菜单栏                                           |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT          | 有效在线咨询 (已废弃)                                        |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_PHONE_CALL              | 有效电话拨打 (已废弃)                                        |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_CONSULT        | 有效在线咨询（待废弃）                                       |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_PHONE          | 有效电话拨打（待废弃）                                       |
| OPTIMIZATIONGOAL_LEADS_COLLECT                          | 综合线索收集                                                 |
| OPTIMIZATIONGOAL_FIRST_PURCHASE                         | 首次付费                                                     |
| OPTIMIZATIONGOAL_APPLY                                  | 进件                                                         |
| OPTIMIZATIONGOAL_PRE_CREDIT                             | 预授信                                                       |
| OPTIMIZATIONGOAL_CREDIT                                 | 授信                                                         |
| OPTIMIZATIONGOAL_WITHDRAW_DEPOSITS                      | 提现                                                         |
| OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE                | 关键页面访问                                                 |
| OPTIMIZATIONGOAL_MOBILE_APP_CREATE_ROLE                 | 小游戏创角                                                   |
| OPTIMIZATIONGOAL_CANVAS_CLICK                           | 跳转按钮点击                                                 |
| OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER                  | 领券                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_ADD_TO_WISHLIST              | 商品收藏                                                     |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_RESERVATION    | 有效表单预约（待废弃）                                       |
| OPTIMIZATIONGOAL_PAGE_RECEIPT                           | 签收                                                         |
| OPTIMIZATIONGOAL_PAGE_SCAN_CODE                         | 加企业微信客服                                               |
| OPTIMIZATIONGOAL_SELECT_COURSE                          | 选课                                                         |
| OPTIMIZATIONGOAL_CONFIRM_POTENTIAL_CUSTOMER_PHONE       | 电话潜在客户                                                 |
| OPTIMIZATIONGOAL_MOBILE_APP_AD_INCOME                   | 广告变现                                                     |
| OPTIMIZATIONGOAL_MOBILE_APP_ACCREDIT                    | 小游戏授权                                                   |
| OPTIMIZATIONGOAL_PURCHASE_MEMBER_CARD                   | 首次会员购买                                                 |
| OPTIMIZATIONGOAL_PAGE_CONFIRM_EFFECTIVE_LEADS           | 有效综合线索                                                 |
| OPTIMIZATIONGOAL_ADD_DESKTOP                            | 快应用加桌面                                                 |
| OPTIMIZATIONGOAL_RESERVATION                            | 微信流量预约行为                                             |
| OPTIMIZATIONGOAL_FIRST_ECOMMERCE_ORDER                  | 首次下单                                                     |
| OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER | 24 小时下单                                                  |
| OPTIMIZATIONGOAL_LIKE                                   | 点赞                                                         |
| OPTIMIZATIONGOAL_EXTERNAL_LINK_CLICK                    | 外链点击                                                     |
| OPTIMIZATIONGOAL_BUY_COUPONS                            | 购券                                                         |
| OPTIMIZATIONGOAL_LEAVE_INFORMATION                      | 留资                                                         |
| OPTIMIZATIONGOAL_CORE_ACTION                            | 关键行为                                                     |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION_RATIO                | 次留率                                                       |
| OPTIMIZATIONGOAL_PROMOTION_READ_ARTICLE                 | 阅读文章                                                     |
| OPTIMIZATIONGOAL_RESERVATION_CHECK                      | 意向表单                                                     |
| OPTIMIZATIONGOAL_OPEN_ACCOUNT                           | 券商开户                                                     |
| OPTIMIZATIONGOAL_SEVEN_DAY_ECOMMERCE_ORDER              | 7 日下单                                                     |

版位集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 优量汇                                               |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝（待废弃）                                     |
| SITE_SET_MOBILE_INNER         | QQ、腾讯看点、腾讯音乐 (待废弃)                      |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻                                             |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频                                             |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报 (已废弃)                                    |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PENGYOU              | 朋友社区 (已废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (已废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (已废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (已废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (已废弃)                                     |
| SITE_SET_PC_UNION             | 优量汇，PC 版位(已废弃)                              |
| SITE_SET_YINGYONGBAO_PC       | 应用宝，PC 版位(已废弃)                              |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (已废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (已废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (已废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (已废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (已废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (已废弃)                                  |
| SITE_SET_WEIBO                | 微博 (已废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (已废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（已废弃）                               |
| SITE_SET_THIRDPARTY           | 第三方流量 (已废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (已废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |
| SITE_SET_QQSHOPPING           | QQ 购物                                              |
| SITE_SET_CHANNELS             | 微信视频号                                           |
| SITE_SET_QBSEARCH             | QQ 浏览器等（仅支持搜索计划）                        |
| SITE_SET_WECHAT_SEARCH        | 微信搜一搜（仅支持搜索计划）                         |
| SITE_SET_WECHAT_PLUGIN        | 微信新闻插件                                         |
| SITE_SET_SEARCH_SCENE         | 搜索场景                                             |
| SITE_SET_SEARCH_MOBILE_UNION  | 搜索优量汇                                           |

自动版位探索策略

| 名称                  | 描述     |
| --------------------- | -------- |
| EXPLORATION_UNKNOW    | 默认值   |
| AUTOMATIC_EXPLORATION | 自动探索 |
| STEADY_EXPLORATION    | 稳步探索 |

性别（定向）

| 名称   | 描述 |
| ------ | ---- |
| MALE   | 男性 |
| FEMALE | 女性 |

用户学历

| 名称           | 描述 |
| -------------- | ---- |
| DOCTOR         | 博士 |
| MASTER         | 硕士 |
| BACHELOR       | 本科 |
| SENIOR         | 高中 |
| JUNIOR         | 初中 |
| PRIMARY        | 小学 |
| JUNIOR_COLLEGE | 专科 |

婚恋状态

| 名称                 | 描述                    |
| -------------------- | ----------------------- |
| SINGLE               | 单身                    |
| IN_LOVE              | 热恋                    |
| NEWLY_MARRIED        | 新婚                    |
| MARRIED              | 已婚                    |
| PARENTING            | 育儿                    |
| PARENTING_0          | 育儿（孕育中）          |
| PARENTING_0_6        | 育儿（宝宝 0-6 个月）   |
| PARENTING_6_12       | 育儿（宝宝 6-12 个月    |
| PARENTING_12_24      | 育儿（宝宝 1-2 岁）     |
| PARENTING_24_36      | 育儿（宝宝 2-3 岁）     |
| CHILD_PRE_SCHOOL     | 育儿（孩子 3-6 周岁）   |
| CHILD_PRIMARY_SCHOOL | 育儿（孩子 6-12 周岁）  |
| CHILD_JUNIOR_SCHOOL  | 育儿（孩子 12-15 周岁） |
| CHILD_HIGH_SCHOOL    | 育儿（孩子 15-18 周岁） |

地点类型

| 名称              | 描述         |
| ----------------- | ------------ |
| RECENTLY_IN       | 近期         |
| VISITED_IN        | 去过         |
| LIVE_IN           | 常住         |
| TRAVEL_IN         | 旅行         |
| CAA_RECENTLY_IN   | CAA 近期     |
| LIVE_AND_RECENTLY | 常驻且近期   |
| INTELLIGENCE      | 预估实时位置 |

设备价格定向

| 名称            | 描述           |
| --------------- | -------------- |
| PRICE_1500_LESS | ￥ 1500 以下   |
| PRICE_1500_2500 | ￥ 1500 ~ 2500 |
| PRICE_2500_3500 | ￥ 2500 ~ 3500 |
| PRICE_3500_4500 | ￥ 3500 ~ 4500 |
| PRICE_4500_MORE | ￥ 4500 以上   |

联网方式

| 名称   | 描述     |
| ------ | -------- |
| WIFI   | 无线网络 |
| NET_2G | 2G 网络  |
| NET_3G | 3G 网络  |
| NET_4G | 4G 网络  |
| NET_5G | 5G 网络  |

移动运营商

| 名称 | 描述     |
| ---- | -------- |
| CMCC | 中国移动 |
| CUC  | 中国联通 |
| CTC  | 中国电信 |

应用安装

| 名称          | 描述   |
| ------------- | ------ |
| NOT_INSTALLED | 未安装 |
| INSTALLED     | 已安装 |

消费能力

| 名称 | 描述   |
| ---- | ------ |
| HIGH | 高消费 |
| LOW  | 低消费 |

游戏消费能力

| 名称   | 描述         |
| ------ | ------------ |
| HIGH   | 高消费用户   |
| NORMAL | 普通消费用户 |

资产状态

| 名称        | 描述     |
| ----------- | -------- |
| CAR_OWNERS  | 有车人士 |
| HOME_OWNERS | 有房人士 |

微信再营销类型

| 名称                                 | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| WECHAT_OFFICIAL_ACCOUNT_FOLLOWED     | 关注过广告主微信公众号                                       |
| WECHAT_COUPON_OBTAINED               | 领取过广告主微信卡券                                         |
| WECHAT_OFFICIAL_ACCOUNT_AD_LIKE      | 对微信公众号广告感兴趣                                       |
| WECHAT_MOMENTS_AD_LIKE               | 对微信朋友圈广告感兴趣                                       |
| WECHAT_MOMENTS_AD_DISLIKE            | 对微信朋友圈广告不感兴趣                                     |
| MINI_GAME_WECHAT_REGISTERED          | 曾经注册过你的小游戏。当且仅当 promoted_object_type 是 PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT 时，MINI_GAME_WECHAT_REGISTERED 才可以使用 |
| WECHAT_WORK_CONTACTS_ADDED           | 已经添加过企业微信                                           |
| GDT_WECHAT_OFFICIAL_ACCOUNT_FOLLOWED | GDT 账户，关注过广告主微信公众号                             |
| WECHAT_CHANNELS_FANS                 | 是你的视频号粉丝                                             |
| WE_COM_CORP_ID_ADDED                 | 已经添加过企业微信                                           |
| WECHAT_MINI_GAME_AD_LIKE             | 曾对你的小游戏广告感兴趣或未注册                             |

行为兴趣意向定向的行为部分的场景

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| BEHAVIOR_INTEREST_SCENE_ALL         | 全部场景 |
| BEHAVIOR_INTEREST_SCENE_APP         | App      |
| BEHAVIOR_INTEREST_SCENE_ECOMMERCE   | 电商     |
| BEHAVIOR_INTEREST_SCENE_INFORMATION | 资讯     |

行为兴趣意向定向的行为部分的时间窗

| 名称                                      | 描述   |
| ----------------------------------------- | ------ |
| BEHAVIOR_INTEREST_TIME_WINDOW_SEVEN_DAY   | 7 天   |
| BEHAVIOR_INTEREST_TIME_WINDOW_FIFTEEN_DAY | 15 天  |
| BEHAVIOR_INTEREST_TIME_WINDOW_THIRTY_DAY  | 30 天  |
| BEHAVIOR_INTEREST_TIME_WINDOW_THREE_MONTH | 3 个月 |
| BEHAVIOR_INTEREST_TIME_WINDOW_SIX_MONTH   | 6 个月 |
| BEHAVIOR_INTEREST_TIME_WINDOW_ONE_YEAR    | 1 年   |

行为兴趣意向定向的行为部分的强度

| 名称                             | 描述     |
| -------------------------------- | -------- |
| BEHAVIOR_INTEREST_INTENSITY_ALL  | 全部强度 |
| BEHAVIOR_INTEREST_INTENSITY_HIGH | 高强度   |

QQ 小游戏使用定向

| 名称     | 描述   |
| -------- | ------ |
| NOT_USED | 未使用 |
| USED     | 已使用 |

排除已转化人群定向

| 名称                                | 描述                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| EXCLUDED_DIMENSION_CAMPAIGN         | 同计划广告, 没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告 |
| EXCLUDED_DIMENSION_UID              | 同账号广告, 没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告 |
| EXCLUDED_DIMENSION_BUSINESS_MANAGER | 同商务管家广告, 没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告 |
| EXCLUDED_DIMENSION_COMPANY_ACCOUNT  | 同主体广告, 没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告 |
| EXCLUDED_DIMENSION_APP              | 同应用, 仅当推广目标为应用下载（PROMOTED_OBJECT_TYPE_APP_ANDROID、PROMOTED_OBJECT_TYPE_APP_IOS、PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION）时可以使用 |
| EXCLUDED_DIMENSION_PRODUCT          | 同商品, 仅当 SDPA 单商品动态商品广告（动态商品广告类型为 SINGLE）时使用。同商品不支持单独设置自定义转化行为（excluded_dimension），默认排除同商品下已下单和已付费用户，不限制出价方式 |

广告展示场景

| 名称                         | 描述     |
| ---------------------------- | -------- |
| DISPLAY_SCENE_BANNER         | Banner   |
| DISPLAY_SCENE_INLINE         | 插屏     |
| DISPLAY_SCENE_SPLASH         | 开屏     |
| DISPLAY_SCENE_NATIVE         | 原生     |
| DISPLAY_SCENE_REWARDED_VIDEO | 激励视频 |

腾讯新闻流量场景定向

| 名称                | 描述                                                       |
| ------------------- | ---------------------------------------------------------- |
| TENCENT_NEWS_APP    | 腾讯新闻 APP，腾讯新闻 APP 内打开的场景                    |
| TENCENT_NEWS_WECHAT | 腾讯新闻微信插件，微信 APP 腾讯新闻插件内打开的场景        |
| TENCENT_NEWS_QQ     | 腾讯新闻手机 QQ 插件，手机 QQ APP 腾讯新闻插件内打开的场景 |

QQ 浏览器、应用宝流量场景

| 名称                  | 描述             |
| --------------------- | ---------------- |
| QBSEARCH_SCENE_MOBILE | 移动 QQ 浏览器等 |
| QBSEARCH_SCENE_PC     | PC QQ 浏览器等   |

微信搜一搜流量场景

| 名称                       | 描述           |
| -------------------------- | -------------- |
| WECHAT_SEARCH_SCENE_MOBILE | 移动微信搜一搜 |
| WECHAT_SEARCH_SCENE_PC     | PC 微信搜一搜  |

PC 端定投场景

| 名称                                    | 描述                     |
| --------------------------------------- | ------------------------ |
| WECHAT_MOMENTS_PC                       | 微信朋友圈 PC 端         |
| WECHAT_APP_REWARDED_PC                  | 小程序激励式广告 PC 端   |
| WECHAT_MINI_PROGRAM_TABLE_PLAQUE_PC     | 小程序插屏广告 PC 端     |
| WECHAT_APP_COVER_PC                     | 小程序封面广告 PC 端     |
| WECHAT_MINI_PROGRAM_NATIVE_TEMPLATE_PC  | 小程序原生模版 PC 端     |
| WECHAT_PUBLIC_ACCOUNT_ARTICLE_MIDDLE_PC | 公众号文章中部 PC 端     |
| WECHAT_PUBLIC_ACCOUNT_ARTICLE_BOTTOM_PC | 公众号文章底部 PC 端     |
| PCAD_PC                                 | 腾讯平台与内容媒体 PC 端 |
| UNION_PC                                | 腾讯广告联盟电脑端       |
| WECHAT_CHANNELS_PC                      | 微信视频号电脑端         |
| WECHAT_PUBLIC_ACCOUNT_BOX_PC            | 订阅号消息列表电脑端     |

客户设置的状态

| 名称              | 描述 |
| ----------------- | ---- |
| AD_STATUS_NORMAL  | 有效 |
| AD_STATUS_SUSPEND | 暂停 |

动态商品广告类型

| 名称     | 描述               |
| -------- | ------------------ |
| SINGLE   | 单商品动态商品广告 |
| MULTIPLE | 多商品动态商品广告 |

用户行为数据源类型

| 名称                         | 描述               |
| ---------------------------- | ------------------ |
| USER_ACTION_SET_TYPE_WEB     | WEB 类型数据源     |
| USER_ACTION_SET_TYPE_IOS     | iOS 类型数据源     |
| USER_ACTION_SET_TYPE_ANDROID | Android 类型数据源 |

出价策略

| 名称                           | 描述         |
| ------------------------------ | ------------ |
| BID_STRATEGY_AVERAGE_COST      | 稳定拿量     |
| BID_STRATEGY_TARGET_COST       | 优先拿量     |
| BID_STRATEGY_PRIORITY_LOW_COST | 优先低成本   |
| BID_STRATEGY_PRIORITY_CAP_COST | 控制成本上限 |

深度优化类型

| 名称                     | 描述         |
| ------------------------ | ------------ |
| DEEP_CONVERSION_WORTH    | 优化 ROI     |
| DEEP_CONVERSION_BEHAVIOR | 优化转化行为 |

深度优化价值目标

| 名称                                 | 描述                 |
| ------------------------------------ | -------------------- |
| GOAL_30DAY_ORDER_ROAS                | 下单 ROI             |
| GOAL_1DAY_PURCHASE_ROAS              | 首日付费 ROI         |
| GOAL_1DAY_MONETIZATION_ROAS          | 首日变现 ROI         |
| GOAL_7DAY_RETENTION_TIMES            | 七日内留存天数       |
| GOAL_7DAY_LONGTERM_PURCHASE_ROAS     | 七日长效付费         |
| GOAL_14DAY_LONGTERM_PURCHASE_ROAS    | 十四日长效付费       |
| GOAL_30DAY_LONGTERM_PURCHASE_ROAS    | 三十日长效付费       |
| GOAL_QYT_7DAY_LIVE_STREAM_DEAL_ROAS  | 全域通七日直播间成交 |
| GOAL_WITHDRAW_DEPOSITS_ROAS          | 七日提现 ROI         |
| GOAL_1DAY_PURCHASE_MONETIZATION_ROAS | 首日混合变现 ROI     |
| GOAL_NET_PROFIT_24H_ROAS             | 净成交 ROI           |
| GOAL_CPS_ESTIMATED_DISTRIBUTE_ROAS   | 佣金 ROI             |

深度优化方式

| 名称                                          | 描述       |
| --------------------------------------------- | ---------- |
| DEEP_OPTIMIZATION_ACTION_TYPE_DOUBLE_GOAL_BID | 双目标出价 |
| DEEP_OPTIMIZATION_ACTION_TYPE_TWO_STAGE_BID   | 两阶段出价 |

出价方式

| 名称          | 描述 |
| ------------- | ---- |
| BID_MODE_CPC  | cpc  |
| BID_MODE_CPA  | cpa  |
| BID_MODE_CPS  | cps  |
| BID_MODE_CPM  | cpm  |
| BID_MODE_OCPC | ocpc |
| BID_MODE_OCPM | ocpm |

创意展现类型

| 名称                               | 描述     |
| ---------------------------------- | -------- |
| CREATIVE_DISPLAY_TYPE_INTELLIGENCE | 优选模式 |
| CREATIVE_DISPLAY_TYPE_AVERAGE      | 轮播模式 |

出价类型

| 名称                      | 描述     |
| ------------------------- | -------- |
| SMART_BID_TYPE_CUSTOM     | 手动出价 |
| SMART_BID_TYPE_SYSTEMATIC | 自动出价 |

营销目标

| 名称                                       | 描述                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| DEFAULT                                    | 日常投放（默认值）                                           |
| GAME_RESERVATION                           | 新游预约                                                     |
| GAME_PROMOTION                             | 新游首发                                                     |
| GAME_CLOSED_BETA_TEST                      | 新游测试                                                     |
| ECOMMERCE_GOODS_DIRECT_PURCHASE_DAILY      | 直购卖货（对应推广目标类型：商品推广 PROMOTED_OBJECT_TYPE_ECOMMERCE） |
| ECOMMERCE_GOODS_LIVE_PURCHASE_DAILY        | 直播卖货（对应推广目标类型：微信视频号 PROMOTED_OBJECT_TYPE_WECHAT_CHANNELS） |
| ECOMMERCE_CONSUMER_COLLECT_CLUES_DAILY     | 表单留资（对应推广目标类型：销售线索收集 PROMOTED_OBJECT_TYPE_LEAD_AD） |
| ECOMMERCE_CONSUMER_ADD_FOLLOWERS_DAILY     | 导购加粉（对应推广目标类型：销售线索收集 PROMOTED_OBJECT_TYPE_LEAD_AD） |
| ECOMMERCE_CONSUMER_OFFICIAL_ACCOUNTS_DAILY | 公众号加粉（对应推广目标类型：微信公众号 PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT） |
| ECOMMERCE_CONSUMER_CHANNELS_DAILY          | 视频号内容推广（对应推广目标类型：微信视频号 PROMOTED_OBJECT_TYPE_WECHAT_CHANNELS） |
| ECOMMERCE_CONSUMER_ANDROID_NEW_DAILY       | 安卓应用拉新（对应推广目标类型：Android 应用 PROMOTED_OBJECT_TYPE_APP_ANDROID） |
| ECOMMERCE_CONSUMER_IOS_NEW_DAILY           | iOS 应用拉新（对应推广目标类型：IOS 应用 PROMOTED_OBJECT_TYPE_APP_IOS） |
| ECOMMERCE_CONTENT_BRAND_DAILY              | 品牌活动推广（对应推广目标类型：品牌活动推广 PROMOTED_OBJECT_TYPE_LINK_WECHAT） |

ApiLiveVideoMode

| 名称                    | 描述 |
| ----------------------- | ---- |
| LIVE_VIDEO_MODE_DEFAULT | 默认 |
| LIVE_VIDEO_MODE_VIDEO   | 视频 |
| LIVE_VIDEO_MODE_LIVE    | 直播 |

ApiLiveVideoSubMode

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| LIVE_VIDEO_SUBMODE_DEFAULT          | 默认     |
| LIVE_VIDEO_SUBMODE_LIVE_ROOM        | 直播间   |
| LIVE_VIDEO_SUBMODE_LIVE_RESERVATION | 直播预告 |

搜索定向拓展开关

| 名称                                   | 描述          |
| -------------------------------------- | ------------- |
| SEARCH_EXPAND_TARGETING_SWITCH_UNKNOWN | 未知 等同关闭 |
| SEARCH_EXPAND_TARGETING_SWITCH_OPEN    | 打开          |
| SEARCH_EXPAND_TARGETING_SWITCH_CLOSE   | 关闭          |

一方人群跑量加强开关

| 名称                   | 描述 |
| ---------------------- | ---- |
| ECOM_PKAM_SWITCH_CLOSE | 关闭 |
| ECOM_PKAM_SWITCH_OPEN  | 打开 |

投放场景

| 名称                     | 描述              |
| ------------------------ | ----------------- |
| BID_SCENE_UNKNOWN        | 默认值            |
| BID_SCENE_NORMAL_AVERAGE | 常规投放-稳定投放 |
| BID_SCENE_NORMAL_TARGET  | 常规投放-放量投放 |
| BID_SCENE_NORMAL_MAX     | 优先最大转化      |

搜索广告智能拓流开关

| 名称  | 描述 |
| ----- | ---- |
| CLOSE | 关闭 |
| OPEN  | 开启 |

短剧付费类型

| 名称                            | 描述   |
| ------------------------------- | ------ |
| SHORT_PLAY_PAY_TYPE_UNKNOWN     | 未知   |
| SHORT_PLAY_PAY_TYPE_FREE_PLAY   | 免费剧 |
| SHORT_PLAY_PAY_TYPE_CHARGE_PLAY | 收费剧 |

自动衍生创意状态

| 名称                                 | 描述                   |
| ------------------------------------ | ---------------------- |
| AUTO_DERIVED_CREATIVE_STATUS_DEFAULT | 未开启自动衍生创意功能 |
| AUTO_DERIVED_CREATIVE_STATUS_SUCCESS | 衍生创意成功           |
| AUTO_DERIVED_CREATIVE_STATUS_FAIL    | 衍生创意失败           |

软广或硬广类型

| 名称                         | 描述     |
| ---------------------------- | -------- |
| SELL_ADVERTISING_TYPE_HARD   | 硬广     |
| SELL_ADVERTISING_TYPE_SOFT   | 软广     |
| SELL_ADVERTISING_TYPE_HYBRID | 软硬联投 |

创意数量

| 名称     | 描述           |
| -------- | -------------- |
| SINGLE   | 单创意数量筛选 |
| MULTIPLE | 多创意数量筛选 |

动态广告类型

| 名称                                   | 描述             |
| -------------------------------------- | ---------------- |
| DYNAMIC_AD_TYPE_COMMON                 | 普通广告         |
| DYNAMIC_AD_TYPE_DYNAMIC_PRODUCT        | 动态商品广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_ARTICLE        | 动态文章广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_ELEMENT        | 动态元素广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_CREATIVE       | 动态创意广告     |
| DYNAMIC_AD_TYPE_MULTI_CREATIVE         | 动态多创意广告   |
| DYNAMIC_AD_TYPE_SEARCH_COMMON          | 常规搜索广告     |
| DYNAMIC_AD_TYPE_SEARCH_DYNAMIC_PRODUCT | 搜索动态商品广告 |
| DYNAMIC_AD_TYPE_DYNAMIC_CONTENT        | 动态内容广告     |

支持筛选的广告状态

| 名称                           | 描述                       |
| ------------------------------ | -------------------------- |
| STATUS_PENDING                 | 审核中                     |
| STATUS_DENIED                  | 审核不通过                 |
| STATUS_SUSPEND                 | 暂停中                     |
| STATUS_READY                   | 未到投放时间               |
| STATUS_ACTIVE                  | 投放中                     |
| STATUS_STOP                    | 投放结束                   |
| STATUS_ACTIVE_CAMPAIGN_SUSPEND | 广告被暂停（推广计划暂停） |
| STATUS_PART_READY              | 部分待投放                 |
| STATUS_PART_ACTIVE             | 部分投放中                 |

工作状态

| 名称                                   | 描述                      |
| -------------------------------------- | ------------------------- |
| COLLEGE_STUDENT                        | 在校大学生                |
| BUSINESS_USER                          | 商旅用户                  |
| GOVERNMENT_OFFICER                     | 政府公职人员              |
| SCIENCE_EDUCATOR                       | 科研教育者                |
| FINANCIAL_WORKER                       | 金融工作者                |
| LAWYER                                 | 法律工作者                |
| ADVERTISING_MARKETING_MEDIA_ART_WORKER | 广告/市场/媒体/艺术工作者 |
| REAL_ESTATE_WORKER                     | 房地产工作者              |
| IT_WORKER                              | IT 互联网工作者           |
| CONSTRUCTION_WORKER                    | 建筑工作者                |
| HEALTH_CARE_WORKER                     | 医护工作者                |
| SALESMAN                               | 销售                      |
| SERVICE_WORKER                         | 服务业工作者              |
| TRANSPORTATION_LOGISTICS_WORKER        | 交通物流运输工作者        |
| MECHANIC_WORKER                        | 技工普工                  |
| CUSTOMER_SERVICE_TECHNICAL_SUPPORTER   | 客服/技术支持人员         |
| TRADER_BUYER                           | 贸易采购工作者            |
| FINANCE_HUMAN_RESOURCE_ADMIN           | 财务/人事/行政工作者      |
| CONSULTANT                             | 咨询顾问                  |
| ENERGY_MATERIAL_WORKER                 | 能源与材料工作者          |
| FARMER                                 | 农林牧渔工作者            |
| GOLDEN_COLLAR                          | 金领                      |
| WHITE_COLLAR                           | 白领                      |
| BLUE_COLLAR                            | 蓝领                      |
| SMALL_BUSINESS_MANAGER                 | 中小企业管理人员          |

操作系统

| 名称               | 描述         |
| ------------------ | ------------ |
| IOS                | iOS 系统     |
| IOS_VERSION_4      | iOS 4.x      |
| IOS_VERSION_5      | iOS 5.x      |
| IOS_VERSION_6      | iOS 6.x      |
| IOS_VERSION_7      | iOS 7.x      |
| IOS_VERSION_8      | iOS 8.x      |
| IOS_VERSION_9      | iOS 9.x      |
| IOS_VERSION_10     | iOS 10.x     |
| IOS_VERSION_11     | iOS 11.x     |
| IOS_VERSION_12     | iOS 12.x     |
| IOS_VERSION_13     | iOS 13.x     |
| IOS_VERSION_14     | iOS 14.x     |
| IOS_VERSION_15     | iOS 15.x     |
| IOS_VERSION_16     | iOS 16.x     |
| IOS_VERSION_17     | iOS 17.x     |
| ANDROID            | Android 系统 |
| ANDROID_VERSION_1  | Android 1.x  |
| ANDROID_VERSION_2  | Android 2.x  |
| ANDROID_VERSION_3  | Android 3.x  |
| ANDROID_VERSION_4  | Android 4.x  |
| ANDROID_VERSION_5  | Android 5.x  |
| ANDROID_VERSION_6  | Android 6.x  |
| ANDROID_VERSION_7  | Android 7.x  |
| ANDROID_VERSION_8  | Android 8.x  |
| ANDROID_VERSION_9  | Android 9.x  |
| ANDROID_VERSION_10 | Android 10.x |
| ANDROID_VERSION_11 | Android 11.x |
| WINDOWS            | Windows 系统 |
| SYMBIAN            | 塞班系统     |
| JAVA               | JAVA 系统    |

新设备

| 名称    | 描述           |
| ------- | -------------- |
| IOS     | iOS 新用户     |
| ANDROID | Android 新用户 |

上网场景

| 名称         | 描述     |
| ------------ | -------- |
| PUBLIC_PLACE | 公共场所 |
| HOME         | 家庭     |
| COMPANY      | 企业     |
| SCHOOL       | 学校     |

穿衣指数

| 名称        | 描述   |
| ----------- | ------ |
| FREEZING    | 寒冷   |
| COLD        | 冷     |
| CHILLY      | 凉     |
| COOL        | 温凉   |
| MILDLY_COOL | 凉舒适 |
| MILD        | 舒适   |
| WARM        | 热舒适 |
| TORRIDITY   | 炎热   |

紫外线指数

| 名称        | 描述 |
| ----------- | ---- |
| WEAK        | 弱   |
| TEND_WEAK   | 偏弱 |
| MEDIUM      | 中等 |
| TEND_STRONG | 偏强 |
| STRONG      | 强   |

化妆指数

| 名称             | 描述   |
| ---------------- | ------ |
| PREVENT_CRACKING | 防龟裂 |
| MOISTURING       | 保湿   |
| OIL_CONTROL      | 控油   |
| UV_PROTECT       | 防晒   |

气象

| 名称   | 描述 |
| ------ | ---- |
| SHINE  | 晴天 |
| CLOUDY | 阴天 |
| RAINY  | 雨天 |
| FOGGY  | 雾   |
| SNOWY  | 雪   |
| SANDY  | 沙尘 |

空气质量指数

| 名称                | 描述     |
| ------------------- | -------- |
| GOOD                | 优       |
| MODERATE            | 良       |
| LIGHTLY_POLLUTED    | 轻度污染 |
| MODERATELY_POLLUTED | 中度污染 |
| HEAVILY_POLLUTED    | 重度污染 |
| SEVERELY_POLLUTED   | 严重污染 |

消费类型

| 名称               | 描述     |
| ------------------ | -------- |
| PAID_GOODS_VIRTUAL | 虚拟商品 |
| PAID_GOODS_REAL    | 实物商品 |

app 行为对象的类型

| 名称      | 描述     |
| --------- | -------- |
| APP_CLASS | 类目     |
| APP_ID    | 具体 APP |

app 行为列表

| 名称   | 描述 |
| ------ | ---- |
| ACTIVE | 活跃 |
| PAID   | 付费 |

付费用户

| 名称           | 描述                     |
| -------------- | ------------------------ |
| APP_PAID       | APP 付费用户             |
| ECOMMERCE_PAID | 已有电商付费用户         |
| LATENT_VIR_PAY | 潜在虚拟付费用户，仅可读 |

移动联盟场景定向

| 名称                                  | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| MOBILE_UNION_IN_WECHAT                | 移动联盟第三方流量在微信内打开的场景                         |
| MOBILE_UNION_FEEDS                    | 信息流，如文章、新闻列表或产品服务列表等联盟流量中打开的场景 |
| MOBILE_UNION_REWARDED_VIDEO           | 激励视频，该流量场景可以为用户打造沉浸式广告体验，用奖励吸引他们完整观看视频广告，视频时长要求 5-30s |
| MOBILE_UNION_QA_COMMUNITY             | 问答社区，网络问答社区属性的流量                             |
| MOBILE_UNION_SHORT_VIDEO              | 短视频，短视频或直播属性的流量                               |
| MOBILE_UNION_REWARDED_MEDIA           | 激励媒体，含激励任务的 app、激活成本低且人群较下沉的流量场景 |
| MOBILE_UNION_SMB_CUSTOMIZATION        | 中小广告主定制，适合第 1 次投放联盟流量的中小广告主，做测试投放的冷启动，该场景流量较小，有扩量需求不建议使用 |
| MOBILE_UNION_GAME_ADVERTISER_PECULIAR | 根据游戏广告关注的效果指标，系统推荐的定投流量，建议配合 oCPA 使用 |

移动联盟场景屏蔽定向

| 名称                                 | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| MOBILE_UNION_IN_WECHAT               | 移动联盟第三方流量在微信内打开的场景                         |
| MOBILE_UNION_FEEDS                   | 信息流，如文章、新闻列表或产品服务列表等联盟流量中打开的场景 |
| MOBILE_UNION_REWARDED_VIDEO          | 激励视频，该流量场景可以为用户打造沉浸式广告体验，用奖励吸引他们完整观看视频广告，视频时长要求 5-30s |
| MOBILE_UNION_SPLASH                  | APP 启动时的广告展示场景                                     |
| MOBILE_UNION_QA_COMMUNITY            | 问答社区，网络问答社区属性的流量                             |
| MOBILE_UNION_SHORT_VIDEO             | 短视频，短视频或直播属性的流量                               |
| MOBILE_UNION_REWARDED_MEDIA          | 激励媒体，含激励任务的 app、激活成本低且人群较下沉的流量场景 |
| MOBILE_UNION_GAME_ADVERTISER_EXCLUDE | 根据游戏广告关注的效果指标，系统推荐的屏蔽流量，建议冷启动时使用 |

优量汇行业精选流量包

| 名称                               | 描述               |
| ---------------------------------- | ------------------ |
| MOBILE_UNION_GAME_ADVERTISER       | 重度游戏广告主定制 |
| MOBILE_UNION_LIGHT_GAME_ADVERTISER | 轻度游戏广告主定制 |
| MOBILE_UNION_READ_ADVERTISER       | 阅读行业广告主定制 |
| MOBILE_UNION_EDUCATION_ADVERTISER  | 教育广告主定制     |
| MOBILE_UNION_LONGTAIL_ADVERTISER   | 行业优质流量包     |
| MOBILE_UNION_FINANCE_ADVERTISER    | 金融广告主定制     |
| MOBILE_UNION_TOURISM_ADVERTISER    | 旅游广告主定制     |
| MOBILE_UNION_EC_ADVERTISER         | 电商广告主定制     |

成本保障状态

| 名称                             | 描述             |
| -------------------------------- | ---------------- |
| COST_GUARANTEE_STATUS_NONE       | 无成本保障状态   |
| COST_GUARANTEE_STATUS_EFFECTIVE  | 成本保障生效中   |
| COST_GUARANTEE_STATUS_FAILED     | 成本保障已失效   |
| COST_GUARANTEE_STATUS_FINISHED   | 成本保障已结束   |
| COST_GUARANTEE_STATUS_CONFIRMING | 成本保障确认中   |
| COST_GUARANTEE_STATUS_SUCCEEDED  | 超成本赔付已完成 |

系统状态

| 名称                              | 描述                                   |
| --------------------------------- | -------------------------------------- |
| AD_GROUP_STATUS_NORMAL            | 有效                                   |
| AD_GROUP_STATUS_PENDING           | 待审核                                 |
| AD_GROUP_STATUS_DENIED            | 审核不通过                             |
| AD_GROUP_STATUS_FROZEN            | 封停                                   |
| AD_GROUP_STATUS_PARTIALLY_PENDING | 部分审核中                             |
| AD_GROUP_STATUS_PARTIALLY_NORMAL  | 部分有效                               |
| AD_GROUP_STATUS_PREPARE           | 准备中（渠道包在审核中）               |
| AD_GROUP_STATUS_DELETED           | 已删除                                 |
| AD_GROUP_STATUS_INVALID           | 失效（渠道包审核不通过，请更新渠道包） |

广告状态

| 名称                           | 描述                           |
| ------------------------------ | ------------------------------ |
| STATUS_UNKNOWN                 | 未知状态                       |
| STATUS_PENDING                 | 审核中                         |
| STATUS_DENIED                  | 审核不通过                     |
| STATUS_FROZEN                  | 冻结                           |
| STATUS_SUSPEND                 | 暂停中                         |
| STATUS_READY                   | 未到投放时间                   |
| STATUS_ACTIVE                  | 投放中                         |
| STATUS_STOP                    | 投放结束                       |
| STATUS_PREPARE                 | 准备中                         |
| STATUS_DELETED                 | 已删除                         |
| STATUS_ACTIVE_ACCOUNT_FROZEN   | 广告被暂停（账户资金被冻结）   |
| STATUS_ACTIVE_ACCOUNT_EMPTY    | 广告被暂停（账户余额不足）     |
| STATUS_ACTIVE_ACCOUNT_LIMIT    | 广告被暂停（账户达日限额）     |
| STATUS_ACTIVE_CAMPAIGN_LIMIT   | 广告被暂停（推广计划达日限额） |
| STATUS_ACTIVE_CAMPAIGN_SUSPEND | 广告被暂停（推广计划暂停）     |
| STATUS_ACTIVE_AD_LIMIT         | 广告被暂停（广告达日限额）     |
| STATUS_PART_READY              | 部分待投放                     |
| STATUS_PART_ACTIVE             | 部分投放中                     |

一键起量状态

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| AUTO_ACQUISTION_STATUS_UNKNOW                   | 未开启一键起量功能                                           |
| AUTO_ACQUISTION_STATUS_PENDING                  | 起量中                                                       |
| AUTO_ACQUISTION_STATUS_END_LESS_THAN_24H        | 起量完成(探索结束，预算花完，但距离广告开启功能未满 24h)     |
| AUTO_ACQUISTION_STATUS_END_MORE_THAN_24H        | 起量完成(探索结束，预算花完，且距离广告开启功能已满 24h)     |
| AUTO_ACQUISTION_STATUS_COMPLETED                | 起量结束(探索结束，距离广告开启已满 6h，但预算未花完（实际花费＜起量预算*90%）) |
| AUTO_ACQUISTION_STATUS_SUSPEND_ON_LEARNING_FAIL | 起量中止(探索过程中，广告被判定为学习失败，从而探索中止)     |
| AUTO_ACQUISTION_STATUS_SUSPEND_ON_PLAYING_FAIL  | 起量中止(探索过程中，因广告无法播放，从而起量中止（包括广告主动或被动下线或 timeset 不连续）) |
| AUTO_ACQUISTION_STATUS_ADVERTISER_CLOSED        | 广告主主动关闭一键起量功能                                   |

系统状态

| 名称                        | 描述                                             |
| --------------------------- | ------------------------------------------------ |
| AD_STATUS_NORMAL            | 有效                                             |
| AD_STATUS_PENDING           | 待审核                                           |
| AD_STATUS_DENIED            | 审核不通过                                       |
| AD_STATUS_PARTIALLY_PENDING | 部分审核中                                       |
| AD_STATUS_PARTIALLY_NORMAL  | 部分有效                                         |
| AD_STATUS_PREPARE           | 准备中（当投放视频广告时，该状态代表视频转码中） |
| AD_STATUS_DELETED           | 已删除                                           |
| AD_STATUS_INVALID           | 异常（当投放视频广告时，该状态代表视频转码失败） |
| AD_STATUS_SUSPEND           | 暂停                                             |

链接名称类型

| 名称                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| VIEW_DETAILS                    | 查看详情                                                     |
| GET_COUPONS                     | 领取优惠，选择领取优惠，需在详情页中可直接领取优惠，否则广告将会被审核驳回 |
| MAKE_AN_APPOINTMENT             | 预约活动，选择预约活动，需在详情页中体现活动预约入口，否则广告将会被审核驳回 |
| BUY_NOW                         | 立即购买，当且仅当推广目标为电商时可使用                     |
| GO_SHOPPING                     | 去逛逛，当且仅当推广目标为电商时可使用                       |
| ENTER_MINI_PROGRAM              | 进入小程序，仅能使用于投放小程序落地页                       |
| ENTER_MINI_GAME                 | 进入小游戏，仅能使用于投放小游戏落地页                       |
| APPLY_NOW                       | 立即申请                                                     |
| BOOK_NOW                        | 立即预定                                                     |
| RESERVATION_BUY                 | 预约购买                                                     |
| CONSULT_NOW                     | 立即咨询                                                     |
| BOOK_DRIVE                      | 预约试驾                                                     |
| ENTER_OFFICIAL_ACCOUNTS         | 了解公众号                                                   |
| PLAY_NOW                        | 立即玩                                                       |
| OPEN_MINI_GAME                  | 打开游戏                                                     |
| DOWNLOAD_APP                    | 下载应用                                                     |
| DOWNLOAD_GAME                   | 下载游戏                                                     |
| GET_SAMPLES                     | 领取小样                                                     |
| TRY_NOW                         | 立即体验                                                     |
| GET_IT_NOW                      | 立即领取                                                     |
| BUY_ASAP                        | 立即抢购                                                     |
| DOWNLOAD_NOW                    | 立即下载                                                     |
| VIEW_APPS                       | 查看应用                                                     |
| MORE_INFO                       | 了解更多                                                     |
| GET_VOUCHERS                    | 领券                                                         |
| FOLLOW_OFFICIAL_ACCOUNT         | 关注公众号                                                   |
| READ_NOVELS                     | 阅读小说                                                     |
| WATCH_LIVE                      | 观看直播                                                     |
| RESERVE_NOW                     | 立即预约                                                     |
| OPEN_APP                        | 打开应用                                                     |
| ALREADY_INSTALL                 | 已安装                                                       |
| RESERVE_LIVE                    | 预约直播                                                     |
| SETUP_NOW                       | 立即开通                                                     |
| SECKILL_NOW                     | 立即秒杀                                                     |
| TRY_PLAY_NOW                    | 立即试玩                                                     |
| INSTALL_NOW                     | 立即安装                                                     |
| MORE_ABOUT_OFFICIAL_ACCOUNT_CHT | 了解公眾號                                                   |
| FOLLOW_OFFICIAL_ACCOUNT_CHT     | 關註公眾號                                                   |
| GET_FOR_FREE                    | 免费领取                                                     |
| CARNIVAL_618                    | 618 狂欢                                                     |
| SURPRISE_618                    | 618 惊喜                                                     |
| DISCOUNT_618                    | 618 优惠                                                     |
| GO_618_VENUE                    | 去 618 会场                                                  |
| GET_618_WELFARE                 | 领 618 福利                                                  |
| CONTACT_CUSTOMER_SERVICE        | 联系客服                                                     |
| CONTACT_BUSINESS                | 联系商家                                                     |
| GO_SCAN                         | 扫一扫                                                       |
| PICK_GIFT                       | 选购好礼                                                     |
| SELECT_GIFT                     | 甄选好礼                                                     |
| GIVING_GIFT                     | 去送礼                                                       |
| GIVE_FRIEND                     | 送朋友                                                       |
| LINK_NAME_TEXT_TEMPLATE         | 文字链模版                                                   |

倒计时时间类型

| 名称                 | 描述         |
| -------------------- | ------------ |
| COUNTDOWN_TIME_START | 距离活动开始 |
| COUNTDOWN_TIME_END   | 距离活动结束 |

创意标签类型

| 名称                     | 描述         |
| ------------------------ | ------------ |
| LABEL_TYPE_COMMON        | 普通文本标签 |
| LABEL_TYPE_CUSTOMIZETEXT | 自定义标签   |
| LABEL_TYPE_ICON          | 图标标签     |
| LABEL_TYPE_DYNAMIC       | 动态标签     |

product_tags 名称类型

| 名称                  | 描述     |
| --------------------- | -------- |
| ONLY_FOR_NEW_CUSTOMER | 新人专享 |
| OVERSEAS_SHOPPING     | 海淘     |
| COUPON                | 券       |
| DISCOUNT              | 折扣     |
| FREE_SHIPPING         | 包邮     |
| CASH_ON_DELIVERY      | 货到付款 |

创意标签元素方向

| 名称                  | 描述 |
| --------------------- | ---- |
| LABEL_DIRECTION_LEFT  | 左   |
| LABEL_DIRECTION_RIGHT | 右   |

小程序 openlink 选项

| 名称                                  | 描述 |
| ------------------------------------- | ---- |
| MINI_PROGRAM_OPEN_LINK_OPTION_UNKNOWN | 未知 |
| MINI_PROGRAM_OPEN_LINK_OPTION_ON      | 开启 |
| MINI_PROGRAM_OPEN_LINK_OPTION_OFF     | 关闭 |

落地页服务落地页类型

| 名称                                              | 描述                                            |
| ------------------------------------------------- | ----------------------------------------------- |
| LANDING_PAGE_TYPE_UNKNOWN                         | 自定义链接                                      |
| LANDING_PAGE_TYPE_ANDROID_APP                     | Android 应用落地页                              |
| LANDING_PAGE_TYPE_IOS_APP                         | iOS 应用落地页                                  |
| LANDING_PAGE_TYPE_FENGYE_WEB                      | 网站落地页                                      |
| LANDING_PAGE_TYPE_FENGYE_LBS                      | 本地落地页                                      |
| LANDING_PAGE_TYPE_NATIVE                          | 原生落地页                                      |
| LANDING_PAGE_TYPE_ANDROID_APP_NATIVE              | Android App 原生落地页                          |
| LANDING_PAGE_TYPE_IOS_APP_NATIVE                  | iOS App 原生落地页                              |
| LANDING_PAGE_TYPE_XJ_ANDROID_APP_H5               | 蹊径 Android 应用                               |
| LANDING_PAGE_TYPE_XJ_IOS_APP_H5                   | 蹊径 iOS 应用                                   |
| LANDING_PAGE_TYPE_XJ_WEBSITE_H5                   | 蹊径网站                                        |
| LANDING_PAGE_TYPE_XJ_WEBSITE_NATIVE               | 蹊径原生                                        |
| LANDING_PAGE_TYPE_XJ_ANDROID_APP_NATIVE           | 蹊径 Android App 原生落地页                     |
| LANDING_PAGE_TYPE_XJ_IOS_APP_NATIVE               | 蹊径 iOS App 原生落地页                         |
| LANDING_PAGE_TYPE_FENGYE_EC_SINGLE                | 枫页电商单品页                                  |
| LANDING_PAGE_TYPE_FENGYE_EC_TOGETHER              | 枫页电商聚合页                                  |
| LANDING_PAGE_TYPE_FENGYE_EC_FOCUS                 | 枫页电商关注页                                  |
| LANDING_PAGE_TYPE_FENGYE_EC_COMMON                | 枫叶电商通用落地页(MP 侧)                       |
| LANDING_PAGE_TYPE_FENGYE_EC_WECHAT_MINIPROGRAM    | 枫页电商小程序页                                |
| LANDING_PAGE_TYPE_PLAY_H5                         | 互动推广页 H5                                   |
| LANDING_PAGE_TYPE_YOUZAN_SINGLE                   | 有赞单品页                                      |
| LANDING_PAGE_TYPE_YOUZAN_TOGETHER                 | 有赞聚合页                                      |
| LANDING_PAGE_TYPE_YOUZAN_WECHAT_MINIPROGRAM       | 有赞微信小程序页                                |
| LANDING_PAGE_TYPE_YIYE_FORM                       | 一叶智能落地页                                  |
| LANDING_PAGE_TYPE_JINSHUJU_FORM                   | 金数据落地页                                    |
| LANDING_PAGE_TYPE_WEIMOB_PRODUCTSET               | 微盟聚合页                                      |
| LANDING_PAGE_TYPE_WEIMOB_PROMOTION                | 微盟活动页                                      |
| LANDING_PAGE_TYPE_WEIMOB_PRODUCT                  | 微盟单品页                                      |
| LANDING_PAGE_TYPE_WEIMOB_H5                       | 微盟 H5 落地页                                  |
| LANDING_PAGE_TYPE_WEIMOB_WECHAT_MINIPROGRAM       | 微盟微信小程序页                                |
| LANDING_PAGE_TYPE_FENGSHU_MINI_PROGRAM            | 枫树小程序第三方                                |
| LANDING_PAGE_TYPE_QQ_MOBILE_MINI_PROGRAM          | 手机 QQ 小程序                                  |
| LANDING_PAGE_TYPE_QQ_BROWSER_MINI_PROGRAM         | QQ 浏览器小程序                                 |
| LANDING_PAGE_TYPE_WECHAT_NATIVE                   | 微信原生页                                      |
| LANDING_PAGE_TYPE_WECHAT_H5                       | 微信外链_1(MP 侧)                               |
| LANDING_PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_ARTICLE | 微信公众号文章_2(MP 侧)                         |
| LANDING_PAGE_TYPE_WECHAT_COUPON                   | 微信领取卡券_公用_5(MP 侧)                      |
| LANDING_PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL  | 微信公众号详情_公用_6(MP 侧)                    |
| LANDING_PAGE_TYPE_WECHAT_APPSTORE_MOMENTS         | 微信直跳 Appstore_朋友圈_7(MP 侧)               |
| LANDING_PAGE_TYPE_WECHAT_H5_TEMPLATE              | 微信 H5 模板页_8(MP 侧)                         |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_SIMPLE_NATIVE    | 微信简易原生页_朋友圈_9(MP 侧)                  |
| LANDING_PAGE_TYPE_WECHAT_FULL_SCREEN              | 微信素材放大为全屏_11(MP 侧)                    |
| LANDING_PAGE_TYPE_WECHAT_BASE_DETAILS             | 微信基础版详情页_公众号_12(MP 侧)               |
| LANDING_PAGE_TYPE_WECHAT_PICTURE_DETAILS          | 微信大图版详情页_公众号_13(MP 侧)               |
| LANDING_PAGE_TYPE_WECHAT_STORE                    | 微信小店_公众号_14(MP 侧)                       |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_H5_BRAND         | 微信 H5 品牌介绍页_朋友圈_16(MP 侧)             |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_PICTURE_FORM     | 微信图片表单详情页模板_朋友圈_17(MP 侧)         |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_VIDEO_FORM       | 微信视频表单_朋友圈_18(MP 侧)                   |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_APPLIED_TEXT     | 微信应用图文_朋友圈_19(MP 侧)                   |
| LANDING_PAGE_TYPE_WECHAT_MOMENTS_APPLIED_VIDEO    | 微信应用视频_朋友圈_18(MP 侧)                   |
| LANDING_PAGE_TYPE_WECHAT_FORM_TEMPLATE            | 微信自由拼表单模板页_21(MP 侧)                  |
| LANDING_PAGE_TYPE_WECHAT_VOTING_TEMPLATE          | 微信自由拼投票模板页_22(MP 侧)                  |
| LANDING_PAGE_TYPE_WECHAT_PAYMENT_COUPONS          | 微信微信支付优惠券_23(MP 侧)                    |
| LANDING_PAGE_TYPE_WECHAT_MINI_GAME                | 微信小游戏落地页_24(MP 侧)                      |
| LANDING_PAGE_TYPE_WECHAT_NATIVE_BETA              | 微信原生落地页 Beta 版(阿丽塔)_26(MP 侧)        |
| LANDING_PAGE_TYPE_WECHAT_CALL_DAILOG              | 微信一键拨号页,点击后唤起拨号弹窗_27(MP 侧)     |
| LANDING_PAGE_TYPE_WECHAT_FOCUS_DAILOG             | 微信一键关注页，点击后唤起关注弹窗_40024(MP 侧) |
| LANDING_PAGE_TYPE_WECHAT_MINI_PROGRAM             | 微信小程序落地页                                |
| LANDING_PAGE_TYPE_STURNUS_IMAX                    | 巨幕落地页                                      |
| LANDING_PAGE_TYPE_TENCENT_NEWS_SOFT_ARTICLE       | 软文落地页                                      |
| LANDING_PAGE_TYPE_TENCENT_NEWS_LIVE               | 直播落地页                                      |
| LANDING_PAGE_TYPE_XJ_OTT                          | 蹊径 ott 落地页                                 |
| LANDING_PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                                      |
| LANDING_PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用)                 |

数据展示数据类型

| 名称                          | 描述       |
| ----------------------------- | ---------- |
| CONVERSION_DATA_DEFAULT       | 不使用     |
| CONVERSION_DATA_FRIEND_PLAY   | 好友在玩量 |
| CONVERSION_DATA_APP_DOWNLOAD  | 应用下载量 |
| CONVERSION_DATA_ONSHOP        | 商品下单量 |
| CONVERSION_DATA_ADMETRIC      | 转化数据量 |
| CONVERSION_DATA_FRIEND_FOLLOW | 好友关注量 |

数据展示转化数据量类型

| 名称                         | 描述   |
| ---------------------------- | ------ |
| CONVERSION_TARGET_DEFAULT    | 不使用 |
| CONVERSION_TARGET_GET        | 领取   |
| CONVERSION_TARGET_RESERVE    | 预约   |
| CONVERSION_TARGET_BOOK       | 预定   |
| CONVERSION_TARGET_BUY        | 购买   |
| CONVERSION_TARGET_APPLY      | 申请   |
| CONVERSION_TARGET_CONSULT    | 咨询   |
| CONVERSION_TARGET_DOWNLOAD   | 下载   |
| CONVERSION_TARGET_PLAYING    | 在玩   |
| CONVERSION_TARGET_CLICK      | 查看   |
| CONVERSION_TARGET_SEE        | 了解   |
| CONVERSION_TARGET_INVOLVE    | 参与   |
| CONVERSION_TARGET_OPEN       | 打开   |
| CONVERSION_TARGET_PURCHASE   | 抢购   |
| CONVERSION_TARGET_BROWSE     | 浏览   |
| CONVERSION_TARGET_TRY        | 试玩   |
| CONVERSION_TARGET_DRIVE      | 试驾   |
| CONVERSION_TARGET_ENTER      | 进入   |
| CONVERSION_TARGET_READ       | 阅读   |
| CONVERSION_TARGET_FOLLOW     | 关注   |
| CONVERSION_TARGET_USE        | 使用   |
| CONVERSION_TARGET_EXPERIENCE | 体验   |
| CONVERSION_TARGET_SETUP      | 开通   |
| CONVERSION_TARGET_SECKILL    | 秒杀   |

双落地页链接名称类型

| 名称                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| NOT_USED                        | 不使用，仅公众号流量可使用                                   |
| VIEW_DETAILS                    | 查看详情                                                     |
| GET_COUPONS                     | 领取优惠，选择领取优惠，需在详情页中可直接领取优惠，否则广告将会被审核驳回 |
| MAKE_AN_APPOINTMENT             | 预约活动，选择预约活动，需在详情页中体现活动预约入口，否则广告将会被审核驳回 |
| BUY_NOW                         | 立即购买，当且仅当推广目标为电商时可使用                     |
| GO_SHOPPING                     | 去逛逛，当且仅当推广目标为电商时可使用                       |
| ENTER_MINI_PROGRAM              | 进入小程序，仅能使用于投放小程序落地页                       |
| ENTER_MINI_GAME                 | 进入小游戏，仅能使用于投放小游戏落地页                       |
| APPLY_NOW                       | 立即申请                                                     |
| BOOK_NOW                        | 立即预定                                                     |
| RESERVATION_BUY                 | 预约购买                                                     |
| CONSULT_NOW                     | 立即咨询                                                     |
| BOOK_DRIVE                      | 预约试驾                                                     |
| ENTER_OFFICIAL_ACCOUNTS         | 了解公众号                                                   |
| PLAY_NOW                        | 立即玩                                                       |
| OPEN_MINI_GAME                  | 打开游戏                                                     |
| DOWNLOAD_APP                    | 下载应用                                                     |
| DOWNLOAD_GAME                   | 下载游戏                                                     |
| GET_SAMPLES                     | 领取小样                                                     |
| TRY_NOW                         | 立即体验                                                     |
| GET_IT_NOW                      | 立即领取                                                     |
| BUY_ASAP                        | 立即抢购                                                     |
| DOWNLOAD_NOW                    | 立即下载                                                     |
| VIEW_APPS                       | 查看应用                                                     |
| MORE_INFO                       | 了解更多                                                     |
| GET_VOUCHERS                    | 领券                                                         |
| FOLLOW_OFFICIAL_ACCOUNT         | 关注公众号                                                   |
| READ_NOVELS                     | 阅读小说                                                     |
| WATCH_LIVE                      | 观看直播                                                     |
| RESERVE_NOW                     | 立即预约                                                     |
| OPEN_APP                        | 打开应用                                                     |
| ALREADY_INSTALL                 | 已安装                                                       |
| SETUP_NOW                       | 立即开通                                                     |
| SECKILL_NOW                     | 立即秒杀                                                     |
| TRY_PLAY_NOW                    | 立即试玩                                                     |
| INSTALL_NOW                     | 立即安装                                                     |
| MORE_ABOUT_OFFICIAL_ACCOUNT_CHT | 了解公眾號                                                   |
| FOLLOW_OFFICIAL_ACCOUNT_CHT     | 關註公眾號                                                   |
| GET_FOR_FREE                    | 免费领取                                                     |
| CARNIVAL_618                    | 618 狂欢                                                     |
| SURPRISE_618                    | 618 惊喜                                                     |
| DISCOUNT_618                    | 618 优惠                                                     |
| GO_618_VENUE                    | 去 618 会场                                                  |
| GET_618_WELFARE                 | 领 618 福利                                                  |

原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效）

| 名称                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| OPTION_CANVAS_OVERRIDE_CREATIVE | 不替换，要求原生推广页顶部素材和广告创意素材 md5 一致        |
| OPTION_CREATIVE_OVERRIDE_CANVAS | 广告创意素材替换原生推广页顶部素材                           |
| OPTION_KEEP_DIFFERENT           | 自定义广告创意素材，和原生推广页顶部素材保持两者不同，（仅支持朋友圈非常规创意形式） |

落地页类型

| 名称                                      | 描述                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| PAGE_TYPE_DEFAULT                         | 默认落地页类型。推广普通外链/电商推广/品牌活动推广时，默认落地页类型代表跳转到广告主自定义的 url。推广安卓 App 时，默认落地页类型代表跳转到应用宝下载页。推广 IOS App 时，默认落地页类型代表跳转到苹果 App Store 下载页。推广微信门店时，默认落地页类型代表跳转到微信门店页。 |
| PAGE_TYPE_TSA_APP                         | 通过 TSA 落地页制作工具生成的自定义 APP 介绍页               |
| PAGE_TYPE_TSA_WEB_NONE_ECOMMERCE          | 通过 TSA 落地页制作工具生成的非电商类网页                    |
| PAGE_TYPE_CANVAS_WECHAT                   | 微信原生推广页，通过微信创建的落地页类型                     |
| PAGE_TYPE_MINI_PROGRAM_WECHAT             | 微信小程序落地页                                             |
| PAGE_TYPE_FENGYE_ECOMMERCE                | 通过枫叶落地页制作工具生成的电商类网页                       |
| PAGE_TYPE_FENGYE_EC_WECHAT_MINIPROGRAM    | 枫页电商小程序页                                             |
| PAGE_TYPE_MINI_GAME_WECHAT                | 微信小游戏落地页                                             |
| PAGE_TYPE_MINI_PROGRAM_QQ                 | QQ 小程序落地页                                              |
| PAGE_TYPE_MINI_PROGRAM_CANVAS_WECHAT      | 微信小程序原生页                                             |
| PAGE_TYPE_MINI_GAME_QQ                    | QQ 小游戏落地页                                              |
| PAGE_TYPE_ARTICAL_WECHAT                  | 微信文章页                                                   |
| PAGE_TYPE_MOMENTS_SIMPLE_NATIVE_WECHAT    | 微信简版原生页                                               |
| PAGE_TYPE_FULL_SCREEN_WECHAT              | 微信素材放大(待废弃,仅支持微信小游戏下使用)                  |
| PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                                                   |
| PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用)                              |
| PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD         | 安卓一键下载                                                 |
| PAGE_TYPE_LINGQUE_H5                      | 灵鹊落地页                                                   |
| PAGE_TYPE_LINGQUE_MINI_PROGRAM            | 灵鹊小程序                                                   |
| PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT    | 视频号小店商品页                                             |

落地页制作平台

| 名称                                 | 描述               |
| ------------------------------------ | ------------------ |
| LANDING_PAGE_PLATFORM_UNKNOWN        | 未知               |
| LANDING_PAGE_PLATFORM_TSA            | TSA 落地页制作工具 |
| LANDING_PAGE_PLATFORM_FENGYE_EC      | 枫页电商           |
| LANDING_PAGE_PLATFORM_FENGYE_DEFAULT | 枫页非电商         |
| LANDING_PAGE_PLATFORM_XIJING         | 蹊径落地页制作工具 |
| LANDING_PAGE_PLATFORM_YOUZAN         | 有赞               |
| LANDING_PAGE_PLATFORM_MP             | 微信公众平台       |
| LANDING_PAGE_PLATFORM_APP_STORE      | AppStore           |
| LANDING_PAGE_PLATFORM_YIYE           | 一叶智能           |
| LANDING_PAGE_PLATFORM_JINSHUJU       | 金数据             |
| LANDING_PAGE_PLATFORM_WEIMOB         | 微盟               |
| LANDING_PAGE_PLATFORM_QQ_MOBILE      | QQ 小程序          |
| LANDING_PAGE_PLATFORM_QQ_BROWSER     | 浏览器小程序       |
| LANDING_PAGE_PLATFORM_PLAY           | 互动推广页         |
| LANDING_PAGE_PLATFORM_YUEBAO         | 阅宝               |

落地页媒体平台类型

| 名称         | 描述                       |
| ------------ | -------------------------- |
| DEFAULT      | 默认类型，等同于全平台类型 |
| ALL          | 全平台类型                 |
| SCREEN_PC    | PC                         |
| SCREEN_PHONE | 移动设备                   |
| OS_ANDROID   | 安卓设备                   |
| OS_IOS       | ios 设备                   |

DPA 落地页类型

| 名称                          | 描述           |
| ----------------------------- | -------------- |
| LANDING_PAGE_URL_TYPE_UNKNOWN | 默认值         |
| LANDING_PAGE_URL_TYPE_STATIC  | 指定静态落地页 |
| LANDING_PAGE_URL_TYPE_DYNAMIC | 商品动态落地页 |

浮层卡片类型

| 名称                            | 描述                 |
| ------------------------------- | -------------------- |
| FLOATING_ZONE_TYPE_UNKNOWN      | 浮层卡片历史数据     |
| FLOATING_ZONE_TYPE_IMAGE_TEXT   | 浮层卡片图文复合类型 |
| FLOATING_ZONE_TYPE_SINGLE_IMAGE | 浮层卡片单图类型     |
| FLOATING_ZONE_TYPE_MULTI_BUTTON | 浮层卡片多按钮类型   |
| FLOATING_ZONE_TYPE_SLIDER_CARD  | 轮播卡片类型         |

浮层卡片信息类型

| 名称                            | 描述     |
| ------------------------------- | -------- |
| FLOATING_ZONE_INFO_DEFAULT      | 默认     |
| FLOATING_ZONE_INFO_TYPE_NORMAL  | 常规     |
| FLOATING_ZONE_INFO_TYPE_PRODUCT | 商品信息 |

视频号直播推广形式

| 名称                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| LIVE_PROMOTED_TYPE_NATIVE_VIDEO | 原生推流 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| LIVE_PROMOTED_TYPE_SHORT_VIDEO  | 短视频推广 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |

剧情类型

| 名称         | 描述     |
| ------------ | -------- |
| RED_ENVELOPE | 剧情红包 |
| HIGH_LIGHT   | 高光剧情 |
| HEART_BEAT   | 心动剧情 |

小游戏试玩页横竖屏标记信息

| 名称      | 描述 |
| --------- | ---- |
| PORTRAIT  | 竖屏 |
| LANDSCAPE | 横屏 |

视频号封面图显示类型

| 名称                        | 描述         |
| --------------------------- | ------------ |
| COVER_IMG_SHOW_TYPE_DEFAULT | 默认（居中） |
| COVER_IMG_SHOW_TYPE_TITLE   | 平铺         |
| COVER_IMG_SHOW_TYPE_CENTER  | 居中         |

落地页类型（可读）

| 名称                                      | 描述                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| PAGE_TYPE_DEFAULT                         | 默认落地页类型。推广普通外链/电商推广/微信品牌页时，默认落地页类型代表跳转到广告主自定义的 url。推广安卓 App 时，默认落地页类型代表跳转到应用宝下载页。推广 IOS App 时，默认落地页类型代表跳转到苹果 App Store 下载页。推广微信门店时，默认落地页类型代表跳转到微信门店页。 |
| PAGE_TYPE_TSA_APP                         | 通过 TSA 落地页制作工具生成的自定义 APP 介绍页               |
| PAGE_TYPE_TSA_WEB_NONE_ECOMMERCE          | 通过 TSA 落地页制作工具生成的非电商类网页                    |
| PAGE_TYPE_FENGYE_ECOMMERCE                | 通过枫叶落地页制作工具生成的电商类网页                       |
| PAGE_TYPE_FENGYE_EC_WECHAT_MINIPROGRAM    | 枫页电商小程序页                                             |
| PAGE_TYPE_CANVAS                          | Canvas 原生推广页                                            |
| PAGE_TYPE_MINI_PROGRAM                    | 小程序落地页                                                 |
| PAGE_TYPE_CANVAS_WECHAT                   | 微信原生推广页，通过微信创建的落地页类型                     |
| PAGE_TYPE_MINI_PROGRAM_WECHAT             | 微信小程序落地页                                             |
| PAGE_TYPE_UNSUPPORTED                     | 尚不支持的落地页类型                                         |
| PAGE_TYPE_MINI_GAME_WECHAT                | 微信小游戏落地页                                             |
| PAGE_TYPE_MINI_PROGRAM_QQ                 | QQ 小程序落地页                                              |
| PAGE_TYPE_MINI_GAME_QQ                    | QQ 小程序落地页                                              |
| PAGE_TYPE_MINI_PROGRAM_CANVAS_WECHAT      | 微信小程序简版原生页                                         |
| PAGE_TYPE_MOMENTS_SIMPLE_NATIVE_WECHAT    | 微信简版原生页                                               |
| PAGE_TYPE_FULL_SCREEN_WECHAT              | 微信素材放大(待废弃,仅支持微信小游戏下使用)                  |
| PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                                                   |
| PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用)                              |
| PAGE_TYPE_WECHAT_CONSULT                  | 微信客服                                                     |
| PAGE_TYPE_WECOM_CONSULT                   | 企业微信名片页                                               |
| PAGE_TYPE_WEIMOB_PRODUCTSET               | 微盟聚合页                                                   |
| PAGE_TYPE_WEIMOB_WECHAT_MINIPROGRAM       | 微盟微信小程序页                                             |
| PAGE_TYPE_WECHAT_CHANNELS                 | 视频号视频详情页                                             |
| PAGE_TYPE_WECHAT_STATUS_FOOTER            | 微信状态                                                     |
| PAGE_TYPE_XIJING_QUICK                    | 蹊径极速版落地页                                             |
| PAGE_TYPE_ARTICAL_WECHAT                  | 微信文章页                                                   |
| PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD         | 安卓一键下载                                                 |
| PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT    | 微信小店商品页                                               |
| PAGE_TYPE_WECHAT_QUERY_PAGE               | 微信搜索页                                                   |
| PAGE_TYPE_WECHAT_SHOP                     | 微信小店店铺页                                               |
| PAGE_TYPE_LINGQUE_H5                      | 官方落地页                                                   |
| PAGE_TYPE_LINGQUE_MINI_PROGRAM            | 灵鹊小程序                                                   |

视频播放结束页类型

| 名称                        | 描述               |
| --------------------------- | ------------------ |
| VIDEO_END_PAGE_TYPE_PLAY_H5 | 试玩素材 H5 落地页 |

站点集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 优量汇                                               |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_QQCOM                | 腾讯 PC QQ、QQ 空间、腾讯音乐 (待废弃)               |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝移动，移动站点（待废弃）                       |
| SITE_SET_MOBILE_INNER         | 移动内部站点，移动站点                               |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻                                             |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频，移动站点                                   |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报，移动站点 (待废弃)                          |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PENGYOU              | 朋友社区 (待废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (待废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (待废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (待废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (待废弃)                                     |
| SITE_SET_PC_UNION             | PC 联盟 (待废弃)                                     |
| SITE_SET_YINGYONGBAO_PC       | 应用宝 PC (待废弃)                                   |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (待废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (待废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (待废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (待废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (待废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (待废弃)                                  |
| SITE_SET_WEIBO                | 微博 (待废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (待废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（废弃）                                 |
| SITE_SET_THIRDPARTY           | 第三方流量 (待废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (待废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |
| SITE_SET_QQSHOPPING           | QQ 购物                                              |
| SITE_SET_CHANNELS             | 微信视频号                                           |
| SITE_SET_WECHAT_SEARCH        | 微信搜一搜（仅支持搜索计划）                         |
| SITE_SET_WECHAT_PLUGIN        | 微信新闻插件                                         |
| SITE_SET_QBSEARCH             | QQ 浏览器等                                          |
| SITE_SET_SEARCH_SCENE         | 搜索场景                                             |
| SITE_SET_SEARCH_MOBILE_UNION  | 搜索优量汇                                           |

视频来源

| 名称                        | 描述                 |
| --------------------------- | -------------------- |
| SOURCE_TYPE_LOCAL           | 本地自行上传         |
| SOURCE_TYPE_API             | API 上传             |
| SOURCE_TYPE_VIDEO_MAKER_XSJ | 小视界视频制作工具   |
| SOURCE_TYPE_TCC             | 腾讯创意定制平台制作 |
| SOURCE_TYPE_DERIVE          | 创意衍生             |
| SOURCE_TYPE_DERIVATION      | 视频派生工具         |
| SOURCE_TYPE_AIGC            | AIGC 素材            |
| SOURCE_TYPE_HUXUAN          | 互选                 |
| SOURCE_TYPE_HUXUAN_DERIVE   | 互选二创             |

图片状态定义

| 名称             | 描述   |
| ---------------- | ------ |
| ADSTATUS_NORMAL  | 正常   |
| ADSTATUS_DELETED | 已删除 |

视频类型

| 名称           | 描述 |
| -------------- | ---- |
| MEDIA_TYPE_MP4 | mp4  |
| MEDIA_TYPE_AVI | avi  |
| MEDIA_TYPE_MOV | mov  |
| MEDIA_TYPE_FLV | flv  |

转码状态

| 名称                 | 描述   |
| -------------------- | ------ |
| MEDIA_STATUS_VALID   | 有效   |
| MEDIA_STATUS_PENDING | 待处理 |
| MEDIA_STATUS_ERROR   | 异常   |

视频来源

| 名称                        | 描述                 |
| --------------------------- | -------------------- |
| SOURCE_TYPE_UNSUPPORTED     | 其他上传方式         |
| SOURCE_TYPE_LOCAL           | 本地自行上传         |
| SOURCE_TYPE_API             | API 上传             |
| SOURCE_TYPE_VIDEO_MAKER_XSJ | 小视界视频制作工具   |
| SOURCE_TYPE_TCC             | 腾讯创意定制平台制作 |
| SOURCE_TYPE_DERIVE          | 腾讯创意衍生         |
| SOURCE_TYPE_DERIVATION      | 视频派生工具         |
| SOURCE_TYPE_AIGC            | AIGC 素材            |
| SOURCE_TYPE_HUXUAN          | 互选                 |
| SOURCE_TYPE_HUXUAN_DERIVE   | 互选二创             |

微信公众号文章类型

| 名称                 | 描述             |
| -------------------- | ---------------- |
| WECHAT_ARTICALE_SEND | 已群发的图文消息 |
| WECHAT_ARTICALE      | 图文消息素材     |

消息类目

| 名称                     | 描述     |
| ------------------------ | -------- |
| MESSAGECATEGORY_SYSTEM   | 系统消息 |
| MESSAGECATEGORY_APPROVAL | 审核消息 |
| MESSAGECATEGORY_ACCOUNT  | 账户消息 |
| MESSAGECATEGORY_FINANCE  | 财务消息 |
| MESSAGECATEGORY_MONITOR  | 投放监控 |
| MESSAGECATEGORY_ECOLOGY  | 生态消息 |

互动推广页审核状态

| 名称                                | 描述             |
| ----------------------------------- | ---------------- |
| PLAYABLE_PAGE_AUDIT_STATUS_UNKNOWN  | 初始化状态：未知 |
| PLAYABLE_PAGE_AUDIT_STATUS_PENDING  | 待审核           |
| PLAYABLE_PAGE_AUDIT_STATUS_APPROVED | 通过             |
| PLAYABLE_PAGE_AUDIT_STATUS_REJECTED | 拒绝             |

互动推广页展示方向

| 名称                                        | 描述   |
| ------------------------------------------- | ------ |
| PLAYABLE_PAGE_DIRECTION_HORIZONTAL_VERTICAL | 横竖版 |
| PLAYABLE_PAGE_DIRECTION_VERTICAL            | 竖版   |
| PLAYABLE_PAGE_DIRECTION_HORIZONTAL          | 横版   |

渠道包系统状态

| 名称                           | 描述     |
| ------------------------------ | -------- |
| CHANNEL_PACKAGE_STATUS_PENDING | 待审核   |
| CHANNEL_PACKAGE_STATUS_NORMAL  | 上线     |
| CHANNEL_PACKAGE_STATUS_DENIED  | 审核失败 |
| CHANNEL_PACKAGE_STATUS_OFFLINE | 下线     |

渠道包审核结果状态

| 名称                               | 描述       |
| ---------------------------------- | ---------- |
| AUDIT_STATUS_DIRTY_WORD            | 脏词       |
| AUDIT_STATUS_PIRATED_SIGNATURE     | 盗版签名   |
| AUDIT_STATUS_VIRUS                 | 病毒       |
| AUDIT_STATUS_ADMINISTRATOR_DELETE  | 管理员删除 |
| AUDIT_STATUS_MISS_RESOURCE         | 资源缺失   |
| AUDIT_STATUS_REJECT                | 审核驳回   |
| AUDIT_STATUS_GO_ILLEGAL            | 上线不合法 |
| AUDIT_STATUS_OFFLINE               | 下线       |
| AUDIT_STATUS_INTERNAL_SERVER_ERROR | 内部错误   |
| AUDIT_STATUS_ONLINE                | 新应用上线 |
| AUDIT_STATUS_NEW_VERSION           | 新版本上线 |

广告包的渠道包状态

| 名称                                   | 描述                       |
| -------------------------------------- | -------------------------- |
| CHANNEL_PACKAGE_STATUS_PASSED          | 审核通过                   |
| CHANNEL_PACKAGE_STATUS_REVIEWING       | 审核中                     |
| CHANNEL_PACKAGE_STATUS_DENIED          | 审核拒绝                   |
| CHANNEL_PACKAGE_STATUS_DENIED_AGAIN    | 审核拒绝，使用更新前的数据 |
| CHANNEL_PACKAGE_STATUS_REVIEWING_AGAIN | 再次审核中                 |
| CHANNEL_PACKAGE_STATUS_ON_OFFLINE      | 下线中                     |
| CHANNEL_PACKAGE_STATUS_OFFLINE         | 下线                       |
| CHANNEL_PACKAGE_STATUS_DRAFT           | 草稿                       |

渠道包状态

| 名称                          | 描述                             |
| ----------------------------- | -------------------------------- |
| PACKAGE_STATUS_NORMAL         | 审核通过                         |
| PACKAGE_STATUS_PENDING        | 审核中                           |
| PACKAGE_STATUS_DENIED         | 审核不通过                       |
| PACKAGE_STATUS_UPDATE_DENIED  | 更新审核不通过，使用更新前的数据 |
| PACKAGE_STATUS_OFFLINE        | 下线中                           |
| PACKAGE_STATUS_DISABLE        | 已下线                           |
| PACKAGE_STATUS_REVIEW_PENDING | 再次审核中                       |

微信广告位位置

| 名称                                                  | 描述                     |
| ----------------------------------------------------- | ------------------------ |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_BOTTOM          | 公众号文章底部           |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_TOP             | 公众号顶部               |
| POSITION_TYPE_WECHAT_TENCENT_NEWS                     | 腾讯新闻                 |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_VIDEO           | 公众号文章视频贴片       |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_MUTUAL_ELECTION | 公众号互选广告           |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_MIDDLE          | 公众号文章中部           |
| POSITION_TYPE_TENCENT_MAILBOX                         | 邮箱广告                 |
| POSITION_TYPE_WECHAT_MINI_PROGRAM_BANNER              | 小程序 Banner 广告       |
| POSITION_TYPE_WECHAT_REWARD                           | 激励式广告               |
| POSITION_TYPE_WECHAT_OFFICIAL_ACCOUNT_MIDDLE_PRODUCT  | 公众号文章中部商品广告位 |
| POSITION_TYPE_WECHAT_MINI_PROGRAM_INTERSTITIAL        | 小程序插屏               |
| POSITION_TYPE_WECHAT_AD_BOX                           | 小程序视频               |
| POSITION_TYPE_WECHAT_MOMENTS                          | 微信朋友圈               |
| POSITION_TYPE_WECHAT_NULL                             | 微信其他                 |

转化创建来源

| 名称         | 描述       |
| ------------ | ---------- |
| SELF_CREATED | 自建转化   |
| PLATFORM     | 平台类转化 |

广告优化目标类型

| 名称                                                    | 描述                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| OPTIMIZATIONGOAL_NONE                                   | none                                                         |
| OPTIMIZATIONGOAL_BRAND_CONVERSION                       | 指定页面曝光                                                 |
| OPTIMIZATIONGOAL_FOLLOW                                 | 关注                                                         |
| OPTIMIZATIONGOAL_CLICK                                  | 点击                                                         |
| OPTIMIZATIONGOAL_IMPRESSION                             | 曝光                                                         |
| OPTIMIZATIONGOAL_APP_DOWNLOAD                           | 下载                                                         |
| OPTIMIZATIONGOAL_APP_ACTIVATE                           | 激活                                                         |
| OPTIMIZATIONGOAL_APP_REGISTER                           | 注册                                                         |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION                      | 次日留存                                                     |
| OPTIMIZATIONGOAL_APP_PURCHASE                           | 付费次数，游戏客户如需优化付费行为，建议使用首次付费作为优化目标 |
| OPTIMIZATIONGOAL_ECOMMERCE_ORDER                        | 下单                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT                     | H5 付费次数（待废弃）                                        |
| OPTIMIZATIONGOAL_LEADS                                  | 表单预约（微信流量，待废弃）                                 |
| OPTIMIZATIONGOAL_ECOMMERCE_CART                         | 加入购物车                                                   |
| OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE               | H5 注册（待废弃）                                            |
| OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE                    | 商品详情页浏览                                               |
| OPTIMIZATIONGOAL_ONLINE_CONSULTATION                    | 在线咨询                                                     |
| OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION                 | 电话拨打                                                     |
| OPTIMIZATIONGOAL_PAGE_RESERVATION                       | 表单预约                                                     |
| OPTIMIZATIONGOAL_DELIVERY                               | 发货                                                         |
| OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW                   | 公众号内发消息                                               |
| OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW                | 公众号内点击菜单栏                                           |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT          | 有效在线咨询 (已废弃)                                        |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_CONSULT        | 有效在线咨询（待废弃）                                       |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_PHONE          | 有效电话拨打（待废弃）                                       |
| OPTIMIZATIONGOAL_LEADS_COLLECT                          | 综合线索收集                                                 |
| OPTIMIZATIONGOAL_FIRST_PURCHASE                         | 首次付费                                                     |
| OPTIMIZATIONGOAL_APPLY                                  | 进件                                                         |
| OPTIMIZATIONGOAL_PRE_CREDIT                             | 预授信                                                       |
| OPTIMIZATIONGOAL_CREDIT                                 | 授信                                                         |
| OPTIMIZATIONGOAL_WITHDRAW_DEPOSITS                      | 提现                                                         |
| OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE                | 关键页面访问                                                 |
| OPTIMIZATIONGOAL_MOBILE_APP_CREATE_ROLE                 | 小游戏创角                                                   |
| OPTIMIZATIONGOAL_CANVAS_CLICK                           | 跳转按钮点击                                                 |
| OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER                  | 领券                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_ADD_TO_WISHLIST              | 商品收藏                                                     |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_RESERVATION    | 有效表单预约（待废弃）                                       |
| OPTIMIZATIONGOAL_PAGE_RECEIPT                           | 签收                                                         |
| OPTIMIZATIONGOAL_PAGE_SCAN_CODE                         | 加企业微信客服                                               |
| OPTIMIZATIONGOAL_SELECT_COURSE                          | 选课                                                         |
| OPTIMIZATIONGOAL_CONFIRM_POTENTIAL_CUSTOMER_PHONE       | 电话潜在客户                                                 |
| OPTIMIZATIONGOAL_MOBILE_APP_AD_INCOME                   | 广告变现                                                     |
| OPTIMIZATIONGOAL_MOBILE_APP_ACCREDIT                    | 小游戏授权                                                   |
| OPTIMIZATIONGOAL_PURCHASE_MEMBER_CARD                   | 首次会员购买                                                 |
| OPTIMIZATIONGOAL_PAGE_CONFIRM_EFFECTIVE_LEADS           | 有效综合线索                                                 |
| OPTIMIZATIONGOAL_ADD_DESKTOP                            | 快应用加桌面                                                 |
| OPTIMIZATIONGOAL_RESERVATION                            | 微信流量预约行为                                             |
| OPTIMIZATIONGOAL_FIRST_ECOMMERCE_ORDER                  | 首次下单                                                     |
| OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER | 24 小时下单                                                  |
| OPTIMIZATIONGOAL_ECOMMERCE_SCANCODE_WX                  | 扫码加粉                                                     |
| OPTIMIZATIONGOAL_CLASS_PARTICIPATED                     | 首次到课                                                     |
| OPTIMIZATIONGOAL_INSURANCE_PURCHASE                     | 保险支付                                                     |
| OPTIMIZATIONGOAL_MOBILE_APP_SEVEN_DAYS_RETENTION        | 7 日留存                                                     |
| OPTIMIZATIONGOAL_LIKE                                   | 点赞                                                         |
| OPTIMIZATIONGOAL_EXTERNAL_LINK_CLICK                    | 外链点击                                                     |
| OPTIMIZATIONGOAL_BUY_COUPONS                            | 购券                                                         |
| OPTIMIZATIONGOAL_LEAVE_INFORMATION                      | 留资                                                         |
| OPTIMIZATIONGOAL_CORE_ACTION                            | 关键行为                                                     |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION_RATIO                | 次留率                                                       |
| OPTIMIZATIONGOAL_PROMOTION_READ_ARTICLE                 | 阅读文章                                                     |
| OPTIMIZATIONGOAL_RESERVATION_CHECK                      | 意向表单                                                     |
| OPTIMIZATIONGOAL_OPEN_ACCOUNT                           | 券商开户                                                     |
| OPTIMIZATIONGOAL_SEVEN_DAY_ECOMMERCE_ORDER              | 7 日下单                                                     |
| OPTIMIZATIONGOAL_ADD_WECHAT                             | 添加个人微信客服                                             |
| OPTIMIZATIONGOAL_WECOM_CONSULT                          | 加企微后咨询                                                 |
| OPTIMIZATIONGOAL_ADD_GROUP                              | 加微信群                                                     |
| OPTIMIZATIONGOAL_QUICK_ORDER                            | 快速下单                                                     |
| OPTIMIZATIONGOAL_PRE_PAY                                | 预付定金                                                     |
| OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_ACTIVE_ONE_MSG     | 主动一句话咨询                                               |
| OPTIMIZATIONGOAL_CALL_DURATION_THIRTY_SECONDS           | 通话 30S                                                     |
| OPTIMIZATIONGOAL_CLAIM_COURSE                           | 领课                                                         |
| OPTIMIZATIONGOAL_QUIT_GROUP                             | 退群                                                         |
| OPTIMIZATIONGOAL_VIEW_ACQUISITION_CONTENT               | 拉新访问关键页面                                             |
| OPTIMIZATIONGOAL_BACK_FLOW                              | 沉默唤起                                                     |
| OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_THREE_MSG          | 三句话咨询                                                   |
| OPTIMIZATIONGOAL_RENEWAL                                | 保险续费                                                     |
| OPTIMIZATIONGOAL_LOW_PRICE_COURSE                       | 低价课转化                                                   |
| OPTIMIZATIONGOAL_CONSULT_INTENTION                      | 开口后下单意向                                               |
| OPTIMIZATIONGOAL_EVERY_DAY_RETENTION                    | 七日内每次留存成本                                           |
| OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE_UV             | 关键页面访问人数                                             |
| OPTIMIZATIONGOAL_LIVE_STREAM_DURATION_1MIN              | 直播观看一分钟                                               |
| OPTIMIZATIONGOAL_LIVE_STREAM_INTERACTION                | 直播互动                                                     |
| OPTIMIZATIONGOAL_ECOMMERCE_CANCEL_ORDER                 | 取消订单率                                                   |
| OPTIMIZATIONGOAL_CLICK_LEADS_COMPONENT                  | 点击留资组件                                                 |
| OPTIMIZATIONGOAL_REGULAR_PRICE_COURSE                   | 正价课                                                       |
| OPTIMIZATIONGOAL_VISIT_STROE                            | 到店                                                         |
| OPTIMIZATIONGOAL_EFFECTIVE_ENTRY                        | 首日启动                                                     |
| OPTIMIZATIONGOAL_CREDIT_RATIO                           | 完件授信率                                                   |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_DEAL                   | 全域通直播间成交                                             |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_PRODUCT_CLICK          | 全域通直播间商品点击                                         |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_AUDIENCE               | 全域通直播间观众                                             |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_COMMENT                | 全域通直播评论次数                                           |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_FANS                   | 全域通直播间涨粉                                             |
| OPTIMIZATIONGOAL_24H_FIRSTPAY                           | 首日首次付费                                                 |
| OPTIMIZATIONGOAL_STORE_STAY                             | 店铺停留                                                     |
| OPTIMIZATIONGOAL_R3                                     | 种草(R3)                                                     |
| OPTIMIZATIONGOAL_LOW_PRICE_INSURANCE_PAYMENT            | 低价险支付                                                   |
| OPTIMIZATIONGOAL_UNDERWRITING                           | 贷款额度开通                                                 |
| OPTIMIZATIONGOAL_FIRST_WITHDRAW                         | 借款                                                         |
| OPTIMIZATIONGOAL_BRIDGING_COURSE_COMPLETED              | 先导课完课                                                   |
| OPTIMIZATIONGOAL_THIRTY_SECONDS_SCANCODE_WX             | 浏览三十秒扫码加粉                                           |
| OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_REFUND_RATE     | 24 小时退款率                                                |
| OPTIMIZATIONGOAL_VIEW_DRAMA_DURATION_1MIN               | 观看转化                                                     |
| OPTIMIZATIONGOAL_FIRST_PROMPT_INPUT                     | 首次发送提示语                                               |
| OPTIMIZATIONGOAL_ECOMMERCE_GIFTING                      | 送礼下单                                                     |
| OPTIMIZATIONGOAL_NET_PROFIT_24H                         | 二十四小时净成交成本                                         |
| OPTIMIZATIONGOAL_CLUE_PAY_SUCCEED                       | 支付后存在意向                                               |
| OPTIMIZATIONGOAL_30DAY_UNSUBSCRIBE_RATE                 | 30 日退订率                                                  |
| OPTIMIZATIONGOAL_EFFECTIVE_INSURE                       | 有效投保                                                     |
| OPTIMIZATIONGOAL_COLLECT                                | 店铺收藏                                                     |

广告深度优化转化目标类型

| 名称                                 | 描述                 |
| ------------------------------------ | -------------------- |
| GOAL_NONE                            | 初始值               |
| GOAL_7DAY_PURCHASE_ROAS              | 7 天付费 ROI         |
| GOAL_15DAY_PURCHASE_ROAS             | 15 天付费 ROI        |
| GOAL_30DAY_PURCHASE_ROAS             | 30 天付费 ROI        |
| GOAL_60DAY_PURCHASE_ROAS             | 60 天付费 ROI        |
| GOAL_30DAY_MONETIZATION_ROAS         | 30 天变现 ROI        |
| GOAL_30DAY_ORDER_ROAS                | 下单 ROI             |
| GOAL_1DAY_PURCHASE_ROAS              | 首日付费 ROI         |
| GOAL_1DAY_MONETIZATION_ROAS          | 首日变现 ROI         |
| GOAL_3DAY_PURCHASE_ROAS              | 3 日付费 ROI         |
| GOAL_3DAY_MONETIZATION_ROAS          | 3 日变现 ROI         |
| GOAL_7DAY_MONETIZATION_ROAS          | 7 日变现 ROI         |
| GOAL_15DAY_MONETIZATION_ROAS         | 15 日变现 ROI        |
| GOAL_7DAY_RETENTION_TIMES            | 七日内留存天数       |
| GOAL_7DAY_LONGTERM_PURCHASE_ROAS     | 七日长效付费         |
| GOAL_14DAY_LONGTERM_PURCHASE_ROAS    | 十四日长效付费       |
| GOAL_30DAY_LONGTERM_PURCHASE_ROAS    | 三十日长效付费       |
| GOAL_QYT_7DAY_LIVE_STREAM_DEAL_ROAS  | 全域通七日直播间成交 |
| GOAL_WITHDRAW_DEPOSITS_ROAS          | 七日提现 ROI         |
| GOAL_1DAY_PURCHASE_MONETIZATION_ROAS | 首日混合变现 ROI     |
| GOAL_NET_PROFIT_24H_ROAS             | 净成交 ROI           |
| GOAL_CPS_ESTIMATED_DISTRIBUTE_ROAS   | 佣金 ROI             |

接入状态

| 名称                    | 描述   |
| ----------------------- | ------ |
| ACCESS_STATUS_COMPLETED | 已接入 |
| ACCESS_STATUS_PENDING   | 待接入 |

扣费类型(值为整数)

| 名称         | 描述     |
| ------------ | -------- |
| BID_TYPE_CPC | CPC 扣费 |
| BID_TYPE_CPA | CPA 扣费 |
| BID_TYPE_CPS | CPS 扣费 |
| BID_TYPE_CPM | CPM 扣费 |
| BID_TYPE_CPD | CPD 扣费 |

支持读取的推广计划类型

| 名称                 | 描述                                             |
| -------------------- | ------------------------------------------------ |
| CAMPAIGN_TYPE_SEARCH | 搜索广告，仅支持读                               |
| CAMPAIGN_TYPE_NORMAL | 普通展示广告，可投放全流量（微信和非微信）的广告 |

上报方式

| 名称            | 描述     |
| --------------- | -------- |
| ACCESS_TYPE_SDK | SDK 上报 |
| ACCESS_TYPE_API | API 上报 |
| ACCESS_TYPE_JS  | JS 上报  |

归因方式

| 名称                  | 描述     |
| --------------------- | -------- |
| CLAIM_TYPE_ACTIVATION | 激活归因 |
| CLAIM_TYPE_CLICK      | 点击归因 |
| CLAIM_TYPE_REGISTER   | 注册归因 |
| CLAIM_TYPE_IMPRESSION | 曝光归因 |

转化场景

| 名称                                 | 描述                     |
| ------------------------------------ | ------------------------ |
| CONVERSION_SCENE_ANDROID             | 安卓转化场景             |
| CONVERSION_SCENE_IOS                 | iOS 转化场景             |
| CONVERSION_SCENE_WEB                 | WEB 转化场景             |
| CONVERSION_SCENE_WECHAT_MINI_PROGRAM | 微信小程序转化场景       |
| CONVERSION_SCENE_WECHAT_MINI_GAME    | 微信小游戏 PT46 转化场景 |
| CONVERSION_SCENE_QQ_MINI_GAME        | QQ 小游戏 PT49 转化场景  |
| CONVERSION_SCENE_QUICK_APP           | 快应用转化场景           |
| CONVERSION_SCENE_WE_COM              | 企业微信转化场景         |

深度优化目标类型

| 名称    | 描述       |
| ------- | ---------- |
| SELF_OG | 自定义优化 |
| AUTO_OG | 自动优化   |

异步报表级别

| 名称                            | 描述                    |
| ------------------------------- | ----------------------- |
| REPORT_LEVEL_ADGROUP_WECHAT     | 微信广告组级别          |
| REPORT_LEVEL_AD_WECHAT          | 微信广告级别            |
| REPORT_LEVEL_POI_WECHAT         | 微信门店级别            |
| REPORT_LEVEL_AD                 | 广告级别                |
| REPORT_LEVEL_ADVERTISER         | 广告主级别报表          |
| REPORT_LEVEL_CAMPAIGN           | 推广计划级别报表        |
| REPORT_LEVEL_ADGROUP            | 广告组级别报表          |
| REPORT_LEVEL_MATERIAL_VIDEO     | 视频素材报表            |
| REPORT_LEVEL_MATERIAL_IMAGE     | 图片素材报表            |
| REPORT_LEVEL_PROMOTED_OBJECT    | 推广目标级别报表        |
| REPORT_LEVEL_CREATIVE_TEMPLATE  | 创意形式级别报表        |
| REPORT_LEVEL_PRODUCT_CATELOG    | 商品库级别报表          |
| REPORT_LEVEL_AGE                | 年龄报表                |
| REPORT_LEVEL_GENDER             | 性别报表                |
| REPORT_LEVEL_REGION_RECENTLY_IN | 地域报表-近期在这里的人 |
| REPORT_LEVEL_REGION_VISITED_IN  | 地域报表-去过这里的人   |
| REPORT_LEVEL_REGION_LIVE_IN     | 地域报表-常驻这里的人   |
| REPORT_LEVEL_REGION_TRAVEL_IN   | 地域报表-旅行到这里的人 |
| REPORT_LEVEL_CITY_RECENTLY_IN   | 城市报表-近期在这里的人 |
| REPORT_LEVEL_CITY_VISITED_IN    | 城市报表-去过这里的人   |
| REPORT_LEVEL_CITY_LIVE_IN       | 城市报表-常驻这里的人   |
| REPORT_LEVEL_CITY_TRAVEL_IN     | 城市报表-旅行到这里的人 |
| REPORT_LEVEL_BIDWORD            | 关键词级别报表          |
| REPORT_LEVEL_QUERYWORD          | 搜索词级别报表          |

时间口径

| 名称           | 描述         |
| -------------- | ------------ |
| REQUEST_TIME   | 请求时间口径 |
| REPORTING_TIME | 上报时间口径 |
| ACTIVE_TIME    | 激活时间口径 |

异步报表粒度

| 名称   | 描述     |
| ------ | -------- |
| DAILY  | 天粒度   |
| HOURLY | 小时粒度 |

异步任务类型

| 名称                                                         | 描述                             |
| ------------------------------------------------------------ | -------------------------------- |
| TASK_TYPE_UPDATE_UNION_POSITION_PACKAGE                      | 修改广告组定投优量汇流量包       |
| TASK_TYPE_UPDATE_EXCLUDE_UNION_POSITION_PACKAGE              | 修改广告组屏蔽优量汇流量包       |
| TASK_TYPE_UPDATE_TARGETING_ID                                | 修改广告组定向包                 |
| TASK_TYPE_UPDATE_BID_STRATEGY                                | 修改广告组出价策略               |
| TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_BID                | 修改广告组深度优化行为目标出价   |
| TASK_TYPE_UPDATE_ADGROUP_APP_ANDROID_CHANNEL_PACKAGE_ID      | 修改广告组安卓应用渠道包 id      |
| TASK_TYPE_UPDATE_CAMPAIGN_SPEED_MODE                         | 修改推广计划投放速度模式         |
| TASK_TYPE_DELETE_CAMPAIGN                                    | 删除推广计划                     |
| TASK_TYPE_DELETE_ADGROUP                                     | 删除广告组                       |
| TASK_TYPE_DELETE_AD                                          | 删除广告                         |
| TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_RATE          | 修改广告组深度优化价值的期望 ROI |
| TASK_TYPE_UPDATE_ADCREATIVE_DEEP_LINK_URL                    | 修改广告创意应用直达页 URL       |
| TASK_TYPE_TARGETINGS_SHARE                                   | 定向包分享                       |
| TASK_TYPE_UPDATE_CAMPAIGN_CONFIGURED_STATUS                  | 修改推广计划客户设置的状态       |
| TASK_TYPE_UPDATE_CAMPAIGN_DAILY_BUDGET                       | 修改推广计划日预算               |
| TASK_TYPE_UPDATE_ADGROUP_CONFIGURED_STATUS                   | 修改广告组客户设置的状态         |
| TASK_TYPE_UPDATE_ADGROUP_DAILY_BUDGET                        | 修改广告组日预算                 |
| TASK_TYPE_UPDATE_AD_CONFIGURED_STATUS                        | 修改广告客户设置的状态           |
| TASK_TYPE_UPDATE_ADGROUP_AUTO_ACQUISITION                    | 修改广告组一键起量               |
| TASK_TYPE_UPDATE_ADCREATIVE_LANDING_PAGE                     | 修改广告创意落地页               |
| TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_ADVANCED_RATE | 修改广告组深度优化价值的强化 ROI |
| TASK_TYPE_REPLY_FINDER_OBJECT_COMMENT                        | 视频号评论回复                   |
| TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_ADVANCED_BID       | 修改广告组深度辅助目标出价       |
| TASK_TYPE_UPDATE_FINDER_OBJECT_COMMENT_FLAG                  | 视频号评论精选                   |

异步任务结果状态

| 名称                            | 描述         |
| ------------------------------- | ------------ |
| TASK_RESULT_STATUS_UNKNOWN      | 未知，仅可读 |
| TASK_RESULT_STATUS_PENDING      | 待执行       |
| TASK_RESULT_STATUS_PROCESSING   | 执行中       |
| TASK_RESULT_STATUS_SUCCESS      | 执行成功     |
| TASK_RESULT_STATUS_FAIL         | 执行失败     |
| TASK_RESULT_STATUS_PARTIAL_FAIL | 部分失败     |
| TASK_RESULT_STATUS_SYSTEM_ERROR | 未知异常     |
| TASK_RESULT_STATUS_DELETED      | 删除         |

异步任务状态

| 名称                   | 描述     |
| ---------------------- | -------- |
| TASK_STATUS_PENDING    | 待处理   |
| TASK_STATUS_PROCESSING | 处理中   |
| TASK_STATUS_EXPIRED    | 任务超时 |
| TASK_STATUS_COMPLETED  | 任务完成 |
| TASK_STATUS_FAIL       | 任务失败 |
| TASK_STATUS_DELETED    | 任务删除 |

定时任务状态

| 名称               | 描述 |
| ------------------ | ---- |
| CRON_STATUS_ON     | 开启 |
| CRON_STATUS_OFF    | 暂停 |
| CRON_STATUS_DELETE | 删除 |

动态商品广告类型

| 名称     | 描述                    |
| -------- | ----------------------- |
| SINGLE   | SDPA 单商品动态商品广告 |
| MULTIPLE | MDPA 多商品动态商品广告 |

动态商品模板类型

| 名称                      | 描述             |
| ------------------------- | ---------------- |
| DYNAMIC_AD_IMAGE_TEMPLATE | 动态商品图片模板 |
| DYNAMIC_AD_VIDEO_TEMPLATE | 动态商品视频模板 |

动态商品模板类型

| 名称                | 描述     |
| ------------------- | -------- |
| PRIVATE_TEMPLATE    | 私人模板 |
| PUBLIC_TEMPLATE     | 公共模板 |
| SELF_OWNED_TEMPLATE | 自有模板 |
| GRANTED_TEMPLATE    | 授权模板 |

创意里商品数量

| 名称     | 描述               |
| -------- | ------------------ |
| SINGLE   | 创意上展示单个商品 |
| MULTIPLE | 创意上展示多个商品 |

异步任务类型

| 名称                                                  | 描述                                               |
| ----------------------------------------------------- | -------------------------------------------------- |
| TASK_TYPE_AD_HOURLY_REPORT                            | 广告小时报表数据，仅 QQ 帐号可用（待废弃）         |
| TASK_TYPE_WECHAT_MOMENTS_ADGROUP_HOURLY_REPORT        | 微信朋友圈广告组小时报表，仅 QQ 帐号可用（待废弃） |
| TASK_TYPE_WECHAT_ADGROUP_HOURLY_REPORT                | 广告组小时报表数据，仅微信帐号可用（待废弃）       |
| TASK_TYPE_WECHAT_ADGROUP_DAILY_REPORT                 | 广告组天报表数据，仅微信帐号可用（待废弃）         |
| TASK_TYPE_WECHAT_AD_HOURLY_REPORT                     | 广告小时报表数据，仅微信帐号可用（待废弃）         |
| TASK_TYPE_WECHAT_AD_DAILY_REPORT                      | 广告天报表数据，仅微信帐号可用（待废弃）           |
| TASK_TYPE_WECHAT_ADVERTISING_DATA                     | 获取微信广告数据，仅微信帐号可用                   |
| TASK_TYPE_WECHAT_POI_HOURLY_REPORT                    | 微信门店小时报表数据，仅微信帐号可用（待废弃）     |
| TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE              | 创建安卓渠道包任务，仅 QQ 账号可用                 |
| TASK_TYPE_UPDATE_ANDROID_CHANNEL_PACKAGE              | 修改安卓渠道包任务，仅 QQ 账号可用                 |
| TASK_TYPE_CREATE_ANDROID_UNION_CHANNEL_PACKAGE        | 创建安卓渠道包任务                                 |
| TASK_TYPE_UPDATE_ANDROID_UNION_CHANNEL_PACKAGE        | 修改安卓渠道包任务                                 |
| TASK_TYPE_UNION_POSITION_REPORT                       | 优量汇广告位报表                                   |
| TASK_TYPE_UPDATE_ANDROID_UNION_CHANNEL_PACKAGE_BY_URL | 从 URL 更新安卓渠道包任务                          |
| TASK_TYPE_REVIEW_ELEMENT_PREREVIEW_RESULT             | 获取元素的预审结果                                 |
| TASK_TYPE_MASSIVE_KEYWORD_RECOMMEND                   | 海量拓词任务                                       |
| TASK_TYPE_SEARCH_DOWNLOAD_ALL                         | API 搜索广告整账户物料下载                         |

预审元素类型

| 名称     | 描述   |
| -------- | ------ |
| IMAGE    | 图片   |
| VIDEO    | 视频   |
| TXT      | 文本   |
| DEST_URL | 落地页 |

预审元素 key

| 名称                   | 描述             |
| ---------------------- | ---------------- |
| IMG                    | 图片             |
| TXT                    | 文本             |
| CORPORATE_NAME         | 企业名称         |
| CORPORATE_IMG          | 品牌形象         |
| BRAND_CORPORATE_NAME   | 品牌名称         |
| BRAND_CORPORATE_IMG    | 品牌图标         |
| BRAND_CORPORATE_DESC   | 品牌说明         |
| BUTTON_TXT             | 按钮文案         |
| BUTTON_URL             | 按钮链接         |
| VIDEO_POPUP_BUTTON_TXT | 视频浮层按钮文案 |
| VIDEO_POPUP_BUTTON_URL | 视频浮层按钮链接 |
| DESC                   | 描述             |
| URL                    | 落地页           |
| LEFT_BOTTOM_TXT        | 左下文案         |
| BOTTOM_TXT             | 底部文案         |
| GIF                    | 动态图           |
| VIDEO                  | 视频             |
| LEFT_UPPER_TXT         | 左上文案         |
| SHARE_DESC             | 分享文案         |
| SHARE_IMG              | 分享配图         |

预审返回版位集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 优量汇                                               |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝移动，移动站点（待废弃）                       |
| SITE_SET_MOBILE_INNER         | 移动内部站点，移动站点                               |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻                                             |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频，移动站点                                   |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报，移动站点 (待废弃)                          |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PENGYOU              | 朋友社区 (待废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (待废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (待废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (待废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (待废弃)                                     |
| SITE_SET_PC_UNION             | PC 联盟 (待废弃)                                     |
| SITE_SET_YINGYONGBAO_PC       | 应用宝 PC (待废弃)                                   |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (待废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (待废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (待废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (待废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (待废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (待废弃)                                  |
| SITE_SET_WEIBO                | 微博 (待废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (待废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（废弃）                                 |
| SITE_SET_THIRDPARTY           | 第三方流量 (待废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (待废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |
| SITE_SET_QQSHOPPING           | QQ 购物                                              |
| SITE_SET_PCAD                 | 腾讯平台与内容媒体                                   |

是否动态创意

| 名称                 | 描述             |
| -------------------- | ---------------- |
| DYNAMIC_CREATIVE     | 是动态创意广告   |
| NOT_DYNAMIC_CREATIVE | 不是动态创意广告 |

过滤已购买词

| 名称            | 描述           |
| --------------- | -------------- |
| FILTER_DISABLED | 不过滤已购买词 |
| FILTER_ENABLED  | 过滤已购买词   |

是否包含非地域词

| 名称                     | 描述           |
| ------------------------ | -------------- |
| CONTAINS_REGION_ENABLED  | 包含非地域词   |
| CONTAINS_REGION_DISABLED | 不包含非地域词 |

广告清理模式

| 名称                       | 描述                 |
| -------------------------- | -------------------- |
| SYSTEM_CLEAN_LIGHT_MODE    | 系统推荐清理（轻度） |
| SYSTEM_CLEAN_MODERATE_MODE | 系统推荐清理（中度） |
| SYSTEM_CLEAN_SERIOUS_MODE  | 系统推荐清理（重度） |
| CUSTOM_CLEAN_MODE          | 自定义清理           |

异步任务状态

| 名称                   | 描述     |
| ---------------------- | -------- |
| TASK_STATUS_PENDING    | 待处理   |
| TASK_STATUS_PROCESSING | 处理中   |
| TASK_STATUS_EXPIRED    | 任务超时 |
| TASK_STATUS_COMPLETED  | 任务完成 |
| TASK_STATUS_CANCELLED  | 任务取消 |

渠道包任务状态

| 名称                           | 描述               |
| ------------------------------ | ------------------ |
| CHANNEL_TASK_STATUS_PENDING    | 等待处理           |
| CHANNEL_TASK_STATUS_PROCESSING | 校验中             |
| CHANNEL_TASK_STATUS_ERROR      | 发生错误(任务结束) |
| CHANNEL_TASK_STATUS_COMPLETED  | 提交审核(任务结束) |

渠道包任务错误

| 名称                            | 描述               |
| ------------------------------- | ------------------ |
| TASK_ERROR_NORMAL               | 正常               |
| TASK_ERROR_UNABLE_DOWNLOAD      | 无法下载           |
| TASK_ERROR_MISMATCH_PACKAGENAME | 包名不匹配         |
| TASK_ERROR_ILLEGAL_VERSION      | 与主线包版本不一致 |
| TASK_ERROR_DUPLICATE_PACKAGE    | 相同渠道包已存在   |
| TASK_ERROR_PARSE_FAIL           | APK 解析失败       |
| TASK_ERROR_MISS_YSDK            | 网游缺失 YSDK      |
| TASK_ERROR_UPLOAD_FAIL          | 上传 APK 失败      |
| TASK_ERROR_SUBMIT_FAIL          | 提交审核失败       |
| TASK_ERROR_SERVER_ERROR         | 服务内部错误       |

渠道包任务状态

| 名称                                         | 描述                      |
| -------------------------------------------- | ------------------------- |
| UNION_CHANNEL_TASK_STATUS_APPLYING           | 数据创建中                |
| UNION_CHANNEL_TASK_STATUS_SUCCESS            | 创建成功                  |
| UNION_CHANNEL_TASK_STATUS_APP_ERROR          | 创建失败(app 不可用)      |
| UNION_CHANNEL_TASK_STATUS_APP_STATUS_ERROR   | 创建失败(app 状态错误)    |
| UNION_CHANNEL_TASK_STATUS_PACKAGE_NAME_ERROR | 创建失败(包名不一致)      |
| UNION_CHANNEL_TASK_STATUS_CHANNEL_NAME_ERROR | 创建失败(渠道包名称重复)  |
| UNION_CHANNEL_TASK_STATUS_PKG_MD5_ERROR      | 创建失败(渠道包 md5 相同) |
| UNION_CHANNEL_TASK_STATUS_PKG_ERROR          | 创建失败(渠道包不存在)    |
| UNION_CHANNEL_TASK_STATUS_SYSTEM_ERROR       | 创建错误                  |

元素整体风险级别

| 名称                 | 描述                                 |
| -------------------- | ------------------------------------ |
| PASS                 | 未检测出风险，建议使用               |
| PROBABLE_PASS        | 未检测出风险                         |
| PROBABLE_PART_REJECT | 检测到风险点，部分流量有可能被拒绝   |
| PROBABLE_REJECT      | 检测到风险点，所有流量都有可能被拒绝 |
| PART_REJECT          | 检测到风险点，部分流量会拒绝         |
| REJECT               | 检测到风险点，全流量会拒绝           |

版位粒度风险级别

| 名称            | 描述                           |
| --------------- | ------------------------------ |
| PASS            | 确定通过                       |
| PROBABLE_PASS   | 暂未检测出风险，通过可能性较高 |
| PROBABLE_REJECT | 检测到风险点，有可能被拒绝     |
| REJECT          | 检测到风险点，会被拒绝         |

营销资产-财务信息

| 名称                                        | 描述                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| FUND_TYPE_CASH                              | 现金账户，默认开通，支持线上自助充值                         |
| FUND_TYPE_GIFT                              | 赠送账户，默认开通                                           |
| FUND_TYPE_SHARED                            | 分成账户，默认开通                                           |
| FUND_TYPE_BANK                              | 银证账户，线下银行转账后自动开通                             |
| FUND_TYPE_CREDIT_ROLL                       | 竞价信用账户，仅对部分客户开放                               |
| FUND_TYPE_CREDIT_TEMPORARY                  | 竞价临时信用账户，仅对部分客户开放                           |
| FUND_TYPE_COMPENSATE_VIRTUAL                | 补偿虚拟金账户，仅对部分客户开放                             |
| FUND_TYPE_INTERNAL_QUOTA                    | 内部领用金，仅对部分客户开放                                 |
| FUND_TYPE_TCC_GIFT                          | TCC 赠送虚拟金账户，仅对部分客户开放                         |
| FUND_TYPE_UNSUPPORTED                       | 不支持                                                       |
| FUND_TYPE_CONTRACT_CREDIT                   | 合约信用账户                                                 |
| FUND_TYPE_SPECIAL_GIFT                      | 专用账户，不支持回划给服务商转账                             |
| FUND_TYPE_MP_GAME_DEVELOPER_WORKING_FUND    | 微信小游戏内购快周转，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_MP_GAME_DEVELOPER_GIFT            | 微信小游戏内购赠送金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_FLOW_SOURCE_AD_FUND               | 流量主广告金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_ANDROID_ORIENTED_GIFT             | 安卓定向赠送金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_LOCATION_PROMOTION_REWARDS        | 附近推激励金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_GIFT_RESTRICT                     | 微信专用小游戏抵用金，仅对部分客户开放                       |
| FUND_TYPE_DEBT_FIXED                        | 微信专用竞价合约混用滚动信用账                               |
| FUND_TYPE_DEBT_TEMP                         | 微信专用竞价合约混用临时信用账户                             |
| FUND_TYPE_SHORT_PLAY_GIFT                   | 短剧内购赠送金资金账户                                       |
| FUND_TYPE_GAME_CHARGE_INDIRECT_REWARDS_GIFT | 小游戏转充激励金资金账户                                     |
| FUND_TYPE_GAME_CHARGE_DIRECT_REWARDS_GIFT   | 小游戏直接激励金资金账户                                     |

资金状态

| 名称                   | 描述           |
| ---------------------- | -------------- |
| FUND_STATUS_NORMAL     | 有效           |
| FUND_STATUS_NOT_ENOUGH | 余额不足       |
| FUND_STATUS_CLOSED     | 资金账户已销户 |
| FUND_STATUS_FROZEN     | 资金冻结       |

交易类型

| 名称          | 描述 |
| ------------- | ---- |
| CHARGE        | 充值 |
| PAY           | 消费 |
| TRANSFER_BACK | 回划 |
| EXPIRE        | 过期 |

交易类型

| 名称          | 描述 |
| ------------- | ---- |
| CHARGE        | 充值 |
| TRANSFER_IN   | 转入 |
| PAY           | 消费 |
| TRANSFER_BACK | 回划 |
| EXPIRE        | 过期 |

开关

| 名称 | 描述 |
| ---- | ---- |
| NO   | 关   |
| YES  | 开   |

营销资产-财务信息

| 名称             | 描述               |
| ---------------- | ------------------ |
| FUND_TYPE_GIFT   | 赠送账户，默认开通 |
| FUND_TYPE_SHARED | 分成账户，默认开通 |

合并资金账户类型

| 名称                                        | 描述                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| FUND_TYPE_AD_RECHARGE                       | 广告充值金                                                   |
| FUND_TYPE_COMPENSATE_VIRTUAL                | 补偿虚拟金账户，仅对部分客户开放                             |
| FUND_TYPE_INTERNAL_QUOTA                    | 内部领用金，仅对部分客户开放                                 |
| FUND_TYPE_TEST_VIRTUAL                      | 测试虚拟金账户，仅对部分客户开放                             |
| FUND_TYPE_TCC_GIFT                          | TCC 赠送虚拟金账户，仅对部分客户开放                         |
| FUND_TYPE_SPECIAL_GIFT                      | 专用账户，不支持回划给服务商转账                             |
| FUND_TYPE_MP_GAME_DEVELOPER_WORKING_FUND    | 微信小游戏内购快周转，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_MP_GAME_DEVELOPER_GIFT            | 微信小游戏内购赠送金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_FLOW_SOURCE_AD_FUND               | 流量主广告金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_ANDROID_ORIENTED_GIFT             | 安卓定向赠送金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_LOCATION_PROMOTION_REWARDS        | 附近推激励金，不支持回划给服务商转账，不支持同商务管家下子客间转账 |
| FUND_TYPE_GIFT_RESTRICT                     | 微信专用小游戏抵用金，仅对部分客户开放                       |
| FUND_TYPE_DEBT_FIXED                        | 微信专用竞价合约混用滚动信用账                               |
| FUND_TYPE_DEBT_TEMP                         | 微信专用竞价合约混用临时信用账户                             |
| FUND_TYPE_SHORT_PLAY_GIFT                   | 短剧内购赠送金资金账户                                       |
| FUND_TYPE_GAME_CHARGE_INDIRECT_REWARDS_GIFT | 小游戏转充激励金资金账户                                     |
| FUND_TYPE_GAME_CHARGE_DIRECT_REWARDS_GIFT   | 小游戏直接激励金资金账户                                     |
| FUND_TYPE_UNSUPPORTED                       | 不支持                                                       |

链接名称类型

| 名称                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| VIEW_DETAILS                    | 查看详情                                                     |
| GET_COUPONS                     | 领取优惠，选择领取优惠，需在详情页中可直接领取优惠，否则广告将会被审核驳回 |
| MAKE_AN_APPOINTMENT             | 预约活动，选择预约活动，需在详情页中体现活动预约入口，否则广告将会被审核驳回 |
| BUY_NOW                         | 立即购买，当且仅当推广目标为电商时可使用                     |
| GO_SHOPPING                     | 去逛逛，当且仅当推广目标为电商时可使用                       |
| ENTER_MINI_PROGRAM              | 进入小程序，仅能使用于投放小程序落地页                       |
| ENTER_MINI_GAME                 | 进入小游戏，仅能使用于投放小游戏落地页                       |
| APPLY_NOW                       | 立即申请                                                     |
| BOOK_NOW                        | 立即预定                                                     |
| RESERVATION_BUY                 | 预约购买                                                     |
| CONSULT_NOW                     | 立即咨询                                                     |
| BOOK_DRIVE                      | 预约试驾                                                     |
| ENTER_OFFICIAL_ACCOUNTS         | 了解公众号                                                   |
| PLAY_NOW                        | 立即玩                                                       |
| OPEN_MINI_GAME                  | 打开游戏                                                     |
| DOWNLOAD_APP                    | 下载应用                                                     |
| DOWNLOAD_GAME                   | 下载游戏                                                     |
| GET_SAMPLES                     | 领取小样                                                     |
| TRY_NOW                         | 立即体验                                                     |
| GET_IT_NOW                      | 立即领取                                                     |
| BUY_ASAP                        | 立即抢购                                                     |
| DOWNLOAD_NOW                    | 立即下载                                                     |
| VIEW_APPS                       | 查看应用                                                     |
| MORE_INFO                       | 了解更多                                                     |
| GET_VOUCHERS                    | 领券                                                         |
| FOLLOW_OFFICIAL_ACCOUNT         | 关注公众号                                                   |
| READ_NOVELS                     | 阅读小说                                                     |
| WATCH_LIVE                      | 观看直播                                                     |
| RESERVE_NOW                     | 立即预约                                                     |
| OPEN_APP                        | 打开应用                                                     |
| ALREADY_INSTALL                 | 已安装                                                       |
| RESERVE_LIVE                    | 预约直播                                                     |
| SETUP_NOW                       | 立即开通                                                     |
| SECKILL_NOW                     | 立即秒杀                                                     |
| TRY_PLAY_NOW                    | 立即试玩                                                     |
| INSTALL_NOW                     | 立即安装                                                     |
| MORE_ABOUT_OFFICIAL_ACCOUNT_CHT | 了解公眾號                                                   |
| FOLLOW_OFFICIAL_ACCOUNT_CHT     | 關註公眾號                                                   |
| GET_FOR_FREE                    | 免费领取                                                     |
| CARNIVAL_618                    | 618 狂欢                                                     |
| SURPRISE_618                    | 618 惊喜                                                     |
| DISCOUNT_618                    | 618 优惠                                                     |
| GO_618_VENUE                    | 去 618 会场                                                  |
| GET_618_WELFARE                 | 领 618 福利                                                  |
| LINK_NAME_TEXT_TEMPLATE         | 文字链模版                                                   |

文字链跳转类型

| 名称                                        | 描述                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| LINK_PAGE_TYPE_NOT_USED                     | 不开启文字链                                                 |
| LINK_PAGE_TYPE_DEFAULT                      | 默认落地页（对应自定义链接）类型: 1、推广普通外链/电商推广/品牌活动推广时，默认落地页类型代表跳转到广告主自定义的 url，此时需要填写 link_page_spec.page_url。 2、推广 Android 应用（PROMOTED_OBJECT_TYPE_APP_ANDROID）时，开启文字链后，默认落地页类型代表跳转到广告主自定义的 url，此时需要填写 link_page_spec.page_url。 3、推广 IOS 应用（PROMOTED_OBJECT_TYPE_APP_IOS）时，默认落地页类型代表跳转到苹果 App Store 下载页。如果填写 link_page_spec.page_url 表示跳转到广告主自定义的 url。 4、推广微信门店时，默认落地页类型代表跳转到微信门店页。 |
| LINK_PAGE_TYPE_CANVAS_WECHAT                | 微信原生页                                                   |
| LINK_PAGE_TYPE_ARTICAL_WECHAT               | 微信公众号文章                                               |
| LINK_PAGE_TYPE_MINI_PROGRAM_WECHAT          | 微信小程序                                                   |
| LINK_PAGE_TYPE_MINI_PROGRAM_CANVAS_WECHAT   | 微信小程序原生页                                             |
| LINK_PAGE_TYPE_MINI_GAME_WECHAT             | 微信小游戏                                                   |
| LINK_PAGE_TYPE_FENGYE_ECOMMERCE             | 通过枫叶落地页制作工具生成的电商类网页                       |
| LINK_PAGE_TYPE_XJ_ANDROID_APP_H5            | 蹊径 Android 应用                                            |
| LINK_PAGE_TYPE_XJ_IOS_APP_H5                | 蹊径 iOS 应用                                                |
| LINK_PAGE_TYPE_XJ_WEBSITE_H5                | 蹊径网站                                                     |
| LINK_PAGE_TYPE_WECHAT_MOMENTS_SIMPLE_NATIVE | 微信简易原生页_朋友圈                                        |
| LINK_PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD      | 安卓一键下载                                                 |
| LINK_PAGE_TYPE_LINGQUE_H5                   | 灵鹊落地页                                                   |
| LINK_PAGE_TYPE_LINGQUE_MINI_PROGRAM         | 灵鹊小程序                                                   |
| LINK_PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT | 视频号小店商品页                                             |

动态商品广告推荐的商品数量

| 名称                   | 描述       |
| ---------------------- | ---------- |
| PRODUCT_ITEMS_SINGLE   | 单商品广告 |
| PRODUCT_ITEMS_MULTIPLE | 多商品广告 |

简版原生页跳转类型

| 名称                             | 描述          |
| -------------------------------- | ------------- |
| SIMPLE_CANVAS_SUB_TYPE_UNKNOWN   | 未知          |
| SIMPLE_CANVAS_SUB_TYPE_DEFAULT   | 默认模板      |
| SIMPLE_CANVAS_SUB_TYPE_URL       | 自定义链接    |
| SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP  | 上滑 H5       |
| SIMPLE_CANVAS_SUB_TYPE_WEB_STORE | webstore 链接 |

头像点击跳转信息

| 名称                              | 描述                              |
| --------------------------------- | --------------------------------- |
| HEAD_CLICK_TYPE_DEFAULT           | 默认值(跳转公众号)                |
| HEAD_CLICK_TYPE_CUSTOMIZED        | 自定义链接(可选是否自定义头像)    |
| HEAD_CLICK_TYPE_CELEBRITY_ACCOUNT | 明星主页(必须自定义头像)          |
| HEAD_CLICK_TYPE_VIRTUAL_ACCOUNT   | 虚拟帐户主页(不能自定义头像)      |
| HEAD_CLICK_TYPE_LIVE_PROFILE      | 视频号 profile 页(必须自定义头像) |
| HEAD_CLICK_TYPE_LIVE_EVENT        | 视频号活动页(必须自定义头像)      |
| HEAD_CLICK_TYPE_BRAND_PROGRAM     | 搜一搜品牌专区(必须自定义头像)    |

厂商直达链接跳转类型

| 名称                                | 描述                     |
| ----------------------------------- | ------------------------ |
| UNION_MARKET_JUMP_TYPE_UNKNOWN      | 未知类型                 |
| UNION_MARKET_JUMP_TYPE_DEFAULT      | 通过外层素材跳转厂商直达 |
| UNION_MARKET_JUMP_TYPE_LANDING_PAGE | 通过落地页跳转厂商直达   |

安卓快应用跳转类型

| 名称                                     | 描述                       |
| ---------------------------------------- | -------------------------- |
| ANDROID_QUICK_APP_JUMP_TYPE_UNKNOWN      | 未知类型                   |
| ANDROID_QUICK_APP_JUMP_TYPE_DEFAULT      | 通过外层素材跳转安卓快应用 |
| ANDROID_QUICK_APP_JUMP_TYPE_LANDING_PAGE | 通过落地页跳转安卓快应用   |

创意来源

| 名称                      | 描述         |
| ------------------------- | ------------ |
| AD_CREATIVE_SOURCE_NORMAL | 默认         |
| AD_CREATIVE_AUTO_DERIVE   | 自动衍生创意 |
| AD_CREATIVE_AUTO_GENERATE | 自动生成创意 |

规格合并精简用于标识创意用的是新旧模板生成的数据

| 名称                                  | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| CREATIVE_TEMPLATE_VERSION_TYPE_UNKOWN | 未知                                                         |
| CREATIVE_TEMPLATE_VERSION_TYPE_OLD    | 未精简前的创意模板等价于 CREATIVE_TEMPLATE_VERSION_TYPE_UNKOWN |
| CREATIVE_TEMPLATE_VERSION_TYPE_NEW    | 精简合并后的创意模板, 如果后续还有二期, 三期，可以用 CREATIVE_TEMPLATE_VERSION_TYPE_NEW_V2, CREATIVE_TEMPLATE_VERSION_TYPE_NEW_V3 |

推广计划类型

| 名称                                   | 描述                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| CAMPAIGN_TYPE_SEARCH                   | 搜索广告                                                     |
| CAMPAIGN_TYPE_NORMAL                   | 普通展示广告，可投放全流量（微信和非微信）的广告             |
| CAMPAIGN_TYPE_WECHAT_OFFICIAL_ACCOUNTS | 微信公众号广告，仅可投放微信非朋友圈流量（公众号、小程序等）的广告 |
| CAMPAIGN_TYPE_WECHAT_MOMENTS           | 微信朋友圈广告，仅可投放微信朋友圈流量的广告（已废弃，可切换使用 CAMPAIGN_TYPE_NORMAL） |

动态创意组形式

| 名称              | 描述           |
| ----------------- | -------------- |
| NOT_USE_GROUP     | 不使用组合     |
| VIDEO_IMAGE_GROUP | 视频封面图组合 |

动态创意类型

| 名称                            | 描述         |
| ------------------------------- | ------------ |
| DYNAMIC_CREATIVE_TYPE_COMMON    | 普通动态创意 |
| DYNAMIC_CREATIVE_TYPE_PROGRAM   | 程序化创意   |
| DYNAMIC_CREATIVE_TYPE_COMPONENT | 组件化创意   |

子链衍生开关

| 名称                            | 描述 |
| ------------------------------- | ---- |
| ADVERTISER_SUBLINK_SWITCH_CLOSE | 关闭 |
| ADVERTISER_SUBLINK_SWITCH_OPEN  | 开启 |

图片素材衍生开关

| 名称                                 | 描述 |
| ------------------------------------ | ---- |
| ADVERTISER_PIC_MATERIAL_SWITCH_CLOSE | 关闭 |
| ADVERTISER_PIC_MATERIAL_SWITCH_OPEN  | 开启 |

DC 异步任务执行状态

| 名称                             | 描述     |
| -------------------------------- | -------- |
| DC_ASYNC_JOB_STATUS_PENDING      | 未处理   |
| DC_ASYNC_JOB_STATUS_FAIL         | 失败     |
| DC_ASYNC_JOB_STATUS_SUCCESS      | 成功     |
| DC_ASYNC_JOB_STATUS_SYSTEM_ERROR | 未知异常 |
| DC_ASYNC_JOB_STATUS_PROCESSING   | 处理中   |

过滤推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏                                                   |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT    | 微信公众号                                                   |
| PROMOTED_OBJECT_TYPE_APP_QUICK_APP              | 快应用                                                       |

Select Product 推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_UNSUPPORTED                | 不识别的类型                                                 |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏                                                   |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT    | 微信公众号                                                   |
| PROMOTED_OBJECT_TYPE_APP_QUICK_APP              | 快应用                                                       |

视频号公众号授权主体关系

| 名称                     | 描述                       |
| ------------------------ | -------------------------- |
| RELATIONSHIP_UNKNOWN     | 未知                       |
| RELATIONSHIP_CORPORATION | 同集团公司                 |
| RELATIONSHIP_EMPLOYMENT  | 合作视频号(旧称：雇佣关系) |

授权范围

| 名称    | 描述       |
| ------- | ---------- |
| DEFAULT | 默认值     |
| ALL     | 视频号授权 |
| VIDEO   | 视频授权   |
| LIVE    | 直播授权   |

定向包来源

| 名称                         | 描述     |
| ---------------------------- | -------- |
| TARGETING_SOURCE_TYPE_CREATE | 自己创建 |
| TARGETING_SOURCE_TYPE_SHARE  | 他人分享 |

出行方式

| 名称    | 描述 |
| ------- | ---- |
| CAR     | 汽车 |
| BUS     | 公交 |
| CYCLING | 骑行 |
| WALK    | 步行 |

出行时间

| 名称              | 描述       |
| ----------------- | ---------- |
| FIFTEEN_MINUTES   | 十五分钟   |
| THIRTY_MINUTES    | 三十分钟   |
| FORTYFIVE_MINUTES | 四十五分钟 |

定向包分享类型

| 名称                     | 描述       |
| ------------------------ | ---------- |
| SHARE_TYPE_SAME_BUSINESS | 同商务管家 |
| SHARE_TYPE_SAME_MDM      | 同主体     |

图片文件上传方式

| 名称              | 描述         |
| ----------------- | ------------ |
| UPLOAD_TYPE_FILE  | 图片文件上传 |
| UPLOAD_TYPE_BYTES | 图片内容上传 |

图片用途

| 名称                          | 描述         |
| ----------------------------- | ------------ |
| IMAGE_USAGE_DEFAULT           | 默认用途     |
| IMAGE_USAGE_MARKETING_PENDANT | 营销挂件图片 |
| IMAGE_USAGE_SHOP_IMG          | 卖点图       |

图片类型

| 名称                     | 描述               |
| ------------------------ | ------------------ |
| IMAGE_TYPE_GIF           | GIF 类型           |
| IMAGE_TYPE_JPG           | JPG 类型           |
| IMAGE_TYPE_PNG           | PNG 类型           |
| IMAGE_TYPE_SWF           | SWF 类型           |
| IMAGE_TYPE_PSD           | PSD 类型           |
| IMAGE_TYPE_BMP           | BMP 类型           |
| IMAGE_TYPE_TIFF_INTEL    | TIFF_INTEL 类型    |
| IMAGE_TYPE_TIFF_MOTOROLA | TIFF_MOTOROLA 类型 |
| IMAGE_TYPE_JPC           | JPC 类型           |
| IMAGE_TYPE_JP2           | JP2 类型           |
| IMAGE_TYPE_JPX           | JPX 类型           |
| IMAGE_TYPE_JB2           | JB2 类型           |
| IMAGE_TYPE_SWC           | SWC 类型           |
| IMAGE_TYPE_IFF           | IFF 类型           |
| IMAGE_TYPE_WBMP          | WBMP 类型          |
| IMAGE_TYPE_XBM           | XBM 类型           |
| IMAGE_TYPE_WEBP          | WEBP 类型          |
| IMAGE_TYPE_FLV           | FLV 类型           |
| IMAGE_TYPE_WAV           | WAV 类型           |
| IMAGE_TYPE_MP3           | MP3 类型           |
| IMAGE_TYPE_MP4           | MP4 类型           |
| IMAGE_TYPE_AVI           | AVI 类型           |
| IMAGE_TYPE_MOV           | MOV 类型           |

图片来源(过滤条件支持项)

| 名称                        | 描述                    |
| --------------------------- | ----------------------- |
| SOURCE_TYPE_LOCAL           | 通过投放端本地自行上传  |
| SOURCE_TYPE_MUSE            | 妙思智能制图工具        |
| SOURCE_TYPE_API             | 通过 Marketing API 上传 |
| SOURCE_TYPE_QUICK_DRAW      | 快速制图工具            |
| SOURCE_TYPE_VIDEO_SNAPSHOTS | 视频截图                |
| SOURCE_TYPE_TCC             | 腾讯创意订制平台制作    |
| SOURCE_TYPE_AIGC            | 通过 AIGC 系统制作      |

图片状态定义

| 名称             | 描述   |
| ---------------- | ------ |
| ADSTATUS_NORMAL  | 正常   |
| ADSTATUS_DELETED | 已删除 |

图片来源

| 名称                        | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| SOURCE_TYPE_UNSUPPORTED     | 其他上传方式                                                 |
| SOURCE_TYPE_LOCAL           | 通过投放端本地自行上传                                       |
| SOURCE_TYPE_MUSE            | 妙思智能制图工具                                             |
| SOURCE_TYPE_API             | 通过 Marketing API 上传                                      |
| SOURCE_TYPE_QUICK_DRAW      | 快速制图工具                                                 |
| SOURCE_TYPE_VIDEO_SNAPSHOTS | 视频截图                                                     |
| SOURCE_TYPE_TCC             | 腾讯创意订制平台制作，source_reference_id（素材来源关联 id）为 TCC 订单 id |
| SOURCE_TYPE_AIGC            | 通过 AIGC 系统制作                                           |

定向标签查询类型

| 名称                                        | 描述                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| TARGETING_TAG_QUERY_MODE_SEARCH             | 搜索方式获取标签，通过字符串匹配搜索                         |
| TARGETING_TAG_QUERY_MODE_RECOMMEND          | 根据所选词进行相关词推荐，通过语义进行推荐                   |
| TARGETING_TAG_QUERY_MODE_COMMON             | 获取行为兴趣定向类目                                         |
| TARGETING_TAG_QUERY_MODE_ADVANCED_RECOMMEND | 高级推荐（系统推荐、行业热门）依据所在行业历史投放数据、高使用率为您推荐合适的标签 |
| TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST  | 批量检查关键词                                               |

行为兴趣优质推荐类型

| 名称                                 | 描述     |
| ------------------------------------ | -------- |
| ADVANCED_RECOMMEND_TYPE_SYSTEMATIC   | 系统推荐 |
| ADVANCED_RECOMMEND_TYPE_INDUSTRY_HOT | 行业推荐 |

城市级别

| 名称              | 描述     |
| ----------------- | -------- |
| CITY_LEVEL_FIRST  | 一级城市 |
| CITY_LEVEL_SECOND | 二级城市 |
| CITY_LEVEL_THIRD  | 三级城市 |

定向标签类别

| 名称     | 描述   |
| -------- | ------ |
| CATEGORY | 类目   |
| KEYWORD  | 关键词 |

行为兴趣意向定向标签类型

| 名称      | 描述         |
| --------- | ------------ |
| INTEREST  | 兴趣相关标签 |
| BEHAVIOR  | 行为相关标签 |
| INTENTION | 意向相关标签 |

场景定向标签

| 名称                            | 描述                   |
| ------------------------------- | ---------------------- |
| WECHAT_POSITION                 | 微信公众号与小程序定投 |
| OFFICIAL_ACCOUNT_MEDIA_CATEGORY | 公众号媒体类型         |
| MINI_PROGRAM_AND_MINI_GAME      | 小游戏小程序场景       |
| PAY_SCENE                       | 订单详情页             |
| MOBILE_UNION_CATEGORY           | 优量汇媒体类型         |
| WECHAT_CHANNELS_SCENE           | 微信视频号定投类型     |

预估接口微信再营销类型

| 名称                             | 描述                     |
| -------------------------------- | ------------------------ |
| WECHAT_OFFICIAL_ACCOUNT_FOLLOWED | 关注过广告主微信公众号   |
| WECHAT_COUPON_OBTAINED           | 领取过广告主微信卡券     |
| WECHAT_OFFICIAL_ACCOUNT_AD_LIKE  | 对微信公众号广告感兴趣   |
| WECHAT_MOMENTS_AD_LIKE           | 对微信朋友圈广告感兴趣   |
| WECHAT_MOMENTS_AD_DISLIKE        | 对微信朋友圈广告不感兴趣 |

定向状态

| 名称                           | 描述                                         |
| ------------------------------ | -------------------------------------------- |
| TARGETING_STATUS_NARROW        | 定向过窄                                     |
| TARGETING_STATUS_SUITABLE      | 定向合适                                     |
| TARGETING_STATUS_WIDE          | 定向过宽                                     |
| TARGETING_STATUS_UNPREDICTABLE | 定向状态无法预估（当前信息过少，不足以判断） |

动态广告投放能力类型

| 名称                             | 描述         |
| -------------------------------- | ------------ |
| DYNAMIC_TYPE_SINGLE_PRODUCT_AD   | 单商品广告   |
| DYNAMIC_TYPE_MULTIPLE_PRODUCT_AD | 多商品广告   |
| DYNAMIC_TYPE_DYNAMIC_CREATIVE    | 动态创意广告 |

推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE                  | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT                | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT           | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LINK                       | 网页推广目标，已废弃，可切换其他推广目标进行创建广告         |
| PROMOTED_OBJECT_TYPE_QQ_MESSAGE                 | QQ 消息，创建广告时无需创建和指定推广目标                    |
| PROMOTED_OBJECT_TYPE_QZONE_VIDEO_PAGE           | 认证空间-视频说说，仅可读                                    |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_ARTICLE                    | 好文广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_LEAD_AD                    | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_TENCENT_KE                 | 腾讯课堂，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_ARTICLE         | QQ 空间日志页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_IFRAMED         | QQ 空间嵌入页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE                 | QQ 空间首页，仅可读                                          |
| PROMOTED_OBJECT_TYPE_APP_PC                     | PC 应用，仅可读                                              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_APP_QUICK_APP              | 快应用                                                       |

创意元素类型

| 名称                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| ELEMENT_TYPE_TEXT      | 文本                                                         |
| ELEMENT_TYPE_IMAGE     | 图片                                                         |
| ELEMENT_TYPE_VIDEO     | 视频                                                         |
| ELEMENT_TYPE_URL       | URL                                                          |
| ELEMENT_TYPE_ENUM      | 枚举类型                                                     |
| ELEMENT_TYPE_CANVAS    | Canvas                                                       |
| ELEMENT_TYPE_STRUCT    | 结构体类型                                                   |
| ELEMENT_TYPE_REFERENCE | TSA 外部资源引用类型，例如应用宝落地页 id、视频说说 id、微信小程序 id |
| ELEMENT_TYPE_BOOLEAN   | 布尔值                                                       |
| ELEMENT_TYPE_PHONE     | 电话组件                                                     |
| ELEMENT_TYPE_FORM      | 表单组件                                                     |
| ELEMENT_TYPE_CONSULT   | 咨询组件                                                     |
| ELEMENT_TYPE_NUMBER    | 数值型                                                       |

创意元素字段类型

| 名称                     | 描述           |
| ------------------------ | -------------- |
| FIELD_TYPE_STRING        | 字符串类型     |
| FIELD_TYPE_ENUM          | 枚举类型       |
| FIELD_TYPE_INTEGER       | 整型           |
| FIELD_TYPE_STRUCT        | 结构体类型     |
| FIELD_TYPE_INTEGER_ARRAY | 整型数组类型   |
| FIELD_TYPE_ENUM_ARRAY    | 枚举数组类型   |
| FIELD_TYPE_STRING_ARRAY  | 字符串数组类型 |
| FIELD_TYPE_STRUCT_ARRAY  | 结构体数组类型 |
| FIELD_TYPE_BOOLEAN       | 布尔值         |

视频类型

| 名称           | 描述 |
| -------------- | ---- |
| MEDIA_TYPE_MP4 | mp4  |
| MEDIA_TYPE_AVI | avi  |
| MEDIA_TYPE_MOV | mov  |
| MEDIA_TYPE_FLV | flv  |

推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE                  | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT                | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT           | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LINK                       | 网页推广目标，已废弃，可切换其他推广目标进行创建广告         |
| PROMOTED_OBJECT_TYPE_QQ_MESSAGE                 | QQ 消息，创建广告时无需创建和指定推广目标                    |
| PROMOTED_OBJECT_TYPE_QZONE_VIDEO_PAGE           | 认证空间-视频说说，仅可读                                    |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_ARTICLE                    | 好文广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_LEAD_AD                    | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_TENCENT_KE                 | 腾讯课堂，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_ARTICLE         | QQ 空间日志页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_IFRAMED         | QQ 空间嵌入页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE                 | QQ 空间首页，仅可读                                          |
| PROMOTED_OBJECT_TYPE_APP_PC                     | PC 应用，仅可读                                              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT    | 微信公众号                                                   |

不支持类型

| 名称                       | 描述           |
| -------------------------- | -------------- |
| UNSUPPORT_TYPE_UNSUPPORTED | 暂不支持的类型 |
| UNSUPPORT_TYPE_NORMAL      | 可正常使用     |
| UNSUPPORT_TYPE_EXPOSURE    | 影响曝光       |
| UNSUPPORT_TYPE_DISPLAY     | 影响展示效果   |

广告流量售卖方式

| 名称                   | 描述         |
| ---------------------- | ------------ |
| BUYINGTYPE_AUCTION     | 竞价售卖     |
| BUYINGTYPE_CONTRACT    | 合约售卖     |
| BUYINGTYPE_RESERVED    | 独占售卖     |
| BUYINGTYPE_FIXED_PRICE | 固定价格售卖 |

动态商品广告子类

| 名称                                   | 描述              |
| -------------------------------------- | ----------------- |
| DYNAMIC_ADGROUP_SUBTYPE_UNKNOWN        | 未知 dpa 广告类型 |
| DYNAMIC_ADGROUP_SUBTYPE_SINGLE_PRODUCT | 单商品 DPA 广告   |
| DYNAMIC_ADGROUP_SUBTYPE_MULTI_PRODUCT  | 多商品 DPA 广告   |

广告投放能力

| 名称                                | 描述                            |
| ----------------------------------- | ------------------------------- |
| CAPABILITY_WECHAT_ECOMMERCE_PRODUCT | 是否允许投朋友圈电商推广        |
| CAPABILITY_WECHAT_LINK_AD           | 是否允许投品牌活动页            |
| CAPABILITY_WECHAT_OCPA              | 是否允许投放微信 oCPC/oCPM 广告 |

扣费类型

| 名称         | 描述     |
| ------------ | -------- |
| BID_TYPE_CPC | CPC 扣费 |
| BID_TYPE_CPA | CPA 扣费 |
| BID_TYPE_CPS | CPS 扣费 |
| BID_TYPE_CPM | CPM 扣费 |
| BID_TYPE_CPD | CPD 扣费 |

优量汇广告展示场景

| 名称                          | 描述     |
| ----------------------------- | -------- |
| PLACEMENT_TYPE_BANNER         | Banner   |
| PLACEMENT_TYPE_INLINE         | 插屏     |
| PLACEMENT_TYPE_SPLASH         | 开屏     |
| PLACEMENT_TYPE_NATIVE         | 原生     |
| PLACEMENT_TYPE_REWARDED_VIDEO | 激励视频 |

优量汇行业定投流量包

| 名称                         | 描述 |
| ---------------------------- | ---- |
| MOBILE_UNION_SCENE_GIF_MAKER | 快手 |

落地页类型（查询接口过滤）

| 名称                                      | 描述                            |
| ----------------------------------------- | ------------------------------- |
| PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                      |
| PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用) |
| PAGE_TYPE_XIJING_QUICK                    | 蹊径性能版落地页                |
| PAGE_TYPE_LINGQUE_H5                      | 灵鹊落地页                      |
| PAGE_TYPE_LINGQUE_MINI_PROGRAM            | 灵鹊小程序                      |
| PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT    | 微信小店商品页                  |
| PAGE_TYPE_WECHAT_QUERY_PAGE               | 微信搜索页                      |
| PAGE_TYPE_WECHAT_SHOP                     | 微信小店店铺主页                |

落地页状态

| 名称    | 描述     |
| ------- | -------- |
| NORMAL  | 正常状态 |
| DELETED | 已删除   |
| PENDING | 待审核   |

枫页落地页子类型

| 名称          | 描述       |
| ------------- | ---------- |
| FENGYE_DIRECT | 枫页直营版 |
| FENGYE_SHOP   | 枫页小店版 |

落地页类型

| 名称                                      | 描述                                           |
| ----------------------------------------- | ---------------------------------------------- |
| PAGE_TYPE_TSA_APP                         | 通过 TSA 落地页制作工具生成的自定义 APP 介绍页 |
| PAGE_TYPE_TSA_WEB_NONE_ECOMMERCE          | 通过 TSA 落地页制作工具生成的非电商类网页      |
| PAGE_TYPE_CANVAS_WECHAT                   | 微信原生推广页，通过微信创建的落地页类型       |
| PAGE_TYPE_UNSUPPORTED                     | 尚不支持的落地页类型                           |
| PAGE_TYPE_FENGYE_ECOMMERCE                | 通过枫叶落地页制作工具生成的电商类网页         |
| PAGE_TYPE_FENGYE_EC_WECHAT_MINIPROGRAM    | 枫页电商小程序页                               |
| PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                                     |
| PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用)                |
| PAGE_TYPE_XIJING_QUICK                    | 蹊径性能版落地页                               |
| PAGE_TYPE_WECHAT_STATUS_FOOTER            | 微信状态                                       |
| PAGE_TYPE_WECHAT_CONSULT                  | 微信客服                                       |
| PAGE_TYPE_WECOM_CONSULT                   | 企业微信                                       |
| PAGE_TYPE_YOUZAN_SINGLE                   | 有赞单品页                                     |
| PAGE_TYPE_YOUZAN_TOGETHER                 | 有赞聚合页                                     |
| PAGE_TYPE_YOUZAN_WECHAT_MINIPROGRAM       | 有赞微信小程序页                               |
| PAGE_TYPE_YIYE_FORM                       | 一叶智能落地页                                 |
| PAGE_TYPE_WEIMOB_PRODUCTSET               | 微盟聚合页                                     |
| PAGE_TYPE_WEIMOB_PROMOTION                | 微盟活动页                                     |
| PAGE_TYPE_WEIMOB_PRODUCT                  | 微盟单品页                                     |
| PAGE_TYPE_WEIMOB_H5                       | 微盟 H5 落地页                                 |
| PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL  | 微信公众号详情页                               |
| PAGE_TYPE_WECHAT_FOCUS_DAILOG             | 微信一键关注页                                 |
| PAGE_TYPE_ARTICAL_WECHAT                  | 微信文章页                                     |
| PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD         | 安卓一键下载                                   |
| PAGE_TYPE_LINGQUE_H5                      | 灵鹊落地页                                     |
| PAGE_TYPE_LINGQUE_MINI_PROGRAM            | 灵鹊小程序                                     |
| PAGE_TYPE_WECHAT_APPOINTMENT_CARD         | 微信预约卡片                                   |
| PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT    | 微信小店商品页                                 |
| Page_TYPE_WECHAT_QUERY_PAGE               | 微信搜索页                                     |
| PAGE_TYPE_WECHAT_SHOP                     | 微信小店店铺主页                               |

落地页互动类型

| 名称                                | 描述                 |
| ----------------------------------- | -------------------- |
| PLAYABLE_TYPE_DEFAULT               | 非互动落地页         |
| PLAYABLE_TYPE_HOMEMADE_INTERACTION  | iframe 自制互动页面  |
| PLAYABLE_TYPE_MINIGAME_INTERACTION  | 小游戏互动页         |
| PLAYABLE_TYPE_VIDEO_INTERACTION     | 视频互动页           |
| PLAYABLE_TYPE_WEBSITE_INTERACTION   | 网页互动页(问答)     |
| PLAYABLE_TYPE_ZIP_INTERACTION       | ZIP 包自制互动页     |
| PLAYABLE_TYPE_COMPONENT_INTERACTION | 包含互动组件的落地页 |

落地页类型

| 名称                                         | 描述             |
| -------------------------------------------- | ---------------- |
| EXTERNAL_PAGE_TYPE_YOUZAN_PRODUCT            | 有赞单品页       |
| EXTERNAL_PAGE_TYPE_YOUZAN_PRODUCTSET         | 有赞聚合页       |
| EXTERNAL_PAGE_TYPE_YOUZAN_WECHAT_MINIPROGRAM | 有赞微信小程序页 |
| EXTERNAL_PAGE_TYPE_YIYE_FORM                 | 一叶智能表单页   |
| EXTERNAL_PAGE_TYPE_JINSUHJU_FORM             | 金数据表单页     |
| EXTERNAL_PAGE_TYPE_WEIMOB_PRODUCTSET         | 微盟聚合页       |
| EXTERNAL_PAGE_TYPE_WEIMOB_PROMOTION          | 微盟活动页       |
| EXTERNAL_PAGE_TYPE_WEIMOB_PRODUCT            | 微盟单品页       |
| EXTERNAL_PAGE_TYPE_WEIMOB_H5                 | 微盟 H5 落地页   |
| EXTERNAL_PAGE_TYPE_WEIMOB_WECHAT_MINIPROGRAM | 微盟微信小程序页 |

原生页组件类型

| 名称                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| IMAGE                    | 图片                                                         |
| VIDEO                    | 视频                                                         |
| TEXT                     | 文本                                                         |
| BUTTON                   | 按钮                                                         |
| FORM                     | 表单                                                         |
| CAROUSEL                 | 轮播                                                         |
| ELEMENT_TYPE_UNSUPPORTED | 暂不支持组件                                                 |
| CARD_ROTATE_IMAGE        | 卡片轮播                                                     |
| SHELF                    | 图文复合组件                                                 |
| FLOAT_BUTTON             | 悬浮按钮                                                     |
| GOODS                    | 商品                                                         |
| COMMON_COMPONENT         | 引用外层素材（原生推广页不需要设置顶部素材，直接引用广告创意中图片或视频素材） |
| SWIPE_WEBVIEW            | 上划 webview 组件                                            |
| WEBVIEW                  | webview 组件                                                 |
| ANIMATE_FLOAT_BUTTON     | 动画悬浮组件                                                 |

推广目标类型

| 名称                                         | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID             | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                 | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/api/business_assets/promoted_objects/promoted_objects_add) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE               | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT             | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT        | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_LEAD_AD                 | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT        | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_WECHAT_OFFICIAL_ACCOUNT | 微信公众号                                                   |

原生页类型(过滤)

| 名称                    | 描述               |
| ----------------------- | ------------------ |
| CANVAS_TYPE_COMMON_PAGE | 引用外层素材原生页 |

视频/图片/原生页等素材的创建来源类型

| 名称            | 描述                                     |
| --------------- | ---------------------------------------- |
| SOURCE_TYPE_EQQ | 视频/图片/原生页等素材在腾讯广告平台创建 |
| SOURCE_TYPE_MP  | 视频/图片/原生页等素材在微信公众平台创建 |

微信原生页视频资源状态

| 名称                          | 描述   |
| ----------------------------- | ------ |
| VIDEO_RESOURCE_STATUS_VALID   | 有效   |
| VIDEO_RESOURCE_STATUS_PENDING | 待处理 |
| VIDEO_RESOURCE_ERROR          | 异常   |

原生页类型

| 名称                         | 描述               |
| ---------------------------- | ------------------ |
| CANVAS_TYPE_VIDEO            | 顶部组件是视频     |
| CANVAS_TYPE_IMAGE            | 顶部组件是图片     |
| CANVAS_TYPE_PORTRAIT_VIDEO   | 竖版视频(高 1536)  |
| CANVAS_TYPE_PORTRAIT_VIDEO_2 | 竖版视频(高 1334)  |
| CANVAS_TYPE_COMMON_PAGE      | 引用外层素材原生页 |

广告超级预览受众 id 类型

| 名称                   | 描述   |
| ---------------------- | ------ |
| USER_ID_TYPE_QQ_ID     | QQ 号  |
| USER_ID_TYPE_WECHAT_ID | 微信号 |

操作层级

| 名称                  | 描述    |
| --------------------- | ------- |
| RESOURCE_TYPE_ADGROUP | Adgroup |

操作类型

| 名称                             | 描述     |
| -------------------------------- | -------- |
| OPERATION_TYPE_DATE              | 投放日期 |
| OPERATION_TYPE_TIME_SERIES       | 投放时间 |
| OPERATION_TYPE_CONFIGURED_STATUS | 状态     |

报表级别

| 名称                                  | 描述                 |
| ------------------------------------- | -------------------- |
| REPORT_LEVEL_ADVERTISER               | 广告主级别报表       |
| REPORT_LEVEL_CAMPAIGN                 | 推广计划级别报表     |
| REPORT_LEVEL_ADGROUP                  | 广告组级别报表       |
| REPORT_LEVEL_AD                       | 广告级别报表         |
| REPORT_LEVEL_PROMOTED_OBJECT          | 推广目标级别报表     |
| REPORT_LEVEL_UNION_POSITION           | 优量汇广告位级别报表 |
| REPORT_LEVEL_CREATIVE_TEMPLATE        | 创意形式级别报表     |
| REPORT_LEVEL_EXPAND_TARGETING_ADGROUP | 扩量广告报表         |
| REPORT_LEVEL_MATERIAL_VIDEO           | 视频素材报表         |
| REPORT_LEVEL_MATERIAL_IMAGE           | 图片素材报表         |
| REPORT_LEVEL_PRODUCT_CATELOG          | 商品库报表           |
| REPORT_LEVEL_BIDWORD                  | 关键词级别报表       |
| REPORT_LEVEL_QUERYWORD                | 搜索词级别报表       |
| REPORT_LEVEL_ADVERTISER_WECHAT        | 微信广告主级别报表   |
| REPORT_LEVEL_CAMPAIGN_WECHAT          | 微信推广计划级别报表 |
| REPORT_LEVEL_ADGROUP_WECHAT           | 微信广告组级别报表   |
| REPORT_LEVEL_AD_WECHAT                | 微信广告级别报表     |

排序方式

| 名称       | 描述 |
| ---------- | ---- |
| ASCENDING  | 升序 |
| DESCENDING | 降序 |

时间口径

| 名称           | 描述         |
| -------------- | ------------ |
| REQUEST_TIME   | 请求时间口径 |
| REPORTING_TIME | 上报时间口径 |
| ACTIVE_TIME    | 激活时间口径 |

报表级别

| 名称                           | 描述                 |
| ------------------------------ | -------------------- |
| REPORT_LEVEL_ADVERTISER        | 广告主级别报表       |
| REPORT_LEVEL_CAMPAIGN          | 推广计划级别报表     |
| REPORT_LEVEL_ADGROUP           | 广告组级别报表       |
| REPORT_LEVEL_AD                | 广告级别报表         |
| REPORT_LEVEL_PROMOTED_OBJECT   | 推广目标级别报表     |
| REPORT_LEVEL_BIDWORD           | 关键词级别报表       |
| REPORT_LEVEL_ADVERTISER_WECHAT | 微信广告主级别报表   |
| REPORT_LEVEL_CAMPAIGN_WECHAT   | 微信推广计划级别报表 |
| REPORT_LEVEL_ADGROUP_WECHAT    | 微信广告组级别报表   |
| REPORT_LEVEL_AD_WECHAT         | 微信广告级别报表     |

微信广告位位置

| 名称                         | 描述       |
| ---------------------------- | ---------- |
| POSITION_TYPE_WECHAT_MOMENTS | 微信朋友圈 |
| POSITION_TYPE_WECHAT_OTHERS  | 微信其他   |

性别（微信报表）

| 名称         | 描述   |
| ------------ | ------ |
| MALE         | 男性   |
| FEMALE       | 女性   |
| ALL          | 全部   |
| NOT_SEPARATE | 不区分 |

兴趣（微信报表）

| 名称    | 描述       |
| ------- | ---------- |
| FIRST   | 一级兴趣   |
| SECOND  | 二级兴趣   |
| THIRD   | 三级兴趣   |
| FOURTH  | 四级兴趣   |
| KEYWORD | 关键词兴趣 |

时间粒度类型

| 名称    | 描述     |
| ------- | -------- |
| UNKNOWN | 无效值   |
| HOURLY  | 小时粒度 |
| SUMMARY | 汇总粒度 |
| DAILY   | 天粒度   |

配置来源

| 名称            | 描述         |
| --------------- | ------------ |
| UNKNOWN         | 未知         |
| SOURCE_TYPE_EQQ | 投放端配置   |
| SOURCE_TYPE_CRM | 内部工具配置 |

支持读取的版位集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 移动联盟，移动版位                                   |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝 (待废弃)                                      |
| SITE_SET_MOBILE_INNER         | QQ、腾讯看点、腾讯音乐 (待废弃)                      |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻，移动版位                                   |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频                                             |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报 (已废弃)                                    |
| SITE_SET_PENGYOU              | 朋友社区 (已废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (已废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (已废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (已废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (已废弃)                                     |
| SITE_SET_PC_UNION             | 优量汇，PC 版位(已废弃)                              |
| SITE_SET_YINGYONGBAO_PC       | 应用宝，PC 版位(已废弃)                              |
| SITE_SET_CHANNELS             | 微信视频号                                           |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (已废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (已废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (已废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (已废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (已废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (已废弃)                                  |
| SITE_SET_WEIBO                | 微博 (已废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (已废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（已废弃）                               |
| SITE_SET_THIRDPARTY           | 第三方流量 (已废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (已废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_PC_TENCENT_NEWS      | 腾讯新闻、PC 版位                                    |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_PCAD                 | 腾讯平台与内容媒体                                   |

资金类型

| 名称                        | 描述         |
| --------------------------- | ------------ |
| FUND_TYPE_UNSUPPPORTED      | 不支持       |
| FUND_TYPE_CASH              | 现金账户     |
| FUND_TYPE_GIFT              | 赠送账户     |
| FUND_TYPE_CREDIT_ROLL       | 固定信用金   |
| FUND_TYPE_CREDIT_TEMPORARY  | 临时信用金   |
| FUND_TYPE_SPECIAL_PROMOTION | 专项推广资金 |
| FUND_TYPE_CREDIT            | 信用金       |
| FUND_TYPE_PAYMENT_DUE       | 账期         |
| FUND_TYPE_MINIPROGRAM       | 小程序启动金 |

图片操作类型

| 名称                  | 描述 |
| --------------------- | ---- |
| OPERATION_TYPE_RESIZE | 缩放 |

站点集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 移动联盟，移动站点                                   |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_INNER         | 移动内部站点，移动站点                               |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻，移动站点                                   |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频，移动站点                                   |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报，移动站点                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝移动，移动站点                                 |
| SITE_SET_PENGYOU              | 朋友社区                                             |
| SITE_SET_TUAN                 | QQ 团购                                              |
| SITE_SET_MEISHI               | QQ 美食                                              |
| SITE_SET_PIAO                 | QQ 票务                                              |
| SITE_SET_MAIL                 | QQ 邮箱                                              |
| SITE_SET_PC_UNION             | PC 联盟                                              |
| SITE_SET_YINGYONGBAO_PC       | 应用宝 PC                                            |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索                                         |
| SITE_SET_QQSHOP               | QQ 商城                                              |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询                                         |
| SITE_SET_QZONESEARCH          | QQ 空间搜索                                          |
| SITE_SET_WEBUNION_DELETED     | 网站联盟                                             |
| SITE_SET_EXPRESSPORTAL        | 直通车外投                                           |
| SITE_SET_WEIBO                | 微博                                                 |
| SITE_SET_WANGGOU              | QQ 网购                                              |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（废弃）                                 |
| SITE_SET_THIRDPARTY           | 第三方流量                                           |
| SITE_SET_JD_WAICAI            | 京东外采流量                                         |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |

联盟流量包类型

| 名称                       | 描述 |
| -------------------------- | ---- |
| UNION_PACKAGE_TYPE_INCLUDE | 定投 |
| UNION_PACKAGE_TYPE_EXCLUDE | 屏蔽 |

拆分对比实验状态

| 名称                      | 描述 |
| ------------------------- | ---- |
| SPLIT_TEST_STATUS_NORMAL  | 正常 |
| SPLIT_TEST_STATUS_SUSPEND | 暂停 |
| SPLIT_TEST_STATUS_PUBLISH | 全量 |

实验全量的推荐程度

| 名称                       | 描述         |
| -------------------------- | ------------ |
| RECOMMENDED_RATING_PENDING | 暂无推荐结果 |
| RECOMMENDED_RATING_ONE     | 一星推荐     |
| RECOMMENDED_RATING_TWO     | 二星推荐     |
| RECOMMENDED_RATING_THREE   | 三星推荐     |
| RECOMMENDED_RATING_FOUR    | 四星推荐     |
| RECOMMENDED_RATING_FIVE    | 五星推荐     |

商品所有者类型

| 名称                   | 描述 |
| ---------------------- | ---- |
| PRODUCT_OWNER_TYPE_SOP | 自营 |
| PRODUCT_OWNER_TYPE_POP | 商家 |

内景数量

| 名称                      | 描述  |
| ------------------------- | ----- |
| SHOOTING_SCENE_IN_COUNT_1 | 1 套  |
| SHOOTING_SCENE_IN_COUNT_2 | 2 套  |
| SHOOTING_SCENE_IN_COUNT_3 | 3 套  |
| SHOOTING_SCENE_IN_COUNT_4 | 4 套  |
| SHOOTING_SCENE_IN_COUNT_5 | 5 套  |
| SHOOTING_SCENE_IN_COUNT_6 | 6 套  |
| SHOOTING_SCENE_IN_COUNT_7 | 7 套  |
| SHOOTING_SCENE_IN_COUNT_N | 8 套+ |

外景数量

| 名称                       | 描述  |
| -------------------------- | ----- |
| SHOOTING_SCENE_OUT_COUNT_1 | 1 套  |
| SHOOTING_SCENE_OUT_COUNT_2 | 2 套  |
| SHOOTING_SCENE_OUT_COUNT_3 | 3 套  |
| SHOOTING_SCENE_OUT_COUNT_4 | 4 套  |
| SHOOTING_SCENE_OUT_COUNT_5 | 5 套  |
| SHOOTING_SCENE_OUT_COUNT_6 | 6 套  |
| SHOOTING_SCENE_OUT_COUNT_7 | 7 套  |
| SHOOTING_SCENE_OUT_COUNT_N | 8 套+ |

新娘服装

| 名称             | 描述  |
| ---------------- | ----- |
| BRIDE_CLOTHING_1 | 1 套  |
| BRIDE_CLOTHING_2 | 2 套  |
| BRIDE_CLOTHING_3 | 3 套  |
| BRIDE_CLOTHING_4 | 4 套  |
| BRIDE_CLOTHING_5 | 5 套  |
| BRIDE_CLOTHING_6 | 6 套  |
| BRIDE_CLOTHING_7 | 7 套  |
| BRIDE_CLOTHING_N | 8 套+ |

新郎服装

| 名称             | 描述  |
| ---------------- | ----- |
| GROOM_CLOTHING_1 | 1 套  |
| GROOM_CLOTHING_2 | 2 套  |
| GROOM_CLOTHING_3 | 3 套  |
| GROOM_CLOTHING_4 | 4 套  |
| GROOM_CLOTHING_5 | 5 套  |
| GROOM_CLOTHING_6 | 6 套  |
| GROOM_CLOTHING_7 | 7 套  |
| GROOM_CLOTHING_N | 8 套+ |

服装套数

| 名称          | 描述  |
| ------------- | ----- |
| CLOTH_COUNT_1 | 1 套  |
| CLOTH_COUNT_2 | 2 套  |
| CLOTH_COUNT_3 | 3 套  |
| CLOTH_COUNT_4 | 4 套  |
| CLOTH_COUNT_5 | 5 套  |
| CLOTH_COUNT_6 | 6 套  |
| CLOTH_COUNT_7 | 7 套  |
| CLOTH_COUNT_N | 8 套+ |

拍摄场景

| 名称                | 描述       |
| ------------------- | ---------- |
| SHOOTING_SCENE_IN   | 纯内景     |
| SHOOTING_SCENE_OUT  | 纯外景     |
| SHOOTING_SCENE_BOTH | 内外景结合 |

国内拍摄地

| 名称                            | 描述     |
| ------------------------------- | -------- |
| TOUR_PLACE_DOMESTIC_SANYA       | 三亚     |
| TOUR_PLACE_DOMESTIC_CHANGSHA    | 长沙     |
| TOUR_PLACE_DOMESTIC_XIAMEN      | 厦门     |
| TOUR_PLACE_DOMESTIC_QINGDAO     | 青岛     |
| TOUR_PLACE_DOMESTIC_LIJIANG     | 丽江     |
| TOUR_PLACE_DOMESTIC_DALI        | 大理     |
| TOUR_PLACE_DOMESTIC_DALIAN      | 大连     |
| TOUR_PLACE_DOMESTIC_HK          | 香港     |
| TOUR_PLACE_DOMESTIC_TAIWAN      | 台湾     |
| TOUR_PLACE_DOMESTIC_AOMEN       | 澳门     |
| TOUR_PLACE_DOMESTIC_XIANGGELILA | 香格里拉 |
| TOUR_PLACE_DOMESTIC_QINGHAI     | 青海     |
| TOUR_PLACE_DOMESTIC_XIZANG      | 西藏     |
| TOUR_PLACE_DOMESTIC_DAOCHENG    | 稻城     |
| TOUR_PLACE_DOMESTIC_CHONGQING   | 重庆     |
| TOUR_PLACE_DOMESTIC_SUZHOU      | 苏州     |
| TOUR_PLACE_DOMESTIC_SHANGHAI    | 上海     |
| TOUR_PLACE_DOMESTIC_HANGZHOU    | 杭州     |
| TOUR_PLACE_DOMESTIC_SHENZHEN    | 深圳     |
| TOUR_PLACE_DOMESTIC_GUANGZHOU   | 广州     |
| TOUR_PLACE_DOMESTIC_BEIJING     | 北京     |
| TOUR_PLACE_DOMESTIC_XIAN        | 西安     |
| TOUR_PLACE_DOMESTIC_CHENGDU     | 成都     |
| TOUR_PLACE_DOMESTIC_BEIHAI      | 北海     |
| TOUR_PLACE_DOMESTIC_GUILIN      | 桂林     |
| TOUR_PLACE_DOMESTIC_WUHAN       | 武汉     |
| TOUR_PLACE_DOMESTIC_NANJING     | 南京     |
| TOUR_PLACE_DOMESTIC_HAIKOU      | 海口     |

国外拍摄地

| 名称                         | 描述     |
| ---------------------------- | -------- |
| TOUR_PLACE_FOREIGN_VN        | 越南岘港 |
| TOUR_PLACE_FOREIGN_AU        | 澳大利亚 |
| TOUR_PLACE_FOREIGN_PALAO     | 帕劳     |
| TOUR_PLACE_FOREIGN_BALI      | 巴厘岛   |
| TOUR_PLACE_FOREIGN_FJ        | 斐济     |
| TOUR_PLACE_FOREIGN_PUJI      | 普吉岛   |
| TOUR_PLACE_FOREIGN_MV        | 马尔代夫 |
| TOUR_PLACE_FOREIGN_JP        | 日本     |
| TOUR_PLACE_FOREIGN_TR        | 土耳其   |
| TOUR_PLACE_FOREIGN_GR        | 希腊     |
| TOUR_PLACE_FOREIGN_FR        | 法国     |
| TOUR_PLACE_FOREIGN_IT        | 意大利   |
| TOUR_PLACE_FOREIGN_BULAGE    | 布拉格   |
| TOUR_PLACE_FOREIGN_XIANBENNA | 仙本那   |
| TOUR_PLACE_FOREIGN_MU        | 毛里求斯 |
| TOUR_PLACE_FOREIGN_GE        | 格鲁吉亚 |
| TOUR_PLACE_FOREIGN_SUMEI     | 苏梅岛   |
| TOUR_PLACE_FOREIGN_SAIBAN    | 塞班岛   |
| TOUR_PLACE_FOREIGN_JIZHOU    | 济州岛   |
| TOUR_PLACE_FOREIGN_SHABA     | 沙巴     |
| TOUR_PLACE_FOREIGN_DE        | 德国     |
| TOUR_PLACE_FOREIGN_LONDON    | 伦敦     |
| TOUR_PLACE_FOREIGN_SYDNEY    | 悉尼     |
| TOUR_PLACE_FOREIGN_NZ        | 新西兰   |
| TOUR_PLACE_FOREIGN_JILONGPO  | 吉隆坡   |

风险等级类型

| 名称              | 描述 |
| ----------------- | ---- |
| RISK_CONSERVATIVE | 保守 |
| RISK_STEADY       | 稳健 |
| RISK_BALANCE      | 平衡 |
| RISK_RADICAL      | 激进 |
| RISK_OTHER        | 其它 |

书籍的付费状态

| 名称              | 描述 |
| ----------------- | ---- |
| PAY_STATUS_FREE   | 免费 |
| PAY_STATUS_PAID   | 付费 |
| PAY_STATUS_MEMBER | 会员 |

书籍的连载状态

| 名称                    | 描述 |
| ----------------------- | ---- |
| SERIAL_STATUS_FINISH    | 完结 |
| SERIAL_STATUS_SERIALIZE | 连载 |

书籍的篇幅

| 名称                    | 描述 |
| ----------------------- | ---- |
| BOOK_LENGTH_LONG        | 长篇 |
| BOOK_LENGTH_MIDDLE_LONG | 付费 |
| BOOK_LENGTH_SHORT       | 短篇 |

作品授权状态

| 名称                               | 描述   |
| ---------------------------------- | ------ |
| AUTHORIZATION_STATUS_EXCLUSIVE     | 独家   |
| AUTHORIZATION_STATUS_NON_EXCLUSIVE | 非独家 |

作品原创性

| 名称            | 描述   |
| --------------- | ------ |
| ORIGINALITY_YES | 原创   |
| ORIGINALITY_NO  | 非原创 |

更新频率

| 名称                   | 描述       |
| ---------------------- | ---------- |
| UPDATE_DAILY           | 日更       |
| UPDATE_WEEKLY          | 周更       |
| UPDATE_MULTI_WEEKLY    | 一周多更   |
| UPDATE_ONE_WEEK        | 一周更     |
| UPDATE_MULTI_FORTNIGHT | 双周多更   |
| UPDATE_MONTHLY         | 月更       |
| UPDATE_MULTI_MONTHLY   | 一月多更   |
| UPDATE_RANDOM          | 不定期更新 |

播讲形式

| 名称               | 描述   |
| ------------------ | ------ |
| PLAY_FORM_BY_ONE   | 单人播 |
| PLAY_FORM_BY_TWO   | 双人播 |
| PLAY_FORM_BY_MULTI | 多人播 |

作品配音

| 名称                    | 描述         |
| ----------------------- | ------------ |
| PLAY_VOICE_SYSTEM       | 系统配音     |
| PLAY_VOICE_NORMAL       | 普通真人配音 |
| PLAY_VOICE_PROFESSIONAL | 专业配音     |

内容来源

| 名称                   | 描述 |
| ---------------------- | ---- |
| PRODUCTION_SOURCE_UGC  | UGC  |
| PRODUCTION_SOURCE_PGC  | PGC  |
| PRODUCTION_SOURCE_PUGC | PUGC |

内容产地

| 名称                   | 描述 |
| ---------------------- | ---- |
| PRODUCTION_PLACE_JP    | 日本 |
| PRODUCTION_PLACE_RK    | 韩国 |
| PRODUCTION_PLACE_US    | 美国 |
| PRODUCTION_PLACE_CN    | 中国 |
| PRODUCTION_PLACE_OTHER | 其他 |

漫画色彩

| 名称                      | 描述 |
| ------------------------- | ---- |
| CARTOON_COLOR_MULTI       | 彩色 |
| CARTOON_COLOR_BLACK_WHITE | 黑白 |

最高额度

| 名称               | 描述       |
| ------------------ | ---------- |
| MAX_QUOTA_5_LOW    | 5 万以下   |
| MAX_QUOTA_10       | 10 万      |
| MAX_QUOTA_15       | 15 万      |
| MAX_QUOTA_20       | 20 万      |
| MAX_QUOTA_30       | 30 万      |
| MAX_QUOTA_50       | 50 万      |
| MAX_QUOTA_100      | 100 万     |
| MAX_QUOTA_300      | 300 万     |
| MAX_QUOTA_300_HIGH | 300 万以上 |

商务服务行业价格

| 名称                         | 描述          |
| ---------------------------- | ------------- |
| BUSINESS_PRICE_FREE          | 免费          |
| BUSINESS_PRICE_1_TO_50       | 1-50 元       |
| BUSINESS_PRICE_51_TO_100     | 51-100 元     |
| BUSINESS_PRICE_101_TO_200    | 101-200 元    |
| BUSINESS_PRICE_201_TO_1000   | 201-1000 元   |
| BUSINESS_PRICE_1001_TO_3000  | 1001-3000 元  |
| BUSINESS_PRICE_3001_TO_5000  | 3001-5000 元  |
| BUSINESS_PRICE_5001_TO_8000  | 5001-8000 元  |
| BUSINESS_PRICE_8001_TO_12000 | 8001-12000 元 |
| BUSINESS_PRICE_OUT_12000     | 12001 元以上  |

首次投资总额

| 名称                                 | 描述      |
| ------------------------------------ | --------- |
| INITIAL_TOTAL_INVESTMENT_FREE        | 免费      |
| INITIAL_TOTAL_INVESTMENT_IN_10W      | 10w 以下  |
| INITIAL_TOTAL_INVESTMENT_10W_TO_30W  | 10-30w    |
| INITIAL_TOTAL_INVESTMENT_30W_TO_50W  | 30-50w    |
| INITIAL_TOTAL_INVESTMENT_50W_TO_100W | 50-100w   |
| INITIAL_TOTAL_INVESTMENT_OUT_100W    | 100w 以上 |

受众

| 名称                         | 描述 |
| ---------------------------- | ---- |
| BUSINESS_AUDIENCE_PERSONAL   | 个人 |
| BUSINESS_AUDIENCE_ENTERPRISE | 企业 |

商品销售状态

| 名称                        | 描述          |
| --------------------------- | ------------- |
| PRODUCT_SALE_STATUS_ONLINE  | 商品在线/在售 |
| PRODUCT_SALE_STATUS_OFFLINE | 商品下线/停售 |

商品审核状态

| 名称                    | 描述       |
| ----------------------- | ---------- |
| PRODUCT_STATUS_PENDING  | 未审核     |
| PRODUCT_STATUS_AUDITING | 审核中     |
| PRODUCT_STATUS_PASS     | 审核通过   |
| PRODUCT_STATUS_REJECTED | 审核不通过 |

商品库规模

| 名称                      | 描述                                |
| ------------------------- | ----------------------------------- |
| CATALOG_SCALE_TYPE_NORMAL | 普通商品库，商品库规模不大于 100 万 |
| CATALOG_SCALE_TYPE_HUGE   | 超大商品库，商品库规模大于 100 万   |

商品库类型

| 名称                  | 描述           |
| --------------------- | -------------- |
| CATALOG_TYPE_STANDARD | 标准商品库类型 |

商品库行业类型

| 名称                                       | 描述         |
| ------------------------------------------ | ------------ |
| INDUSTRY_TYPE_ECOMMERCE                    | 普通电商     |
| INDUSTRY_TYPE_READING                      | 阅读行业     |
| INDUSTRY_TYPE_EDUCATION                    | 教育行业     |
| INDUSTRY_TYPE_WEDDING                      | 婚纱行业     |
| INDUSTRY_TYPE_VIDEO                        | 视频行业     |
| INDUSTRY_TYPE_INSURANCE                    | 保险行业     |
| INDUSTRY_TYPE_LOAN                         | 贷款行业     |
| INDUSTRY_TYPE_FINANCIAL                    | 理财行业     |
| INDUSTRY_TYPE_BANKCARD                     | 银行卡行业   |
| INDUSTRY_TYPE_SECURITIES                   | 证券行业     |
| INDUSTRY_TYPE_ESTATE                       | 房产租售     |
| INDUSTRY_TYPE_CARRIER                      | 运营商       |
| INDUSTRY_TYPE_MERCHANTS                    | 招商加盟     |
| INDUSTRY_TYPE_BUSINESS_SERVICE             | 商务服务     |
| INDUSTRY_TYPE_DECORATION_BUILDING_MATERIAL | 家居行业     |
| INDUSTRY_TYPE_HOTEL                        | 旅游行业     |
| INDUSTRY_TYPE_CAR_ONLINE_PLATFORM          | 汽车线上平台 |
| INDUSTRY_TYPE_CAR_AFTERMARKET              | 汽车后市场   |
| INDUSTRY_TYPE_CAR_TRAVEL_SERVICE           | 汽车出行服务 |

商品库类型

| 名称                           | 描述       |
| ------------------------------ | ---------- |
| PRODUCT_CATALOG_TYPE_STANDARD  | 标准商品库 |
| PRODUCT_CATALOG_TYPE_FENGYE    | 枫叶商品库 |
| PRODUCT_CATALOG_TYPE_SMALLSHOP | 小店商品库 |
| PRODUCT_CATALOG_TYPE_YUEBAO    | 阅宝商品库 |
| PRODUCT_CATALOG_TYPE_MAIBAO    | 麦宝商品库 |
| PRODUCT_CATALOG_TYPE_YOUZAN    | 有赞商品库 |
| PRODUCT_CATALOG_TYPE_WEIMENG   | 微盟商品库 |
| PRODUCT_CATALOG_TYPE_MADAO     | 马到商品库 |

商品库行业类型

| 名称                          | 描述           |
| ----------------------------- | -------------- |
| VERTICAL_EC                   | 一般电商       |
| VERTICAL_ESTATE               | 房产租售       |
| VERTICAL_HOTEL                | 住宿酒店       |
| VERTICAL_TICKET               | 航班车票       |
| VERTICAL_TRAVEL               | 旅游线路       |
| VERTICAL_SCENERY              | 景点门票       |
| VERTICAL_VIDEO                | 视频音乐       |
| VERTICAL_CAR                  | 汽车销售       |
| VERTICAL_LOCAL_SERVICES       | 区域服务       |
| VERTICAL_NEWS_INFORMATION     | 内容资讯       |
| VERTICAL_BEAUTY_PERSONAL_CARE | 美妆个护（B&P) |

商品库状态

| 名称                           | 描述       |
| ------------------------------ | ---------- |
| PRODUCT_CATALOG_STATUS_PREPARE | 初始化状态 |
| PRODUCT_CATALOG_STATUS_NORMAL  | 有效状态   |
| PRODUCT_CATALOG_STATUS_SUSPEND | 暂停状态   |
| PRODUCT_CATALOG_STATUS_DELETED | 已删除状态 |

推荐方式逻辑操作符

| 名称         | 描述   |
| ------------ | ------ |
| LOGISTIC_AND | 逻辑与 |
| LOGISTIC_OR  | 逻辑或 |

动态广告类型

| 名称                                   | 描述             |
| -------------------------------------- | ---------------- |
| DYNAMIC_AD_TYPE_COMMON                 | 普通广告         |
| DYNAMIC_AD_TYPE_DYNAMIC_PRODUCT        | 动态商品广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_ARTICLE        | 动态文章广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_ELEMENT        | 动态元素广告     |
| DYNAMIC_AD_TYPE_DYNAMIC_CREATIVE       | 动态创意广告     |
| DYNAMIC_AD_TYPE_MULTI_CREATIVE         | 动态多创意广告   |
| DYNAMIC_AD_TYPE_SEARCH_COMMON          | 常规搜索广告     |
| DYNAMIC_AD_TYPE_SEARCH_DYNAMIC_PRODUCT | 搜索动态商品广告 |
| DYNAMIC_AD_TYPE_DYNAMIC_CONTENT        | 动态内容广告     |

视频号直播子模式

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| LIVE_VIDEO_SUBMODE_LIVE_ROOM        | 直播间   |
| LIVE_VIDEO_SUBMODE_LIVE_RESERVATION | 直播预告 |

门店包类型

| 名称      | 描述         |
| --------- | ------------ |
| DEFAULT   | 默认         |
| ALL_STORE | 关联全部门店 |

移动联盟场景定向

| 名称                                  | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| MOBILE_UNION_IN_WECHAT                | 移动联盟第三方流量在微信内打开的场景                         |
| MOBILE_UNION_REWARDED_VIDEO           | 激励视频，该流量场景可以为用户打造沉浸式广告体验，用奖励吸引他们完整观看视频广告，视频时长要求 5-30s |
| MOBILE_UNION_REWARDED_MEDIA           | 激励媒体，含激励任务的 app、激活成本低且人群较下沉的流量场景 |
| MOBILE_UNION_SMB_CUSTOMIZATION        | 中小广告主定制，适合第 1 次投放联盟流量的中小广告主，做测试投放的冷启动，该场景流量较小，有扩量需求不建议使用 |
| MOBILE_UNION_GAME_ADVERTISER_PECULIAR | 根据游戏广告关注的效果指标，系统推荐的定投流量，建议配合 oCPA 使用 |
| MOBILE_UNION_READ_ADVERTISER          | 阅读行业广告主定制，适合阅读行业且考核留存指标的广告主投放   |

移动联盟场景屏蔽定向

| 名称                                       | 描述                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| MOBILE_UNION_IN_WECHAT                     | 移动联盟第三方流量在微信内打开的场景                         |
| MOBILE_UNION_REWARDED_VIDEO                | 激励视频，该流量场景可以为用户打造沉浸式广告体验，用奖励吸引他们完整观看视频广告，视频时长要求 5-30s |
| MOBILE_UNION_REWARDED_MEDIA                | 激励媒体，含激励任务的 app、激活成本低且人群较下沉的流量场景 |
| MOBILE_UNION_GAME_ADVERTISER_EXCLUDE       | 根据游戏广告关注的效果指标，系统推荐的屏蔽流量，建议冷启动时使用 |
| MOBILE_UNION_READ_ADVERTISER_EXCLUDE       | 阅读行业广告主定制，适合阅读行业且考核留存指标的广告主投放   |
| MOBILE_UNION_LIGHT_GAME_ADVERTISER_EXCLUDE | 阅读行业广告主定制，适合阅读行业且考核留存指标的广告主投放   |

智投投放端类型

| 名称                                                         | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| SMART_DELIVERY_PLATFORM_EDITION_STANDARD                     | 默认标准投放端       |
| SMART_DELIVERY_PLATFORM_EDITION_PRODUCT                      | 商品智投             |
| SMART_DELIVERY_PLATFORM_EDITION_GAME                         | 游戏智投             |
| SMART_DELIVERY_PLATFORM_EDITION_FINANCE                      | 金融智投             |
| SMART_DELIVERY_PLATFORM_EDITION_EDUCATION                    | 教育智投             |
| SMART_DELIVERY_PLATFORM_EDITION_LOCAL_LIFE                   | 本地生活智投         |
| SMART_DELIVERY_PLATFORM_EDITION_HEALTH                       | 健康智投             |
| SMART_DELIVERY_PLATFORM_EDITION_TRAFFIC                      | 交通智投             |
| SMART_DELIVERY_PLATFORM_EDITION_HOME                         | 房家智投             |
| SMART_DELIVERY_PLATFORM_EDITION_TRAVEL                       | 旅游智投             |
| SMART_DELIVERY_PLATFORM_EDITION_NET_SERVICE                  | 网服智投             |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_GAME                  | 微信小游戏智投       |
| SMART_DELIVERY_PLATFORM_EDITION_GAME_PROMOTION               | 游戏大推智投         |
| SMART_DELIVERY_PLATFORM_EDITION_IAAP                         | 小游戏混变智投       |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_DYNA                  | Dyna 智投平台        |
| SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_PLAYLET              | 爆剧跑量             |
| SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_LEADS                | 线索跑量             |
| SMART_DELIVERY_PLATFORM_EDITION_MINI_GAME_PROMOTION          | 小游戏跑量           |
| SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_LEADS_LINK_PREFERENCE | 线索跑量-多链路优选  |
| SMART_DELIVERY_PLATFORM_EDITION_PLAYLET_MANAGEMENT           | 全剧托管             |
| SMART_DELIVERY_PLATFORM_EDITION_BIG_GAME_PROMOTION           | 游戏大推             |
| SMART_DELIVERY_PLATFORM_EDITION_MINI_GAME_MIXED_MONETIZATION | 小游戏混变           |
| SMART_DELIVERY_PLATFORM_EDITION_PERIODIC_STABILIZATION       | 周期稳投             |
| SMART_DELIVERY_PLATFORM_EDITION_MULTI_OPTIMIZATION           | 多目标优化           |
| SMART_DELIVERY_PLATFORM_EDITION_DRUG_PRODUCT                 | 商品智投             |
| SMART_DELIVERY_PLATFORM_EDITION_FICTION                      | 小说智投             |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_MINI_GAME_LONG_TERM_ROI | 微信小游戏长效 ROI   |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_MINI_GAME_MONETIZATION | 微信小游戏变现       |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_SINGLE_PRODUCT  | 短直双开             |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_PRODUCT_OR_LIVE | 小店单链路智投       |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_MANAGEMENT      | 全店托管智投         |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_LIVE            | 推直播间             |
| SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_PRODUCT         | 推商品               |
| SMART_DELIVERY_PLATFORM_EDITION_QYT_LIVE                     | 全域通直播场景       |
| SMART_DELIVERY_PLATFORM_EDITION_QYT_WECHAT_STORE             | 全域通小店场景       |
| SMART_DELIVERY_PLATFORM_EDITION_QYT_STORE_PAGE               | 全域通推店铺         |
| SMART_DELIVERY_PLATFORM_EDITION_CPS_MANUAL                   | CPS 智投（手动）     |
| SMART_DELIVERY_PLATFORM_EDITION_CPS_INTELLIGENT              | CPS 智投（无人托管） |
| SMART_DELIVERY_PLATFORM_EDITION_MPA_STORE_MANAGEMENT         | 全库托管智投         |
| SMART_DELIVERY_PLATFORM_EDITION_GAME_APP                     | 游戏应用智投         |
| SMART_DELIVERY_PLATFORM_EDITION_READING_APP                  | 阅读应用智投         |
| SMART_DELIVERY_PLATFORM_EDITION_AI_APP                       | AI 应用智投          |
| SMART_DELIVERY_PLATFORM_EDITION_USER_GROWTH_APP              | 用增通用应用智投     |
| SMART_DELIVERY_PLATFORM_EDITION_SELECTION_AD                 | 互广联投智投         |

投放速度模式

| 名称                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| SPEED_MODE_FAST     | 加速投放，广告会以较快的速度获得曝光，选择加速投放可能会导致您的预算较快地耗尽 |
| SPEED_MODE_STANDARD | 标准投放，系统会优化您的广告的投放，让您的预算在设定的投放时段内较为平稳地消耗，默认为标准投放 |

排除已转化人群的数据维度

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| EXCLUDED_DIMENSION_CAMPAIGN         | 推广计划 |
| EXCLUDED_DIMENSION_UID              | 广告主   |
| EXCLUDED_DIMENSION_BUSINESS_MANAGER | 商务管家 |
| EXCLUDED_DIMENSION_COMPANY_ACCOUNT  | 公司主体 |
| EXCLUDED_DIMENSION_APP              | 应用     |
| EXCLUDED_DIMENSION_PRODUCT          | 商品     |
| EXCLUDE_DIMENSION_WORKTABLE         | 业务单元 |
| EXCLUDED_DIMENSION_GROUP            | 集团     |

排除操作系统

| 名称              | 描述       |
| ----------------- | ---------- |
| ANDROID_PURE_MODE | 鸿蒙纯净版 |

推广目标授权状态

| 名称     | 描述     |
| -------- | -------- |
| GAID     | GAID     |
| OAID     | OAID     |
| OAID_MD5 | OAID_MD5 |
| IMEI     | IMEI     |
| IMEI_MD5 | IMEI_MD5 |
| IDFA     | IDFA     |

推广目标授权状态

| 名称    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| PENDING | 等待联调。刚设置完 tracking 之后的状态                       |
| TESTING | 联调中。点击完联调链之后切换到该状态                         |
| FAILED  | 联调失败。从 testing 开始算，超过两小时未收到来自三方的 postback |
| SUCCESS | 联调成功                                                     |

广告创建来源类型

| 名称                            | 描述                     |
| ------------------------------- | ------------------------ |
| CREATE_SOURCE_TYPE_UNKNOWN      | 无创建来源               |
| CREATE_SOURCE_TYPE_REWARD_QUEST | 创建来自小任务二次推广   |
| CREATE_SOURCE_TYPE_FREETRADE    | 创建来自互选广告二次推广 |

广告支持的协议

| 名称                       | 描述               |
| -------------------------- | ------------------ |
| SECOND_MARKETING_AGREEMENT | 小任务二次推广协议 |

广告视频号开户绑定微信状态

| 名称    | 描述   |
| ------- | ------ |
| UNKNOWN | 未知   |
| UNBOUND | 未绑定 |
| BOUND   | 已绑定 |
| EXPIRED | 已失效 |

广告视频号开户状态

| 名称              | 描述         |
| ----------------- | ------------ |
| PENDING           | 处理中       |
| CREATED           | 已开户       |
| EXPIRED           | 已失效       |
| AUDIT_PENDING     | 审核中       |
| AUDIT_REFUSED     | 审核拒绝     |
| FROZEN            | 冻结         |
| BANNED            | 封禁         |
| DEACTIVATED       | 已注销       |
| CHECK_FAIL        | 平台校验失败 |
| PROCESSING_LOGOUT | 注销中       |

文件类型

| 名称 | 描述     |
| ---- | -------- |
| PDF  | pdf 文件 |
| DOC  | 文档     |

广告包计算状态

| 名称                      | 描述     |
| ------------------------- | -------- |
| CALCULATE_STATUS_UNKNOWN  | 未知状态 |
| CALCULATE_STATUS_PENDING  | 待审核   |
| CALCULATE_STATUS_APPROVED | 审核通过 |
| CALCULATE_STATUS_REJECTED | 审核拒绝 |

联盟应用类型

| 名称                      | 描述     |
| ------------------------- | -------- |
| UNION_APP_TYPE_NORMAL     | 正常     |
| UNION_APP_TYPE_DETACHABLE | app 拆包 |
| UNION_APP_TYPE_SUBSCRIBE  | app 预约 |

厂商品牌

| 名称                    | 描述    |
| ----------------------- | ------- |
| APP_STORE_BRAND_UNKNOWN | 未知    |
| APP_STORE_BRAND_HUAWEI  | 华为    |
| APP_STORE_BRAND_XIAOMI  | 小米    |
| APP_STORE_BRAND_OPPO    | OPPO    |
| APP_STORE_BRAND_VIVO    | VIVO    |
| APP_STORE_BRAND_HONOR   | 荣耀    |
| APP_STORE_BRAND_SAMSUNG | 三星    |
| APP_STORE_BRAND_MEIZU   | 魅族    |
| APP_STORE_BRAND_ZTE     | 中兴    |
| APP_STORE_BRAND_REDMI   | 红米    |
| APP_STORE_BRAND_NUBIA   | 努比亚  |
| APP_STORE_BRAND_REALME  | Realme  |
| APP_STORE_BRAND_ONEPLUS | OnePlus |
| APP_STORE_BRAND_360     | 360     |

联盟应用渠道包类型

| 名称                          | 描述                  |
| ----------------------------- | --------------------- |
| UNION_CHANNEL_TYPE_NORMAL     | 普通渠道包            |
| UNION_CHANNEL_TYPE_URL        | 通过 URL 创建的渠道包 |
| UNION_CHANNEL_TYPE_DETACHABLE | 自动拆包的渠道包      |
| UNION_CHANNEL_TYPE_AUDIT      | 免审的渠道包          |

profile 页类型

| 名称                       | 描述         |
| -------------------------- | ------------ |
| PROFILE_TYPE_DEFINITION    | 自定义类型   |
| PROFILE_TYPE_AUTO_GENERATE | 自动填充类型 |

授权类型

| 名称                        | 描述                 |
| --------------------------- | -------------------- |
| DEFAULT                     | 默认值               |
| SAME_CORPORATION            | 同主体               |
| OVER_CORPORATION            | 跨主体               |
| OVER_CORPORATION_SAME_GROUP | 跨主体同集团公司     |
| OVER_CORPORATION_EMPLOYMENT | 跨主体雇佣关系       |
| CUSTOMER_MANAGER            | 主体组织             |
| CUSTOMER_BUSINESS_UNIT      | 主体类型业务单元组织 |
| GROUP_BUSINESS_UNIT         | 集团类型业务单元组织 |

枫叶电商落地页类型

| 名称                          | 描述         |
| ----------------------------- | ------------ |
| SINGLE_PRODUCT_LANDING_PAGE   | 单商品落地页 |
| MULTIPLE_PRODUCT_LANDING_PAGE | 多商品落地页 |

创意组件类型

| 名称                 | 描述             |
| -------------------- | ---------------- |
| LIVE_IMAGE_UNKNOWN   | 未知             |
| LIVE_IMAGE_COMPONENT | 喝彩图背景图组件 |
| LIVE_CONV_COMPONENT  | 转化组件         |

创意组件审核结果状态

| 名称                  | 描述     |
| --------------------- | -------- |
| AUDIT_STATUS_UNKNOWN  | 未知状态 |
| AUDIT_STATUS_PENDING  | 审核中   |
| AUDIT_STATUS_APPROVED | 审核通过 |
| AUDIT_STATUS_REJECTED | 审核拒绝 |

制作平台

| 名称                                        | 描述             |
| ------------------------------------------- | ---------------- |
| LANDING_PAGE_TYPE_YOUZAN_WECHAT_MINIPROGRAM | 有赞小程序落地页 |
| LANDING_PAGE_TYPE_WEIMOB_WECHAT_MINIPROGRAM | 微盟小程序落地页 |
| LANDING_PAGE_TYPE_ST_HELIANG_H5             | 禾量 H5 落地页   |

落地页审核状态

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| LANDING_PAGE_REVIEW_STATUS_PENDING  | 待审核   |
| LANDING_PAGE_REVIEW_STATUS_APPROVED | 审核通过 |
| LANDING_PAGE_REVIEW_STATUS_REJECTED | 审核拒绝 |

App 服务接入方式

| 名称                 | 描述     |
| -------------------- | -------- |
| UNKNOWN              | 未知状态 |
| PRIVATE_WIRE_NETWORK | 专线     |
| SERVER_COLOCATION    | 主机托管 |
| VIRTUAL_HOST         | 虚拟主机 |
| OTHER                | 其它方式 |
| CLOUD_ACCESS         | 云接入   |

用户协议类型

| 名称                    | 描述                 |
| ----------------------- | -------------------- |
| USER_AGREEMENT_TYPE_ADQ | adq 投放端用户协议   |
| USER_AGREEMENT_TYPE_AMP | 应用管理平台用户协议 |

门店用户画像性别

| 名称     | 描述     |
| -------- | -------- |
| UNKNOWN  | 未知     |
| MALE     | 男性为主 |
| FEMALE   | 女性为主 |
| BALANCED | 数量均衡 |

门店用户画像出行方式

| 名称    | 描述 |
| ------- | ---- |
| UNKNOWN | 未知 |
| TAXI    | 打车 |
| BUS     | 公交 |
| DRIVE   | 驾车 |
| CYCLING | 骑车 |
| WALK    | 步行 |

门店高峰日期

| 名称       | 描述   |
| ---------- | ------ |
| UNKNOWN    | 未知   |
| WORKDAY    | 工作日 |
| WEEKEND    | 周末   |
| WHOLE_WEEK | 一整周 |

门店营业时间日期

| 名称       | 描述   |
| ---------- | ------ |
| UNKNOWN    | 未知   |
| WORKDAY    | 工作日 |
| WEEKEND    | 周末   |
| WHOLE_WEEK | 一整周 |

特色服务

| 名称                          | 描述         |
| ----------------------------- | ------------ |
| UNKNOWN                       | 未知         |
| INTERNET_CELEBRITY_RESTAURANT | 网红餐厅     |
| MOBILE_PAYMENT                | 可手机支付   |
| PROVIDE_POWER_BANK            | 有充电宝     |
| PROVIDE_BOX                   | 有包厢       |
| SMOKELESS                     | 无烟餐厅     |
| CREDIT_CARD                   | 支持刷卡     |
| SELFSERVICE_ORDERING          | 可自助点餐   |
| PETS_ALLOWED                  | 可带宠物     |
| PROVIDE_LANDSCAPE_POSITION    | 有景观位     |
| PROVIDE_BLEACHERS             | 有露天位     |
| OLD_STORE                     | 老店         |
| APPLE_PAY                     | Apple pay    |
| WEIXIN_PAY                    | 微信支付     |
| ALI_PAY                       | 支付宝支付   |
| STORED_VALUE_CARD             | 储值卡       |
| CASH                          | 现金         |
| TELEVISION                    | 可看电视     |
| LOCKER                        | 寄存柜       |
| FREE_WIFI                     | 免费 WIFI    |
| SOFA_SEAT                     | 沙发座       |
| SMOKING_ZONE                  | 吸烟区       |
| VIP_ONLY                      | VIP 专区     |
| NO_SMOKING                    | 无烟店       |
| PARKING_AVAILABLE             | 可停车       |
| FREE_PAKING                   | 免费停车     |
| PAID_PARKING                  | 付费停车     |
| PROVIDE_CHARGING_PILE         | 有充电桩     |
| GIFT_IN_STORE                 | 到店有礼     |
| FREE_TRIAL                    | 免费体验     |
| LOW_PRICE_TRIAL               | 低价体验     |
| FREE_FOR_VIP                  | 会员免费     |
| DISCOUNT_FOR_VIP              | 会员优惠     |
| LOW_PRICE_DISCOUNT            | 低价优惠     |
| COUPON                        | 代金券       |
| MONEY_OFF_COUPON              | 满减券       |
| PACKAGE_DISCOUNT              | 套餐优惠     |
| PROJECT_DISCOUNT              | 项目优惠     |
| GOODS_DISCOUNT                | 商品优惠     |
| NO_INITIATIVE_SELLING         | 不主动推销   |
| NO_HIDDEN_FEES                | 无隐性消费   |
| DISPOSABLE_ITEMS              | 一次性用品   |
| UNSATISFACTORY_REFUND         | 不满意退款   |
| UNSATISFACTORY_REDO           | 不满意重做   |
| FREE_TEA_AND_SNACKS           | 免费茶水小食 |
| ONE_TO_ONE_SERVICE            | 一对一服务   |
| SHOOT_FIRST_PAY_LATER         | 先拍后付款   |
| TEN_THOUSAND_COLLECTIONS      | 超万人收藏   |
| LADIES_ONLY                   | 仅接待女宾   |
| MEN_ONLY                      | 仅接待男宾   |
| DOUBLE_ROOM                   | 双人间       |
| FREE_MASSAGE                  | 免费按摩     |
| DYSON_HAIR_DRYER              | 戴森吹风机   |
| OFFICIAL_LICENSE              | 机构授牌     |
| WEEKS_CARD                    | 有周卡       |
| PRIVATE_CLASS                 | 小班课       |
| WEDDING_CAR_DISCOUNT          | 婚车优惠     |
| PERSONAL_SERVICE              | 私人服务     |
| GIVE_NEGATIVES_AND_SAMPLES    | 送底片样片   |
| FREE_PS                       | 免费修图     |
| PETS_INTERACTIVE              | 萌宠互动     |
| PETS_ON_SALE                  | 萌宠         |
| PETS_BURIAL                   | 宠物丧葬     |
| CHAPERONAGE_NANNY             | 陪护保姆     |
| DOOR_TO_DOOR_DELIVERY         | 上门收送     |
| SINGING_PACKAGE               | 欢唱套餐     |
| DATIME_DISCOUNT               | 日场优惠     |
| NIGHT_DISCOUNT                | 夜场优惠     |
| INTERNET_CELEBRITY_SHOP       | 网红店       |

门店经营状态

| 名称                              | 描述     |
| --------------------------------- | -------- |
| OPENING_STATUS_UNKNOWN            | 未知     |
| OPENING_STATUS_OPENING            | 营业中   |
| OPENING_STATUS_TEMPORARILY_CLOSED | 暂时关闭 |
| OPENING_STATUS_PERMANENTLY_CLOSED | 永久关闭 |

mp 合约类型

| 名称                                  | 描述                          |
| ------------------------------------- | ----------------------------- |
| CONTRACT_TYPE_NORMAL                  | 竞价购买，常规合约 初始默认值 |
| CONTRACT_TYPE_CPT                     | CPT 限时推广                  |
| CONTRACT_TYPE_SNS_OPT                 | 长效社交                      |
| CONTRACT_TYPE_EFFECT                  | 优选拿量                      |
| CONTRACT_TYPE_HOT_AD                  | 热点广告                      |
| CONTRACT_TYPE_BRAND                   | 品牌合约                      |
| CONTRACT_TYPE_BRAND_ZONE              | 品牌专区                      |
| CONTRACT_TYPE_WECHAT_OFFICIAL_KEYWORD | 公众号文章关键词合约          |
| CONTRACT_TYPE_BRAND_ZONE_DAZZLE       | 炫动品牌专区                  |
| CONTRACT_TYPE_IP                      | 内容 IP 合约                  |
| CONTRACT_TYPE_GUARANTEE               | 保障合约                      |

搜索广告关键词类型

| 名称                        | 描述   |
| --------------------------- | ------ |
| SEARCH_KEYWORD_TYPE_BRAND   | 品牌词 |
| SEARCH_KEYWORD_TYPE_PRODUCT | 商品词 |
| SEARCH_KEYWORD_TYPE_GENERAL | 通用词 |
| SEARCH_KEYWORD_TYPE_TOPIC   | 其他词 |

智投投放场景

| 名称                                    | 描述               |
| --------------------------------------- | ------------------ |
| SMART_DELIVERY_SCENE_STANDARD           | 默认普通投放场景   |
| SMART_DELIVERY_SCENE_NEW_SPU            | 商品智投易起投场景 |
| SMART_DELIVERY_SCENE_LONG_ROI           | 长效 ROI 投放      |
| SMART_DELIVERY_SCENE_GAME_LAUNCH        | 新游大推           |
| SMART_DELIVERY_SCENE_IAAP               | 小游戏混变         |
| SMART_DELIVERY_SCENE_MONETIZATION       | 变现 ROI 投放      |
| SMART_DELIVERY_SCENE_MULTI_OPTIMIZATION | 多目标优化         |
| SMART_DELIVERY_SCENE_LIFE_CYCLE         | 周期达成           |
| SMART_DELIVERY_SCENE_VISIT_STORE        | 到店优化           |

本地推模式

| 名称                                  | 描述             |
| ------------------------------------- | ---------------- |
| LOCAL_BUSINESS_MODE_DEFAULT           | 到店优惠         |
| LOCAL_BUSINESS_MODE_LEADS_COUPON      | 销售线索优惠模式 |
| LOCAL_BUSINESS_MODE_LEADS_RESERVATION | 销售线索预约模式 |
| LOCAL_BUSINESS_MODE_SHOP_VOUCHER      | 到店购券模式     |

本地推小程序落地页类型

| 名称                     | 描述             |
| ------------------------ | ---------------- |
| COUPON_TEMPLATE          | 优惠券模版       |
| SALES_TEMPLATE           | 销售线索模版     |
| ACTIVITY_COUPON_TEMPLATE | 活动优惠券模块   |
| ACTIVITY_SALES_TEMPLATE  | 活动销售线索模版 |

按钮类型

| 名称            | 描述     |
| --------------- | -------- |
| FREE_COLLECTION | 免费领取 |
| RESERVE_NOW     | 立即预约 |

定向信息请求类型

| 名称                               | 描述             |
| ---------------------------------- | ---------------- |
| BIND_AID_COUNT_REQUEST             | 请求绑定广告数目 |
| BIND_SHARE_TARGETING_COUNT_REQUEST | 请求绑定定向数目 |

行业投放端类型

| 名称                                       | 描述                 |
| ------------------------------------------ | -------------------- |
| DELIVERY_PLATFORM_EDITION_STANDARD         | 默认标准投放端       |
| DELIVERY_PLATFORM_EDITION_EDUCATION        | 教育行业投放端       |
| DELIVERY_PLATFORM_EDITION_EDUCATION_SIMPLE | 教育行业投放端简化版 |
| DELIVERY_PLATFORM_EDITION_GAME             | 游戏行业投放端       |
| DELIVERY_PLATFORM_EDITION_REAL_ESTATE      | 房地产行业投放端     |

优化目标类型

| 名称                                                    | 描述                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| OPTIMIZATIONGOAL_NONE                                   | none                                                         |
| OPTIMIZATIONGOAL_BRAND_CONVERSION                       | 品牌转化                                                     |
| OPTIMIZATIONGOAL_FOLLOW                                 | 关注                                                         |
| OPTIMIZATIONGOAL_CLICK                                  | 点击                                                         |
| OPTIMIZATIONGOAL_IMPRESSION                             | 曝光                                                         |
| OPTIMIZATIONGOAL_APP_DOWNLOAD                           | 下载                                                         |
| OPTIMIZATIONGOAL_APP_ACTIVATE                           | 激活                                                         |
| OPTIMIZATIONGOAL_APP_REGISTER                           | 注册                                                         |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION                      | 次日留存                                                     |
| OPTIMIZATIONGOAL_APP_PURCHASE                           | 付费次数，游戏客户如需优化付费行为，建议使用首次付费作为优化目标 |
| OPTIMIZATIONGOAL_ECOMMERCE_ORDER                        | 下单                                                         |
| OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER | 24 小时下单                                                  |
| OPTIMIZATIONGOAL_ECOMMERCE_SCANCODE_WX                  | 扫码加粉                                                     |
| OPTIMIZATIONGOAL_ADD_WECHAT                             | 添加个人微信客服                                             |
| OPTIMIZATIONGOAL_WECOM_CONSULT                          | 加企微后咨询                                                 |
| OPTIMIZATIONGOAL_ADD_GROUP                              | 加群                                                         |
| OPTIMIZATIONGOAL_QUICK_ORDER                            | 快速下单                                                     |
| OPTIMIZATIONGOAL_PRE_PAY                                | 预付定金                                                     |
| OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_ACTIVE_ONE_MSG     | 主动一句话咨询                                               |
| OPTIMIZATIONGOAL_CALL_DURATION_THIRTY_SECONDS           | 通话 30S                                                     |
| OPTIMIZATIONGOAL_CLAIM_COURSE                           | 领课                                                         |
| OPTIMIZATIONGOAL_CONSULT_INTENTION                      | 开口后下单意向                                               |
| OPTIMIZATIONGOAL_QUIT_GROUP                             | 退群                                                         |
| OPTIMIZATIONGOAL_VIEW_ACQUISITION_CONTENT               | 拉新访问关键页面                                             |
| OPTIMIZATIONGOAL_BACK_FLOW                              | 沉默唤起                                                     |
| OPTIMIZATIONGOAL_CLASS_PARTICIPATED                     | 首次到课                                                     |
| OPTIMIZATIONGOAL_INSURANCE_PURCHASE                     | 保险支付                                                     |
| OPTIMIZATIONGOAL_MOBILE_APP_SEVEN_DAYS_RETENTION        | 7 日留存                                                     |
| OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT                     | H5 购买                                                      |
| OPTIMIZATIONGOAL_LEADS                                  | 销售线索                                                     |
| OPTIMIZATIONGOAL_ECOMMERCE_CART                         | 加入购物车                                                   |
| OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE               | 公众号内注册                                                 |
| OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE                    | 商品详情页浏览                                               |
| OPTIMIZATIONGOAL_ONLINE_CONSULTATION                    | 在线咨询                                                     |
| OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION                 | 电话拨打                                                     |
| OPTIMIZATIONGOAL_PAGE_RESERVATION                       | 表单预约                                                     |
| OPTIMIZATIONGOAL_DELIVERY                               | 发货                                                         |
| OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW                   | 公众号内发消息                                               |
| OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW                | 公众号内点击菜单栏                                           |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT          | 有效在线咨询 (待废弃)                                        |
| OPTIMIZATIONGOAL_APPLY                                  | 完件                                                         |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_CONSULT        | 有效在线咨询                                                 |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_PHONE          | 有效电话拨打                                                 |
| OPTIMIZATIONGOAL_LEADS_COLLECT                          | 综合线索收集                                                 |
| OPTIMIZATIONGOAL_FIRST_PURCHASE                         | 首次付费                                                     |
| OPTIMIZATIONGOAL_PRE_CREDIT                             | 预授信                                                       |
| OPTIMIZATIONGOAL_CREDIT                                 | 授信                                                         |
| OPTIMIZATIONGOAL_WITHDRAW_DEPOSITS                      | 提现                                                         |
| OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE                | 关键页面访问次数                                             |
| OPTIMIZATIONGOAL_MOBILE_APP_CREATE_ROLE                 | 小游戏创角                                                   |
| OPTIMIZATIONGOAL_CANVAS_CLICK                           | 跳转按钮点击                                                 |
| OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER                  | 领券                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_ADD_TO_WISHLIST              | 商品收藏                                                     |
| OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_RESERVATION    | 有效表单提交                                                 |
| OPTIMIZATIONGOAL_PAGE_RECEIPT                           | 签收                                                         |
| OPTIMIZATIONGOAL_PAGE_SCAN_CODE                         | 加企业微信客服                                               |
| OPTIMIZATIONGOAL_SELECT_COURSE                          | 选课                                                         |
| OPTIMIZATIONGOAL_CONFIRM_POTENTIAL_CUSTOMER_PHONE       | 电话潜在客户                                                 |
| OPTIMIZATIONGOAL_MOBILE_APP_AD_INCOME                   | 广告变现                                                     |
| OPTIMIZATIONGOAL_MOBILE_APP_ACCREDIT                    | 小游戏授权                                                   |
| OPTIMIZATIONGOAL_PURCHASE_MEMBER_CARD                   | 首次会员购买                                                 |
| OPTIMIZATIONGOAL_PAGE_CONFIRM_EFFECTIVE_LEADS           | 有效综合线索                                                 |
| OPTIMIZATIONGOAL_RESERVATION                            | 微信流量预约行为                                             |
| OPTIMIZATIONGOAL_FIRST_ECOMMERCE_ORDER                  | 首次下单                                                     |
| OPTIMIZATIONGOAL_LIKE                                   | 点赞                                                         |
| OPTIMIZATIONGOAL_ADD_DESKTOP                            | 快应用加桌面                                                 |
| OPTIMIZATIONGOAL_EXTERNAL_LINK_CLICK                    | 外链点击                                                     |
| OPTIMIZATIONGOAL_BUY_COUPONS                            | 购券                                                         |
| OPTIMIZATIONGOAL_LEAVE_INFORMATION                      | 咨询留资                                                     |
| OPTIMIZATIONGOAL_CORE_ACTION                            | 关键行为                                                     |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION_RATIO                | 次留率                                                       |
| OPTIMIZATIONGOAL_PROMOTION_READ_ARTICLE                 | 阅读文章                                                     |
| OPTIMIZATIONGOAL_RESERVATION_CHECK                      | 意向表单                                                     |
| OPTIMIZATIONGOAL_OPEN_ACCOUNT                           | 券商开户                                                     |
| OPTIMIZATIONGOAL_SEVEN_DAY_ECOMMERCE_ORDER              | 7 日下单                                                     |
| OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_THREE_MSG          | 三句话咨询                                                   |
| OPTIMIZATIONGOAL_RENEWAL                                | 保险续费                                                     |
| OPTIMIZATIONGOAL_LOW_PRICE_COURSE                       | 低价课转化                                                   |
| OPTIMIZATIONGOAL_EVERY_DAY_RETENTION                    | 七日内每次留存成本                                           |
| OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE_UV             | 关键页面访问人数                                             |
| OPTIMIZATIONGOAL_LIVE_STREAM_DURATION_1MIN              | 直播观看一分钟                                               |
| OPTIMIZATIONGOAL_LIVE_STREAM_INTERACTION                | 直播互动                                                     |
| OPTIMIZATIONGOAL_ECOMMERCE_CANCEL_ORDER                 | 取消订单率                                                   |
| OPTIMIZATIONGOAL_CLICK_LEADS_COMPONENT                  | 点击留资组件                                                 |
| OPTIMIZATIONGOAL_REGULAR_PRICE_COURSE                   | 正价课                                                       |
| OPTIMIZATIONGOAL_VISIT_STROE                            | 到店                                                         |
| OPTIMIZATIONGOAL_EFFECTIVE_ENTRY                        | 每日首次启动                                                 |
| OPTIMIZATIONGOAL_CREDIT_RATIO                           | 完件授信率                                                   |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_DEAL                   | 全域通直播间成交                                             |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_PRODUCT_CLICK          | 全域通直播间商品点击                                         |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_AUDIENCE               | 全域通直播间观众                                             |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_COMMENT                | 全域通直播评论次数                                           |
| OPTIMIZATIONGOAL_QYT_LIVE_STREAM_FANS                   | 全域通直播间涨粉                                             |
| OPTIMIZATIONGOAL_24H_FIRSTPAY                           | 首日首次付费                                                 |
| OPTIMIZATIONGOAL_STORE_STAY                             | 店铺停留                                                     |
| OPTIMIZATIONGOAL_LOW_PRICE_INSURANCE_PAYMENT            | 低价险支付                                                   |
| OPTIMIZATIONGOAL_UNDERWRITING                           | 贷款额度开通                                                 |
| OPTIMIZATIONGOAL_FIRST_WITHDRAW                         | 借款                                                         |
| OPTIMIZATIONGOAL_R3                                     | 种草(R3)                                                     |
| OPTIMIZATIONGOAL_BRIDGING_COURSE_COMPLETED              | 先导课完课                                                   |
| OPTIMIZATIONGOAL_THIRTY_SECONDS_SCANCODE_WX             | 浏览三十秒扫码加粉                                           |
| OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_REFUND_RATE     | 24 小时退款率                                                |
| OPTIMIZATIONGOAL_VIEW_DRAMA_DURATION_1MIN               | 观看转化                                                     |
| OPTIMIZATIONGOAL_FIRST_PROMPT_INPUT                     | 首次发送提示语                                               |
| OPTIMIZATIONGOAL_ECOMMERCE_GIFTING                      | 送礼下单                                                     |
| OPTIMIZATIONGOAL_CLUE_PAY_SUCCEED                       | 支付后存在意向                                               |
| OPTIMIZATIONGOAL_30DAY_UNSUBSCRIBE_RATE                 | 30 日退订率                                                  |
| OPTIMIZATIONGOAL_NET_PROFIT_24H                         | 二十四小时净成交成本                                         |
| OPTIMIZATIONGOAL_EFFECTIVE_INSURE                       | 有效投保                                                     |
| OPTIMIZATIONGOAL_COLLECT                                | 店铺收藏                                                     |

小游戏 openlink 选项

| 名称                               | 描述 |
| ---------------------------------- | ---- |
| MINI_GAME_OPEN_LINK_OPTION_UNKNOWN | 未知 |
| MINI_GAME_OPEN_LINK_OPTION_ON      | 开启 |
| MINI_GAME_OPEN_LINK_OPTION_OFF     | 关闭 |

应用自动下载行为选项

| 名称                             | 描述               |
| -------------------------------- | ------------------ |
| APP_DOWNLOAD_OPTION_UNKNOWN      | 默认行为(自动下载) |
| APP_DOWNLOAD_OPTION_LANDING_PAGE | 仅支持在落地页下载 |

推广目标 id 选项

| 名称         | 描述   |
| ------------ | ------ |
| REQUIRED     | 必须   |
| NOT_REQUIRED | 不需要 |
| OPTIONAL     | 可选   |

广告直播状态

| 名称                    | 描述       |
| ----------------------- | ---------- |
| AD_STATUS_NORMAL        | 有效       |
| AD_STATUS_TO_BE_STARTED | 直播待开始 |
| AD_STATUS_ENDED         | 直播已结束 |

转化价值优化开关状态

| 名称                              | 描述 |
| --------------------------------- | ---- |
| CONVERSION_VALUE_OPT_SWITCH_CLOSE | 关闭 |
| CONVERSION_VALUE_OPT_SWITCH_OPEN  | 开启 |

前端配置类型

| 名称                 | 描述         |
| -------------------- | ------------ |
| CUSTOM_REPORT_COLUMN | 报表自定义列 |

配置数据来源

| 名称                           | 描述         |
| ------------------------------ | ------------ |
| UNKNOWN                        | 未知(0)      |
| MULTI_ACCT_WORKBENCH           | 多账号工作台 |
| ADP                            | 投放端       |
| DELIVERY_PLATFORM_EDITION_GAME | 游戏专业版   |

前端配置类型，支持 userid 维度

| 名称                 | 描述         |
| -------------------- | ------------ |
| UNKNOWN              | 未知(0)      |
| CUSTOM_REPORT_COLUMN | 报表自定义列 |

计算状态

| 名称                                 | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| CALCULATE_STATUS_PENDING             | 审核中（广告提交后等待进入审核）                             |
| CALCULATE_STATUS_DENIED              | 审核不通过                                                   |
| CALCULATE_STATUS_FROZEN              | 已冻结（广告因状态异常，被冻结并停止投放）                   |
| CALCULATE_STATUS_SUSPEND             | 暂停中                                                       |
| CALCULATE_STATUS_READY               | 待投放（已审核通过，但广告未到开始时间）                     |
| CALCULATE_STATUS_ACTIVE              | 投放中                                                       |
| CALCULATE_STATUS_STOP                | 投放结束                                                     |
| CALCULATE_STATUS_NOT_READY_IMG       | 准备中（指广告相关的创意、渠道包还没通过审核）               |
| CALCULATE_STATUS_ACTIVE_ACC_FROZEN   | 投放被暂停（账户被冻结）                                     |
| CALCULATE_STATUS_ACTIVE_ACC_LIMIT    | 投放被暂停（账户到达日预算）（前端给广告主展示状态应为“投放中”） |
| CALCULATE_STATUS_ACTIVE_CAM_LIMIT    | 投放被暂停(推广计划到达日预算)（前端给广告主展示状态应为“投放中”） |
| CALCULATE_STATUS_ACTIVE_CAM_PAUSED   | 投放被暂停(推广计划暂停)（前端给广告主展示状态应为“投放中”） |
| CALCULATE_STATUS_PART_READY          | 部分待投放（广告下有部分创意已审核通过，但没到投放时间。建议前端给广告主展示状态为”待投放”） |
| CALCULATE_STATUS_PART_ACTIVE         | 部分投放中（审核通过，已到投放时间。建议前端给广告主展示状态为“投放中”） |
| CALCULATE_STATUS_LOCAL_WEPAY_PENDING | 附近推待支付状态                                             |

探索状态

| 名称                      | 描述   |
| ------------------------- | ------ |
| EXPLORE_STATUS_UNEXPLORED | 未探索 |

微信公众号账户升级状态

| 名称         | 描述   |
| ------------ | ------ |
| UPGRADED     | 已升级 |
| NOT_UPGRADED | 未升级 |

设置视频号评论管理操作类型

| 名称                                  | 描述 |
| ------------------------------------- | ---- |
| SET_OBJECT_COMMENT_FLAG_OP_TYPE_OPEN  | 打开 |
| SET_OBJECT_COMMENT_FLAG_OP_TYPE_CLOSE | 关闭 |

浮层卡片类型

| 名称                            | 描述         |
| ------------------------------- | ------------ |
| FLOATING_ZONE_TYPE_UNKNOWN      | 历史数据     |
| FLOATING_ZONE_TYPE_IMAGE_TEXT   | 图文复合类型 |
| FLOATING_ZONE_TYPE_SINGLE_IMAGE | 单图类型     |
| FLOATING_ZONE_TYPE_MULTI_BUTTON | 多按钮类型   |
| FLOATING_ZONE_TYPE_SLIDER_CARD  | 轮播卡片类型 |

制作平台

| 名称                           | 描述     |
| ------------------------------ | -------- |
| LANDING_PAGE_PLATFORM_YOUZAN   | 有赞     |
| LANDING_PAGE_PLATFORM_YIYE     | 一叶智能 |
| LANDING_PAGE_PLATFORM_JINSHUJU | 金数据   |
| LANDING_PAGE_PLATFORM_wEIMOB   | 微盟     |

企微客服集类型

| 名称                    | 描述               |
| ----------------------- | ------------------ |
| GROUP_TYPE_DEFAULT      | 默认值-单客服组    |
| GROUP_TYPE_GROUP_LBS    | 多客服组地理集分配 |
| GROUP_TYPE_GROUP_RANDOM | 多客服组均匀分配   |

流量覆盖披露规则跳转类型

| 名称                                           | 描述                                     |
| ---------------------------------------------- | ---------------------------------------- |
| UNKNOWN                                        | 未知                                     |
| VIDEO_DURATION_60                              | 视频元素最大时长为 60s                   |
| FLOATING_ZONE_OPEN_IMAGE_TEXT                  | 浮层卡片组件打开且为图文复合类型         |
| FLOATING_ZONE_TYPE_SWITCH_IMAGE_TEXT           | 浮层卡片组件类型切换为图文复合类型       |
| BRAND_JUMP_TYPE_WECHAT_CHANNELS_PROFILE        | 头像昵称组件跳转类型为视频号 Profile 页  |
| BRAND_JUMP_TYPE_OPEN_SELECT_FIRST              | 头像昵称跳转打开并且选择第一个           |
| ADD_NEW_TEMPLATE_ID_720                        | 推荐新增创意模板横版视频 16:9            |
| ADD_NEW_TEMPLATE_ID_721                        | 推荐新增创意模板竖版视频 9:16            |
| ADD_NEW_TEMPLATE_ID_711                        | 推荐新增创意模板横版大图 16:9            |
| ADD_NEW_TEMPLATE_ID_712                        | 推荐新增创意模板竖版大图 9:16            |
| ADD_NEW_TEMPLATE_ID_925                        | 推荐新增创意模板 Banner 图片 20:7        |
| VIDEO_DURATION_180                             | 视频元素最大时长为 180s                  |
| BRAND_JUMP_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL | 头像昵称组件跳转类型为微信公众号         |
| BRAND_JUMP_TYPE_H5_PROFILE                     | 头像昵称组件跳转类型为品牌简介页         |
| BRAND_JUMP_TYPE_SEARCH_BRAND_AREA              | 头像昵称组件跳转类型为搜一搜超级品专     |
| BRAND_JUMP_TYPE_TYPE_BRAND                     | 头像昵称组件跳转类型为品牌形象（无跳转） |
| ADD_VIDEO_SIZE_16_9                            | 推荐新增视频尺寸 16:9                    |
| ADD_VIDEO_SIZE_9_16                            | 推荐新增视频尺寸 9:16                    |
| ADD_IMAGE_SIZE_16_9                            | 推荐新增图片尺寸 16:9                    |
| ADD_IMAGE_SIZE_9_16                            | 推荐新增图片尺寸 9:16                    |
| ADD_IMAGE_SIZE_20_7                            | 推荐新增图片尺寸 20:7                    |
| LANDING_PAGE_USE_MULTI_SLOT                    | 推荐使用通投落地页                       |
| ADD_AUDIO                                      | 推荐新增音频组件                         |

询价结果

| 名称                  | 描述                   |
| --------------------- | ---------------------- |
| INQUIRY_SUCCESS       | 询价成功               |
| INQUIRY_ONGOING       | 询价中                 |
| INQUIRY_SUCCESS_UNUSE | 询价成功（暂时不使用） |
| INQUIRY_FAIL          | 询价失败               |
| INQUIRY_CONFLICT      | 询价冲突,排期被占      |
| INQUIRY_IS_EXPIRED    | 询价已失效             |
| INQUIRY_WAITING       | 待询价                 |

锁量状态

| 名称                                  | 描述                                       |
| ------------------------------------- | ------------------------------------------ |
| FLOW_LOCK_STATUS_NO_LOCK              | 未锁定                                     |
| FLOW_LOCK_STATUS_LOCKING              | 锁定中                                     |
| FLOW_LOCK_STATUS_LOCK_SUCESS          | 已锁定                                     |
| FLOW_LOCK_STATUS_LOCK_FAIL            | 锁定失败                                   |
| FLOW_LOCK_STATUS_UNLOCKING            | 解锁中                                     |
| FLOW_LOCK_STATUS_UNLOCK_SUCESS        | 已解锁                                     |
| FLOW_LOCK_STATUS_UNLOCK_FAIlED        | 解锁失败                                   |
| FLOW_LOCK_STATUS_LOCK_BALANCE_SUCCESS | 互选和小任务特殊模式，锁钱不锁量，可入 ckv |
| FLOW_LOCK_STATUS_INIT_LOCK            | Campaign 初始化的状态,未锁排期             |

关键词是否使用组出价

| 名称                | 描述 |
| ------------------- | ---- |
| USE_GROUP_PRICE     | 是   |
| NOT_USE_GROUP_PRICE | 否   |

关键词出价修改类型

| 名称                | 描述                |
| ------------------- | ------------------- |
| RAISE_PRICE_VALUE   | 提高/降低出价至多少 |
| RAISE_PRICE_PERCENT | 提高/降低出价百分比 |

关键词匹配方式

| 名称         | 描述         |
| ------------ | ------------ |
| EXACT_MATCH  | 精确匹配     |
| WIDE_MATCH   | 广泛匹配     |
| WORD_MATCH   | 短语匹配     |
| PHRASE_MATCH | 短语核心匹配 |

关键词暂停状态

| 名称                   | 描述 |
| ---------------------- | ---- |
| KEYWORD_STATUS_NORMAL  | 正常 |
| KEYWORD_STATUS_SUSPEND | 暂停 |

数据版本

| 名称                          | 描述           |
| ----------------------------- | -------------- |
| AD_DATA_MODEL_VERSION_UNKNOWN | 未知-等价于 V2 |
| AD_DATA_MODEL_VERSION_V1      | 1.0 数据       |
| AD_DATA_MODEL_VERSION_V2      | 2.0 数据       |
| AD_DATA_MODEL_VERSION_V3      | 3.0 数据       |

关键词支持落地页类型

| 名称                                       | 描述         |
| ------------------------------------------ | ------------ |
| KEYWORD_LANDING_PAGE_ACTION_TYPE_DEFAULT   | 默认值       |
| KEYWORD_LANDING_PAGE_ACTION_TYPE_CUSTOMIZE | 自定义落地页 |

竞价关键词状态

| 名称                                     | 描述                 |
| ---------------------------------------- | -------------------- |
| BIDWORD_STATUS_APPROVAL_PASSED           | 审核通过             |
| BIDWORD_STATUS_APPROVAL_PENDING          | 审核中               |
| BIDWORD_STATUS_APPROVAL_DENIED           | 审核不通过           |
| BIDWORD_STATUS_BID_PRICE_LOWER           | 出价过低             |
| BIDWORD_STATUS_BID_PRICE_PARTIALLY_LOWER | 部分出价过低         |
| BIDWORD_STATUS_NORMAL                    | 有效                 |
| BIDWORD_STATUS_DISPLAY_LIMITED           | 展现受限             |
| BIDWORD_STATUS_NORMAL_BUT_NOT_FILL       | 有效（不宜回插展现） |

广告主同屏展现状态

| 名称                               | 描述 |
| ---------------------------------- | ---- |
| ADVERTISER_SAME_STAGE_STATUS_CLOSE | 关闭 |
| ADVERTISER_SAME_STAGE_STATUS_OPEN  | 开启 |

品牌广告类型

| 名称               | 描述           |
| ------------------ | -------------- |
| BRAND_AD_TYPE_NONE | 非品牌广告     |
| BRAND_AD_TYPE_PDB  | 保价保量       |
| BRAND_AD_TYPE_RTB  | 实时竞价       |
| BRAND_AD_TYPE_PD   | 优先交易       |
| BRAND_AD_TYPE_PA   | 邀请制私有竞价 |

优化目标类型

| 名称                                   | 描述     |
| -------------------------------------- | -------- |
| OPTIMIZATIONGOAL_CLICK                 | 点击     |
| OPTIMIZATIONGOAL_PAGE_RESERVATION      | 表单预约 |
| OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER | 领券     |
| OPTIMIZATIONGOAL_BUY_COUPONS           | 购券     |

性别（定向）

| 名称   | 描述 |
| ------ | ---- |
| MALE   | 男性 |
| FEMALE | 女性 |

用户学历

| 名称           | 描述 |
| -------------- | ---- |
| DOCTOR         | 博士 |
| MASTER         | 硕士 |
| BACHELOR       | 本科 |
| SENIOR         | 高中 |
| JUNIOR         | 初中 |
| PRIMARY        | 小学 |
| JUNIOR_COLLEGE | 专科 |

本地推套餐

| 名称               | 描述      |
| ------------------ | --------- |
| PACKAGE_LEVEL_2000 | 2000 套餐 |
| PACKAGE_LEVEL_5000 | 5000 套餐 |
| PACKAGE_LEVEL_9000 | 9000 套餐 |

落地页类型

| 名称                                 | 描述                                   |
| ------------------------------------ | -------------------------------------- |
| PAGE_TYPE_MINI_PROGRAM_WECHAT        | 微信小程序落地页(广告主自定义的小程序) |
| PAGE_TYPE_MINI_PROGRAM_CANVAS_WECHAT | 微信小程序原生页(广告提供的落地页模板) |

profile 页类型

| 名称                          | 描述                      |
| ----------------------------- | ------------------------- |
| LOCAL_PROFILE_TYPE_DEFAULT    | 默认类型,使用开户头像昵称 |
| LOCAL_PROFILE_TYPE_CUSTOMIZED | 自定义类型                |

客户设置的状态

| 名称              | 描述 |
| ----------------- | ---- |
| AD_STATUS_NORMAL  | 有效 |
| AD_STATUS_SUSPEND | 暂停 |

操作符

| 名称           | 描述      |
| -------------- | --------- |
| EQUALS         | 等于      |
| CONTAINS       | 模糊匹配  |
| LESS_EQUALS    | 小于等于  |
| LESS           | 小于      |
| GREATER_EQUALS | 大于等于  |
| GREATER        | 大于      |
| IN             | IN 操作符 |

报表级别

| 名称                           | 描述               |
| ------------------------------ | ------------------ |
| REPORT_LEVEL_ADVERTISER_WECHAT | 微信广告主级别报表 |
| REPORT_LEVEL_ADGROUP_WECHAT    | 微信广告组级别报表 |

推广实况移动 OS 类型

| 名称                   | 描述    |
| ---------------------- | ------- |
| PROMOTIONFACTS_ANDROID | android |
| PROMOTIONFACTS_IOS     | ios     |

屏蔽展现策略开关

| 名称                    | 描述 |
| ----------------------- | ---- |
| BLOCK_RULE_ENABLE_CLOSE | 关闭 |
| BLOCK_RULE_ENABLE_OPEN  | 启用 |

屏蔽展现策略时间窗口

| 名称                             | 描述    |
| -------------------------------- | ------- |
| BLOCK_RULE_TIME_WINDOW_15_MINUTE | 15 分钟 |
| BLOCK_RULE_TIME_WINDOW_1_HOUR    | 1 小时  |
| BLOCK_RULE_TIME_WINDOW_6_HOUR    | 6 小时  |

屏蔽展现策略类型

| 名称                    | 描述     |
| ----------------------- | -------- |
| BLOCK_RULE_TYPE_IP      | IP 屏蔽  |
| BLOCK_RULE_TYPE_VISITOR | 访客屏蔽 |

关键词审核状态

| 名称                            | 描述       |
| ------------------------------- | ---------- |
| KEYWORD_APPROVAL_STATUS_NORMAL  | 审核通过   |
| KEYWORD_APPROVAL_STATUS_PENDING | 待审核     |
| KEYWORD_APPROVAL_STATUS_DENIED  | 审核不通过 |

免费加词状态

| 名称                       | 描述                 |
| -------------------------- | -------------------- |
| FREE_KEYWORD_STATUS_NORMAL | 正常状态，不是免费词 |
| FREE_KEYWORD_STATUS_UNLOCK | 免费词未锁量         |
| FREE_KEYWORD_STATUS_LOCK   | 免费词锁量           |

视频号评论分析正负性分类

| 名称               | 描述 |
| ------------------ | ---- |
| SENTIMENT_NEUTRAL  | 中性 |
| SENTIMENT_POSITIVE | 正向 |
| SENTIMENT_NEGATIVE | 负向 |
| SENTIMENT_INVALID  | 无关 |

评论状态

| 名称      | 描述     |
| --------- | -------- |
| General   | 普通评论 |
| Selection | 精选评论 |

出价标签

| 名称      | 描述     |
| --------- | -------- |
| AGE       | 年龄     |
| AUDIENCE  | 人群     |
| CELLPHONE | 手机品牌 |
| CITY      | 城市     |
| GENDER    | 性别     |
| OS        | 操作系统 |

人群类型

| 名称          | 描述         |
| ------------- | ------------ |
| CUSTOMER_FILE | 号码文件人群 |
| LOOKALIKE     | 拓展人群     |
| USER_ACTION   | 用户行为人群 |
| LBS           | 地理位置人群 |
| KEYWORD       | 关键词人群   |
| AD            | 广告人群     |
| COMBINE       | 组合人群     |
| LABEL         | 标签人群     |

匹配规则类型

| 名称   | 描述                 |
| ------ | -------------------- |
| URL    | 通过 url 进行匹配    |
| ACTION | 通过行为参数进行匹配 |

行为人群提取类型

| 名称        | 描述                     |
| ----------- | ------------------------ |
| FILTER      | 基于过滤规则进行人群提取 |
| AGGREGATION | 基于聚合规则进行人群提取 |

匹配规则操作符

| 名称        | 描述                                         |
| ----------- | -------------------------------------------- |
| LT          | 小于，应用于数字间的比较                     |
| GT          | 大于，应用于数字的比较                       |
| EQ          | 等于，应用于数字、字符串、布尔型变量的比较   |
| NE          | 不等于，应用于数字、字符串、布尔型变量，比较 |
| CONTAIN     | 包含，应用于字符串的包含                     |
| NOT_CONTAIN | 不包含，等于字符串的不包含                   |

标准行为类型

| 名称                                | 描述                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| CUSTOM                              | 自定义                                                       |
| REGISTER                            | 注册                                                         |
| VIEW_CONTENT                        | 关键页面访问                                                 |
| CONSULT                             | 咨询(请在 action_param 中标识具体的咨询行为：action_param 中的 key 填写 consult_type，value 填写 ONLINE_CONSULT/MAKE_PHONE_CALL/RESERVE_PHONE_NUMBER 分别表示网页咨询/电话咨询/电话回拨) |
| ADD_TO_CART                         | 加入购物车                                                   |
| PURCHASE                            | 付费                                                         |
| ACTIVATE_APP                        | 激活应用                                                     |
| SEARCH                              | 搜索                                                         |
| ADD_TO_WISHLIST                     | 收藏                                                         |
| INITIATE_CHECKOUT                   | 开始结算                                                     |
| COMPLETE_ORDER                      | 下单                                                         |
| DOWNLOAD_APP                        | 下载应用                                                     |
| START_APP                           | 启动应用                                                     |
| RATE                                | 评分                                                         |
| PAGE_VIEW                           | 页面浏览，仅在 user_action_set 为站点时有效                  |
| RESERVATION                         | 预约                                                         |
| SHARE                               | 分享                                                         |
| APPLY                               | 申请                                                         |
| CLAIM_OFFER                         | 领取卡券(如 web 落地页领取优惠券等信息的行为)                |
| NAVIGATE                            | 导航(如点击导航按钮后打开地图页面的行为)                     |
| PRODUCT_RECOMMEND                   | 商品推荐(动态创意客户直接推送推荐结果时使用)                 |
| VISIT_STORE                         | 到店(线下行为，线下零售商接入数据时使用)                     |
| TRY_OUT                             | 体验(线下行为，线下零售商接入数据时使用)                     |
| DELIVER                             | 发货，订单发货                                               |
| CONFIRM_EFFECTIVE_LEADS             | 确认有效线索（线索管理用）                                   |
| CONFIRM_POTENTIAL_CUSTOMER          | 确认潜在客户（线索管理用）                                   |
| CREATE_ROLE                         | 创建角色（主要用于游戏）                                     |
| AUTHORIZE                           | 授权（主要用于游戏）                                         |
| TUTORIAL_FINISH                     | 完成新手教程（主要用于游戏）                                 |
| SCANCODE                            | 加企业微信客服                                               |
| ENTER_BACKGROUND                    | App 退到后台                                                 |
| ENTER_FOREGROUND                    | App 进入前台                                                 |
| TICKET                              | 心跳维持,每分钟一次                                          |
| LOGIN                               | 登录                                                         |
| QUEST                               | 完成关键节点                                                 |
| UPDATE_LEVEL                        | 用户升级                                                     |
| CREATE                              | 创建一个新的页面,页面可以是 Activity、Fragment、ViewController |
| PAUSE                               | 暂停页面                                                     |
| RESUME                              | 恢复页面 ,页面可以是 Activity、Fragment、ViewController      |
| APP_QUIT                            | 退出 App                                                     |
| BIND_ACCOUNT                        | 绑定社交账号                                                 |
| ADD_PAYMENT                         | 添加支付方式                                                 |
| PRE_CREDIT                          | 预授信                                                       |
| CREDIT                              | 授信                                                         |
| WITHDRAW_DEPOSITS                   | 提现                                                         |
| LANDING_PAGE_CLICK                  | 落地页内点击                                                 |
| SELECT_COURSE                       | 选课                                                         |
| RE_FUND                             | 退款                                                         |
| PLATFORM_VIEW                       | 平台落地页浏览                                               |
| ONE_DAY_LEAVE                       | 次日留存                                                     |
| PRODUCT_VIEW                        | 商品详情页浏览                                               |
| PURCHASE_MEMBER_CARD                | 会员购买                                                     |
| ONLINE_CONSULT                      | 网页咨询                                                     |
| MAKE_PHONE_CALL                     | 电话咨询                                                     |
| ADD_GROUP                           | 加群                                                         |
| ADD_CUSTOMER_PAGE_VIEW              | 添加客户引导页面浏览                                         |
| ADD_CUSTOMER_PAGE_INTERACTIVE       | 添加客户引导页面互动                                         |
| CUSTOMER_PROMOTION_PAGE_VIEW        | 客户活动页面浏览                                             |
| CUSTOMER_PROMOTION_PAGE_INTERACTIVE | 客户活动页面互动                                             |
| ABNORMAL_ACTION                     | 广告渠道带来，但客户认定异常的用户产生的转化行为             |
| LIVE_STREAM                         | 观看直播                                                     |
| SCANCODE_WX                         | 长按扫码                                                     |
| STAY_PAY_7                          | 7 日内复购                                                   |
| STAY_PAY_15                         | 15 日内复购                                                  |
| STAY_PAY_30                         | 30 日内复购                                                  |
| INSURANCE_PAY                       | 保险支付                                                     |
| RESERVATION_CHECK                   | 用户意向表单                                                 |
| PARTICIPATED                        | 低价课首次参课                                               |
| COMPLETED                           | 低价课完课                                                   |
| REGULAR_PRICE_COURSE                | 正价课转化                                                   |
| DROP_OUT                            | 退课                                                         |
| CONFIRM_DELIVERY_ORDER              | 确认邮寄订单                                                 |
| CANCEL_DELIVERY_ORDER               | 取消邮寄订单                                                 |
| OPEN_ACCOUNT                        | 开户                                                         |
| DEPOSIT                             | 入金                                                         |
| TRADE                               | 交易                                                         |
| SECURITY_NEGATIVE                   | 证券负向                                                     |
| AD_CLICK                            | 广告点击                                                     |
| AD_IMPRESSION                       | 广告曝光                                                     |
| SIGN_IN                             | 签收，订单签收                                               |
| TRY_OUT_INTENTION                   | 排程                                                         |
| INEFFECTIVE_LEADS                   | 无效线索                                                     |
| READ_ARTICLE                        | 文章阅读                                                     |
| COMMENT                             | 评论                                                         |
| CARD_CLICK                          | 卡片点击                                                     |
| WECOM_CONSULT                       | 加企微后开口                                                 |
| BIND_CARD                           | 绑卡                                                         |
| LOW_PRICE_COURSE                    | 低价课转化                                                   |
| ADD_WECHAT                          | 添加个人企业微信成功                                         |
| PRE_PAY                             | 预付定金                                                     |
| QUIT_GROUP                          | 退群                                                         |
| PHONE_CONNECTED                     | 电话联系完成                                                 |
| RE_ACTIVE                           | 沉默唤起                                                     |
| CLAIM_COURSE                        | 领课                                                         |
| VIEW_ACQUISITION_CONTENT            | 拉新关键页面访问                                             |
| TERMINATION                         | 保险脱退                                                     |
| RENEWAL                             | 保险续费                                                     |
| CONSULT_INTENTION                   | 开口后关键意向                                               |

聚合规则操作符

| 名称  | 描述     |
| ----- | -------- |
| SUM   | 累加和   |
| MAX   | 最大值   |
| MIN   | 最小值   |
| COUNT | 频次统计 |

频次统计类型

| 名称     | 描述           |
| -------- | -------------- |
| BY_TIMES | 按发生次数统计 |
| BY_DAY   | 按发生天数统计 |

聚合规则操作符

| 名称               | 描述             |
| ------------------ | ---------------- |
| COMPARATOR_GE      | 大于等于         |
| COMPARATOR_LE      | 小于等于         |
| COMPARATOR_BETWEEN | 在最大最小值之间 |
| COMPARATOR_EQ      | 等于             |

LBS 类型

| 名称            | 描述       |
| --------------- | ---------- |
| POI             | POI        |
| CROSS_CITY      | 跨城市     |
| CUSTOM_LOCATION | 自定义坐标 |

week 类型

| 名称      | 描述   |
| --------- | ------ |
| MONDAY    | 星期一 |
| TUESDAY   | 星期二 |
| WEDNESDAY | 星期三 |
| THURSDAY  | 星期四 |
| FRIDAY    | 星期五 |
| SATURDAY  | 星期六 |
| SUNDAY    | 星期日 |

LBS 兴趣点类型

| 名称      | 描述             |
| --------- | ---------------- |
| ALL       | 全部，即不限类型 |
| TRAVEL_IN | 旅行             |

频次比较操作符类型

| 名称               | 描述 |
| ------------------ | ---- |
| COMPARATOR_GE      | 大于 |
| COMPARATOR_LE      | 小于 |
| COMPARATOR_BETWEEN | 区间 |
| COMPARATOR_EQ      | 等于 |

区域类型

| 名称   | 描述 |
| ------ | ---- |
| CIRCLE | 圆形 |

广告人群支持的规则类型

| 名称       | 描述 |
| ---------- | ---- |
| EXPOSURE   | 曝光 |
| CLICK      | 点击 |
| CONVERSION | 转化 |

广告人群支持的转化类型

| 名称                | 描述           |
| ------------------- | -------------- |
| APP_START_DOWNLOAD  | APP 开始下载   |
| APP_FINISH_DOWNLOAD | APP 下载完成   |
| APP_INSTALL         | APP 安装       |
| APP_ACTIVATE        | APP 激活       |
| ORDER               | 下单           |
| RESERVATION         | 表单预约       |
| REGISTRATION_APP    | 注册-APP       |
| REGISTRATION_WEB    | 注册-Web       |
| PURCHASE_APP        | 付费-APP       |
| PURCHASE_WEB        | 付费-Web       |
| APPLY_APP           | 申请-APP       |
| APPLY_WEB           | 申请-Web       |
| ADD_TO_CART_WEB     | 加入购物车-Web |
| ADD_TO_CART_APP     | 加入购物车-APP |
| CONSULTATION_WEB    | 网页咨询       |
| CONSULTATION_PHONE  | 电话咨询       |
| CALL_BACK           | 电话回拨       |
| ADD_TO_WISHLIST     | 收藏           |
| SHARE               | 分享           |

商品类型

| 名称                                   | 描述                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| PRODUCT_TYPE_APP_ANDROID_OPEN_PLATFORM | 腾讯开放平台移动应用，创建广告前需通过 products/add 接口（V1.0）、promoted_objects/add 接口（V1.1）登记腾讯开放平台的应用 id，创建广告时需填写之前登记的应用 id，仅普通展示广告（campaign_type = CAMPAIGN_TYPE_NORMAL）支持 |
| PRODUCT_TYPE_APP_IOS                   | 苹果应用，创建广告前需通过 products/add 接口（V1.0）、promoted_objects/add 接口（V1.1）登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id，仅普通展示广告（campaign_type = CAMPAIGN_TYPE_NORMAL）支持 |
| PRODUCT_TYPE_LINK_JD                   | 京东 POP 商户直投广告，创建广告时无需先创建和指定标的物      |
| PRODUCT_TYPE_DIANPING_SHOP             | 点评商铺，创建广告时无需先创建和指定标的物                   |
| PRODUCT_TYPE_DIANPING_COUPON           | 点评优惠券，创建广告时无需先创建和指定标的物                 |
| PRODUCT_TYPE_DIANPING_TUAN             | 点评团购，创建广告时无需先创建和指定标的物                   |
| PRODUCT_TYPE_ECOMMERCE                 | 商品推广，创建广告时无需创建和指定标的物，所有的 campaign_type 均支持投放 |
| PRODUCT_TYPE_LINK_WECHAT               | 微信品牌页，创建广告时无需创建和指定标的物，仅微信公众号广告（campaign_type = CAMPAIGN_TYPE_WECHAT_OFFICIAL_ACCOUNTS）以及微信朋友圈广告（campaign_type = CAMPAIGN_TYPE_WECHAT_MOMENTS）支持 |
| PRODUCT_TYPE_LINK_MOBILE_QQ_MP         | QQ 公众平台消息广告                                          |
| PRODUCT_TYPE_APP_ANDROID_UNION         | 移动联盟 app                                                 |
| PRODUCT_TYPE_LBS_WECHAT                | 微信本地门店推广，创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，仅微信朋友圈广告（campaign_type = CAMPAIGN_TYPE_WECHAT_MOMENTS）支持门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PRODUCT_TYPE_QZONE_PAGE_VIDEO          | 认证空间-视频说说                                            |
| PRODUCT_TYPE_LINK                      | 普通链接，创建广告时无需创建和指定标的物，仅普通展示广告（campaign_type = CAMPAIGN_TYPE_NORMAL）支持 |

数据应用

| 名称 | 描述         |
| ---- | ------------ |
| DMP  | 数据管理平台 |
| TDC  | 品牌数据智库 |
| TDP  | 生态数据智库 |

人群来源

| 名称                | 描述                                 |
| ------------------- | ------------------------------------ |
| ADVERTISER_OWN_DATA | 一方人群，能在投放端竞价投放中使用   |
| TENCENT_DATA        | 二方人群，不能在投放端竞价投放中使用 |
| UNKNOWN             | 未知类型，不能在投放端竞价投放中使用 |

人群状态

| 名称       | 描述     |
| ---------- | -------- |
| PENDING    | 待处理   |
| PROCESSING | 处理中   |
| SUCCESS    | 成功可用 |
| ERROR      | 错误     |
| FROZEN     | 冻结     |
| THAWING    | 解冻中   |
| LOCKING    | 锁定     |

人群包在线状态

| 名称    | 描述   |
| ------- | ------ |
| ONLINE  | 在线   |
| LOADING | 上线中 |
| OFFLINE | 不在线 |

号码包类型

| 名称                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| HASH_IDFA           | MD5 加密后的 IDFA                                            |
| HASH_IMEI           | MD5 加密后的 IMEI                                            |
| HASH_MOBILE_PHONE   | MD5 加密后的手机号码包                                       |
| IDFA                | IDFA 包                                                      |
| IMEI                | IMEI 包                                                      |
| WX_OPENID           | 微信用户的 openid，仅部分开通                                |
| WX_UNIONID          | 微信开放平台加密的微信号，用户在一个开放平台账户的所有公众号/小程序/移动应用下，拥有唯一的微信 UnionID |
| WECHAT_OPENID       | 微信用户的 openid，仅部分开通（原有 WX_OPENID 已升级为 WECHAT_OPENID，旧的枚举可以使用至 4 月 30 日，请及时更新接口以免影响您的后续使用） |
| SALTED_HASH_IMEI    | 腾讯广告提供的基于 MD5 以及 SHA256+SALT 的 IMEI 加密方案，如何查询 salt 请见 custom_data_salt/get。目前本字段仅对特定客户开放 |
| SALTED_HASH_IDFA    | 腾讯广告提供的基于 MD5 以及 SHA256+SALT 的 IDFA 加密方案，如何查询 salt 请见 custom_data_salt/get。目前本字段仅对特定客户开放 |
| OAID                | MSA 制定的匿名设备标识符，保留原始值，不需要 MD5 编码        |
| HASH_OAID           | 加密后的 OAID，为不计大小写的 32 位字符串。请使用 OAID 原值直接 MD5，不要转换大小写或去连接符 |
| SHA256_MOBILE_PHONE | SHA256 算法加密后的手机号，加密前为 11 位的纯数字串，加密后为不计大小写的 64 位数字字母串 |
| MD5_SHA256_IMEI     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 IMEI，加密前需要格式转化成 14 位或 15 位数字 + 小写字母串，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 a000002c9060f7，加密后 d64db6590359b386397db4d8a61dbc8fbd586b8a0b822ee6bc19316402d583b4 |
| MD5_SHA256_IDFA     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 IDFA，加密前需要格式转化成 32 位的数字 + 大写字母，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 FF1999CD-7177-4937-A474-74937A102630，加密后 9f2fc8b5eaaeba19fe9415767b13c1ec43c91aa039aa44684dfc8ec77d3b060 |
| MD5_SHA256_OAID     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 OAID，加密前请使用 OAID 原值直接 MD5，不要转换大小写或去连接符，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 12AD57A5C1D04C00A5B2F2F32213C617fa44f21b8c8744531b222481150a846f，加密后 7d36cf61fafac6df50aa7c874148e8241fcb57c61268037d19ed86389100bab0 |
| CAID                | 中国广告协会互联网广告标识，替代被苹果取消的 IDFA，限苹果设备，一般为 32 位。 |

文件操作类型

| 名称   | 描述                                                 |
| ------ | ---------------------------------------------------- |
| APPEND | 追加操作，该文件的数据将会追加到现有人群中           |
| REDUCE | 缩减操作，将会从对应的人群数据中缩减掉该文件中的数据 |

透视维度

| 名称                     | 描述         |
| ------------------------ | ------------ |
| AGE                      | 年龄         |
| GENDER                   | 性别         |
| EDUCATION                | 学历         |
| RESIDENT_AREA_CODE       | 常驻地域     |
| USER_BUSINESS_INTEREST   | 用户商业兴趣 |
| RELATIONSHIP_STATUS      | 婚恋状态     |
| LOCARD_INTEREST          | 用户兴趣     |
| LOCARD_BEHAVIOR_CATEGORY | 用户行为     |

用户行为源类型

| 名称                | 描述                 |
| ------------------- | -------------------- |
| WEB                 | 网页行为数据源       |
| ANDROID             | 安卓行为数据源       |
| IOS                 | IOS 行为数据源       |
| OFFLINE             | 线下行为数据源       |
| WECHAT              | 微信公众号行为数据源 |
| WECHAT_MINI_PROGRAM | 微信小程序行为数据源 |
| WECHAT_MINI_GAME    | 微信小游戏行为数据源 |

行为数据源用途

| 名称                  | 描述                     |
| --------------------- | ------------------------ |
| DEEP_DATA_COOPERATION | DMP 平台外的深度数据合作 |

数据源来源

| 名称          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| SELF_BUILT    | 自行调用创建接口或在 DMP 网页端通过新建数据源得到的数据源    |
| BE_AUTHORIZED | 被授权的数据源。具体包括两种途径：①数据源拥有方通过授权方式授权给你的数据源；②你申请得到的数据源 |

行为数据源授权范围类型

| 名称                              | 描述                                             |
| --------------------------------- | ------------------------------------------------ |
| GRANT_SCOPE_TYPE_ACCOUNT          | 指定广告账号                                     |
| GRANT_SCOPE_TYPE_BUSINESS_MANAGER | 商务管家账号下所有已认领的和未来被认领的广告账号 |

行为数据源授权权限类型

| 名称                                  | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| GRANT_PERMISSION_TYPE_TARGET          | 广告投放权限，支持被授权广告账号获取数据源内广告转化行为进行精准匹配归因 |
| GRANT_PERMISSION_TYPE_CREATE_AUDIENCE | 创建人群权限，支持在 DMP 中通过数据源提取行为人群并投放      |

商品库行业

| 名称                         | 描述            |
| ---------------------------- | --------------- |
| EC                           | 普通电商        |
| ESTATE                       | 房产租售        |
| VIDEO                        | 视频音乐        |
| CAR                          | 汽车销售        |
| NEWS_INFORMATION             | 内容资讯        |
| BEAUTY_PERSONAL_CARE         | 美妆个护（B&P） |
| RETAIL                       | 零售商超        |
| EDUCATION                    | 教育            |
| READING                      | 阅读行业        |
| INSURANCE                    | 保险            |
| LOAN                         | 贷款            |
| FINANCIAL                    | 理财            |
| BANKCARD                     | 银行卡          |
| WEDDING                      | 婚纱摄影        |
| SECURITIES                   | 证券            |
| DECORATION_BUILDING_MATERIAL | 家装建材        |
| CARRIER                      | 运营商          |
| GAME                         | 游戏行业        |

行为渠道

| 名称      | 描述                       |
| --------- | -------------------------- |
| NATURAL   | 自然量                     |
| TENCENT   | 腾讯渠道带来的转化行为     |
| BYTEDANCE | 字节跳动渠道带来的转化行为 |
| KUAISHOU  | 快手渠道带来的转化行为     |
| ALIBABA   | 阿里巴巴渠道带来的转化行为 |
| BAIDU     | 百度渠道带来的转化行为     |
| OTHERS    | 其他渠道带来的转化行为     |
| MULTIPLE  | 全渠道转化行为             |
| UNKNOWN   | 未知渠道                   |

时间粒度

| 名称   | 描述       |
| ------ | ---------- |
| DAILY  | 按天汇总   |
| HOURLY | 按小时汇总 |

聚合方式

| 名称        | 描述           |
| ----------- | -------------- |
| DOMAIN      | 按域名汇总     |
| ACTION_TYPE | 按行为类型汇总 |

应用场景类型

| 名称                       | 描述         |
| -------------------------- | ------------ |
| DMP                        | 腾讯广告知数 |
| TRANSFORMATION_ATTRIBUTION | 转化归因     |
| PKAM                       | pKAM         |
| DPA                        | 动态商品广告 |

数据源分发开关

| 名称       | 描述     |
| ---------- | -------- |
| SWITCH_ON  | 开启分发 |
| SWITCH_OFF | 关闭分发 |

模型特征类型

| 名称             | 描述             |
| ---------------- | ---------------- |
| AUTO_MOBILE_TYPE | 汽车行业特征类型 |

模型训练状态

| 名称       | 描述     |
| ---------- | -------- |
| PENDING    | 待开始   |
| PROCESSING | 处理中   |
| SUCCESS    | 训练成功 |
| ERROR      | 训练失败 |

属性数据源 id 类型

| 名称           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| IMEI           | '安卓设备 id，14 位或 15 位的纯数字串，或者 14 位或 15 位数字 + 小写字母串 |
| HASH_IMEI      | 加密后的 IMEI，加密前需要格式转化成 14 位或 15 位数字 + 小写字母串，加密后为不计大小写的 32 位数字字母串。示例：加密前 a000002c9060f7，加密后 f2d5a650733ca8c27d502b1c08da14e5 |
| IDFA           | 苹果设备 id，32 位的数字 + 大写字母串，用“—”杠分隔。示例：49E2084A-290C-41EF-AD20-E540CD6AE841 |
| HASH_IDFA      | IDFA 设备号保持大写，进行 MD5 编码，字段长度为 32 字节       |
| GDT_OPENID     | 基于 GDT Cookie Mapping 分配的 openid，不做处理，字段长度最小 1 字节，长度最大 64 字节 |
| HASH_PHONE     | 电话号码直接 MD5 编码，如 md5(13500000000)，字段长度为 32 字节 |
| MAC            | 硬件标识符，格式为 6 组 16 进制数，用“:”分隔，示例：08:00:20:0A:8C:6D |
| HASH_MAC       | mac 地址去掉‘:’ 后保持大写，进行 MD5 编码，字段长度为 32 字节，示例：加密前 02:00:00:00:00:00，加密后 e3f5536a141811db40efd6400f1d0a4e |
| OAID           | 移动安全联盟（MSA）制定的匿名设备标识符，保留原始值（不要转换大小写），不需要 MD5 编码，由数字字母和连接线构成，具体格式取决于各收集厂商和系统版本，长度有别。该 id 详情请前往 MSA 官网查看。 |
| HASH_OAID      | 加密后的 OAID，为不计大小写的 32 位字符串。请使用 OAID 原值直接 MD5，不要转换大小写或去连接符 |
| WECHAT_OPENID  | 微信 openid 保持原值。微信 openid 是微信用户在公众号/小程序 appid 下的唯一用户标识（appid 不同，则获取到的 openid 就不同），可用于永久标记一个用户。您只能上传您已经获得授权关联的 APPID 内的 openID。否则会解析失败。 |
| WECHAT_UNIONID | 微信 unionid 保持原值。微信 unionid 是微信用户在同一个微信开发者账号下的唯一用户标识（开发者账号不同，则获取到的 unionid 就不同），可用于永久标记一个用户。您只能上传您已经获得授权关联的 APPID 所属开发者账号内的 unionid。否则会解析失败。字段长度最小 1 字节，长度最大 64 字节 |
| QQ             | QQ 号原值                                                    |
| HASH_QQ        | MD5 加密后的 QQ 号                                           |

用户 id 类型

| 名称     | 描述    |
| -------- | ------- |
| CLICK_ID | 点击 id |

商圈类型

| 名称             | 描述       |
| ---------------- | ---------- |
| NORMAL_RESIDENCE | 普通住宅   |
| LUXURY_RESIDENCE | 高端住宅   |
| OFFICE           | 办公写字楼 |
| MIXED            | 住办混合   |

门店位置类型

| 名称        | 描述     |
| ----------- | -------- |
| DEPARTMENT  | 百货     |
| COMPOSITIVE | 综合卖场 |
| KERBSIDE    | 街边     |
| OFFICE      | 写字楼   |

配送范围类型

| 名称     | 描述   |
| -------- | ------ |
| CIRCLE   | 圆形   |
| VERTEXES | 多边形 |

管理类型

| 名称   | 描述 |
| ------ | ---- |
| DIRECT | 直营 |
| AGENT  | 加盟 |

营业状态

| 名称      | 描述     |
| --------- | -------- |
| OPEN      | 开店     |
| CLOSED    | 关店     |
| SUSPENDED | 暂停营业 |

数据集数据源类型

| 名称                            | 描述                     |
| ------------------------------- | ------------------------ |
| CUSTOM_FILE                     | 文件上传                 |
| AUDIENCE                        | 人群                     |
| MARKETING_INTELLIGENCE_PLATFORM | 腾讯内部营销咨询工具平台 |

数据集所属平台

| 名称 | 描述     |
| ---- | -------- |
| TDC  | TDC 平台 |
| TDP  | TDP 平台 |

数据集处理状态

| 名称       | 描述     |
| ---------- | -------- |
| PENDING    | 待处理   |
| PROCESSING | 处理中   |
| SUCCESS    | 成功可用 |
| ERROR      | 错误     |

号码包类型

| 名称             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| GDT_OPENID       | 基于 GDT Cookie Mapping 分配的 openid 包                     |
| HASH_IDFA        | MD5 加密后的 IDFA                                            |
| HASH_IMEI        | MD5 加密后的 IMEI                                            |
| HASH_MAC         | 加密后的 MAC 地址，加密前需要去除分隔符“:”后转为大写，示例：加密前 02:00:00:00:00:00，加密后 e3f5536a141811db40efd6400f1d0a4e |
| HASH_QQ          | MD5 加密后的 QQ 号                                           |
| IDFA             | IDFA 包                                                      |
| IMEI             | IMEI 包                                                      |
| MAC              | 硬件标识符，格式为 6 组 16 进制数，用“:”分隔，示例：08:00:20:0A:8C:6D |
| MOBILE_QQ_OPENID | QQ 手机版的 OPENID                                           |
| QQ               | QQ 号码包                                                    |
| WECHAT_OPENID    | 微信用户的 openid，仅部分开通（原有 WX_OPENID 已升级为 WECHAT_OPENID，旧的枚举可以使用至 4 月 30 日，请及时更新接口以免影响您的后续使用） |

文件处理状态

| 名称       | 描述     |
| ---------- | -------- |
| PENDING    | 待处理   |
| PROCESSING | 处理中   |
| SUCCESS    | 成功可用 |
| ERROR      | 错误     |

特征数据源类型

| 名称          | 描述                 |
| ------------- | -------------------- |
| PROPERTY_DATA | 属性数据             |
| USER_ACTION   | 行为数据             |
| CUSTOM_FILE   | 用户上传的自定义文件 |

特征值数据类型

| 名称                 | 描述   |
| -------------------- | ------ |
| CATEGORICAL          | 明确型 |
| DISCRETE_NUMERICAL   | 离散型 |
| CONTINUOUS_NUMERICAL | 连续型 |

上架权限

| 名称      | 描述      |
| --------- | --------- |
| TARGETING | TARGETING |

人群授权类型

| 名称                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| GRANT_TYPE_BUSINESS | 人群授权类型，将人群授权给商务管家账号下所有已认领的广告账号或者授权给商务管家账号下已认领的指定广告账号 |

人群授权范围

| 名称                      | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| GRANT_SCOPE_TYPE_BUSINESS | 人群授权给商务管家账号认领的所有广告账号                     |
| GRANT_SCOPE_TYPE_ACCOUNT  | 人群授权给服务商下指定子客或者授权给商务管家账号认领的指定广告账号 |

人群授权权限类型

| 名称                          | 描述         |
| ----------------------------- | ------------ |
| GRANT_PERMISSION_TYPE_TARGET  | 广告投放权限 |
| GRANT_PERMISSION_TYPE_INSIGHT | 人群洞察权限 |

模板投放列表尺寸

| 名称           | 描述      |
| -------------- | --------- |
| SIZE_1280_720  | 1280x720  |
| SIZE_1080_1920 | 1080x1920 |
| SIZE_1000_560  | 1000x560  |
| SIZE_960_540   | 960x540   |
| SIZE_960_334   | 960x334   |
| SIZE_960_274   | 960x274   |
| SIZE_900_500   | 900x500   |
| SIZE_800_800   | 800x800   |
| SIZE_800_640   | 800x640   |
| SIZE_800_450   | 800x450   |
| SIZE_720_1280  | 720x1280  |
| SIZE_640_316   | 640x316   |
| SIZE_640_960   | 640x960   |
| SIZE_640_800   | 640x800   |
| SIZE_640_360   | 640x360   |
| SIZE_640_1136  | 640x1136  |
| SIZE_582_166   | 582x166   |
| SIZE_498_280   | 498x280   |
| SIZE_480_360   | 480x360   |
| SIZE_480_320   | 480x320   |
| SIZE_480_270   | 480x270   |
| SIZE_465_230   | 465x230   |
| SIZE_354_222   | 354x222   |
| SIZE_240_180   | 240x180   |
| SIZE_230_152   | 230x152   |
| SIZE_147_147   | 147x147   |
| SIZE_540_276   | 540x276   |

模板类型

| 名称  | 描述     |
| ----- | -------- |
| IMAGE | 图片模板 |
| VIDEO | 视频模板 |

操作建议

| 名称                            | 描述                   |
| ------------------------------- | ---------------------- |
| OPERATE_SUGGESTION_OBSERVATION  | 建议观察               |
| OPERATE_SUGGESTION_OPERATION    | 建议优化               |
| OPERATE_SUGGESTION_PAUSE        | 建议暂停               |
| OPERATE_SUGGESTION_FINE_PLAY    | 表现良好               |
| OPERATE_SUGGESTION_SUSPEND      | 无                     |
| OPERATE_SUGGESTION_TRAFFIC      | 命中流量规则，建议检查 |
| OPERATE_SUGGESTION_LOWPOTENTIAL | 低潜广告               |

学习状态

| 名称                     | 描述     |
| ------------------------ | -------- |
| LEARNING_STATUS_UNKNOWN  | 未知     |
| LEARNING_STATUS_WIP      | 学习中   |
| LEARNING_STATUS_FINISHED | 学习结束 |
| LEARNING_STATUS_FAILED   | 学习失败 |

成本保障状态

| 名称                             | 描述             |
| -------------------------------- | ---------------- |
| COST_GUARANTEE_STATUS_NONE       | 无成本保障状态   |
| COST_GUARANTEE_STATUS_EFFECTIVE  | 成本保障生效中   |
| COST_GUARANTEE_STATUS_FAILED     | 成本保障已失效   |
| COST_GUARANTEE_STATUS_FINISHED   | 成本保障已结束   |
| COST_GUARANTEE_STATUS_CONFIRMING | 成本保障确认中   |
| COST_GUARANTEE_STATUS_SUCCEEDED  | 超成本赔付已完成 |

竞争力属性

| 名称                           | 描述                     |
| ------------------------------ | ------------------------ |
| ATTRIBUTE_ECPM                 | 出价/点击/转化竞争力低   |
| ATTRIBUTE_BID                  | 出价竞争力低             |
| ATTRIBUTE_PCTR                 | 点击竞争力低             |
| ATTRIBUTE_TARGETING            | 定向相关效果保护过滤     |
| ATTRIBUTE_COLD_START           | 冷启动效果保护过滤       |
| ATTRIBUTE_EXPERIMENT           | 流量拆分实验过滤         |
| ATTRIBUTE_CAMPAIGN             | 排期广告占量             |
| ATTRIBUTE_EXPERIENCE_OTHERS    | 其他用户体验保护过滤     |
| ATTRIBUTE_OTHERS               | 其他原因                 |
| ATTRIBUTE_EXPERIENCE_PRODUCT   | 商品相关用户体验保护过滤 |
| ATTRIBUTE_EXPERIENCE_CREATIVE  | 素材相关用户体验保护过滤 |
| ATTRIBUTE_LEARNING_FAILED      | 学习失败                 |
| ATTRIBUTE_EXPERIENCE_FEEDBACK  | 用户负反馈体验保护过滤   |
| ATTRIBUTE_EXPERIENCE_FRESHNESS | 用户新鲜度体验保护过滤   |
| ATTRIBUTE_BUDGET               | 预算余额不足             |
| ATTRIBUTE_INNER_COMPETE        | 账户内部竞争过滤         |
| ATTRIBUTE_PCVR                 | 转化竞争力低             |
| ATTRIBUTE_OPT_KNOCK_OUT        | 广告平滑消耗保护过滤     |

优化状态

| 名称                     | 描述     |
| ------------------------ | -------- |
| OPTIMIZE_STATUS_NONE     | 无需优化 |
| OPTIMIZE_STATUS_PENDING  | 待优化   |
| OPTIMIZE_STATUS_FINISHED | 已优化   |

诊断一键起量状态

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| AUTO_ACQUISITION_STATUS_PENDING                 | 一键起量中                                                   |
| AUTO_ACQUISITION_STATUS_COMPLETED               | 一键起量完成，表示广告一键起量已满 6h，但起量预算未花完      |
| AUTO_ACQUISITION_STATUS_SUSPEND_ON_PLAYING_FAIL | 一键起量中止(探索过程中，因广告无法播放，从而起量中止（包括广告主动或被动下线或 timeset 不连续）) |
| AUTO_ACQUISITION_STATUS_END_LESS_THAN_24H       | 一键起量完成(探索结束，预算花完，但距离广告开启功能未满 24h) |
| AUTO_ACQUISITION_STATUS_ADVERTISER_CLOSED       | 广告主主动关闭一键起量功能                                   |

结算依据

| 名称                         | 描述       |
| ---------------------------- | ---------- |
| SETTLEMENT_BASIS_TSA         | 腾讯数据   |
| SETTLEMENT_BASIS_THIRD_PARTY | 第三方数据 |

原生页组件类型

| 名称          | 描述         |
| ------------- | ------------ |
| TOP_IMAGE     | 顶部图片     |
| TOP_SLIDER    | 顶部轮播图   |
| TOP_VIDEO     | 顶部视频     |
| IMAGE         | 基础图片     |
| SLIDER        | 基础轮播图   |
| VIDEO         | 基础视频     |
| TEXT          | 基础文本     |
| APP_DOWNLOAD  | 应用下载     |
| WEAPP         | 进入小程序   |
| GH            | 关注公众号   |
| ENTERPRISE_WX | 添加商家微信 |
| IMAGE_TEXT    | 图文复合组件 |

图文复合组件跳转方式

| 名称       | 描述     |
| ---------- | -------- |
| btn_jump   | 按钮跳转 |
| total_jump | 全局跳转 |

图文复合组件类型

| 名称          | 描述         |
| ------------- | ------------ |
| GH            | 关注公众号   |
| ENTERPRISE_WX | 添加商家微信 |

全局组件类型

| 名称                  | 描述         |
| --------------------- | ------------ |
| FLOAT_BUTTON          | 悬浮按钮     |
| SIDE_BAR_FLOAT_BUTTON | 侧边悬浮组件 |

悬浮按钮内组件类型

| 名称          | 描述         |
| ------------- | ------------ |
| APP_DOWNLOAD  | 应用下载     |
| WEAPP         | 进入小程序   |
| GH            | 关注公众号   |
| ENTERPRISE_WX | 添加商家微信 |

侧边悬浮组件转化方式

| 名称          | 描述     |
| ------------- | -------- |
| TEL           | 一键拨号 |
| WX_SERVICE    | 微信客服 |
| ENTERPRISE_WX | 商家微信 |

模板查询类型

| 名称  | 描述                         |
| ----- | ---------------------------- |
| GRANT | 授权模板查询类型             |
| OWNER | 自有模板查询类型(含公共模板) |

应用类型

| 名称               | 描述            |
| ------------------ | --------------- |
| NOT_INTERACT       | 非互动          |
| INLINE             | 内嵌页面        |
| TEMPLATE_GAME      | 互动模板-小游戏 |
| TEMPLATE_VIDEO     | 互动模板-视频   |
| TEMPLATE_WEB       | 互动模板-网页   |
| COMPRESSED_PACKAGE | 解析 zip 包元素 |

模板落地页类型标签

| 名称    | 描述    |
| ------- | ------- |
| IOS     | IOS     |
| ANDROID | ANDROID |

复杂模板配置数据类型

| 名称     | 描述    |
| -------- | ------- |
| TEXT     | 文本    |
| IMAGE_ID | 图片 id |
| NUMBER   | 数字    |

模板支持落地页类型

| 名称                     | 描述                |
| ------------------------ | ------------------- |
| PAGE_TYPE_XIJING_ANDROID | 蹊径 Android 落地页 |
| PAGE_TYPE_XIJING_IOS     | 蹊径 iOS 落地页     |
| PAGE_TYPE_XIJING_WEBSITE | 蹊径网页落地页      |

落地页类型

| 名称                  | 描述                   |
| --------------------- | ---------------------- |
| XJ_DEFAULT_H5         | 默认落地页             |
| XJ_ANDROID_APP_H5     | Android 应用           |
| XJ_IOS_APP_H5         | IOS 应用               |
| XJ_WEBSITE_H5         | 网页落地页             |
| XJ_ANDROID_APP_NATIVE | android app 原生落地页 |
| XJ_IOS_APP_NATIVE     | ios app 原生落地页     |
| XJ_WEBSITE_NATIVE     | 原生                   |
| XJ_FENGLING_LBS       | 风铃电商               |

落地页发布状态

| 名称                          | 描述             |
| ----------------------------- | ---------------- |
| LANDING_PAGE_STATUS_UNPUBLISH | 草稿状态，未发布 |
| LANDING_PAGE_STATUS_PUBLISHED | 已发布           |
| LANDING_PAGE_STATUS_OFFLINE   | 巡查下线         |
| LANDING_PAGE_STATUS_DELETING  | 落地页删除中     |
| LANDING_PAGE_STATUS_DELETED   | 落地页已删除     |

落地页审核状态

| 名称                         | 描述           |
| ---------------------------- | -------------- |
| LANDING_PAGE_STATUS_EDITING  | 编辑中         |
| LANDING_PAGE_STATUS_PENDING  | 待审核         |
| LANDING_PAGE_STATUS_APPROVED | 审核通过       |
| LANDING_PAGE_STATUS_REJECTED | 审核不过       |
| LANDING_PAGE_STATUS_DELETED  | 操作版本已删除 |

落地页查询类型

| 名称  | 描述               |
| ----- | ------------------ |
| GRANT | 授权落地页查询类型 |
| OWNER | 自有落地页查询类型 |

应用类型

| 名称    | 描述             |
| ------- | ---------------- |
| ANDROID | Android App 类型 |
| IOS     | iOS App 类型     |

落地页状态查询方式

| 名称    | 描述                             |
| ------- | -------------------------------- |
| DEFAULT | 未删除落地页范围内，默认查询逻辑 |
| DELETED | 仅删除落地页范围内               |
| ALL     | 全部落地页范围内                 |

组件支持落地页类型

| 名称                     | 描述                |
| ------------------------ | ------------------- |
| PAGE_TYPE_XIJING_ANDROID | 蹊径 Android 落地页 |
| PAGE_TYPE_XIJING_IOS     | 蹊径 iOS 落地页     |

互动类型

| 名称               | 描述            |
| ------------------ | --------------- |
| COMPRESSED_PACKAGE | 解析 zip 包元素 |

转化类型

| 名称                   | 描述     |
| ---------------------- | -------- |
| TRANSFORM_APP_DOWNLOAD | 下载     |
| TRANSFORM_WEBSITE_LINK | 网页二跳 |

微信号类型

| 名称    | 描述   |
| ------- | ------ |
| PRIVATE | 个人号 |

微信号码包类型

| 名称    | 描述   |
| ------- | ------ |
| ACCOUNT | 微信号 |
| QRCODE  | 二维码 |

微信号数据检索时间精度

| 名称   | 描述                             |
| ------ | -------------------------------- |
| DAY    | 天，支持最大检索时间范围 360 天  |
| HOUR   | 小时，支持最大检索时间范围 30 天 |
| MINUTE | 分钟，支持最大检索时间范围 7 天  |

推广目标类型

| 名称                    | 描述                                                         |
| ----------------------- | ------------------------------------------------------------ |
| PRODUCTTYPE_WECHAT_SHOP | 商品推广，创建广告时无需创建和指定推广目标                   |
| PRODUCTTYPE_WECHAT_LBS  | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PRODUCTTYPE_WECHAT_URL  | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PRODUCTTYPE_LEAD_AD     | 销售线索收集                                                 |

落地页类型

| 名称                                      | 描述                                           |
| ----------------------------------------- | ---------------------------------------------- |
| PAGE_TYPE_TSA_APP                         | 通过 TSA 落地页制作工具生成的自定义 APP 介绍页 |
| PAGE_TYPE_TSA_WEB_NONE_ECOMMERCE          | 通过 TSA 落地页制作工具生成的非电商类网页      |
| PAGE_TYPE_CANVAS_WECHAT                   | 微信原生推广页，通过微信创建的落地页类型       |
| PAGE_TYPE_UNSUPPORTED                     | 尚不支持的落地页类型                           |
| PAGE_TYPE_FENGYE_ECOMMERCE                | 通过枫叶落地页制作工具生成的电商类网页         |
| PAGE_TYPE_FENGYE_EC_WECHAT_MINIPROGRAM    | 枫页电商小程序页                               |
| PAGE_TYPE_YUEBAO_QUICKAPP                 | 阅宝快应用                                     |
| PAGE_TYPE_YUEBAO_OFFICIAL_ACCOUNT_ARTICLE | 阅宝公众号(H5 页, 点击唤起应用)                |
| PAGE_TYPE_XIJING_QUICK                    | 蹊径性能版落地页                               |
| PAGE_TYPE_YOUZAN_SINGLE                   | 有赞单品页                                     |
| PAGE_TYPE_YOUZAN_TOGETHER                 | 有赞聚合页                                     |
| PAGE_TYPE_YOUZAN_WECHAT_MINIPROGRAM       | 有赞微信小程序页                               |
| PAGE_TYPE_YIYE_FORM                       | 一叶智能落地页                                 |
| PAGE_TYPE_WEIMOB_PRODUCTSET               | 微盟聚合页                                     |
| PAGE_TYPE_WEIMOB_PROMOTION                | 微盟活动页                                     |
| PAGE_TYPE_WEIMOB_PRODUCT                  | 微盟单品页                                     |
| PAGE_TYPE_WEIMOB_H5                       | 微盟 H5 落地页                                 |
| PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL  | 微信公众号详情页                               |
| PAGE_TYPE_WECHAT_FOCUS_DAILOG             | 微信一键关注页                                 |
| PAGE_TYPE_ARTICAL_WECHAT                  | 微信文章页                                     |

视频/图片/原生页等素材的创建来源类型

| 名称            | 描述                                     |
| --------------- | ---------------------------------------- |
| SOURCE_FROM_GDT | 视频/图片/原生页等素材在腾讯广告平台创建 |
| SOURCE_FROM_MP  | 视频/图片/原生页等素材在微信公众平台创建 |

表单项类型

| 名称   | 描述   |
| ------ | ------ |
| NAME   | 姓名   |
| PHONE  | 手机号 |
| TEXT   | 输入项 |
| SELECT | 下拉框 |

人群归属平台

| 名称 | 描述     |
| ---- | -------- |
| DMP  | DMP 平台 |
| TDC  | TDC 平台 |
| TDP  | TDP 平台 |

广告行为类型

| 名称                     | 描述           |
| ------------------------ | -------------- |
| CLICK                    | 点击           |
| EXPOSURE                 | 曝光           |
| ORDER                    | 下单           |
| APP_FINISH_DOWNLOAD      | APP 下载       |
| APP_INSTALL              | APP 安装       |
| APP_ACTIVATE             | APP 激活       |
| REGISTRATION_APP         | APP 注册       |
| APP ­_ONE_DAY_RETENTION  | APP 次日留存   |
| ADD_TO_CART_APP          | APP 加入购物车 |
| APP_PURCHASE             | APP 付费       |
| APP_APPLY                | APP 申请       |
| REGISTRATION_WEB         | 网站注册       |
| ADD_TO_CART_WEB          | 网站加购       |
| WEB_ONLINE_CONSULT       | 网站咨询       |
| WEB_MAKE_PHONE_CALL      | 网站电话直拨   |
| WEB_RESERVE_PHONE_NUMBER | 网站电话回拨   |
| WEB_RESERVATION          | 网站表单预约   |
| APPLY_WEB                | 网站申请       |
| WEB_DELIVER              | 网站订单发货   |
| PURCHASE_WEB             | 网站付费       |
| WEB_VIEW_COMMODITY_PAGE  | 网站商品浏览   |

数据源类型

| 名称                    | 描述       |
| ----------------------- | ---------- |
| WEB                     | WEB 类型   |
| ANDROID                 | 安卓类型   |
| IOS                     | IOS 类型   |
| OFFLINE                 | 线下类型   |
| WECHAT                  | 微信类型   |
| WECHAT_MINI_PROGRAM     | 微信小程序 |
| WECHAT_MINI_GAME        | 微信小游戏 |
| DATA_SOURCE_TYPE_FILE   | File       |
| DATA_SOURCE_TYPE_STREAM | Stream     |
| DATA_SOURCE_TYPE_SITE   | Site       |
| DATA_SOURCE_TYPE_FILE   | File       |
| DATA_SOURCE_TYPE_STREAM | Stream     |
| DATA_SOURCE_TYPE_SITE   | Site       |

应用场景类型

| 名称          | 描述         |
| ------------- | ------------ |
| SELF_BUILT    | 客户手动创建 |
| AUTO_BUILT    | 系统自动创建 |
| BE_AUTHORIZED | 被授权       |

商品库行业

| 名称                         | 描述            |
| ---------------------------- | --------------- |
| EC                           | 普通电商        |
| ESTATE                       | 房产租售        |
| VIDEO                        | 视频音乐        |
| CAR                          | 汽车销售        |
| NEWS_INFORMATION             | 内容资讯        |
| BEAUTY_PERSONAL_CARE         | 美妆个护（B&P） |
| RETAIL                       | 零售商超        |
| EDUCATION                    | 教育            |
| READING                      | 阅读行业        |
| INSURANCE                    | 保险            |
| LOAN                         | 贷款            |
| FINANCIAL                    | 理财            |
| BANKCARD                     | 银行卡          |
| WEDDING                      | 婚纱摄影        |
| SECURITIES                   | 证券            |
| DECORATION_BUILDING_MATERIAL | 家装建材        |
| CARRIER                      | 运营商          |
| GAME                         | 游戏行业        |

行为渠道

| 名称      | 描述                       |
| --------- | -------------------------- |
| NATURAL   | 自然量                     |
| TENCENT   | 腾讯渠道带来的转化行为     |
| BYTEDANCE | 字节跳动渠道带来的转化行为 |
| KUAISHOU  | 快手渠道带来的转化行为     |
| ALIBABA   | 阿里巴巴渠道带来的转化行为 |
| BAIDU     | 百度渠道带来的转化行为     |
| OTHERS    | 其他渠道带来的转化行为     |
| UNKNOWN   | 未知渠道                   |

文件 Schema 列名

| 名称                       | 描述                                                         |
| -------------------------- | ------------------------------------------------------------ |
| USERID_QQ                  | QQ 号                                                        |
| USERID_MD5_QQ              | MD5 加密后的 QQ 号                                           |
| USERID_TEL                 | 手机号                                                       |
| USERID_MD5_MOBILE_PHONE    | MD5 加密后的手机号                                           |
| USERID_SHA256_MOBILE_PHONE | SHA256 加密后的手机号                                        |
| USERID_IFA                 | IDFA                                                         |
| USERID_MD5_IFA             | MD5 加密后的 IDFA                                            |
| USERID_MD5_SHA256_IDFA     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 IDFA，加密前需要格式转化成 32 位的数字 + 大写字母，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 FF1999CD-7177-4937-A474-74937A102630，加密后 9f2fc8b5eaaeba19fe9415767b13c1ec43c91aa039aa44684dfc8ec77d3b06 |
| USERID_IMEI                | IMEI                                                         |
| USERID_MD5_IMEI            | MD5 加密后的 IMEI                                            |
| USERID_MD5_SHA256_IMEI     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 IMEI，加密前需要格式转化成 14 位或 15 位数字 + 小写字母串，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 a000002c9060f7，加密后 d64db6590359b386397db4d8a61dbc8fbd586b8a0b822ee6bc19316402d583b4 |
| USERID_GDT_OPENID          | 基于 GDT Cookie Mapping 分配的 openid                        |
| USERID_OAID                | OAID                                                         |
| USERID_MD5_OAID            | MD5 加密后的 OAID                                            |
| USERID_MD5_SHA256_OAID     | 先采用 MD5 算法加密，然后再采用 SHA256 算法加密后的 OAID，加密前请使用 OAID 原值直接 MD5，不要转换大小写或去连接符，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串。示例：加密前 12AD57A5C1D04C00A5B2F2F32213C617fa44f21b8c8744531b222481150a846f，加密后 7d36cf61fafac6df50aa7c874148e8241fcb57c61268037d19ed86389100bab0 |
| USERID_WX_OPENID           | 微信 OpenID                                                  |
| USERID_WX_UNIONID          | 微信开放平台加密的微信号，用户在一个开放平台账户的所有公众号/小程序/移动应用下，拥有唯一的微信 UnionID |
| USERID_CAID                | CAID                                                         |
| USERPROPERTY_ACTIONTYPE    | 行为类型：取值参考 标准行为类型 枚举定义                     |
| USERPROPERTY_ACTIONPARAM   | 行为参数:发生行为时所携带的参数和对应的参数值，采用 json 格式 |
| USERPROPERTY_ACTIONTIME    | 行为时间:使用 UNIX 时间戳，单位为秒，eg:1492998081           |
| USERPROPERTY_ACTIONCHANNEL | 来源渠道:表示用户发生行为时的来源渠道，请用以下来源渠道英文名进行填写，确保文件中每一行仅有一种来源渠道。NATURAL,TENCENT,BYTEDANCE,KUAISHOU,ALIBABA,BAIDU,OTHERS,UNKNOWN |

文件支持场景

| 名称                       | 描述                                                         |
| -------------------------- | ------------------------------------------------------------ |
| DMP                        | 腾讯广告知数：基于腾讯系多场景数据能力，驱动深度转化，实现全链路数据营销。 |
| TRANSFORMATION_ATTRIBUTION | 转化归因：将转化数据关联至对应的广告，为广告预估模型提供样本数据 |
| PK_AM                      | pKAM：在广告场景下，以助攻模型形式对主模型进行干预，优化后链路转化成本 |

文件分发开关

| 名称       | 描述     |
| ---------- | -------- |
| SWITCH_ON  | 开启分发 |
| SWITCH_OFF | 关闭分发 |

文件状态

| 名称   | 描述             |
| ------ | ---------------- |
| NORMAL | 正常，文件可使用 |

文件来源

| 名称          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| SELF_BUILT    | 自行调用创建接口或在网页端通过新建文件接入得到的文件         |
| BE_AUTHORIZED | 被授权的文件。具体包括两种途径：①文件拥有方通过授权方式授权给你的文件；②你申请得到的文件 |

文件状态

| 名称          | 描述                                           |
| ------------- | ---------------------------------------------- |
| UN_DISPATCHED | 未分发                                         |
| DISPATCHING   | 分发处理中，完成后最终状态为 DISPATCHED        |
| DISPATCHED    | 已分发                                         |
| BE_CANCELLING | 取消分发处理中，完成后最终状态为 UN_DISPATCHED |

资产类型

| 名称                      | 描述       |
| ------------------------- | ---------- |
| ASSET_TYPE_DN_DATA_SOURCE | 数据源类型 |
| ASSET_TYPE_DN_DATA_SET    | 数据集类型 |
| ASSET_TYPE_DN_FILE        | 文件类型   |

授权路径类型

| 名称                     | 描述            |
| ------------------------ | --------------- |
| PATH_TYPE_BM             | BM 维度授权     |
| PATH_TYPE_MDM            | MDM 维度授权    |
| PATH_TYPE_POINT_TO_POINT | 账号维度授权    |
| PATH_TYPE_AGENCY         | AGENCY 维度授权 |

权限类型

| 名称                                       | 描述         |
| ------------------------------------------ | ------------ |
| PERMISSION_TYPE_DMP                        | 腾讯广告知数 |
| PERMISSION_TYPE_TRANSFORMATION_ATTRIBUTION | 转化归因     |
| PERMISSION_TYPE_PKAM                       | pKAM         |
| PERMISSION_TYPE_DPA                        | 动态商品广告 |

排序类型

| 名称 | 描述 |
| ---- | ---- |
| DESC | 升序 |
| ASC  | 降序 |

操作符

| 名称     | 描述       |
| -------- | ---------- |
| EQUALS   | 等于       |
| IN       | 在某范围内 |
| CONTAINS | 模糊匹配   |

商品系列类型

| 名称                           | 描述                                 |
| ------------------------------ | ------------------------------------ |
| PRODUCT_SERIES_TYPE_CUSTOMIZED | 用户自定义的商品系列                 |
| PRODUCT_SERIES_TYPE_UNLIMITED  | 不限商品系列，由系统为每个商品库提供 |

商品系列逻辑操作符

| 名称               | 描述   |
| ------------------ | ------ |
| LOGIC_OPERATOR_OR  | 逻辑或 |
| LOGIC_OPERATOR_AND | 逻辑与 |

货币类型

| 名称                  | 描述   |
| --------------------- | ------ |
| CURRENCY_TYPE_UNKNOWN | 未知   |
| CURRENCY_TYPE_CNY     | 人民币 |

细分数据

| 名称               | 描述             |
| ------------------ | ---------------- |
| UNKNOWN            | 不聚合           |
| CAMPAIGN           | 按推广计划聚合   |
| ADGROUP            | 按广告组聚合     |
| ACCOUNT            | 按账户聚合       |
| AD                 | 按广告聚合       |
| REWARD_QUEST_VIDEO | 按小任务视频聚合 |

站点集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 移动联盟，移动站点                                   |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝移动，移动站点                                 |
| SITE_SET_MOBILE_INNER         | 移动内部站点，移动站点                               |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻，移动站点                                   |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频，移动站点                                   |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报，移动站点 (待废弃)                          |
| SITE_SET_PENGYOU              | 朋友社区 (待废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (待废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (待废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (待废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (待废弃)                                     |
| SITE_SET_PC_UNION             | PC 联盟 (待废弃)                                     |
| SITE_SET_YINGYONGBAO_PC       | 应用宝 PC (待废弃)                                   |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (待废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (待废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (待废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (待废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (待废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (待废弃)                                  |
| SITE_SET_WEIBO                | 微博 (待废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (待废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（废弃）                                 |
| SITE_SET_THIRDPARTY           | 第三方流量 (待废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (待废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_MOMENTS              | 朋友圈                                               |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PCAD                 | 腾讯平台与内容媒体                                   |

优化目标类型

| 名称                                           | 描述                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| OPTIMIZATIONGOAL_NONE                          | none                                                         |
| OPTIMIZATIONGOAL_BRAND_CONVERSION              | 品牌转化                                                     |
| OPTIMIZATIONGOAL_FOLLOW                        | 关注                                                         |
| OPTIMIZATIONGOAL_CLICK                         | 点击                                                         |
| OPTIMIZATIONGOAL_IMPRESSION                    | 曝光                                                         |
| OPTIMIZATIONGOAL_APP_DOWNLOAD                  | App 下载                                                     |
| OPTIMIZATIONGOAL_APP_ACTIVATE                  | App 激活                                                     |
| OPTIMIZATIONGOAL_APP_REGISTER                  | App 注册                                                     |
| OPTIMIZATIONGOAL_ONE_DAY_RETENTION             | 次日留存                                                     |
| OPTIMIZATIONGOAL_APP_PURCHASE                  | App 购买次数，游戏客户如需优化付费行为，建议使用首次付费作为优化目标 |
| OPTIMIZATIONGOAL_ECOMMERCE_ORDER               | 下单                                                         |
| OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT            | H5 购买                                                      |
| OPTIMIZATIONGOAL_LEADS                         | 销售线索（待废弃）                                           |
| OPTIMIZATIONGOAL_ECOMMERCE_CART                | 加入购物车                                                   |
| OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE      | H5 注册                                                      |
| OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE           | 商品详情页浏览                                               |
| OPTIMIZATIONGOAL_ONLINE_CONSULTATION           | 网页咨询                                                     |
| OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION        | 电话咨询                                                     |
| OPTIMIZATIONGOAL_PAGE_RESERVATION              | 表单预约                                                     |
| OPTIMIZATIONGOAL_DELIVERY                      | 发货                                                         |
| OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW          | 关注后发消息                                                 |
| OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW       | 关注后点击菜单栏                                             |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT | 有效在线咨询                                                 |
| OPTIMIZATIONGOAL_PAGE_EFFECTIVE_PHONE_CALL     | 有效电话拨打                                                 |

计费类型

| 名称                      | 描述                       |
| ------------------------- | -------------------------- |
| BILLINGEVENT_CLICK        | 按点击扣费                 |
| BILLINGEVENT_APP_DOWNLOAD | 按照应用下载扣费           |
| BILLINGEVENT_IMPRESSION   | 按曝光扣费                 |
| BILLINGEVENT_APP_INSTALL  | 按照应用下载扣费（待废弃） |

婚恋状态

| 名称                 | 描述                    |
| -------------------- | ----------------------- |
| SINGLE               | 单身                    |
| IN_LOVE              | 热恋                    |
| NEWLY_MARRIED        | 新婚                    |
| MARRIED              | 已婚                    |
| PARENTING            | 育儿                    |
| PARENTING_0          | 育儿（孕育中）          |
| PARENTING_0_6        | 育儿（宝宝 0-6 个月）   |
| PARENTING_6_12       | 育儿（宝宝 6-12 个月    |
| PARENTING_12_24      | 育儿（宝宝 1-2 岁）     |
| PARENTING_24_36      | 育儿（宝宝 2-3 岁）     |
| CHILD_PRE_SCHOOL     | 育儿（孩子 3-6 周岁）   |
| CHILD_PRIMARY_SCHOOL | 育儿（孩子 6-12 周岁）  |
| CHILD_JUNIOR_SCHOOL  | 育儿（孩子 12-15 周岁） |
| CHILD_HIGH_SCHOOL    | 育儿（孩子 15-18 周岁） |

工作状态

| 名称                                   | 描述                      |
| -------------------------------------- | ------------------------- |
| COLLEGE_STUDENT                        | 在校大学生                |
| BUSINESS_USER                          | 商旅用户                  |
| GOVERNMENT_OFFICER                     | 政府公职人员              |
| SCIENCE_EDUCATOR                       | 科研教育者                |
| FINANCIAL_WORKER                       | 金融工作者                |
| LAWYER                                 | 法律工作者                |
| ADVERTISING_MARKETING_MEDIA_ART_WORKER | 广告/市场/媒体/艺术工作者 |
| REAL_ESTATE_WORKER                     | 房地产工作者              |
| IT_WORKER                              | IT 互联网工作者           |
| CONSTRUCTION_WORKER                    | 建筑工作者                |
| HEALTH_CARE_WORKER                     | 医护工作者                |
| SALESMAN                               | 销售                      |
| SERVICE_WORKER                         | 服务业工作者              |
| TRANSPORTATION_LOGISTICS_WORKER        | 交通物流运输工作者        |
| MECHANIC_WORKER                        | 技工普工                  |
| CUSTOMER_SERVICE_TECHNICAL_SUPPORTER   | 客服/技术支持人员         |
| TRADER_BUYER                           | 贸易采购工作者            |
| FINANCE_HUMAN_RESOURCE_ADMIN           | 财务/人事/行政工作者      |
| CONSULTANT                             | 咨询顾问                  |
| ENERGY_MATERIAL_WORKER                 | 能源与材料工作者          |
| FARMER                                 | 农林牧渔工作者            |
| GOLDEN_COLLAR                          | 金领                      |
| WHITE_COLLAR                           | 白领                      |
| BLUE_COLLAR                            | 蓝领                      |
| SMALL_BUSINESS_MANAGER                 | 中小企业管理人员          |

地点类型

| 名称        | 描述 |
| ----------- | ---- |
| RECENTLY_IN | 近期 |
| VISITED_IN  | 去过 |
| LIVE_IN     | 常住 |
| TRAVEL_IN   | 旅行 |

操作系统

| 名称               | 描述         |
| ------------------ | ------------ |
| IOS                | iOS 系统     |
| IOS_VERSION_4      | iOS 4.x      |
| IOS_VERSION_5      | iOS 5.x      |
| IOS_VERSION_6      | iOS 6.x      |
| IOS_VERSION_7      | iOS 7.x      |
| IOS_VERSION_8      | iOS 8.x      |
| IOS_VERSION_9      | iOS 9.x      |
| IOS_VERSION_10     | iOS 10.x     |
| IOS_VERSION_11     | iOS 11.x     |
| IOS_VERSION_12     | iOS 12.x     |
| IOS_VERSION_13     | iOS 13.x     |
| ANDROID            | Android 系统 |
| ANDROID_VERSION_1  | Android 1.x  |
| ANDROID_VERSION_2  | Android 2.x  |
| ANDROID_VERSION_3  | Android 3.x  |
| ANDROID_VERSION_4  | Android 4.x  |
| ANDROID_VERSION_5  | Android 5.x  |
| ANDROID_VERSION_6  | Android 6.x  |
| ANDROID_VERSION_7  | Android 7.x  |
| ANDROID_VERSION_8  | Android 8.x  |
| ANDROID_VERSION_9  | Android 9.x  |
| ANDROID_VERSION_10 | Android 10.x |
| WINDOWS            | Windows 系统 |
| SYMBIAN            | 塞班系统     |
| JAVA               | JAVA 系统    |

新设备

| 名称    | 描述           |
| ------- | -------------- |
| IOS     | iOS 新用户     |
| ANDROID | Android 新用户 |

设备价格定向

| 名称            | 描述           |
| --------------- | -------------- |
| PRICE_1500_LESS | ￥ 1500 以下   |
| PRICE_1500_2500 | ￥ 1500 ~ 2500 |
| PRICE_2500_3500 | ￥ 2500 ~ 3500 |
| PRICE_3500_4500 | ￥ 3500 ~ 4500 |
| PRICE_4500_MORE | ￥ 4500 以上   |

联网方式

| 名称   | 描述     |
| ------ | -------- |
| WIFI   | 无线网络 |
| NET_2G | 2G 网络  |
| NET_3G | 3G 网络  |
| NET_4G | 4G 网络  |

移动运营商

| 名称 | 描述     |
| ---- | -------- |
| CMCC | 中国移动 |
| CUC  | 中国联通 |
| CTC  | 中国电信 |

上网场景

| 名称         | 描述     |
| ------------ | -------- |
| PUBLIC_PLACE | 公共场所 |
| HOME         | 家庭     |
| COMPANY      | 企业     |
| SCHOOL       | 学校     |

穿衣指数

| 名称        | 描述   |
| ----------- | ------ |
| FREEZING    | 寒冷   |
| COLD        | 冷     |
| CHILLY      | 凉     |
| COOL        | 温凉   |
| MILDLY_COOL | 凉舒适 |
| MILD        | 舒适   |
| WARM        | 热舒适 |
| TORRIDITY   | 炎热   |

紫外线指数

| 名称        | 描述 |
| ----------- | ---- |
| WEAK        | 弱   |
| TEND_WEAK   | 偏弱 |
| MEDIUM      | 中等 |
| TEND_STRONG | 偏强 |
| STRONG      | 强   |

化妆指数

| 名称             | 描述   |
| ---------------- | ------ |
| PREVENT_CRACKING | 防龟裂 |
| MOISTURING       | 保湿   |
| OIL_CONTROL      | 控油   |
| UV_PROTECT       | 防晒   |

气象

| 名称   | 描述 |
| ------ | ---- |
| SHINE  | 晴天 |
| CLOUDY | 阴天 |
| RAINY  | 雨天 |
| FOGGY  | 雾   |
| SNOWY  | 雪   |
| SANDY  | 沙尘 |

空气质量指数

| 名称                | 描述     |
| ------------------- | -------- |
| GOOD                | 优       |
| MODERATE            | 良       |
| LIGHTLY_POLLUTED    | 轻度污染 |
| MODERATELY_POLLUTED | 中度污染 |
| HEAVILY_POLLUTED    | 重度污染 |
| SEVERELY_POLLUTED   | 严重污染 |

消费能力

| 名称 | 描述   |
| ---- | ------ |
| HIGH | 高消费 |
| LOW  | 低消费 |

游戏消费能力

| 名称   | 描述         |
| ------ | ------------ |
| HIGH   | 高消费用户   |
| NORMAL | 普通消费用户 |

资产状态

| 名称        | 描述     |
| ----------- | -------- |
| CAR_OWNERS  | 有车人士 |
| HOME_OWNERS | 有房人士 |

消费类型

| 名称               | 描述     |
| ------------------ | -------- |
| PAID_GOODS_VIRTUAL | 虚拟商品 |
| PAID_GOODS_REAL    | 实物商品 |

微信再营销类型

| 名称                             | 描述                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| WECHAT_OFFICIAL_ACCOUNT_FOLLOWED | 关注过广告主微信公众号                                       |
| WECHAT_COUPON_OBTAINED           | 领取过广告主微信卡券                                         |
| WECHAT_OFFICIAL_ACCOUNT_AD_LIKE  | 对微信公众号广告感兴趣                                       |
| WECHAT_MOMENTS_AD_LIKE           | 对微信朋友圈广告感兴趣                                       |
| MINI_GAME_WECHAT_REGISTERED      | 曾经注册过你的小游戏。当且仅当 promoted_object_type 是 PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT 时，MINI_GAME_WECHAT_REGISTERED 才可以使用 |

行为兴趣意向定向的行为部分的场景

| 名称                                | 描述     |
| ----------------------------------- | -------- |
| BEHAVIOR_INTEREST_SCENE_ALL         | 全部场景 |
| BEHAVIOR_INTEREST_SCENE_APP         | App      |
| BEHAVIOR_INTEREST_SCENE_ECOMMERCE   | 电商     |
| BEHAVIOR_INTEREST_SCENE_INFORMATION | 资讯     |

行为兴趣意向定向的行为部分的时间窗

| 名称                                      | 描述   |
| ----------------------------------------- | ------ |
| BEHAVIOR_INTEREST_TIME_WINDOW_SEVEN_DAY   | 7 天   |
| BEHAVIOR_INTEREST_TIME_WINDOW_FIFTEEN_DAY | 15 天  |
| BEHAVIOR_INTEREST_TIME_WINDOW_THIRTY_DAY  | 30 天  |
| BEHAVIOR_INTEREST_TIME_WINDOW_THREE_MONTH | 3 个月 |
| BEHAVIOR_INTEREST_TIME_WINDOW_SIX_MONTH   | 6 个月 |
| BEHAVIOR_INTEREST_TIME_WINDOW_ONE_YEAR    | 1 年   |

行为兴趣意向定向的行为部分的强度

| 名称                             | 描述     |
| -------------------------------- | -------- |
| BEHAVIOR_INTEREST_INTENSITY_ALL  | 全部强度 |
| BEHAVIOR_INTEREST_INTENSITY_HIGH | 高强度   |

素材播放模式

| 名称                                   | 描述 |
| -------------------------------------- | ---- |
| CREATIVE_SELECTION_TYPE_BY_TURNS       | 轮询 |
| CREATIVE_SELECTION_TYPE_AUTO_OPTIMIZED | 优选 |

创意组合类型

| 名称                      | 描述     |
| ------------------------- | -------- |
| COMBINATION_TYPE_NORMAL   | 普通     |
| COMBINATION_TYPE_CAROUSEL | 集装箱   |
| COMBINATION_TYPE_DYNAMIC  | 动态创意 |

付款类型

| 名称                  | 描述     |
| --------------------- | -------- |
| PAYMENT_TYPE_REALTIME | 实时扣费 |
| PAYMENT_TYPE_PREPAID  | 预付费   |

广告锁定状态

| 名称                  | 描述   |
| --------------------- | ------ |
| ADLOCKSTATUS_LOCKED   | 已锁定 |
| ADLOCKSTATUS_UNLOCKED | 未锁定 |

动态商品广告类型

| 名称   | 描述               |
| ------ | ------------------ |
| SINGLE | 单商品动态商品广告 |

出价策略

| 名称                           | 描述         |
| ------------------------------ | ------------ |
| BID_STRATEGY_AVERAGE_COST      | 稳定拿量     |
| BID_STRATEGY_TARGET_COST       | 优先拿量     |
| BID_STRATEGY_PRIORITY_LOW_COST | 优先低成本   |
| BID_STRATEGY_PRIORITY_CAP_COST | 控制成本上限 |

广告状态

| 名称                           | 描述                               |
| ------------------------------ | ---------------------------------- |
| STATUS_UNKNOWN                 | 未知状态                           |
| STATUS_PENDING                 | 审核中                             |
| STATUS_DENIED                  | 审核不通过                         |
| STATUS_FROZEN                  | 冻结                               |
| STATUS_SUSPEND                 | 暂停中                             |
| STATUS_READY                   | 未到投放时间                       |
| STATUS_ACTIVE                  | 投放中                             |
| STATUS_STOP                    | 投放结束                           |
| STATUS_PREPARE                 | 准备中                             |
| STATUS_DELETED                 | 已删除                             |
| STATUS_ACTIVE_ACCOUNT_FROZEN   | 广告被暂停（账户资金被冻结）       |
| STATUS_ACTIVE_ACCOUNT_EMPTY    | 广告被暂停（账户余额不足）         |
| STATUS_ACTIVE_ACCOUNT_LIMIT    | 广告被暂停（账户达日限额）         |
| STATUS_ACTIVE_CAMPAIGN_LIMIT   | 广告被暂停（推广计划达日限额）     |
| STATUS_ACTIVE_CAMPAIGN_SUSPEND | 广告被暂停（推广计划暂停）         |
| STATUS_ACTIVE_AD_LIMIT         | 广告被暂停（广告达日限额）         |
| STATUS_PART_READY              | 部分待投放                         |
| STATUS_PART_ACTIVE             | 部分投放中                         |
| STATUS_TRACKING_URL_SUSPEND    | 广告被暂停（第三方监测链接未通过） |

联合售卖类型

| 名称                        | 描述                   |
| --------------------------- | ---------------------- |
| JOINT_SALE_TYPE_UNKNOWN     | 默认                   |
| JOINT_SALE_TYPE_BUNDLE_SALE | 组合售卖(针对超级投手) |
| JOINT_SALE_TYPE_IAA_OPT     | IAA 优选               |

广告上报类型

| 名称                        | 描述        |
| --------------------------- | ----------- |
| TRACKING_REPORT_TYPE_SERVER | Server 上报 |
| TRACKING_REPORT_TYPE_CLIENT | Client 上报 |

深度优化策略类型

| 名称                                          | 描述             |
| --------------------------------------------- | ---------------- |
| DEEP_OPTIMIZATION_TYPE_SMART_OPTIMIZATION_BID | 智能深度优化策略 |
| DEEP_OPTIMIZATION_TYPE_SECOND_STAGE_BID       | 两阶段优化策略   |

product_tags 名称类型

| 名称                  | 描述     |
| --------------------- | -------- |
| ONLY_FOR_NEW_CUSTOMER | 新人专享 |
| OVERSEAS_SHOPPING     | 海淘     |
| COUPON                | 券       |
| DISCOUNT              | 折扣     |
| FREE_SHIPPING         | 包邮     |
| CASH_ON_DELIVERY      | 货到付款 |

时间类型

| 名称                   | 描述         |
| ---------------------- | ------------ |
| TIME_TYPE_ACTION_TIME  | 线索提交时间 |
| TIME_TYPE_CREATED_TIME | 线索入库时间 |

广告位类型

| 名称              | 描述   |
| ----------------- | ------ |
| MINI_PROGRAM      | 小程序 |
| ARTICLE           | 公众号 |
| CIRCLE_OF_FRIENDS | 朋友圈 |

线索回传线索转化状态对外

| 名称                                         | 描述       |
| -------------------------------------------- | ---------- |
| LEADS_CONVERT_STATUS_DEPRECATED              | 无效线索   |
| LEADS_CONVERT_STATUS_POTENTIAL_CUSTOMER      | 潜在客户   |
| LEADS_CONVERT_STATUS_HIGH_INTENTION_CUSTOMER | 高意向客户 |
| LEADS_CONVERT_STATUS_TRANS_COMPLETED         | 已经成单   |

线索类型

| 名称                           | 描述           |
| ------------------------------ | -------------- |
| LEADS_TYPE_FORM                | 表单预约       |
| LEADS_TYPE_ONLINE_CONSULT      | 在线咨询       |
| LEADS_TYPE_MAKE_PHONE_CALL     | 普通电话       |
| LEADS_TYPE_PHONE               | 智能电话       |
| LEADS_TYPE_PROMOTION_COUPON    | 发券           |
| LEADS_TYPE_INTELLIGENT_TOOL    | 智能咨询       |
| LEADS_TYPE_LOTTERY             | 抽奖           |
| LEADS_TYPE_LANDING_PAGE_CLICK  | 落地页点击     |
| LEADS_TYPE_ONE_CLICK_AUTHORIZE | 一键授权       |
| LEADS_TYPE_PAGE_SCAN_CODE      | 加企业微信客服 |
| LEADS_TYPE_PROMOTION_FOLLOW    | 微信关注       |

线索用户类型

| 名称                      | 描述                                          |
| ------------------------- | --------------------------------------------- |
| USER_TYPE_QQ              | QQ 号                                         |
| USER_TYPE_QQ_MD5          | QQ 号-MD5                                     |
| USER_TYPE_TEL             | 手机号，11 位纯数字                           |
| USER_TYPE_TEL_MD5         | 手机号-MD5                                    |
| USER_TYPE_IDFA            | IDFA，苹果设备 id                             |
| USER_TYPE_IDFA_MD5        | IDFA-MD5                                      |
| USER_TYPE_IMEI            | IMEI，安卓设备 id                             |
| USER_TYPE_IMEI_MD5        | IMEI-MD5                                      |
| USER_TYPE_GDT_OPENID      | 广点通 OpenID                                 |
| USER_TYPE_MAC_ADDRESS     | MAC 地址                                      |
| USER_TYPE_MAC_ADDRESS_MD5 | MAC 地址-MD5                                  |
| USER_TYPE_OAID            | OAID，移动安全联盟（MSA）制定的匿名设备标识符 |
| USER_TYPE_OAID_MD5        | OAID-MD5                                      |
| USER_TYPE_WX_OPENID       | 微信 OpenID                                   |
| USER_TYPE_WX_UNIONID      | 微信 UnionID                                  |
| USER_TYPE_OTHERS          | 其他                                          |

线索性别类型

| 名称                | 描述 |
| ------------------- | ---- |
| GENDER_TYPE_UNKNOWN | 未知 |
| GENDER_TYPE_FEMALE  | 女性 |
| GENDER_TYPE_MALE    | 男性 |

线索无效原因

| 名称                                      | 描述       |
| ----------------------------------------- | ---------- |
| LEADS_INEFFECT_REASON_EMPTY               | 无效空     |
| LEADS_INEFFECT_REASON_IDENTITY_MISMATCHED | 不是本人   |
| LEADS_INEFFECT_REASON_REGION_MISMATCHED   | 地域外定向 |
| LEADS_INEFFECT_REASON_DATA_DUPLICATION    | 重复数据   |
| LEADS_INEFFECT_REASON_TEL_NOT_CONNECTED   | 电话未接通 |
| LEADS_INEFFECT_REASON_NO_INTENTION        | 没有意向   |
| LEADS_INEFFECT_REASON_UNKNOWN             | 未知原因   |

线索评分

| 名称                          | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| LEADS_INTENTION_SCORE_LEVEL_1 | 0 分，默认值或号码无效，空号、暂停服务、与资料不符，二次拨打仍未接通。 |
| LEADS_INTENTION_SCORE_LEVEL_2 | 0~20 分，关机、来电提醒、无人接听、未接通等情况，需再次拨打。 |
| LEADS_INTENTION_SCORE_LEVEL_3 | 20~40 分，匆匆挂断电话，QQ、微信等不联系，或强硬抵触。       |
| LEADS_INTENTION_SCORE_LEVEL_4 | 40~60 分，没有感兴趣的话语体现，不排斥但意愿也不强烈，或没有时间详细沟通但可以再约通话时间。 |
| LEADS_INTENTION_SCORE_LEVEL_5 | 60~80 分，较有兴趣，但需要进一步了解产品情况。               |
| LEADS_INTENTION_SCORE_LEVEL_6 | 80~100 分，很感兴趣，也觉得平台可以，或可以来公司约谈的。    |

线索匹配类型

| 名称         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| NONE         | 无，不需要与线索平台已有线索匹配                             |
| LEADSID      | 线索 id，使用腾讯广告线索管理平台的线索唯一 id 匹配          |
| OUTERLEADSID | 外部线索 id，使用客户侧的线索唯一 id 与线索平台已有的线索匹配 |
| CONTACT      | 联系方式，使用联系方式与线索平台已有的线索匹配，优先级：leads_tel>leads_wechat>leads_qq |
| CLICKID      | 点击 id，使用腾讯广告点击 id 与线索平台已有的线索匹配        |

线索渠道

| 名称      | 描述     |
| --------- | -------- |
| NATURAL   | 自然来源 |
| TENCENT   | 腾讯     |
| BYTEDANCE | 字节     |
| KUAISHOU  | 快手     |
| ALIBABA   | 阿里     |
| BAIDU     | 百度     |
| OTHERS    | 其他     |
| UNKNOWN   | 未知     |

排序方式

| 名称       | 描述 |
| ---------- | ---- |
| ASCENDING  | 升序 |
| DESCENDING | 降序 |

异步任务操作业务对象范围

| 名称                      | 描述         |
| ------------------------- | ------------ |
| TASK_SCOPE_UNKNOWN        | 未知，仅可读 |
| TASK_SCOPE_CAMPAIGN       | 推广计划     |
| TASK_SCOPE_ADGROUP        | 广告组       |
| TASK_SCOPE_ADVERTISER     | 广告主       |
| TASK_SCOPE_SCHEDULED_TASK | 预设置任务   |
| TASK_SCOPE_AD             | 广告         |
| TASK_SCOPE_ADCREATIVE     | 广告创意     |

异步任务详情每项执行结果类型

| 名称                                 | 描述     |
| ------------------------------------ | -------- |
| TASK_DETAIL_RESULT_TYPE_PENDING      | 未处理   |
| TASK_DETAIL_RESULT_TYPE_FAIL         | 失败     |
| TASK_DETAIL_RESULT_TYPE_SUCCESS      | 成功     |
| TASK_DETAIL_RESULT_TYPE_SYSTEM_ERROR | 未知异常 |

预设置任务类型

| 名称                                               | 描述                   |
| -------------------------------------------------- | ---------------------- |
| TASK_TYPE_SCHEDULED_UPDATE_ADVERTISER_DAILY_BUDGET | 预设置广告主次日预算   |
| TASK_TYPE_SCHEDULED_UPDATE_CAMPAIGN_DAILY_BUDGET   | 预设置推广计划次日预算 |
| TASK_TYPE_SCHEDULED_UPDATE_ADGROUP_DAILY_BUDGET    | 预设置广告组次日预算   |

商品系列逻辑操作符

| 名称              | 描述   |
| ----------------- | ------ |
| LOGIC_OPERATOR_OR | 逻辑或 |

商品系列类型

| 名称                        | 描述                                 |
| --------------------------- | ------------------------------------ |
| PRODUCT_SET_TYPE_CUSTOMIZED | 用户自定义的商品系列                 |
| PRODUCT_SET_TYPE_SYSTEM     | 不限商品系列，由系统为每个商品库提供 |

快递公司

| 名称               | 描述     |
| ------------------ | -------- |
| UNKNOWN            | 未知     |
| SF_EXPRESS         | 顺丰速运 |
| STO                | 申通快递 |
| YTO                | 圆通快递 |
| ZTO                | 中通快递 |
| BEST_EXPRESS       | 百世快递 |
| YUNDA_EXPRESS      | 韵达快递 |
| TTK_EXPRESS        | 天天快递 |
| EMS                | EMS      |
| CHINA_POST_EXPRESS | 中国邮政 |
| JUST_IN_TIME       | 宅急送   |
| JD_EXPRESS         | 京东快递 |
| DEPPON_EXPRESS     | 德邦物流 |

订单状态

| 名称           | 描述   |
| -------------- | ------ |
| AWAITING_ORDER | 待确认 |
| SHIPPING_SOON  | 待发货 |
| SHIPPED        | 已发货 |
| DELIVERED      | 已签收 |
| RETURNED       | 已退货 |

落地页子类型

| 名称                                     | 描述           |
| ---------------------------------------- | -------------- |
| LANDING_PAGE_SUB_TYPE_ST_HELIANG_PRODUCT | 禾量 H5 单品页 |

佣金计算类型

| 名称    | 描述         |
| ------- | ------------ |
| PERCENT | 按百分比提成 |
| VALUE   | 按绝对值提成 |

类目类型

| 名称      | 描述     |
| --------- | -------- |
| RECEPTION | 前台类目 |
| BACKSTAGE | 后台类目 |

销售渠道

| 名称               | 描述       |
| ------------------ | ---------- |
| WECHAT_MINIPROGRAM | 微信小程序 |
| WECHAT_H5          | 微信 H5    |
| PC                 | 自建 PC    |
| APP                | 自建 APP   |
| H5                 | 自建 H5    |
| JD                 | 京东       |
| VIPSHOP            | 唯品会     |
| PDD                | 拼多多     |
| OTHER              | 其他       |

仓库类型

| 名称         | 描述   |
| ------------ | ------ |
| SHOP         | 门店   |
| WAREHOUSE    | 仓库   |
| EC_WAREHOUSE | 电商仓 |

商品状态

| 名称   | 描述 |
| ------ | ---- |
| NEW    | 新品 |
| NORMAL | 正常 |
| STOP   | 暂停 |

佣金类型

| 名称    | 描述       |
| ------- | ---------- |
| PERCENT | 按比例提成 |
| VALUE   | 按金额提成 |

商品库存状态

| 名称     | 描述 |
| -------- | ---- |
| ON_SALE  | 上架 |
| OFF_SALE | 下架 |

商品状态

| 名称    | 描述     |
| ------- | -------- |
| NORMAL  | 普通商品 |
| COMBINE | 组合商品 |
| OTHER   | 其他     |

配送方式

| 名称    | 描述 |
| ------- | ---- |
| HOME    | 到家 |
| EXPRESS | 快递 |

卡券类型

| 名称              | 描述           |
| ----------------- | -------------- |
| MERCHANT_COUPON   | 商家券         |
| WECHAT_PAY_COUPON | 微信支付代金券 |

卡券子类型

| 名称          | 描述       |
| ------------- | ---------- |
| FULL_CUT      | 满减券     |
| FULL_DISCOUNT | 满折券     |
| INCREMENT     | 升值券     |
| FREE          | 免单券     |
| CASH          | 现金券     |
| WECHAT_CARD   | 微信卡包券 |

卡券发放状态

| 名称    | 描述 |
| ------- | ---- |
| VALID   | 有效 |
| EXPIRED | 过期 |
| FROZEN  | 冻结 |

卡券来源类型

| 名称      | 描述     |
| --------- | -------- |
| FULL_SEND | 满送     |
| NORMAL    | 普通场景 |

用户计数类型

| 名称          | 描述   |
| ------------- | ------ |
| PHONE_NUMBER  | 手机号 |
| ID_CARD       | 身份证 |
| VIP_NUMBER    | 会员   |
| DEVICE_NUMBER | 设备号 |

促销类型

| 名称                | 描述      |
| ------------------- | --------- |
| ORDER_FULL_CUT      | 订单满减  |
| ORDER_FULL_DISCOUNT | 订单满折  |
| ORDER_GIFT          | 订单赠品  |
| ORDER_POINT         | 订单积分  |
| SKU_CUT             | 单品降价  |
| SKU_DISCOUNT        | 单品打折  |
| SKU_GIFT            | 单品赠品  |
| SKU_POINT           | 单品积分  |
| X_UNIT_DISCOUNT     | X 件 N 折 |
| X_PRICE_PACKAGE     | X 元 N 件 |
| GROUP_DISCOUNT      | 拼团      |
| LTD_QUANTITY        | 限量      |
| FLASH_SALE          | 抢购      |
| PRESELL             | 预售      |
| NEW_ARRIVAL         | 新品      |

运营状态

| 名称    | 描述 |
| ------- | ---- |
| OPEN    | 开店 |
| CLOSE   | 关店 |
| SUSPEND | 暂停 |

门店位置类型

| 名称            | 描述     |
| --------------- | -------- |
| DEPARTMENT      | 百货     |
| COMPOSITIVE     | 综合卖场 |
| KERBSIDE        | 街边     |
| OFFICE_BUILDING | 写字楼   |

商圈类型

| 名称             | 描述       |
| ---------------- | ---------- |
| NORMAL_RESIDENCE | 普通住宅   |
| LUXURY_RESIDENCE | 高端住宅   |
| OFFICE           | 办公写字楼 |
| MIXED            | 住办混合   |

坐标类型

| 名称     | 描述     |
| -------- | -------- |
| BAIDU    | 百度地图 |
| GAODE    | 高德地图 |
| STANDARD | 标准     |

管理类型

| 名称   | 描述 |
| ------ | ---- |
| DIRECT | 直营 |
| AGENT  | 加盟 |

配送范围类型

| 名称           | 描述       |
| -------------- | ---------- |
| CIRCLE         | 圆形       |
| VERTEXES       | 多边形     |
| VERTEXES_GROUP | 多边形组合 |

主订单状态

| 名称              | 描述             |
| ----------------- | ---------------- |
| AWAITING_ORDER    | 待支付           |
| WAIT_AUDIT        | 待审核           |
| NO_PAY_CANCEL     | 未支付取消       |
| FINISH_PAY_CANCEL | 已支付未发货取消 |
| SHIPPING_SOON     | 待发货           |
| SHIPPED           | 已发货           |
| REJECT_RECEIVE    | 拒绝收货         |
| DELIVERED         | 销售完成         |
| AUDIT_CANCEL      | 审核取消         |
| CLIENT_SENDING    | 顾客寄回中       |
| PICK_UP           | 上门取件中       |
| SHOP_COLLECT      | 门店代收中       |
| WAIT_QUALITY      | 待质检           |
| QUALITY_FAILURE   | 质检失败         |
| REFUND            | 退款中           |
| RETURNED          | 退货完成         |
| OTHER             | 其他             |

销售渠道类型

| 名称               | 描述             |
| ------------------ | ---------------- |
| WECHAT_MINIPROGRAM | 微信小程序       |
| WECHAT_H5          | 微信 H5          |
| PC                 | 自建 PC          |
| APP                | 自建 APP         |
| H5                 | 自建 H5          |
| JD                 | 京东             |
| VIPSHOP            | 唯品会           |
| PDD                | 拼多多           |
| XXPOS              | POS(线下 POS 机) |
| WRSYPOS            | POS(无人收银机)  |
| OTHER              | 其他             |

物流状态

| 名称           | 描述     |
| -------------- | -------- |
| FINISH_PICK    | 拣货完成 |
| HAVE_DELIVER   | 已出库   |
| HAVE_RECEIVE   | 已揽收   |
| ON_THE_WAY     | 在途     |
| IS_DELIVERY    | 派件     |
| SIGN_IN        | 签收     |
| DIFFICULT      | 疑难     |
| RETURN_EXPRESS | 退回     |
| RETURN_SIGN    | 退签     |
| OTHER          | 其他     |

物流商

| 名称  | 描述          |
| ----- | ------------- |
| YZ    | 邮政包裹/平邮 |
| EMS   | EMS           |
| SF    | 顺丰          |
| ST    | 申通          |
| YT    | 圆通          |
| ZT    | 中通          |
| HT    | 汇通          |
| YD    | 韵达          |
| ZJS   | 宅急送        |
| TT    | 天天          |
| DB    | 德邦          |
| GT    | 国通          |
| ZY    | 增益          |
| SER   | 速尔          |
| ZTWL  | 中铁物流      |
| ZTKY  | 中铁快运      |
| ND    | 能达          |
| YS    | 优速          |
| QF    | 全峰          |
| JD    | 京东          |
| DHL   | DHL           |
| ZJB   | 宅急便        |
| BSHT  | 百世汇通      |
| DDWL  | 多点物流      |
| QFKD  | 全峰快递      |
| OTHER | 其他          |

发票类型

| 名称         | 描述           |
| ------------ | -------------- |
| ZZ_BILL      | 增值税专用发票 |
| NORMAL_BILL  | 普通发票       |
| CAR_BILL     | 机动车专用发票 |
| MACHINE_BILL | 机打发票       |
| FIX_BILL     | 定额发票       |
| JK_BILL      | 剪开式发票     |
| OTHER        | 其他           |

订单状态

| 名称                          | 描述   |
| ----------------------------- | ------ |
| ORDER_STATUS_UNKNOWN          | 未知   |
| ORDER_STATUS_WAIT_FOR_PUBLISH | 待发布 |
| ORDER_STATUS_WAIT_FOR_RECEIVE | 待接单 |
| ORDER_STATUS_COMPLETED        | 已完成 |
| ORDER_STATUS_ABOLISHED        | 已作废 |
| ORDER_STATUS_MAKING           | 制作中 |

子订单状态

| 名称                                     | 描述       |
| ---------------------------------------- | ---------- |
| SUB_ORDER_STATUS_UNKNOWN                 | 未知       |
| SUB_ORDER_STATUS_WAIT_FOR_PUBLISH        | 待发布     |
| SUB_ORDER_STATUS_WAIT_FOR_RECEIVE        | 待接单     |
| SUB_ORDER_STATUS_MAKING_SCRIPT           | 脚本制作中 |
| SUB_ORDER_STATUS_AUDITING_SCRIPT         | 脚本审核中 |
| SUB_ORDER_STATUS_WAIT_FOR_CONFIRM_SCRIPT | 脚本待确认 |
| SUB_ORDER_STATUS_MAKING_VIDEO            | 视频制作中 |
| SUB_ORDER_STATUS_AUDITING_VIDEO          | 视频审核中 |
| SUB_ORDER_STATUS_WAIT_FOR_CONFIRM        | 订单待确认 |
| SUB_ORDER_STATUS_COMPLETED               | 已完成     |
| SUB_ORDER_STATUS_ABOLISHED               | 已作废     |

套餐类型

| 名称                                             | 描述                    |
| ------------------------------------------------ | ----------------------- |
| PACKAGE_TYPE_UNKNOWN                             | 未知                    |
| PACKAGE_TYPE_TWO_THOUSAND_AND_FIVE_HUNDRED_SCENE | 2500 元情景剧套餐已下线 |
| PACKAGE_TYPE_TWO_THOUSAND_AND_FIVE_HUNDRED_GIFT  | 2500 元激励提成套餐     |
| PACKAGE_TYPE_FIVE_HUNDRED                        | 500 元激励提成套餐      |
| PACKAGE_TYPE_TEN_THOUSAND                        | 10000 元起高级订制套餐  |

视频尺寸类型

| 名称                        | 描述                      |
| --------------------------- | ------------------------- |
| VIDEO_RATIO_TYPE_UNKNOWN    | 未知                      |
| VIDEO_RATIO_TYPE_HORIZONTAL | 横版（16:9 或 4:3)        |
| VIDEO_RATIO_TYPE_VERTICAL   | 竖版（9:16 或 750*1334px) |

状态触发操作

| 名称                                 | 描述               |
| ------------------------------------ | ------------------ |
| OPERATION_TYPE_UNKNOWN               | 未知               |
| OPERATION_TYPE_ROBBED_TIMEOUT        | 接单超时           |
| OPERATION_TYPE_PUBLISHER_CANCEL      | 发布者主动作废     |
| OPERATION_TYPE_OSS_CANCEL            | 运营 OSS 作废      |
| OPERATION_TYPE_SYSTEM_COMPLETE       | 系统自动确认完成   |
| OPERATION_TYPE_OSS_COMPLETE          | 运营 OSS 强制完成  |
| OPERATION_TYPE_OSS_PWD_FREE_COMPLETE | 运营免登陆强制完成 |

付款状态

| 名称                          | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| PAYMENT_STATUS_UNPAID         | 未确认付款                                                   |
| PAYMENT_STATUS_PAY_CONFIRMED  | 已确认付款                                                   |
| PAYMENT_STATUS_COST_PAID      | 已结算（COST）                                               |
| PAYMENT_STATUS_PAID           | 已结算（快捷快付）                                           |
| PAYMENT_STATUS_PAYED_OFFLINE  | 已线下付款                                                   |
| PAYMENT_STATUS_UNPAID_CLEARED | 已扣费不结算，运营可以在 OA 系统中将订单付款状态设置为此状态，此时会按照正常流程扣除广告主订单费用，但不会将费用计算给制作方 |

资源状态

| 名称                             | 描述   |
| -------------------------------- | ------ |
| RESOURCE_STATUS_UNKNOWN          | 未知   |
| RESOURCE_STATUS_WAIT_FOR_CONFIRM | 待确认 |
| RESOURCE_STATUS_CONFIRMED        | 已确认 |
| RESOURCE_STATUS_ABOLISHED        | 已作废 |

视频尺寸类型

| 名称                           | 描述     |
| ------------------------------ | -------- |
| VIDEO_RATIO_UNKNOWN            | 未知     |
| VIDEO_RATIO_16_9               | 16:9     |
| VIDEO_RATIO_9_16               | 9:16     |
| VIDEO_RATIO_4_3                | 4:3      |
| VIDEO_RATIO_750_X              | 自定义   |
| VIDEO_RATIO_750_1334           | 750*1334 |
| VIDEO_RATIO_TENCENT_VIDEO_CHIP | 16:9     |

审核状态

| 名称                           | 描述 |
| ------------------------------ | ---- |
| RESOURCE_AUDIT_STATUS_UNKNOWN  | 未知 |
| RESOURCE_AUDIT_STATUS_APPROVED | 等待 |
| RESOURCE_AUDIT_STATUS_PENDING  | 通过 |
| RESOURCE_AUDIT_STATUS_REJECTED | 拒绝 |

推送平台

| 名称                       | 描述 |
| -------------------------- | ---- |
| PUSH_PLATFORM_TYPE_UNKNOWN | 未知 |
| PUSH_PLATFORM_TYPE_GDT     | GDT  |
| PUSH_PLATFORM_TYPE_MP      | 微信 |

调整类型枚举

| 名称              | 描述     |
| ----------------- | -------- |
| MANUAL_ADJUSTMENT | 手动调整 |
| SMART_ADJUSTMENT  | 一键适配 |

推广目标类型

| 名称                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| PROMOTED_OBJECT_TYPE_APP_ANDROID                | Android 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/promoted_object) 登记腾讯开放平台、腾讯广告上架的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_IOS                    | iOS 应用，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/promoted_object) 登记 App Store 的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_ECOMMERCE                  | 商品推广，创建广告时无需创建和指定推广目标                   |
| PROMOTED_OBJECT_TYPE_LINK_WECHAT                | 品牌活动推广，创建广告时无需创建和指定推广目标               |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP          | 应用宝推广，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/promoted_object) 登记腾讯应用宝的应用 id，创建广告时需填写之前登记的应用 id |
| PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION          | Android 应用（广告包），仅可读                               |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT           | 本地广告（微信推广），创建广告前需在对应的微信公众号中注册登记门店信息，创建广告时需填写之前登记的门店 id，）门店信息的登记及获取可以通过微信公众平台提供的接口进行操作，具体方式可以参考 [[本地门店的创建及获取\]](https://developers.e.qq.com/tools/faq/ads#lbs_wechat) |
| PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM    | QQ 浏览器小程序，创建广告前需通过 [[promoted_objects 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/promoted_object) 登记 QQ 浏览器的小程序 id，创建广告时需填写之前登记的小程序 id |
| PROMOTED_OBJECT_TYPE_LINK                       | 网页推广目标，已废弃，可切换其他推广目标进行创建广告         |
| PROMOTED_OBJECT_TYPE_QQ_MESSAGE                 | QQ 消息，创建广告时无需创建和指定推广目标                    |
| PROMOTED_OBJECT_TYPE_QZONE_VIDEO_PAGE           | 认证空间-视频说说，仅可读                                    |
| PROMOTED_OBJECT_TYPE_LOCAL_ADS                  | 本地广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_ARTICLE                    | 好文广告，仅可读                                             |
| PROMOTED_OBJECT_TYPE_LEAD_AD                    | 销售线索收集                                                 |
| PROMOTED_OBJECT_TYPE_TENCENT_KE                 | 腾讯课堂，仅可读                                             |
| PROMOTED_OBJECT_TYPE_EXCHANGE_APP_ANDROID_MYAPP | 换量应用，仅可读                                             |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_ARTICLE         | QQ 空间日志页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE_IFRAMED         | QQ 空间嵌入页，仅可读                                        |
| PROMOTED_OBJECT_TYPE_QZONE_PAGE                 | QQ 空间首页，仅可读                                          |
| PROMOTED_OBJECT_TYPE_APP_PC                     | PC 应用，仅可读                                              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT           | 微信小游戏，创建广告时需填写有效的微信小游戏 id              |
| PROMOTED_OBJECT_TYPE_MINI_GAME_QQ               | QQ 小游戏                                                    |

版位集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 优量汇                                               |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝（待废弃）                                     |
| SITE_SET_MOBILE_INNER         | QQ、腾讯看点、腾讯音乐 (待废弃)                      |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻                                             |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频                                             |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报 (已废弃)                                    |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PENGYOU              | 朋友社区 (已废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (已废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (已废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (已废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (已废弃)                                     |
| SITE_SET_PC_UNION             | 优量汇，PC 版位(已废弃)                              |
| SITE_SET_YINGYONGBAO_PC       | 应用宝，PC 版位(已废弃)                              |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (已废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (已废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (已废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (已废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (已废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (已废弃)                                  |
| SITE_SET_WEIBO                | 微博 (已废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (已废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（已废弃）                               |
| SITE_SET_THIRDPARTY           | 第三方流量 (已废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (已废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |
| SITE_SET_QQSHOPPING           | QQ 购物                                              |

调整类型枚举

| 名称                      | 描述           |
| ------------------------- | -------------- |
| VERTICALVERSION_750_1536  | 朋友圈竖版视频 |
| VERTICALVERSION_750_1334  | 微信激励视频   |
| VERTICALVERSION_1080_1920 | 闪屏           |
| VERTICALVERSION           | 9：16          |
| HORIZONTALVERSION_4_3     | 4：3           |
| HORIZONTALVERSION         | 16：9          |

调整尺寸方式枚举

| 名称        | 描述     |
| ----------- | -------- |
| GAUSSIAN    | 高斯模糊 |
| COLOR       | 指定颜色 |
| SMART_CLIP  | 智能裁剪 |
| SMART_IMAGE | 智能取图 |
| IMAGE       | 指定图片 |

调整时长方式枚举

| 名称               | 描述     |
| ------------------ | -------- |
| OVERFLOW_CLIP      | 溢出剪裁 |
| SMART_SPEED_CHANGE | 智能变速 |

添加音乐方式枚举

| 名称           | 描述     |
| -------------- | -------- |
| RECOMMENDATION | 推荐音乐 |

生成封面图类型枚举

| 名称  | 描述         |
| ----- | ------------ |
| SMART | 智能截取     |
| TCC   | 创意订制 TCC |

任务处理枚举

| 名称                   | 描述       |
| ---------------------- | ---------- |
| TASK_STATUS_PROCESSING | 任务处理中 |
| TASK_STATUS_SUCCESS    | 任务成功   |
| TASK_STATUS_FAIL       | 任务失败   |

素材类型

| 名称  | 描述 |
| ----- | ---- |
| IMAGE | 图片 |
| VIDEO | 视频 |

排序条件类型

| 名称                     | 描述     |
| ------------------------ | -------- |
| derive_on_first_time     | 最新上传 |
| template_stat.cost       | 消耗     |
| template_stat.click_rate | 点击率   |
| template_stat.use_cnt    | 使用量   |

排序类型

| 名称 | 描述 |
| ---- | ---- |
| DESC | 降序 |
| ASC  | 升序 |

通配符类型

| 名称              | 描述           |
| ----------------- | -------------- |
| UNKNOWN           | 未知           |
| LANDING_PAGE      | 落地页通配符   |
| PRODUCT_INDEX     | 商品通配符     |
| PRODUCT_RECOMMEND | 商品推荐通配符 |

动态商品模板类型（新）

| 名称                  | 描述       |
| --------------------- | ---------- |
| ALL                   | 全部模板   |
| SELF_OWNED            | 自有模板   |
| GRANTED               | 授权模板   |
| COMMON                | 通用模板   |
| PRODUCT_CATALOG_OWNED | 商品库模板 |

模板中展示的商品数量

| 名称     | 描述   |
| -------- | ------ |
| SINGLE   | 单商品 |
| MULTIPLE | 多商品 |

素材填充方式

| 名称                                    | 描述             |
| --------------------------------------- | ---------------- |
| CENTER_FILL_ON_WHITE_BACKGROUND         | 白底居中填充     |
| CENTER_FILL_ON_GAUSSIAN_BLUR_BACKGROUND | 高斯模糊居中填充 |
| EXACT_MATCH                             | 严格匹配         |

动态商品模板类型（新）

| 名称                       | 描述             |
| -------------------------- | ---------------- |
| SELF_OWNED                 | 自有模板         |
| PRODUCT_VIDEO_STRAIGHT_OUT | 商品视频直出模板 |

视频模版类型

| 名称                                    | 描述               |
| --------------------------------------- | ------------------ |
| VIDEO_TEMPLATE_TYPE_IMG_TRANSFORM       | 图片转视频模版     |
| VIDEO_TEMPLATE_TYPE_TRANSPARENT         | 透明视频模版       |
| VIDEO_TEMPLATE_TYPE_CHANNEL_TRANSPARENT | 视频号透明视频模版 |

落地页审核状态

| 名称                          | 描述           |
| ----------------------------- | -------------- |
| OFFICIAL_PAGE_STATUS_EDITING  | 编辑中         |
| OFFICIAL_PAGE_STATUS_PENDING  | 待审核         |
| OFFICIAL_PAGE_STATUS_APPROVED | 审核通过       |
| OFFICIAL_PAGE_STATUS_REJECTED | 审核不过       |
| OFFICIAL_PAGE_STATUS_DELETED  | 操作版本已删除 |

落地页发布状态

| 名称                                  | 描述             |
| ------------------------------------- | ---------------- |
| OFFICIAL_PAGE_PUBLIC_STATUS_UNPUBLISH | 草稿状态，未发布 |
| OFFICIAL_PAGE_PUBLIC_STATUS_PUBLISHED | 已发布           |
| OFFICIAL_PAGE_PUBLIC_STATUS_OFFLINE   | 巡查下线         |
| OFFICIAL_PAGE_PUBLIC_STATUS_DELETING  | 落地页删除中     |
| OFFICIAL_PAGE_PUBLIC_STATUS_DELETED   | 落地页已删除     |

落地页类型

| 名称                       | 描述                  |
| -------------------------- | --------------------- |
| OFFICIAL_PAGE_TYPE_DEFAULT | 默认落地页            |
| OFFICIAL_PAGE_TYPE_ANDROID | Android 应用          |
| OFFICIAL_PAGE_TYPE_IOS     | IOS 应用              |
| OFFICIAL_PAGE_TYPE_APP     | Android、IOS 应用通投 |
| OFFICIAL_PAGE_TYPE_WEBSITE | 网页落地页            |

组件类型

| 名称            | 描述             |
| --------------- | ---------------- |
| HEAD_MATERIAL   | 顶部外显素材组件 |
| HEAD_IMAGE      | 顶部图片组件     |
| HEAD_VIDEO      | 顶部视频组件     |
| BLOCK_IMAGE     | 图片组件         |
| BLOCK_VIDEO     | 视频组件         |
| BLOCK_ROCH_TEXT | 富文本组件       |

社交表态文案类型

| 名称                                  | 描述     |
| ------------------------------------- | -------- |
| INTERACTION_LABEL_TYPE_DEFAULT        | 未知类型 |
| INTERACTION_LABEL_TYPE_SHAKE_SURPRISE | 摇出惊喜 |
| INTERACTION_LABEL_TYPE_SHAKE_WATCH    | 摇动观看 |

拍一拍类型

| 名称                      | 描述       |
| ------------------------- | ---------- |
| TAP_TRANSITION_TYPE_HIM   | 拍一下他   |
| TAP_TRANSITION_TYPE_HER   | 拍一下她   |
| TAP_TRANSITION_TYPE_THEM  | 拍一下他们 |
| TAP_TRANSITION_TYPE_WOMEN | 拍一下她们 |

创意组件类型

| 名称                      | 描述                  |
| ------------------------- | --------------------- |
| COM_UNKNOWN               | 未知                  |
| COM_TITLE                 | 标题                  |
| COM_DESCRIPTION           | 描述                  |
| COM_LONG_SUBLINK          | 长子链单条            |
| COM_SHORT_SUBLINK         | 短子链单条            |
| COM_LONG_SUBLINK_LIST     | 长子链组              |
| COM_SHORT_SUBLINK_LIST    | 短子链组              |
| COM_APP_DOWNLOAD          | app 下载              |
| COM_IMAGE_1X1             | 单图 1:1              |
| COM_IMAGE_LIST_1X1        | 图集 1:1              |
| COM_IMAGE_TEXT_1X1        | 图文 1:1              |
| COM_IMAGE_BIG_20X7        | 大图 20:7             |
| COM_VIDEO_16X9_IMAGE_16X9 | 视频 16:9,封面图 16:9 |
| COM_VIDEO_16X9_IMAGE_4X3  | 视频 16:9,封面图 4:3  |
| COM_VIDEO_16X9_IMAGE_1X1  | 视频 16:9,封面图 1:1  |
| COM_QUICK_CONSULT         | 快咨询                |
| COM_PHONE                 | 电话组件              |
| COM_FORM                  | 线索营销              |
| COM_BRAND                 | 品牌形象              |
| COM_LANDING_PAGE          | 跳转组件              |
| COM_HOLIDAY_LOGO          | 节日 logo             |
| COM_ACTION_BUTTON         | 行动按钮              |
| COM_CHOSEN_BUTTON         | 选择按钮              |
| COM_VIDEO_9X16_IMAGE_9X16 | 视频 9:16,封面图 9:16 |
| COM_IMAGE_16X9            | 16:9 单图             |
| COM_LABEL                 | 标签组件              |
| COM_PROMOTION_SUBLINK     | 活动促销组件          |
| COM_IMAGE_LIST_9X16       | 9:16 图集             |
| COM_LIST_SUBLINK          | 列表子链组件          |
| COM_MDPA_TITLE            | 商品标题组件          |
| COM_MDPA_DESCRIPTION      | 商品描述组件          |

创意标签类型

| 名称                     | 描述         |
| ------------------------ | ------------ |
| LABEL_TYPE_COMMON        | 普通文本标签 |
| LABEL_TYPE_CUSTOMIZETEXT | 自定义标签   |
| LABEL_TYPE_ICON          | 图标标签     |
| LABEL_TYPE_DYNAMIC       | 动态标签     |

本地推模式

| 名称                                  | 描述             |
| ------------------------------------- | ---------------- |
| LOCAL_BUSINESS_MODE_DEFAULT           | 到店优惠         |
| LOCAL_BUSINESS_MODE_LEADS_COUPON      | 销售线索优惠模式 |
| LOCAL_BUSINESS_MODE_LEADS_RESERVATION | 销售线索预约模式 |

热修改任务状态

| 名称                          | 描述     |
| ----------------------------- | -------- |
| UPDATE_TASK_STATUS_PROCESSING | 处理中   |
| UPDATE_TASK_STATUS_SUCCESS    | 任务成功 |
| UPDATE_TASK_STATUS_FAIL       | 任务失败 |
| UPDATE_TASK_STATUS_DELETED    | 任务删除 |

预锁量状态

| 名称                        | 描述       |
| --------------------------- | ---------- |
| PRE_LOCK_STATUS_NO_LOCK     | 未预锁量   |
| PRE_LOCK_STATUS_LOCKING     | 预锁量中   |
| PRE_LOCK_STATUS_LOCK_SUCESS | 预锁量成功 |
| PRE_LOCK_STATUS_LOCK_FAIL   | 预锁量失败 |

预审返回版位集合

| 名称                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| SITE_SET_QZONE                | QQ 空间，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_QQCLIENT             | QQ 客户端(已废弃，请使用 SITE_SET_PCQQ 投放)         |
| SITE_SET_MUSIC                | QQ 音乐，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放) |
| SITE_SET_MOBILE_UNION         | 优量汇                                               |
| SITE_SET_KUAISHOU             | 快手 (已废弃，请使用 SITE_SET_MOBILE_UNION 投放)     |
| SITE_SET_QQCOM                | 腾讯网，PC 版位 (已废弃，请使用 SITE_SET_PCQQ 投放)  |
| SITE_SET_WECHAT               | 微信公众号与小程序                                   |
| SITE_SET_MOBILE_MYAPP         | 应用宝移动，移动站点（待废弃）                       |
| SITE_SET_MOBILE_INNER         | 移动内部站点，移动站点                               |
| SITE_SET_TENCENT_NEWS         | 腾讯新闻                                             |
| SITE_SET_TENCENT_VIDEO        | 腾讯视频，移动站点                                   |
| SITE_SET_TENCENT_KUAIBAO      | 天天快报，移动站点 (待废弃)                          |
| SITE_SET_MOBILE_YYB           | 应用宝                                               |
| SITE_SET_PENGYOU              | 朋友社区 (待废弃)                                    |
| SITE_SET_TUAN                 | QQ 团购 (待废弃)                                     |
| SITE_SET_MEISHI               | QQ 美食 (待废弃)                                     |
| SITE_SET_PIAO                 | QQ 票务 (待废弃)                                     |
| SITE_SET_MAIL                 | QQ 邮箱 (待废弃)                                     |
| SITE_SET_PC_UNION             | PC 联盟 (待废弃)                                     |
| SITE_SET_YINGYONGBAO_PC       | 应用宝 PC (待废弃)                                   |
| SITE_SET_PAIPAISEARCH         | 拍拍站内搜索 (待废弃)                                |
| SITE_SET_QQSHOP               | QQ 商城 (待废弃)                                     |
| SITE_SET_PAIPAIDAOGOU         | 拍拍导购咨询 (待废弃)                                |
| SITE_SET_QZONESEARCH          | QQ 空间搜索 (待废弃)                                 |
| SITE_SET_WEBUNION_DELETED     | 网站联盟 (待废弃)                                    |
| SITE_SET_EXPRESSPORTAL        | 直通车外投 (待废弃)                                  |
| SITE_SET_WEIBO                | 微博 (待废弃)                                        |
| SITE_SET_WANGGOU              | QQ 网购 (待废弃)                                     |
| SITE_SET_MOBILE_UNION_DELETED | 移动应用联盟（废弃）                                 |
| SITE_SET_THIRDPARTY           | 第三方流量 (待废弃)                                  |
| SITE_SET_JD_WAICAI            | 京东外采流量 (待废弃)                                |
| SITE_SET_PCQQ                 | PC QQ、QQ 空间、腾讯音乐                             |
| SITE_SET_KANDIAN              | QQ 浏览器（原腾讯看点）                              |
| SITE_SET_QQ_MUSIC_GAME        | QQ、腾讯音乐及游戏                                   |
| SITE_SET_MOMENTS              | 微信朋友圈                                           |
| SITE_SET_MINI_GAME_WECHAT     | 微信小游戏                                           |
| SITE_SET_MINI_GAME_QQ         | QQ 小游戏                                            |
| SITE_SET_MOBILE_GAME          | App 游戏                                             |
| SITE_SET_QQSHOPPING           | QQ 购物                                              |
| SITE_SET_PCAD                 | 腾讯平台与内容媒体                                   |

广告申诉复审状态

| 名称                    | 描述         |
| ----------------------- | ------------ |
| APPEAL_STATUS_COMPLETED | 申诉复审完成 |
| APPEAL_STATUS_PENDING   | 申诉复审待审 |
| APPEAL_STATUS_CANCEL    | 申诉复审取消 |

创意催审结果

| 名称                           | 描述                                        |
| ------------------------------ | ------------------------------------------- |
| SUCCESS                        | 催审成功                                    |
| SYSTEM_ERROR                   | 催审失败，系统异常请重试。                  |
| ACCOUNT_NO_PERMISSION          | 催审失败，account_id 没有催审权限。         |
| ACCOUNT_REACH_URGE_UPPER_LIMIT | 催审失败，account_id 已到每日催审次数上限。 |
| AD_ID_NOT_EXIST                | 催审失败，ad_id 不存在。                    |
| AD_ID_ALREADY_URGED            | 催审失败，ad_id 已催审。                    |
| AD_ID_NOT_REACH_URGE_TIME      | 催审失败，ad_id 未到可催审时间。            |
| ACCOUNT_NO_BALANCE             | 催审失败，account_id 账户无余额。           |
| ACCOUNT_PENDING                | 催审失败，account_id 账户待审核。           |

创意审核数据日报表级别

| 名称                       | 描述       |
| -------------------------- | ---------- |
| DAILY_REPORT_LEVEL_ACCOUNT | 账户日报表 |
| DAILY_REPORT_LEVEL_MDM     | 主体日报表 |

报表时间维度

| 名称    | 描述 |
| ------- | ---- |
| BY_DAY  | 分日 |
| SUMMARY | 汇总 |

创意缩略信息类型

| 名称                 | 描述     |
| -------------------- | -------- |
| THUMBNAIL_TYPE_IMAGE | 图片类型 |
| THUMBNAIL_TYPE_VIDEO | 视频类型 |

海量拓词列表任务状态

| 名称       | 描述   |
| ---------- | ------ |
| SUCCESS    | 成功   |
| PROCESSING | 处理中 |
| FAILED     | 失效   |

拓词版位集

| 名称                   | 描述        |
| ---------------------- | ----------- |
| SITE_SET_QBSEARCH      | QQ 浏览器等 |
| SITE_SET_WECHAT_SEARCH | 微信搜一搜  |

推荐类别

| 名称                  | 描述     |
| --------------------- | -------- |
| RECOMMEND_BY_INDUSTRY | 行业拓词 |
| RECOMMEND_BY_WORD     | 以词拓词 |

推荐理由

| 名称                | 描述     |
| ------------------- | -------- |
| DARK_HORSE_WORD     | 黑马词   |
| SAME_TRADE_BUY_WORD | 同行买词 |
| HIGH_CLICK_WORD     | 高点击词 |
| BLUE_OCEAN_WORD     | 蓝海词   |