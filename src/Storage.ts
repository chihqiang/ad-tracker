/** 存储接口 */
export interface IStorage {
  get(key: string): string | null
  set(key: string, value: string): void
}

/** 内存存储，刷新页面即丢失 */
export class MemoryStorage implements IStorage {
  private store = new Map<string, string>()

  get(key: string): string | null {
    return this.store.get(key) ?? null
  }

  set(key: string, value: string): void {
    this.store.set(key, value)
  }
}

/** 浏览器环境默认 localStorage，否则回退到内存存储 */
function hasLocalStorage(): boolean {
  return typeof localStorage !== 'undefined'
}

function hasSessionStorage(): boolean {
  return typeof sessionStorage !== 'undefined'
}

/** sessionStorage 封装，当前会话有效 */
export class SessionStorageWrapper implements IStorage {
  get(key: string): string | null {
    if (!hasSessionStorage()) return null
    return sessionStorage.getItem(key)
  }

  set(key: string, value: string): void {
    if (!hasSessionStorage()) return
    sessionStorage.setItem(key, value)
  }
}

/** localStorage 封装，跨页面持久化 */
export class LocalStorageWrapper implements IStorage {
  get(key: string): string | null {
    if (!hasLocalStorage()) return null
    return localStorage.getItem(key)
  }

  set(key: string, value: string): void {
    if (!hasLocalStorage()) return
    localStorage.setItem(key, value)
  }
}

/** 浏览器环境默认 localStorage，否则回退到内存存储 */
export function createDefaultStorage(): IStorage {
  if (hasLocalStorage()) {
    return new LocalStorageWrapper()
  }
  return new MemoryStorage()
}
