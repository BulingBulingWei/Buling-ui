import { PropType } from 'vue'
import { ButtonProps } from '@/button'

export interface TFabProps {
  /**
   * 图标地址
   * @default: -
   */
  iconSrc: string
  /**
   * 文本内容
   * @default: -
   */
  text: string
  /**
   * 定位
   * @default: { bottom: 80px, right: 40px }
   */
  offset: { bottom?: string; right?: string; left?: string; top?: string }
  /**
   * 是否可拖动
   * @default: false
   */
  draggable: boolean
  /**
   * 可拖动时是否自动贴边
   * @default: false
   */
  aside: boolean
  /**
   * 透传至button的props
   * @default: { type: 'primary', shape: 'circle', size: 'large' }
   */
  buttonProps: Partial<ButtonProps>
}

export default {
  /**
   * 图标地址
   * @default: -
   */
  iconSrc: String,
  /**
   * 文本内容
   * @default: -
   */
  text: String,
  /**
   * 定位
   * @default: { bottom: 80px, right: 40px }
   */
  offset: Object as PropType<TFabProps['offset']>,
  /**
   * 是否可拖动
   * @default: false
   */
  draggable: {
    type: Boolean,
    default: false
  },
  /**
   * 可拖动时是否自动贴边
   * @default: false
   */
  aside: {
    type: Boolean,
    default: false
  },
  /**
   * 透传至button的props
   * @default: -
   */
  buttonProps: Object as PropType<TFabProps['buttonProps']>
}
