<template>
  <div :class="radioClass" @click="clickHandler">
    <div :class="`${name}-content`">
      <div :class="`${name}-label`">{{ label }}</div>
      <div :class="`${name}-desc`">{{ description }}</div>
    </div>
    <div :class="`${name}-icon`">
      <SuccessCheckedIcon
        v-show="innerChecked"
        :color="disabled ? 'var(--bu-radio-icon-disabled-color)' : 'var(--bu-theme-color)'"
      />
      <RingIcon
        v-show="!innerChecked"
        :color="
          disabled ? 'var(--bu-radio-icon-disabled-color)' : 'var(--bu-radio-icon-uncheck-color)'
        "
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { SuccessCheckedIcon, RingIcon } from '@buling-ui-icon'
import { preventDefault } from '@/utils'
import RadioProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-radio`

const props = defineProps(RadioProps)
const emits = defineEmits(['change'])

const radioClass = computed(() => [
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

watch(
  () => props.checked,
  () => {
    innerChecked.value = props.checked
  }
)
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
