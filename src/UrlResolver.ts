/** 当前页面结构化信息，与 window.location 对齐 */
export interface PageLocation {
  href: string
  host: string
  protocol: string
  port: string
  pathname: string
  search: string
  query: Record<string, string>
}

interface MiniProgramPage {
  route?: string
  options?: Record<string, string | undefined>
}

declare function getCurrentPages(): MiniProgramPage[]
declare const wx: { getSystemInfoSync(): unknown }
declare const my: { getSystemInfoSync(): unknown }
declare const tt: { getSystemInfoSync(): unknown }
declare const ks: { getSystemInfoSync(): unknown }
declare const swan: { getSystemInfoSync(): unknown }

export type Env = 'browser' | 'wx' | 'alipay' | 'douyin' | 'kuaishou' | 'baidu' | 'qq'

/** 根据当前运行环境解析页面 URL，返回与 window.location 对齐的结构化信息 */
export class UrlResolver {
  private env: Env

  /**
   * @param env - 运行环境，不传则自动检测
   */
  constructor(env?: Env) {
    this.env = env ?? this.detectEnv()
  }

  /** 当前检测到的环境 */
  get envName(): Env {
    return this.env
  }

  /** 自动检测当前运行环境（小程序优先，兜底浏览器） */
  private detectEnv(): Env {
    if (typeof wx !== "undefined" && typeof wx.getSystemInfoSync === "function") return "wx"
    if (typeof my !== "undefined" && typeof my.getSystemInfoSync === "function") return "alipay"
    if (typeof tt !== "undefined" && typeof tt.getSystemInfoSync === "function") return "douyin"
    if (typeof ks !== "undefined" && typeof ks.getSystemInfoSync === "function") return "kuaishou"
    if (typeof swan !== "undefined" && typeof swan.getSystemInfoSync === "function") return "baidu"
    if (typeof window !== "undefined" && window.location) return "browser"
    return "browser"
  }

  /** 从 URL 字符串解析为 PageLocation 对象 */
  getPageFromUrl(url: string): PageLocation | undefined {
    try {
      const parsed = new URL(url)
      const query: Record<string, string> = {}
      for (const [k, v] of parsed.searchParams.entries()) {
        query[k] = v
      }
      return {
        href: url,
        host: parsed.hostname,
        protocol: parsed.protocol.replace(":", ""),
        port: parsed.port,
        pathname: parsed.pathname,
        search: parsed.search,
        query,
      }
    } catch {
      return undefined
    }
  }

  /** 获取当前页面完整 URL（等价于 window.location.href） */
  getCurrentUrl(): string | undefined {
    return this.getCurrentPage()?.href
  }

  /**
   * 获取当前页面结构化信息，包含 href / host / protocol / port / pathname / search / query
   * 浏览器环境真实映射 window.location；小程序环境通过 getCurrentPages() 拼接
   */
  getCurrentPage(): PageLocation | undefined {
    switch (this.env) {
      case "browser":
        return this.getBrowserPage()
      case "wx":
      case "alipay":
      case "douyin":
      case "kuaishou":
      case "baidu":
      case "qq":
        return this.getMiniProgramPage()
    }
  }

  /** 浏览器环境：直接通过 window.location.href 解析 */
  private getBrowserPage(): PageLocation | undefined {
    if (typeof window !== "undefined" && window.location) {
      return this.getPageFromUrl(window.location.href)
    }
    return undefined
  }

  /** 小程序环境：通过 getCurrentPages() 获取最后一页的 route + options 拼接 page location */
  private getMiniProgramPage(): PageLocation | undefined {
    try {
      const pages = getCurrentPages()
      if (pages && pages.length > 0) {
        const page = pages[pages.length - 1]
        const route = page.route ?? ""
        const query = this.buildQuery(page.options)
        const search = this.buildSearch(query)
        const href = search ? `${route}${search}` : route
        return {
          href,
          host: "",
          protocol: "",
          port: "",
          pathname: `/${route}`,
          search,
          query,
        }
      }
    } catch {
      return undefined
    }
    return undefined
  }

  /** 将小程序 options 对象过滤 undefined 值 */
  private buildQuery(options: Record<string, string | undefined> | undefined): Record<string, string> {
    const params: Record<string, string> = {}
    if (!options || typeof options !== "object") return params
    for (const [k, v] of Object.entries(options)) {
      if (v !== undefined) params[k] = v
    }
    return params
  }

  /** 将 query 对象序列化为 ?key=val&key2=val2 字符串 */
  private buildSearch(query: Record<string, string>): string {
    const entries = Object.entries(query)
    if (entries.length === 0) return ""
    return "?" + entries.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&")
  }
}
