/// <reference types="jest" />

jest.mock('../src/Uuid', () => ({ genUuid: () => '00000000-0000-0000-0000-000000000000' }))

import { AdTracker, TencentPlatform, OceanEnginePlatform, MemoryStorage, ActionType, toPage } from '../src'

describe('AdTracker', () => {
  const tencentClickUrl =
    'https://example.com/click?ad=tencent&click_id=24oi6xq2aaakvagnqu7a&account_id=9471147&click_time=1586437362'

  it('should return empty for non-ad URLs', () => {
    const storage = new MemoryStorage()
    const tracker = new AdTracker({ storage })
    tracker.use(new TencentPlatform())

    tracker.init(toPage('https://example.com/page?foo=bar'))

    const raw = storage.get('AD_PARAMS_TENCENT')
    expect(raw).toBeFalsy()
  })

  it('should store params per platform key', () => {
    const storage = new MemoryStorage()
    const tracker = new AdTracker({ storage })
    tracker.use(new TencentPlatform())

    tracker.init(toPage(tencentClickUrl))

    const raw = storage.get('AD_PARAMS_TENCENT')
    expect(raw).toBeTruthy()

    const params = JSON.parse(raw!)
    expect(params.account_id).toBe('9471147')
    expect(params.click_id).toBe('24oi6xq2aaakvagnqu7a')
    expect(params.ad).toBeUndefined()
  })

  it('should not throw when report called without handler', async () => {
    const tracker = new AdTracker({ storage: new MemoryStorage() })
    tracker.use(new TencentPlatform())
    tracker.init(toPage(tencentClickUrl))

    await expect(tracker.report({ action_type: ActionType.REGISTER })).resolves.toBeUndefined()
  })

  it('should skip platforms without stored params', async () => {
    const handler = jest.fn()
    const tracker = new AdTracker({
      storage: new MemoryStorage(),
      handler,
    })
    tracker.use(new TencentPlatform())

    await tracker.report({ action_type: ActionType.REGISTER })
    expect(handler).not.toHaveBeenCalled()
  })

  it('should call handler with mapped payload', async () => {
    const handler = jest.fn()

    const tracker = new AdTracker({ storage: new MemoryStorage(), handler })
    tracker.use(new TencentPlatform())
    tracker.init(toPage(tencentClickUrl))

    await tracker.report({ action_type: ActionType.REGISTER, value: 9900 })

    expect(handler).toHaveBeenCalledTimes(1)

    const [platform, payload] = handler.mock.calls[0]
    expect(platform).toBe('tencent')
    expect(payload.params.account_id).toBe('9471147')
    expect(payload.params.ad).toBeUndefined()
    expect(payload.action_type).toBe('REGISTER')
    expect(payload.action_time).toBeDefined()
    expect(typeof payload.action_time).toBe('number')
    expect(payload.value).toBe(9900)
  })
})

describe('TencentPlatform', () => {
  const platform = new TencentPlatform()

  it('should match Tencent click URL with click_id and ad=tencent', () => {
    expect(platform.match(toPage('https://example.com/click?click_id=abc123&ad=tencent'))).toBe(true)
  })

  it('should not match without ad=tencent', () => {
    expect(platform.match(toPage('https://example.com/click?click_id=abc123'))).toBe(false)
  })

  it('should not match ordinary URLs', () => {
    expect(platform.match(toPage('https://example.com/page?foo=bar'))).toBe(false)
  })

  it('should map action types correctly', () => {
    expect(platform.mapActionType(ActionType.REGISTER)).toBe('REGISTER')
    expect(platform.mapActionType(ActionType.PURCHASE)).toBe('PURCHASE')
    expect(platform.mapActionType(ActionType.RESERVATION)).toBe('RESERVATION')
    expect(platform.mapActionType(ActionType.CLAIM_OFFER)).toBe('CLAIM_OFFER')
    expect(platform.mapActionType(ActionType.VIEW)).toBe('VIEW_CONTENT')
  })
})

describe('OceanEnginePlatform', () => {
  const platform = new OceanEnginePlatform()

  const oceanClickUrl =
    'https://example.com/click?ad=oceanengine&clickid=abc123def456&adid=789012&creative_id=345678'

  it('should match OceanEngine click URL with clickid and ad=oceanengine', () => {
    expect(platform.match(toPage('https://example.com/click?clickid=abc123&ad=oceanengine'))).toBe(true)
  })

  it('should not match without ad=oceanengine', () => {
    expect(platform.match(toPage('https://example.com/click?clickid=abc123'))).toBe(false)
  })

  it('should not match ordinary URLs', () => {
    expect(platform.match(toPage('https://example.com/page?foo=bar'))).toBe(false)
    expect(platform.match(toPage('https://example.com/click?foo=bar'))).toBe(false)
  })

  it('should map action types to OceanEngine string values', () => {
    expect(platform.mapActionType(ActionType.REGISTER)).toBe('active_register')
    expect(platform.mapActionType(ActionType.RESERVATION)).toBe('form')
    expect(platform.mapActionType(ActionType.PURCHASE)).toBe('active_pay')
    expect(platform.mapActionType(ActionType.CLAIM_OFFER)).toBe('coupon')
    expect(platform.mapActionType(ActionType.VIEW)).toBe('view')
  })

  it('should call handler with string action_type in payload', async () => {
    const handler = jest.fn()

    const tracker = new AdTracker({ storage: new MemoryStorage(), handler })
    tracker.use(new OceanEnginePlatform())
    tracker.init(toPage(oceanClickUrl))

    await tracker.report({ action_type: ActionType.PURCHASE })

    const [platform, payload] = handler.mock.calls[0]
    expect(platform).toBe('oceanengine')
    expect(payload.params.clickid).toBe('abc123def456')
    expect(payload.params.ad).toBeUndefined()
    expect(payload.action_type).toBe('active_pay')
    expect(typeof payload.action_time).toBe('number')
  })

  it('should NOT match Tencent click URL with click_id (different param name)', () => {
    expect(platform.match(toPage('https://example.com/click?click_id=abc&ad=oceanengine'))).toBe(false)
  })
})
