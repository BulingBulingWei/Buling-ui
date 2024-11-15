import { PropType } from 'vue'

export interface TBadgeProps {
  /**
   * 是否显示 badge
   * @default: true
   */
  showBadge: boolean
  /**
   * 是否显示小红点
   * @default: false
   */
  dot: boolean
  /**
   * 徽标内容
   * @default: -
   */
  content: string | number
  /**
   * 徽标大小
   * @default: medium
   */
  size: 'small' | 'medium' | 'large'
  /**
   * 最大值，超过最大值会显示 '{maxCount}+'
   * @default: -
   */
  maxCount: number
  /**
   * 是否显示边框
   * @default: false
   */
  border: boolean
  /**
   * 徽标偏移量
   * @default: -
   */
  transform: CSSStyleDeclaration['transform']
}

export default {
  /**
   * 是否显示 badge
   * @default: true
   */
  showBadge: {
    type: Boolean,
    default: true
  },
  /**
   * 是否显示小红点
   * @default: false
   */
  dot: {
    type: Boolean,
    default: false
  },
  /**
   * 徽标大小
   * @default: medium
   */
  size: {
    type: String as PropType<TBadgeProps['size']>,
    default: 'medium'
  },
  /**
   * 徽标内容
   * @default: -
   */
  content: [String, Number],
  /**
   * 最大值，超过最大值会显示 '{maxCount}+'
   * @default: -
   */
  maxCount: Number,
  /**
   * 是否显示边框
   * @default: false
   */
  border: {
    type: Boolean,
    default: false
  },
  /**
   * 徽标偏移量
   * @default: -
   */
  transform: String
}
