<template>
  <div :class="`${name}`">
    <!-- 元素容器 -->
    <div :class="`${name}__main`"><slot></slot></div>
    <!-- 徽标 -->
    <div v-if="showBadge" :class="`${name}__badge`" :style="{ transform }">
      <!-- 如果有内容，则渲染内容，否则渲染圆点 -->
      <div v-if="showContent" :class="contentClass">
        {{ finalContent }}
      </div>
      <div v-if="dot" :class="`${name}__dot`"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import BadgeProps from './types'
import config from '../config'
const { prefix } = config
const name = `${prefix}-badge`
const props = defineProps(BadgeProps)

// 有内容的badge样式
const contentClass = computed(() => [
  `${name}__content`,
  { [`${name}__content-border`]: props.border }
])

// 是否显示内容
const showContent = computed(() => Boolean(props.content?.toString()?.length) && !props.dot)

// 最终显示的内容
const finalContent = computed(() => {
  // 有最大值限制
  if (props.maxCount) {
    const value: number = parseFloat(props.content + '')
    // 判断传进的内容是否是数字
    if (value === props.content) {
      const maxCount = parseFloat(props.maxCount + '')
      return value > maxCount ? `${maxCount}+` : value
    }
  }
  return props.content?.toString()
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
