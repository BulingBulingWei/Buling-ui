<template>
  <button :class="buttonClass" role="button" :aria-disabled="disabled" :style="{ width }" @click="onClick">
    <div :class="`${name}__icon`">
      <slot name="icon">
        <img v-if="iconSrc" :src="iconSrc" alt="/" />
      </slot>
    </div>
    <div :class="`${name}__text`">
      <slot>{{ content }}</slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ButtonProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-button`

const props = defineProps(ButtonProps)
const emits = defineEmits(['click'])

const buttonClass = computed(() => [
  `${name}`,
  `${name}-${props.type}`,
  `${name}--${props.shape}`,
  `${name}-size-${props.size}`,
  {
    [`${name}-${props.type}--disabled`]: props.disabled,
    [`${name}--block`]: props.block
  }
])

// 非禁用非加载中状态，可触发点击事件
const onClick = (e: Event) => {
  if (!props.disabled && !props.loading) {
    emits('click', e)
  } else {
    e.stopPropagation()
  }
}
</script>
<style lang="less">
@import url('./styles/index.less');
</style>
