<template>
  <teleport to="body">
    <div :class="popupClass">
      <slot></slot>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import PopupProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-popup`

const props = defineProps(PopupProps)

const popupClass = computed(() => [`${name}`])
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
