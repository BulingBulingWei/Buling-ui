<template>
  <div :class="radioGroupClass">
    <template v-for="(item, index) in radioList" :key="index">
      <component
        :is="item"
        v-bind="{
                checked: isNotNil(currentValue) && currentValue === item.props?.value,
                disabled: props.disabled || item.props?.disabled || false,
                borderless: index === radioList.length - 1 ? true : item.props?.borderless ?? borderless,
                rootGroup: true,
                onChange: (status: boolean) => changeHandler(status, item.props?.value)
            }"
      ></component>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed, ref, watch, h } from 'vue'
import { TRadioProps, TRadioGroupProps } from './types'
import Radio from '@/radio'
import config from '../config'
import { useChildrenSlot, isNotNil } from '@/utils'

const { prefix } = config
const name = `${prefix}-radio-group`
const radioGroupClass = computed(() => [name, `${name}--${props.type}`])

const props = defineProps({
  value: [String, Number],
  modelValue: [String, Number],
  defaultValue: [String, Number],
  options: Array as PropType<TRadioGroupProps['options']>,
  disabled: Boolean,
  layout: {
    type: String as PropType<TRadioGroupProps['layout']>,
    default: 'horizontal'
  },
  type: {
    type: String as PropType<TRadioGroupProps['type']>,
    default: 'default'
  },
  borderless: Boolean
})
const emits = defineEmits(['update:modelValue', 'change'])
const slots = defineSlots()

const radioList = computed(() => {
  if (Array.isArray(props.options)) {
    return props.options.map((item) =>
      h(Radio, {
        ...item,
        disabled: props.disabled || item.disabled || false
      })
    )
  }

  const [children] = useChildrenSlot<TRadioProps>(slots.default?.(), 'radio', {
    booleanAttribute: ['checked', 'disabled', 'card', 'block', 'borderless']
  })

  return children
})

const currentValue = ref(props.defaultValue)
watch(
  () => [props.modelValue, props.value],
  () => {
    const newValue = props.modelValue || props.value || props.defaultValue
    currentValue.value = newValue
  },
  {
    immediate: true
  }
)

const changeHandler = (status: boolean, changeVal: any) => {
  const currentRadio = radioList.value?.find((item) => item.props?.value === currentValue.value)

  if (currentRadio?.props?.disabled) return

  if (status) {
    currentValue.value = changeVal
    emits('change', changeVal)
    emits('update:modelValue', changeVal)
  } else {
    return
  }
}
</script>
<style lang="less">
@import url('./styles/index.less');
</style>
