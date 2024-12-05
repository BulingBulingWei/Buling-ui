import _Fab from './fab.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TFabProps as FabProps } from './types'

const Fab = withInstall(_Fab) as WithInstallType<typeof _Fab>

export default Fab

declare module 'vue' {
  interface GlobalComponents {
    BuFab: typeof Fab
  }
}
