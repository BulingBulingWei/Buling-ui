import _Radio from './radio.vue'
import _RadioGroup from './radioGroup.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TRadioProps as RadioProps } from './types'

const Radio = withInstall(_Radio) as WithInstallType<typeof _Radio>
export const RadioGroup = withInstall(_RadioGroup) as WithInstallType<typeof _RadioGroup>

export default Radio

declare module 'vue' {
  interface GlobalComponents {
    BuRadio: typeof Radio
    BuRadioGroup: typeof RadioGroup
  }
}
