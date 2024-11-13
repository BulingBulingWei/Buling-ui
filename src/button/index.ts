import _Button from './button.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TButtonProps as ButtonProps } from './types'

const Button = withInstall(_Button) as WithInstallType<typeof _Button>

export default Button
declare module 'vue' {
  interface GlobalComponents {
    BuButton: typeof Button
  }
}
