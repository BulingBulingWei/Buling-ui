import _Cell from './cell.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TCellProps as CellProps } from './types'

const Cell = withInstall(_Cell) as WithInstallType<typeof _Cell>

export default Cell

declare module 'vue' {
  interface GlobalComponents {
    BuCell: typeof Cell
  }
}
