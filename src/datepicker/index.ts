import _DatePicker from './datepicker.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TDatePickerProps as DatePickerProps } from './types'

const DatePicker = withInstall(_DatePicker) as WithInstallType<typeof _DatePicker>

export default DatePicker

declare module 'vue' {
  interface GlobalComponents {
    BuDatePicker: typeof DatePicker
  }
}
