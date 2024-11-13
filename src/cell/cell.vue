<template>
  <div :class="cellClass">Cell</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import CellProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-cell`

const props = defineProps(CellProps)

const cellClass = computed(() => [`${name}`])
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
