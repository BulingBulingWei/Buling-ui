<template>
  <div :class="gridClass">
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { useChildrenSlot } from '@/utils'
import CommonGridItem from './components/CommonGridItem.vue'
import GridProps, { TGridItem } from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-grid`

const props = defineProps(GridProps)

const gridClass = computed(() => [`${name}`])
const slots = defineSlots()

// 计算后列数
const computedColumn = computed(() => parseInt(props.column as string) ?? 1)
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
