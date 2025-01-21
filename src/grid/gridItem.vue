<template>
  <div :class="`${name}`">
    <slot />
    <slot name="image" />
  </div>
</template>

<script lang="ts" setup>
import config from '../config'
import { TGridItemProps } from './types'
defineProps(TGridItemProps)
const { prefix } = config
const name = `${prefix}-grid-item-wrap`
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
