import _Avatar from './avatar.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TAvatarProps as AvatarProps } from './types'

const Avatar = withInstall(_Avatar) as WithInstallType<typeof _Avatar>

export default Avatar

declare module 'vue' {
  interface GlobalComponents {
    BuAvatar: typeof Avatar
  }
}
