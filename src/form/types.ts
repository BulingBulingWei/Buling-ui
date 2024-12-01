import { PropType } from 'vue'

export interface TFormProps {
  /**
   * 布局方式
   * @default: vertical
   */
  layout?: 'horizontal' | 'vertical'
  /**
   * label的宽度
   * @default: auto
   */
  labelWidth?: string
  /**
   * label的纵向排列方式
   * @default: top
   */
  labelAlign?: 'top' | 'bottom' | 'center'
  /**
   * 内容区的排列方式
   * @default: 垂直布局为left，水平布局为right
   */
  contentAlign?: 'left' | 'center' | 'right'
}

export interface TFormItemProps {
  label: string
  value?: string | number
  required?: boolean
  arrow?: boolean
  labelWidth?: string
  labelAlign?: 'top' | 'bottom' | 'center'
  layout?: 'horizontal' | 'vertical'
  contentAlign?: 'left' | 'center' | 'right'
  help?: string
  error?: string
}

export default {
  layout: {
    type: String as PropType<TFormProps['layout']>,
    default: 'vertical'
  },
  labelWidth: String,
  /**
   * label的纵向排列方式
   * @default: top
   */
  labelAlign: {
    type: String as PropType<TFormProps['labelAlign']>,
    default: 'top'
  },
  /**
   * 内容区的排列方式
   * @default: 垂直布局为left，水平布局为right
   */
  contentAlign: {
    type: String as PropType<TFormProps['contentAlign']>
  }
}
