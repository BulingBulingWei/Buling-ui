<template>
  <div :class="`${name}-wrap`">
    <div :class="`${name}-main`">
      <div :class="formItemClass">
        <div :class="`${name}-label`" :style="labelStyle">
          <slot name="label">
            <span>{{ props.label }}</span>
          </slot>
          <span v-if="required" :class="`${name}-required`">&nbsp;*</span>
        </div>

        <div :class="`${name}-content`" :style="{ justifyContent: computedJustifyContent }">
          <slot>
            <span :class="`${name}-content-value`">{{ props.value }}</span>
          </slot>
        </div>
      </div>
      <div v-if="arrow" :class="`${name}-arrow`">
        <AngleRightIcon color="var(--bu-form-item-arrow-color)"></AngleRightIcon>
      </div>
    </div>

    <div v-if="help" :class="`${name}-help`">{{ props.help }}</div>
    <div v-if="error" :class="`${name}-error`">{{ props.error }}</div>
  </div>
</template>
<script lang="ts" setup>
import { AngleRightIcon } from '@buling-ui-icon'
import { computed, inject } from 'vue'
import { TFormItemProps } from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-form-item`

const props = defineProps<TFormItemProps>()
const { layout, labelWidth, labelAlign, contentAlign } = inject('formProps') as any
// 计算后的属性.value
const computedLayout = computed(() => props.layout || layout.value)
const computedLabelWidth = computed(() => props.labelWidth || labelWidth.value)
const computedLabelAlign = computed(() => props.labelAlign || labelAlign.value)
const computedContentAlign = computed(() => props.contentAlign || contentAlign.value)

const formItemClass = computed(() => [name, `${name}--${computedLayout.value}`])

const computedAlignItem = computed(() => {
  switch (computedLabelAlign.value) {
    case 'center':
      return 'center'
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return 'flex-start'
  }
})

const labelStyle = computed(() => ({
  width: computedLayout.value === 'horizontal' ? computedLabelWidth.value : 'auto',
  alignItems: computedLayout.value === 'horizontal' ? computedAlignItem.value : ''
}))

const computedJustifyContent = computed(() => {
  switch (computedContentAlign.value) {
    case 'center':
      return 'center'
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return computedLayout.value === 'horizontal' ? 'flex-end' : 'flex-start'
  }
})
</script>
<style lang="less">
@import url('./styles/index.less');
</style>
