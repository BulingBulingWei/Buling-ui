import _Popup from './popup.vue'
import _PopupToolBar from './components/popupToolbar.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TPopupProps as PopupProps } from './types'

const Popup = withInstall(_Popup) as WithInstallType<typeof _Popup>
export const PopupToolBar = withInstall(_PopupToolBar) as WithInstallType<typeof _PopupToolBar>

export default Popup

declare module 'vue' {
  interface GlobalComponents {
    BuPopup: typeof Popup
    BuPopupToolBar: typeof PopupToolBar
  }
}
