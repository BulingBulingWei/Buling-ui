<template>
  <Picker
    :class="name"
    :value="valueOfPicker"
    :title="title"
    :columns="columns"
    :confirm-text="confirmText"
    :cancel-text="cancelText"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import Picker from '@/picker'
import dayjs, { Dayjs, UnitType } from 'dayjs'
import { getMeaningColumn } from './utils'
import DatePickerProps, { TMode } from './types'
import { PickerValue, PickerOption, PickerColumn } from '@/picker/types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-datepicker`

const props = defineProps(DatePickerProps)
const emits = defineEmits(['cancel', 'confirm', 'update:modelValue', 'change'])

// 标准化日期
const normalize = (val: string | number, defaultDay: Dayjs) => (val && dayjs(val).isValid() ? dayjs(val) : defaultDay)
const start = computed(() => normalize(props.start!, dayjs().subtract(10, 'year')))

const end = computed(() => normalize(props.end!, dayjs().add(10, 'year')))

const isTimeMode = computed(
  () => Array.isArray(props.mode) && props.mode[0] == null && ['hour', 'minute', 'second'].includes(props.mode[1])
)

const rationalize = (val: Dayjs) => {
  if (isTimeMode.value) return val
  if (val.isBefore(start.value)) return start.value
  if (val.isAfter(end.value)) return end.value
  return val
}

const calcDate = (currentValue?: string | number) => {
  if (isTimeMode.value) {
    const dateStr = dayjs(start.value).format('YYYY-MM-DD')
    currentValue = `${dateStr} ${currentValue}`
  }

  return currentValue && dayjs(currentValue).isValid() ? rationalize(dayjs(currentValue)) : start.value
}

const innerValue = computed(() => props.modelValue || props.value || props.defaultValue)
const meaningColumn = computed(() => getMeaningColumn(props.mode!))
const curDate = ref(calcDate(innerValue.value))

const valueOfPicker = computed(() =>
  meaningColumn.value.map((item: string) => curDate.value[item as TMode]().toString())
)

const columns = computed(() => {
  const ret: PickerColumn[] = []
  const getDate = (date: Dayjs) => [
    date.year(),
    date.month() + 1,
    date.date(),
    date.hour(),
    date.minute(),
    date.second()
  ]
  const [curYear, curMonth, curDay, curHour, curMinute] = getDate(curDate.value)
  const [minYear, minMonth, minDay, minHour, minMinute, minSecond] = getDate(start.value)
  const [maxYear, maxMonth, maxDay, maxHour, maxMinute, maxSecond] = getDate(end.value)

  const isInMinYear = curYear === minYear
  const isInMaxYear = curYear === maxYear
  const isInMinMonth = isInMinYear && curMonth === minMonth
  const isInMaxMonth = isInMaxYear && curMonth === maxMonth
  const isInMinDay = isInMinMonth && curDay === minDay
  const isInMaxDay = isInMaxMonth && curDay === maxDay
  const isInMinHour = isInMinDay && curHour === minHour
  const isInMaxHour = isInMaxDay && curHour === maxHour
  const isInMinMinute = isInMinHour && curMinute === minMinute
  const isInMaxMinute = isInMaxHour && curMinute === maxMinute

  const typeUnit: Record<string, string> = {
    year: '年',
    month: '月',
    date: '日',
    hour: '时',
    minute: '分',
    second: '秒'
  }

  const generateColumn = (start: number, end: number, type: string) => {
    const arr: PickerOption[] = []

    for (let i = start; i <= end; i++) {
      const value = i.toString()
      arr.push({
        label: `${value} ${typeUnit[type]}`,
        value: type === 'month' ? `${+value - 1}` : value
      })
    }
    ret.push(arr)
  }

  if (meaningColumn.value.includes('year')) {
    generateColumn(minYear, maxYear, 'year')
  }

  if (meaningColumn.value.includes('month')) {
    const lower = isInMinYear ? minMonth : 1
    const upper = isInMaxYear ? maxMonth : 12
    generateColumn(lower, upper, 'month')
  }

  if (meaningColumn.value.includes('date')) {
    const lower = isInMinMonth ? minDay : 1
    const upper = isInMaxMonth ? maxDay : dayjs(`${curYear}-${curMonth}`).daysInMonth()
    generateColumn(lower, upper, 'date')
  }

  if (meaningColumn.value.includes('hour')) {
    const lower = isInMinDay && !isTimeMode.value ? minHour : 0
    const upper = isInMaxDay && !isTimeMode.value ? maxHour : 23
    generateColumn(lower, upper, 'hour')
  }

  if (meaningColumn.value.includes('minute')) {
    const lower = isInMinHour && !isTimeMode.value ? minMinute : 0
    const upper = isInMaxHour && !isTimeMode.value ? maxMinute : 59
    generateColumn(lower, upper, 'minute')
  }

  if (meaningColumn.value.includes('second')) {
    const lower = isInMinMinute && !isTimeMode.value ? minSecond : 0
    const upper = isInMaxMinute && !isTimeMode.value ? maxSecond : 59
    generateColumn(lower, upper, 'second')
  }
  return ret
})

const onConfirm = () => {
  const value = dayjs(curDate.value).format(props.format)
  emits('confirm', value)
}

const onCancel = () => {
  emits('cancel')
}

const onChange = (value: Array<PickerValue>, context: any, columnIndex: number) => {
  const type = meaningColumn.value[columnIndex]
  const val = curDate.value.set(type as UnitType, parseInt(value[columnIndex] as string, 10))
  curDate.value = rationalize(val)
  emits('change', rationalize(val).format(props.format))
  emits('update:modelValue', rationalize(val).format(props.format))
}

watch(innerValue, (val) => {
  curDate.value = calcDate(val)
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
