import { ref, reactive, watch, computed, toRefs, PropType } from 'vue'
import { PickerOption, PickerFieldNames, PickerColumn, PickerValue, TPickerProps } from './types'

const DEFAULT_FILED_NAMES = {
  label: 'label',
  value: 'value',
  children: 'children'
}

export const usePicker = (props: any, emit: any) => {
  // 这是 props.columns 的副本
  const formattedColumns = ref<any>(props.columns)

  watch(
    () => props.columns,
    (val) => {
      formattedColumns.value = val as PickerOption[]
    }
  )

  // 数据依赖的字段名，默认为 {label: 'label', value: 'value', children: 'children'}
  const columnFieldNames = computed(() => {
    return {
      ...DEFAULT_FILED_NAMES,
      ...(props.fieldNames as PickerFieldNames)
    }
  })

  // props传来的选择值
  const propValue = computed(() => props.modelValue || props.value || props.defaultValue)

  // 当前选择的值列表（有可能是默认值，根据propValue得来），因此可能不全，下方selectedOptions才是最终确定的值
  const defaultValues = ref<PickerValue[]>([])

  // 判断两个值是否相同，用于判断props是否变化
  const isSameValue = (valA: any, valB: any) => JSON.stringify(valA) === JSON.stringify(valB)

  // 根据props的变化更新当前选择的值defaultValues
  watch(
    propValue,
    (val) => {
      if (!isSameValue(val, defaultValues.value)) {
        defaultValues.value = val
      }
    },
    {
      deep: true,
      immediate: true
    }
  )

  watch(
    defaultValues,
    (newValues) => {
      if (!isSameValue(newValues, propValue.value)) {
        emit('update:modelValue', newValues)
      }
    },
    { deep: true }
  )

  // 当前数据类型：'single'|'multiple'|'cascade'
  const columnsType = computed(() => {
    const firstColumn: PickerOption | PickerOption[] = formattedColumns.value[0]
    const fields = columnFieldNames.value
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return 'multiple'
      }
      if (fields.children in firstColumn) {
        return 'cascade'
      }
    }
    return 'single'
  })

  // 最终用于渲染 Picker-item 的数据
  const columnsList = computed(() => {
    let result: PickerOption[][] = []
    if (columnsType.value === 'single') {
      result = [formattedColumns.value]
    } else if (columnsType.value === 'multiple') {
      result = formattedColumns.value
    } else {
      result = formatCascade(formattedColumns.value, defaultValues.value)
    }

    return result
  })

  // 格式化级联数据，得到级联类型的columnsList
  const formatCascade = (columns: PickerOption[], defaultValues: (number | string)[]) => {
    const result: PickerOption[][] = []
    const fields = columnFieldNames.value
    let columnTmp: PickerOption[] = columns
    for (let i = 0; columnTmp; i++) {
      result.push(columnTmp)
      let targetIndex: number = columnTmp.findIndex(
        (item: PickerOption) => item[fields.value] === defaultValues[i]
      )
      if (targetIndex === -1) targetIndex = 0
      columnTmp = columnTmp[targetIndex][fields.children]
    }

    return result
  }

  // 当前选择的值的indexs列表，根据columnsList计算得出
  const defaultIndexs = computed(() => {
    const fields = columnFieldNames.value
    return columnsList.value.map((column: PickerOption[], index: number) => {
      const targetIndex: number = column.findIndex(
        (item: PickerOption) => item[fields.value] === defaultValues.value[index]
      )
      return targetIndex === -1 ? 0 : targetIndex
    })
  })

  // 最终确定选择的值，因为 defaultValues 有可能部分值为空，所以需要根据columnsList来确认
  const selectedOptions = computed(() => {
    const fields = columnFieldNames.value
    return columnsList.value.map((column: PickerOption[], index: number) => {
      return column.find((item) => item[fields.value] === defaultValues.value[index]) || column[0]
    })
  })

  // -----------------------下面是事件的处理-----------------------

  // 更新defaultValues的值，特别注意级联类型的情况，因为改变其中一个值，可能其他的值会变无效
  const changeHandler = (columnIndex: number, option: PickerOption) => {
    const fields = columnFieldNames.value
    if (option && Object.keys(option).length) {
      defaultValues.value = defaultValues.value ?? []
      const tag: boolean = Object.prototype.hasOwnProperty.call(option, fields.value)
      if (columnsType.value === 'cascade') {
        // 更新当前列的值
        defaultValues.value[columnIndex] = tag ? option[fields.value] : ''
        // 更新后续列的值
        let columnTmp = option[fields.children]
        let i = columnIndex + 1
        for (; columnTmp && columnTmp.length; i++) {
          defaultValues.value[i] = columnTmp[0][fields.value]
          columnTmp = columnTmp[0][fields.children]
        }
        if (columnTmp && columnTmp.length === 0) {
          defaultValues.value = defaultValues.value.slice(0, i)
        }
      } else {
        // 注意：这里一定要使用hasOwnProperty去判断option对象自有属性是否含有fields.value
        defaultValues.value[columnIndex] = tag ? option[fields.value] : ''
      }
    }
    emit('change', selectedOptions.value)
  }

  const confirm = () => {
    const fields = columnFieldNames.value
    if (defaultValues.value && !defaultValues.value.length) {
      defaultValues.value = columnsList.value.map(
        (column: PickerOption[]) => column[0][fields.value]
      )
    }
    emit('confirm', defaultValues.value, selectedOptions.value)
  }

  const cancel = () => {
    emit('cancel')
  }

  return {
    formattedColumns,
    columnFieldNames,
    columnsType,
    defaultValues,
    defaultIndexs,
    columnsList,
    selectedOptions,
    cancel,
    confirm,
    changeHandler,
    isSameValue
  }
}
