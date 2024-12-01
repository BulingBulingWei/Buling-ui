import _Divider from './divider.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TDividerProps as DividerProps } from './types'

const Divider = withInstall(_Divider) as WithInstallType<typeof _Divider>

export default Divider

declare module 'vue' {
  interface GlobalComponents {
    BuDivider: typeof Divider
  }
}
