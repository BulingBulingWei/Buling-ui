import _List from './list.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TListProps as ListProps } from './types'

const List = withInstall(_List) as WithInstallType<typeof _List>

export default List

declare module 'vue' {
  interface GlobalComponents {
    BuList: typeof List
  }
}
