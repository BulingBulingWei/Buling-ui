import _Picker from './picker.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TPickerProps as PickerProps } from './types'

const Picker = withInstall(_Picker) as WithInstallType<typeof _Picker>

export default Picker

declare module 'vue' {
  interface GlobalComponents {
    BuPicker: typeof Picker
  }
}
