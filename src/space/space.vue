<template>
  <div :class="spaceClass" :style="spaceStyle">
    <div v-for="(item, index) in computedChildren || []" :key="index" :class="`${name}-item`">
      <component :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties, computed, onMounted } from 'vue'
import { useChildrenSlot } from '@/utils'
import SpaceProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-space`

const props = defineProps(SpaceProps)
const slots = defineSlots()

const computedChildren = computed(() => {
  const [children] = useChildrenSlot(slots.default?.())
  return children
})

onMounted(() => {
  console.log('slots.default?.()', slots.default?.())
})

const spaceClass = computed(() => [
  `${name}`,
  `${name}-${props.direction}`,
  {
    [`${name}-wrap`]: props.wrap,
    [`${name}-fill`]: props.fill
  }
])
const spaceStyle = computed(() => {
  const style: CSSProperties = {}
  if (props.align) style.alignItems = props.align
  if (props.justify) style.justifyContent = props.justify
  if (props.gap) style['--bu-space-gap'] = props.gap
  return style
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
