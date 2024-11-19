<template>
  <div :class="pickerClass">Picker</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import PickerProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-picker`

const props = defineProps(PickerProps)

const pickerClass = computed(() => [`${name}`])
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
