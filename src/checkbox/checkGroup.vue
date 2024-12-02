<template>
  <div :class="checkGroupClass">
    <template v-for="(item, index) in checkBoxList" :key="index">
      <component
        :is="item"
        v-bind="{
                checked: isNotNil(currentValue) && currentValue.includes(item.props?.value),
                disabled: props.disabled || item.props?.disabled || false,
                borderless: index === checkBoxList.length - 1 ? true : item.props?.borderless ?? borderless,
                rootGroup: true,
                onChange: (status: boolean) => changeHandler(status, item.props?.value)
            }"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed, ref, watch, h } from 'vue'
import { TCheckBoxProps, TCheckBoxGroupProps } from './types'
import Checkbox from '@/checkbox'
import config from '../config'
import { useChildrenSlot, isNotNil } from '@/utils'

const { prefix } = config
const name = `${prefix}-checkbox-group`
const checkGroupClass = computed(() => [name, `${name}--${props.type}`])

const props = defineProps({
  value: Array<string | number>,
  modelValue: Array<string | number>,
  defaultValue: Array<string | number>,
  options: Array as PropType<TCheckBoxGroupProps['options']>,
  disabled: Boolean,
  layout: {
    type: String as PropType<TCheckBoxGroupProps['layout']>,
    default: 'horizontal'
  },
  type: {
    type: String as PropType<TCheckBoxGroupProps['type']>,
    default: 'default'
  },
  borderless: Boolean
})
const emits = defineEmits(['update:modelValue', 'change'])
const slots = defineSlots()

const checkBoxList = computed(() => {
  if (Array.isArray(props.options)) {
    return props.options.map((item) =>
      h(Checkbox, {
        ...item,
        disabled: props.disabled || item.disabled || false
      })
    )
  }
  const [children] = useChildrenSlot<TCheckBoxProps>(slots.default?.(), 'checkbox', {
    booleanAttribute: ['checked', 'disabled', 'card', 'block', 'borderless']
  })
  return children
})

const currentValue = ref<(string | number)[]>(props.defaultValue || [])
watch(
  () => [props.modelValue, props.value],
  () => {
    const newValue = props.modelValue || props.value || props.defaultValue || []
    currentValue.value = newValue
  },
  {
    deep: true,
    immediate: true
  }
)

const changeHandler = (status: boolean, value: string | number) => {
  // 更新currentValue的值
  if (status) {
    currentValue.value.push(value)
  } else {
    currentValue.value = currentValue.value.filter((item) => item !== value)
  }
  emits('change', currentValue.value)
  emits('update:modelValue', currentValue.value)
}
</script>
<style lang="less">
@import url('./styles/index.less');
</style>
