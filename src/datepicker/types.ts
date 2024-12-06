import { PropType } from 'vue'

export type TMode = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second'

export interface TDatePickerProps {
  /**
   * 标题
   * @default: 选择时间
   */
  title: string
  /**
   * 最小时间
   * @default: 默认10年前
   */
  start: string | number
  /**
   * 最大时间
   * @default: 默认10年后
   */
  end: string | number
  /**
   * 供选择的时间模式。year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TMode = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second'
   * @default: date
   */
  mode: TMode | TMode[]
  /**
   * 用于change、confirm事件参数格式化
   * @default: YYYY-MM-DD HH:mm:ss
   */
  format: string
  /**
   * 取消按钮文字
   * @default: 取消
   */
  cancelText: string
  /**
   * 确认按钮文字
   * @default: 确定
   */
  confirmText: string
  /**
   * 当前值，支持v-model
   * @default: -
   */
  value: string | number
  modelValue: string | number
  /**
   * 默认值
   * @default: -
   */
  defaultValue: string | number
}

export default {
  title: {
    type: String,
    default: '选择时间'
  },
  start: {
    type: [String, Number]
  },
  end: {
    type: [String, Number]
  },
  mode: [String, Array] as PropType<TDatePickerProps['mode']>,
  format: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  value: [String, Number],
  modelValue: [String, Number],
  defaultValue: [String, Number]
}
