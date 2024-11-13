import { App } from 'vue'

import './styles/index.less'
import * as components from './components'

type TConfigType = {
  theme: 'Orange' | 'Blue' | 'Yellow'
}

export function useTheme(theme: 'Orange' | 'Blue' | 'Yellow') {
  // 设置主题
  if (document.documentElement) {
    document.documentElement.setAttribute('theme', theme)
  }
}

const install = function (app: App, options: TConfigType = { theme: 'Blue' }): void {
  Object.keys(components).forEach((comp) => {
    app.component(comp, components[comp as keyof typeof components])
  })
  useTheme(options?.theme || 'Blue')
}

export * from './components'
// export * from './hooks'
export default { install }
