<template>
  <div :class="name">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'

import FormProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-form`

const props = defineProps(FormProps)

provide('formProps', {
  layout: computed(() => props.layout),
  labelWidth: computed(() => props.labelWidth),
  labelAlign: computed(() => props.labelAlign),
  contentAlign: computed(() => props.contentAlign)
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
