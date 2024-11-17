import { PropType } from 'vue'

export interface TStickyProps {
  /**
   * 指定容器
   * @default: -
   */
  container?: HTMLElement | null
  /**
   * 距离容器顶部距离,单位`px`
   * @default: 0
   */
  offsetTop?: number | string
  /**
   * z-index值
   * @default: 1000
   */
  zIndex?: number
}

export default {
  /**
   * 指定容器
   * @default: -
   */
  container: Object as PropType<TStickyProps['container']>,
  /**
   * 距离容器顶部距离,单位`px`
   * @default: 0
   */
  offsetTop: {
    type: [Number, String],
    default: 0
  },
  /**
   * z-index值
   * @default: 1000
   */
  zIndex: {
    type: Number,
    default: 1000
  }
}
