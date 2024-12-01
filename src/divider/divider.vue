<template>
  <div ref="dividerRef" :class="dividerClass" :style="customStyle">
    <slot>
      <div v-if="content" :class="`${name}-content`">
        <div>{{ content }}</div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref, watchEffect } from 'vue'
import DividerProps from './types'
import config from '../config'
const { prefix } = config
const name = `${prefix}-divider`

const props = defineProps(DividerProps)
const dividerClass = computed(() => [
  `${name}`,
  `${name}-${props.layout}`,
  {
    [`${name}-dashed`]: props.dashed
  }
])

const dividerRef = ref()
const verticalHeight = ref()

// 计算父节点高度并继承
watchEffect(() => {
  if (props.layout === 'horizontal') return

  if (props.height) {
    verticalHeight.value = props.height
    return
  }

  const parentNode = dividerRef.value?.parentNode
  if (parentNode) {
    // 注意：这里获取的是父节点的 scrollHeight，而不是 clientHeight
    // Element.scrollHeight 只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
    // 如果元素的内容不需要垂直滚动条就可以容纳，则其 scrollHeight 等于 clientHeight。
    const height = parentNode.scrollHeight
    verticalHeight.value = height + 'px'
  }
})

const customStyle = computed(() => {
  const style: CSSProperties = {}
  if (props.color) style['--bu-divider-color'] = props.color
  if (props.borderWidth) style['--bu-divider-width'] = props.borderWidth
  if (props.layout === 'vertical') style.height = verticalHeight.value
  if (props.layout === 'horizontal') style.margin = `${props.gap} 0`
  else style.margin = `0 ${props.gap}`
  switch (props.align) {
    case 'start':
      style['--bu-divider-after-flex-grow'] = 9
      break
    case 'end':
      style['--bu-divider-after-flex-grow'] = 0.1
      break
    case 'center':
      style['--bu-divider-after-flex-grow'] = 1
      break
  }
  return style
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
