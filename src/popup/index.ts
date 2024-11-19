import _Popup from './popup.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TPopupProps as PopupProps } from './types'

const Popup = withInstall(_Popup) as WithInstallType<typeof _Popup>

export default Popup

declare module 'vue' {
  interface GlobalComponents {
    BuPopup: typeof Popup
  }
}
