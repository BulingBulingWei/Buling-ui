import _Grid from './grid.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TGridProps as GridProps } from './types'

const Grid = withInstall(_Grid) as WithInstallType<typeof _Grid>

export default Grid

declare module 'vue' {
  interface GlobalComponents {
    BuGrid: typeof Grid
  }
}
