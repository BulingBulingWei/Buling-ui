import { PropType } from 'vue'

export type PickerValue = string | number

export interface PickerFieldNames {
  label?: string
  value?: string
  children?: string
}

export interface PickerOption {
  [key: PropertyKey]: any
  label?: string
  value?: string
  children?: string
}

export type PickerColumn = PickerOption[]

export type TouchParams = {
  startY: number
  endY: number
  startTime: number
  endTime: number
  lastY: number
  lastTime: number
}

export interface TPickerProps {
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
   * 标题文字
   * @default: 标题
   */
  title: string
  /**
   * 配置每一列的选项。
   * @default: []
   */
  columns: Array<PickerColumn> | PickerColumn
  /**
   * 自定义字段名。
   * @default: {label: 'label', value: 'value', children: 'children'}
   */
  fieldNames: PickerFieldNames
  /**
   * 值，支持v-model。
   * @default: []
   */
  value: Array<PickerValue>
  /**
   * 默认值。
   * @default: []
   */
  defaultValue: Array<PickerValue>
}

export default {
  /**
   * 取消按钮文字
   * @default: 取消
   */
  cancelText: {
    type: String,
    default: '取消'
  },
  /**
   * 确认按钮文字
   * @default: 确定
   */
  confirmText: {
    type: String,
    default: '确定'
  },
  /**
   * 标题文字
   * @default: 标题
   */
  title: {
    type: String,
    default: '标题'
  },
  /**
   * 配置每一列的选项。
   * @default: []
   */
  columns: {
    type: [Array] as PropType<TPickerProps['columns']>,
    default: (): TPickerProps['columns'] => [],
    required: true
  },
  /**
   * 自定义字段名。
   * @default: {label: 'label', value: 'value', children: 'children'}
   */
  fieldNames: {
    type: Object as PropType<TPickerProps['fieldNames']>,
    default: () => ({ label: 'label', value: 'value', children: 'children' })
  },
  /**
   * 值，支持v-model。
   * @default: []
   */
  value: {
    type: Array<PickerValue>,
    default: []
  },
  modelValue: Array<PickerValue>,
  /**
   * 默认值。
   * @default: []
   */
  defaultValue: {
    type: Array<PickerValue>,
    default: []
  }
}
