import { PropType } from 'vue'

export interface TPopoverProps {
  /**
   * 触发元素，此优先级大于插槽
   * @default: -
   */
  triggerRef: HTMLElement
  /**
   * 是否显示气泡
   * @default: true
   */
  showPopover: boolean
  /**
   * 气泡内标题
   * @default: -
   */
  title: string
  /**
   * 内容
   * @default: -
   */
  content: string
  /**
   * 显示关闭按钮
   * @default: false
   */
  showClose: boolean
  /**
   * 显示箭头
   * @default: true
   */
  showArrow: boolean
  /**
   * 弹出位置
   * @default: top
   */
  placement: 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /**
   * 点击外层关闭气泡
   * @default: true
   */
  closeOnClickOutside: boolean
  /**
   * style样式传递
   * @default: {}
   */
  style: object
  onClose: () => void
}

export default {
  /**
   * 触发元素，此优先级大于插槽
   * @default: -
   */
  triggerRef: HTMLElement,
  /**
   * 是否显示气泡
   * @default: true
   */
  showPopover: {
    type: Boolean,
    default: true
  },
  /**
   * 气泡内标题
   * @default: -
   */
  title: String,
  /**
   * 内容
   * @default: -
   */
  content: String,
  /**
   * 显示关闭按钮
   * @default: false
   */
  showClose: {
    type: Boolean,
    default: false
  },
  /**
   * 显示箭头
   * @default: true
   */
  showArrow: {
    type: Boolean,
    default: true
  },
  /**
   * 弹出位置
   * @default: top
   */
  placement: {
    type: String as PropType<TPopoverProps['placement']>,
    default: 'top' as TPopoverProps['placement']
  },
  /**
   * 点击外层关闭气泡
   * @default: true
   */
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  visible: Boolean,
  style: Object
}
