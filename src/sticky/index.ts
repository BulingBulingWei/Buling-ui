import _Sticky from './sticky.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TStickyProps as StickyProps } from './types'

const Sticky = withInstall(_Sticky) as WithInstallType<typeof _Sticky>

export default Sticky

declare module 'vue' {
  interface GlobalComponents {
    BuSticky: typeof Sticky
  }
}
