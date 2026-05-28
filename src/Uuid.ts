/** 将字节转为 2 位十六进制字符串 */
function hex(n: number): string {
  return n.toString(16).padStart(2, "0")
}

/** UUID v4 生成器 */
class UuidGenerator {
  /** 使用 crypto.randomUUID（现代浏览器 / Node 19+） */
  private native(): string {
    return crypto.randomUUID()
  }

  /** 使用 crypto.getRandomValues + 手动拼装 */
  private randomValues(): string {
    const bytes = new Uint8Array(16)
    crypto.getRandomValues(bytes)
    return this.format(bytes)
  }

  /** 使用 Math.random 兜底 */
  private fallback(): string {
    const bytes = new Uint8Array(16)
    for (let i = 0; i < 16; i++) {
      bytes[i] = (Math.random() * 256) | 0
    }
    return this.format(bytes)
  }

  /**
   * 按 UUID v4 规范设置字节并拼接
   * - 第 13 字符固定为 4（版本号）
   * - 第 17 字符为 8/9/a/b（变体）
   */
  private format(bytes: Uint8Array): string {
    bytes[6] = (bytes[6] & 0x0f) | 0x40
    bytes[8] = (bytes[8] & 0x3f) | 0x80
    const h = (i: number) => hex(bytes[i])
    return `${h(0)}${h(1)}${h(2)}${h(3)}-${h(4)}${h(5)}-${h(6)}${h(7)}-${h(8)}${h(9)}-${h(10)}${h(11)}${h(12)}${h(13)}${h(14)}${h(15)}`
  }

  /** 选一个可用的生成策略 */
  private pick(): () => string {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return () => this.native()
    }
    if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
      return () => this.randomValues()
    }
    return () => this.fallback()
  }

  private strategy: () => string

  constructor() {
    this.strategy = this.pick()
  }

  /** 生成 UUID v4 字符串 */
  generate(): string {
    return this.strategy()
  }
}

const instance = new UuidGenerator()

/** 生成 UUID v4 字符串 */
export function genUuid(): string {
  return instance.generate()
}
