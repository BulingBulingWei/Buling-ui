import { PropType } from 'vue'

export interface TCountDownProps {
  /**
   * 自动开始倒计时
   * @default: false
   */
  autoStart: boolean
  /**
   * 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
   * @default: HH:mm:ss
   */
  format: string
  /**
   * 倒计时时长，单位毫秒
   * @default: -
   */
  time: number
  /**
   * 开启毫秒级渲染
   * @default: false
   */
  millisecond: boolean
  /**
   * 类型
   * @default: default
   */
  type?: 'default' | 'circle' | 'block' | 'light-text'
  /**
   * 尺寸
   * @default: medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 使用时间单位分割
   * @default: false
   */
  splitWithUnit: boolean
}

export default {
  /**
   * 自动开始倒计时
   * @default: false
   */
  autoStart: Boolean,
  /**
   * 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
   * @default: HH:mm:ss
   */
  format: String,
  /**
   * 倒计时时长，单位毫秒
   * @default: -
   */
  time: Number,
  /**
   * 开启毫秒级渲染
   * @default: false
   */
  millisecond: Boolean,
  /**
   * 尺寸
   * @default: medium
   */
  size: {
    type: String as PropType<TCountDownProps['size']>,
    default: 'medium'
  },
  /**
   * 类型
   * @default: default
   */
  type: {
    type: String as PropType<TCountDownProps['type']>,
    default: 'default'
  },
  /**
   * 使用时间单位分割
   * @default: false
   */
  splitWithUnit: Boolean
}
