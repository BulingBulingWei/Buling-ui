import { PropType } from 'vue'

export interface TRadioProps {
  /**
   * 是否选中
   * @default: false
   */
  checked: boolean
  /**
   * 标题
   * @default: -
   */
  label: string
  /**
   * 描述文案
   * @default: -
   */
  description: string
  /**
   * 禁用
   * @default: false
   */
  disabled: boolean
  /**
   * 值
   * @default: -
   */
  value: string | number | boolean
  /**
   * 图标相对文案位置
   * @default: right
   */
  placement: 'left' | 'right'
  /**
   * 展示卡片样式
   * @default: false
   */
  card: boolean
  /**
   * 块级元素
   * @default: true
   */
  block: boolean
  /**
   * 无边框样式
   * @default: false
   */
  borderless: boolean
}

export interface TRadioGroupProps {
  value: string | number
  modelValue: string | number
  defaultValue: string | number
  options: Partial<TRadioProps>[]
  disabled: boolean
  type: 'default' | 'card' | 'gap-card' | 'sub-gap-card'
  layout: 'horizontal' | 'vertical'
}

export default {
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  description: String,
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  placement: {
    type: String as PropType<TRadioProps['placement']>,
    default: 'right'
  },
  /**
   * 展示卡片样式
   * @default: false
   */
  card: Boolean,
  /**
   * 块级元素
   * @default: true
   */
  block: {
    type: Boolean,
    default: true
  },
  /**
   * 无边框样式
   * @default: false
   */
  borderless: {
    type: Boolean,
    default: false
  },
  rootGroup: {
    type: Boolean,
    default: false
  }
}
