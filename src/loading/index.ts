import _Loading from './loading.vue'
import _LightLoadingIcon from './icon/light.vue'
import _DarkLoadingIcon from './icon/dark.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TLoadingProps as LoadingProps } from './types'

const Loading = withInstall(_Loading) as WithInstallType<typeof _Loading>

export const LightLoadingIcon = withInstall(_LightLoadingIcon) as WithInstallType<
  typeof _LightLoadingIcon
>
export const DarkLoadingIcon = withInstall(_DarkLoadingIcon) as WithInstallType<
  typeof _DarkLoadingIcon
>

export { default as useLoading } from './hooks'

export default Loading

declare module 'vue' {
  interface GlobalComponents {
    BuLoading: typeof Loading
    BuLightLoadingIcon: typeof LightLoadingIcon
    BuDarkLoadingIcon: typeof DarkLoadingIcon
  }
}
