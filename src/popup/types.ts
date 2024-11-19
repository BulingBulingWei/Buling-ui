import { PropType } from 'vue'
import { OverlayProps } from '@/overlay'

export interface TPopupProps {
  /**
   * 是否显示弹出层, 支持v-model
   * @default: false
   */
  visible: boolean
  modelValue: boolean
  /**
   * 弹出层呈现位置
   * @default: center
   */
  placement: 'left' | 'right' | 'top' | 'bottom' | 'center'
  /**
   * 是否点击遮罩层关闭弹出层
   * @default: false
   */
  closeOnOverlayClick: boolean
  /**
   * 透传至遮罩层的props
   * @default: -
   */
  overlayProps: Partial<Omit<OverlayProps, 'visible'>>
  /**
   * 层级
   * @default: 900
   */
  zIndex: number
  /**
   * 背景色属性
   * @default: #fff
   */
  background: string
  /**
   * 安全底部
   * @default: true
   */
  safeBottom: boolean
  // 事件 -> on + 参数
  onOpen: (dom: Element) => void
  onOpened: (dom: Element) => void
  onClose: (dom: Element) => void
  onClosed: (dom: Element) => void
  onClickOverlay: (dom: Element) => void
}

export default {
  /**
   * 是否显示弹出层, 支持v-model
   * @default: false
   */
  visible: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * 弹出层呈现位置
   * @default: center
   */
  placement: {
    type: String as PropType<TPopupProps['placement']>,
    default: 'center' as TPopupProps['placement']
  },
  /**
   * 是否点击遮罩层关闭弹出层
   * @default: false
   */
  closeOnOverlayClick: {
    type: Boolean,
    default: false
  },
  /**
   * 透传至遮罩层的props
   * @default: -
   */
  overlayProps: {
    type: Object as PropType<TPopupProps['overlayProps']>,
    default: {}
  },
  /**
   * 层级
   * @default: 900
   */
  zIndex: {
    type: Number,
    default: 900
  },
  /**
   * 背景色属性
   * @default: #fff
   */
  background: {
    type: String,
    default: '#fff'
  },
  /**
   * 安全底部
   * @default: true
   */
  safeBottom: {
    type: Boolean,
    default: true
  }
}
