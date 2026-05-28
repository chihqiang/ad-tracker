/** 页面结构化信息 */
export interface PageLocation {
  /** 完整 URL（浏览器），或 path?query（小程序） */
  href: string
  /** 域名，小程序无此字段 */
  host?: string
  /** 协议，小程序无此字段 */
  protocol?: string
  /** 端口，小程序无此字段 */
  port?: string
  /** 路径 */
  pathname: string
  /** 查询字符串（含 ?） */
  search: string
  /** 解析后的查询参数 */
  query: Record<string, string>
}

/** 将 href 解析为 PageLocation（支持浏览器 URL 和小程序 path?query） */
export function toPage(href: string): PageLocation {
  const qIdx = href.indexOf("?")
  const rawQuery = qIdx === -1 ? "" : href.slice(qIdx + 1)
  const query: Record<string, string> = {}
  for (const part of rawQuery.split("&")) {
    if (!part) continue
    const eqIdx = part.indexOf("=")
    if (eqIdx === -1) {
      query[decodeURIComponent(part)] = ""
    } else {
      query[decodeURIComponent(part.slice(0, eqIdx))] = decodeURIComponent(part.slice(eqIdx + 1))
    }
  }

  try {
    const parsed = new URL(href)
    return {
      href,
      host: parsed.hostname,
      protocol: parsed.protocol.replace(":", ""),
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      query,
    }
  } catch {
    const pathname = qIdx === -1 ? href : href.slice(0, qIdx)
    const search = qIdx === -1 ? "" : href.slice(qIdx)
    return {
      href,
      pathname: pathname.startsWith("/") ? pathname : `/${pathname}`,
      search: search || "",
      query,
    }
  }
}

/** 读取 window.location 生成当前页面的 PageLocation */
export function getLocationPage(): PageLocation | undefined {
  if (typeof window !== "undefined" && window.location) {
    return toPage(window.location.href)
  }
  return undefined
}
