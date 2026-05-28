/** 日志级别，数字越小越详细 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  /** 关闭所有日志 */
  NONE = 4,
}

const LEVEL_NAMES: Record<LogLevel, string> = {
  [LogLevel.DEBUG]: "DEBUG",
  [LogLevel.INFO]: "INFO",
  [LogLevel.WARN]: "WARN",
  [LogLevel.ERROR]: "ERROR",
  [LogLevel.NONE]: "NONE",
}

function formatTimestamp(): string {
  const d = new Date()
  const Y = d.getFullYear()
  const M = String(d.getMonth() + 1).padStart(2, "0")
  const D = String(d.getDate()).padStart(2, "0")
  const h = String(d.getHours()).padStart(2, "0")
  const m = String(d.getMinutes()).padStart(2, "0")
  const s = String(d.getSeconds()).padStart(2, "0")
  return `[${Y}-${M}-${D} ${h}:${m}:${s}]`
}

/**
 * 日志工具，按级别控制输出
 *
 * 输出格式：
 *   [时间] 【AD-TRACKER.tag】 LEVEL action data
 *
 * data 仅对象类型会展开到控制台，字符串/原始值不输出
 */
export class Logger {
  private tag: string
  private level: LogLevel

  /**
   * @param tag   - 日志前缀 tag，显示为 【AD-TRACKER.tag】
   * @param level - 日志级别，低于该级别的日志不会输出，默认 NONE
   */
  constructor(tag: string, level: LogLevel = LogLevel.NONE) {
    this.tag = tag
    this.level = level
  }

  /** 获取当前日志级别 */
  getLevel(): LogLevel {
    return this.level
  }

  /** 动态调整日志级别 */
  setLevel(level: LogLevel): void {
    this.level = level
  }

  /** 关闭日志输出（将级别设为 NONE） */
  dispose(): void {
    this.level = LogLevel.NONE
  }

  /**
   * 按级别写入日志
   * @param level  - 日志级别
   * @param action - 日志动作描述
   * @param data   - 附加数据，仅对象类型会输出到控制台
   */
  log(level: LogLevel, action: string, data?: unknown): void {
    if (this.level > level) return
    console.log(`${formatTimestamp()} 【AD-TRACKER.${this.tag}】 ${LEVEL_NAMES[level]} ${action}`, data && typeof data === "object" ? data : "")
  }

  debug(action: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, action, data)
  }

  info(action: string, data?: unknown): void {
    this.log(LogLevel.INFO, action, data)
  }

  warn(action: string, data?: unknown): void {
    if (this.level > LogLevel.WARN) return
    console.warn(`${formatTimestamp()} 【AD-TRACKER.${this.tag}】 ${LEVEL_NAMES[LogLevel.WARN]} ${action}`, data && typeof data === "object" ? data : "")
  }

  error(action: string, data?: unknown): void {
    if (this.level > LogLevel.ERROR) return
    console.error(`${formatTimestamp()} 【AD-TRACKER.${this.tag}】 ${LEVEL_NAMES[LogLevel.ERROR]} ${action}`, data && typeof data === "object" ? data : "")
  }
}
