import _Space from './space.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TSpaceProps as SpaceProps } from './types'

const Space = withInstall(_Space) as WithInstallType<typeof _Space>

export default Space

declare module 'vue' {
  interface GlobalComponents {
    BuSpace: typeof Space
  }
}
