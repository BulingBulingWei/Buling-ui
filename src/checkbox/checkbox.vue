<template>
  <div :class="checkboxClass" @click="clickHandler">
    <div :class="`${name}-content`">
      <div :class="`${name}-label`">{{ label }}</div>
      <div :class="`${name}-desc`">{{ description }}</div>
    </div>
    <div :class="`${name}-icon`">
      <SuccessCheckedIcon
        v-show="innerChecked"
        :color="disabled ? 'var(--bu-checkbox-icon-disabled-color)' : 'var(--bu-theme-color)'"
      />
      <RingIcon
        v-show="!innerChecked"
        :color="
          disabled
            ? 'var(--bu-checkbox-icon-disabled-color)'
            : 'var(--bu-checkbox-icon-uncheck-color)'
        "
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { SuccessCheckedIcon, RingIcon } from '@buling-ui-icon'
import { preventDefault } from '@/utils'
import CheckboxProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-checkbox`

const props = defineProps(CheckboxProps)
const emits = defineEmits(['change'])

const checkboxClass = computed(() => [
  `${name}`,
  `${name}--${props.placement}`,
  {
    [`${name}--disabled`]: props.disabled,
    [`${name}--block`]: props.block,
    [`${name}--borderless`]: props.borderless,
    [`${name}--card`]: props.card
  }
])
const innerChecked = ref(props.checked)

watch(
  () => props.checked,
  () => {
    innerChecked.value = props.checked
  }
)

const clickHandler = (e: Event) => {
  if (props.disabled) {
    preventDefault(e)
    return
  }
  const newValue = !innerChecked.value
  if (!props.rootGroup) {
    innerChecked.value = newValue
  }
  emits('change', newValue)
}
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
