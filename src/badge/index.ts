import _Badge from './badge.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TBadgeProps as BadgeProps } from './types'

const Badge = withInstall(_Badge) as WithInstallType<typeof _Badge>

export default Badge

declare module 'vue' {
  interface GlobalComponents {
    BuBadge: typeof Badge
  }
}
