import _Checkbox from './checkbox.vue'
import _CheckBoxGroup from './checkGroup.vue'
import { withInstall, WithInstallType } from '@/utils'

export type {
  TCheckBoxProps as CheckBoxProps,
  TCheckBoxGroupProps as CheckBoxGroupProps
} from './types'

const Checkbox = withInstall(_Checkbox) as WithInstallType<typeof _Checkbox>
export const CheckBoxGroup = withInstall(_CheckBoxGroup) as WithInstallType<typeof _CheckBoxGroup>

export default Checkbox

declare module 'vue' {
  interface GlobalComponents {
    BuCheckBox: typeof Checkbox
    BuCheckBoxGroup: typeof CheckBoxGroup
  }
}
