import { PropType } from 'vue'

export interface TButtonProps {
  /**
   * 是否为块级元素
   * @default: false
   */
  block: boolean
  /**
   * 禁用状态
   * @default: false
   */
  disabled: boolean
  /**
   * 尺寸，对应设计稿`750`尺寸<p>`large h-96px`</p> <p>`medium h-80px`</p> <p>`small h-56px`</p> <p>`mini h-48px`</p> <p>`tiny h-32px `</p>
   * @default: medium
   */
  size: 'large' | 'medium' | 'small' | 'mini' | 'tiny'
  /**
   * 按钮类型
   * @default: primary
   */
  type: 'outline' | 'primary' | 'text' | 'light'
  /**
   * 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle
   * @default: rectangle
   */
  shape: 'rectangle' | 'square' | 'round' | 'circle'
  /**
   * 左侧按钮图标
   * @default: -
   */
  iconSrc: string
  /**
   * 按钮文字内容
   * @default: -
   */
  content: string
  /**
   * 按钮执行中，不可点击
   * @default: false
   */
  loading: boolean
  /**
   * 按钮长度
   * @default: -
   */
  width: string
}

export default {
  /**
   * 是否为块级元素
   * @default: false
   */
  block: Boolean,
  /**
   * 禁用状态
   * @default: false
   */
  disabled: Boolean,
  /**
   * 左侧按钮图标
   * @default: -
   */
  iconSrc: String,
  /**
   * 尺寸，对应设计稿`750`尺寸<p>`large h-96px`</p> <p>`medium h-80px`</p> <p>`small h-56px`</p> <p>`mini h-48px`</p> <p>`tiny h-32px `</p>
   * @default medium
   */
  size: {
    type: String as PropType<TButtonProps['size']>,
    default: 'medium' as TButtonProps['size']
  },
  /**
   * 按钮类型
   * @default: primary
   */
  type: {
    type: String as PropType<TButtonProps['type']>,
    default: 'primary' as TButtonProps['type']
  },
  /**
   * 按钮形状
   * @default: -
   */
  shape: {
    type: String as PropType<TButtonProps['shape']>,
    default: 'rectangle'
  },
  /**
   * 按钮执行中，不可点击
   * @default: false
   */
  loading: Boolean,
  /**
   * 按钮长度
   * @default: -
   */
  width: String,
  /**
   * 按钮文字内容
   * @default: -
   */
  content: String
}
