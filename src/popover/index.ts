import _Popover from './popover.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TPopoverProps as PopoverProps } from './types'

const Popover = withInstall(_Popover) as WithInstallType<typeof _Popover>

export default Popover

declare module 'vue' {
  interface GlobalComponents {
    BuPopover: typeof Popover
  }
}
