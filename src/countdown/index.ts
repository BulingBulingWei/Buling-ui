import _CountDown from './countdown.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TCountDownProps as CountDownProps } from './types'

const CountDown = withInstall(_CountDown) as WithInstallType<typeof _CountDown>

export default CountDown

declare module 'vue' {
  interface GlobalComponents {
    BuCountDown: typeof CountDown
  }
}
