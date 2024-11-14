/*
 * @Author: BulingBulingWei
 * @Date: 2024-11-14 00:48:05
 * @LastEditors: BulingBulingWei
 * @LastEditTime: 2024-11-14 21:42:26
 * @Description:
 */
import _Cell from './cell.vue'
import _CellGroup from './cellGroup.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TCellProps as CellProps } from './types'

const Cell = withInstall(_Cell) as WithInstallType<typeof _Cell>

export const CellGroup = withInstall(_CellGroup) as WithInstallType<typeof _CellGroup>
export default Cell

declare module 'vue' {
  interface GlobalComponents {
    BuCell: typeof Cell
    BuCellGroup: typeof CellGroup
  }
}
