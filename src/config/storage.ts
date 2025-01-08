export const StorageService = {
  setItem: <T>(key: string, item: T): void => {
    window.localStorage.setItem(key, JSON.stringify(item))
  },
  getItem: <T>(key: string): T => {
    const data = window.localStorage.getItem(key)
    if (!data) return null as any
    let obj: T
    try {
      obj = JSON.parse(data) as T
    } catch (error) {
      obj = null as T
    }
    return obj
  },
  clearItem: (key: string): void => {
    window.localStorage.removeItem(key)
  },
  clearAll: (): void => {
    window.localStorage.clear()
  },
}
