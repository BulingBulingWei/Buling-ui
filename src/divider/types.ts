import { PropType } from 'vue'

export interface TDividerProps {
  /**
   * 是否为虚线
   * @default: false
   */
  dashed?: boolean
  /**
   * 分隔线类型有两种：水平和垂直
   * @default: horizontal
   */
  layout?: 'horizontal' | 'vertical'
  /**
   * 分隔间距
   * @default: 0px
   */
  gap: string
  /**
   * 颜色
   * @default: var(--bu-color-disabled)
   */
  color: string
  /**
   * 粗细
   * @default: 1px
   */
  borderWidth?: string
  /**
   * 垂直状态下的高度，默认跟随父容器高度
   * @default: -
   */
  height?: string
  /**
   * 子元素
   * @default: -
   */
  content?: string
  /**
   * 文本位置（仅在水平分割线有效）
   * @default center
   */
  align?: 'start' | 'end' | 'center'
}

export default {
  /**
   * 是否为虚线
   * @default: false
   */
  dashed: {
    type: Boolean,
    default: false
  },
  /**
   * 方向
   * @default: horizontal
   */
  layout: {
    type: String as PropType<TDividerProps['layout']>,
    default: 'horizontal'
  },
  /**
   * 分隔间距
   * @default: 0px
   */
  gap: {
    type: String,
    default: '0px'
  },
  /**
   * 颜色
   * @default: var(--bu-color-disabled)
   */
  color: String,
  /**
   * 粗细
   * @default: 1px
   */
  borderWidth: String,
  /**
   * 垂直状态下的高度，默认跟随父容器高度
   * @default: -
   */
  height: String,
  /**
   * 子元素
   * @default: -
   */
  content: String,
  /**
   * 文本位置（仅在水平分割线有效）
   * @default center
   */
  align: String as PropType<TDividerProps['align']>
}
