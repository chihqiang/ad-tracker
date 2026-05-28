/// <reference types="jest" />
import { genUuid } from '../src/Uuid'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

describe('Uuid', () => {
  it('should generate a string matching UUID v4 format', () => {
    expect(genUuid()).toMatch(UUID_RE)
  })

  it('should generate unique values across multiple calls', () => {
    const ids = new Set(Array.from({ length: 100 }, () => genUuid()))
    expect(ids.size).toBe(100)
  })
})
