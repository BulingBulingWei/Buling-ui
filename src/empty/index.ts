import _Empty from './empty.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TEmptyProps as EmptyProps } from './types'

const Empty = withInstall(_Empty) as WithInstallType<typeof _Empty>

export default Empty

declare module 'vue' {
  interface GlobalComponents {
    BuEmpty: typeof Empty
  }
}
