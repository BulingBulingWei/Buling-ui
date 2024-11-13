import { App, type Component, Plugin } from 'vue'

// 全局安装组件
export type WithInstallType<T> = T & Plugin
export const withInstall = <T>(comp: T, alias?: string): T & Plugin => {
  const c = comp as any

  c.install = (app: App, name?: string) => {
    const defaultName = c.name
    app.component(alias || name || defaultName, comp as Component)
  }

  return c as T & Plugin
}

// 阻止默认行为
export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
}

// 获取scrollTop
export const getScrollTopRoot = (): number => {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
}

export const isASCII = (character: string | number) => {
  return /^[\x00-\x7F]*$/.test(character.toString())
}

// color transform
export function hexToRGBA(hex: string, alpha: number): string {
  // 去掉可能存在的 '#' 符号
  hex = hex.replace('#', '')

  // 检查 hex 值的长度是否合法
  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error('Invalid hex color value')
  }

  // 如果是 #fff 格式,转换为 #ffFFff 格式
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  }

  // 将 hex 值转换为 RGB 值
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // 将 RGBA 值拼接为字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// rem2px
export function rem2px(value: number): number {
  const fontSize = parseFloat(document.documentElement.style.fontSize)
  return fontSize * value
}

// 不为null和undefined
export function isNotNil(value: any): boolean {
  return value !== null && value !== undefined
}
