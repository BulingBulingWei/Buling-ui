import _Overlay from './overlay.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TOverlayProps as OverlayProps } from './types'

const Overlay = withInstall(_Overlay) as WithInstallType<typeof _Overlay>

export default Overlay

declare module 'vue' {
  interface GlobalComponents {
    BuOverlay: typeof Overlay
  }
}
