import { CSSProperties, PropType } from 'vue'

export interface TSpaceProps {
  /**
   * 间距gap
   * @default: 0.16rem
   */
  gap: string
  /**
   * 轴方向,同flex-direction
   * @default: row
   */
  direction: 'row' | 'column'
  /**
   * 自动换行
   * @default: false
   */
  wrap: boolean
  /**
   * 轴方向对齐方式,同 justify-content
   * @default: -
   */
  justify: CSSProperties['justify-content']
  /**
   * 垂直轴方向对齐方式,同align-items
   * @default: -
   */
  align: CSSProperties['align-items']
  /**
   * 是否让 Space 变为一个块级元素，填充整个父元素
   * @default: -
   */
  fill: boolean
}

export default {
  /**
   * 间距gap
   * @default: 0.16rem
   */
  gap: String,
  /**
   * 轴方向,同flex-direction
   * @default: horizontal
   */
  direction: {
    type: String as PropType<TSpaceProps['direction']>,
    default: 'row'
  },
  /**
   * 自动换行
   * @default: false
   */
  wrap: Boolean,
  /**
   * 轴方向对齐方式,同 justify-content
   * @default: -
   */
  justify: String,
  /**
   * 垂直轴方向对齐方式,同align-items
   * @default: -
   */
  align: String,
  /**
   * 是否让 Space 变为一个块级元素，填充整个父元素
   * @default: -
   */
  fill: Boolean
}
