export interface TUseCountDownProps {
  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart?: boolean
  /**
   * 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
   * @default HH:mm:ss
   */
  format?: string
  /**
   * 是否开启毫秒级渲染
   * @default false
   */
  millisecond?: boolean
  /**
   * 倒计时尺寸
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 使用时间单位分割
   * @default false
   */
  splitWithUnit?: boolean
  /**
   * 倒计时风格
   * @default 'default'
   */
  theme?: 'default' | 'round' | 'square'
  /**
   * 倒计时时长，单位毫秒
   */
  time?: number
  /**
   * 时间变化时触发
   */
  onChange?: (time: TimeData) => void
  /**
   * 倒计时结束时触发
   */
  onFinish?: () => void
}

export interface TimeData {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

/**
 * 显示时间
 */
export type TUseCountDownShowTimes = Array<{ mark?: string; value?: string | number }>

/**
 * TUseCountDown
 */
export interface TUseCountDown {
  time: { value: number }
  showTimes: TUseCountDownShowTimes
  pause?: () => void
  resume?: () => void
}
