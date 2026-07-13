import { describe, it, expect } from 'vitest'
import { toPage } from '../src'

describe('toPage', () => {
  it('should parse browser URL with host/protocol/port', () => {
    const p = toPage('https://example.com:8080/path?foo=1&bar=2')
    expect(p.href).toBe('https://example.com:8080/path?foo=1&bar=2')
    expect(p.host).toBe('example.com')
    expect(p.protocol).toBe('https')
    expect(p.port).toBe('8080')
    expect(p.pathname).toBe('/path')
    expect(p.search).toBe('?foo=1&bar=2')
    expect(p.query).toEqual({ foo: '1', bar: '2' })
  })

  it('should parse mini-program path without host/protocol/port', () => {
    const p = toPage('pages/index/index?click_id=abc&ad=tencent')
    expect(p.href).toBe('pages/index/index?click_id=abc&ad=tencent')
    expect(p.host).toBeUndefined()
    expect(p.protocol).toBeUndefined()
    expect(p.port).toBeUndefined()
    expect(p.pathname).toBe('/pages/index/index')
    expect(p.search).toBe('?click_id=abc&ad=tencent')
    expect(p.query).toEqual({ click_id: 'abc', ad: 'tencent' })
  })

  it('should handle href without query string', () => {
    const p = toPage('https://example.com/page')
    expect(p.href).toBe('https://example.com/page')
    expect(p.pathname).toBe('/page')
    expect(p.search).toBe('')
    expect(p.query).toEqual({})
  })

  it('should handle mini-program path without query string', () => {
    const p = toPage('pages/index/index')
    expect(p.href).toBe('pages/index/index')
    expect(p.pathname).toBe('/pages/index/index')
    expect(p.search).toBe('')
    expect(p.query).toEqual({})
  })

  it('should decode URL-encoded query values', () => {
    const p = toPage('https://example.com/page?name=%E5%BC%A0%E4%B8%89&redirect=https%3A%2F%2Fsite.com')
    expect(p.query.name).toBe('张三')
    expect(p.query.redirect).toBe('https://site.com')
  })

  it('should handle value without key (no = sign)', () => {
    const p = toPage('https://example.com/page?flag')
    expect(p.query).toEqual({ flag: '' })
  })

  it('should handle empty search after ?', () => {
    const p = toPage('https://example.com/page?')
    expect(p.search).toBe('')
    expect(p.query).toEqual({})
  })
})

describe('getLocationPage', () => {
  it('should return PageLocation from window.location', async () => {
    const originalWindow = globalThis.window

    Object.defineProperty(globalThis, 'window', {
      value: {
        location: {
          href: 'https://demo.com/page?foo=1',
          host: 'demo.com',
          hostname: 'demo.com',
          protocol: 'https:',
          origin: 'https://demo.com',
          port: '',
          pathname: '/page',
          search: '?foo=1',
          hash: '',
        },
      },
      writable: true,
      configurable: true,
    })

    const { getLocationPage } = await vi.importActual<typeof import('../src/PageLocation')>('../src/PageLocation')
    const p = getLocationPage()
    expect(p).toBeDefined()
    expect(p!.href).toBe('https://demo.com/page?foo=1')
    expect(p!.query).toEqual({ foo: '1' })

    Object.defineProperty(globalThis, 'window', {
      value: originalWindow,
      writable: true,
      configurable: true,
    })
  })
})
