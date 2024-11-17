<template>
  <div ref="boxRef" :class="name" :style="boxStyles">
    <div ref="contentRef" :class="`${name}__content`" :style="contentStyles">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useElementBounding, templateRef } from '@vueuse/core'
import StickyProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-sticky`

const props = defineProps(StickyProps)
const emits = defineEmits(['scroll'])

// box 用于占位和记录边界
// content 用于实际定位
const boxRef = templateRef<HTMLElement | null>('boxRef', null)
const { top: boxTop } = useElementBounding(boxRef)
const contentRef = templateRef<HTMLElement | null>('contentRef', null)
const { top: contentTop, height } = useElementBounding(contentRef)

const boxStyles = computed(() => `height:${height.value}px;`)

// container 容器，sticky不会超出该边界
let container: Element
const containerTop = ref(0)

watch(boxTop, () => {
  if (props.container) {
    container = props.container
    const { top, height } = container.getBoundingClientRect()
    containerTop.value = top
  }
})

// 通过改变 content 的定位来实现 sticky 效果
const contentStyles = computed(() => {
  let styleStr = `z-index:${props.zIndex};`
  let isFixed = false
  const offsetTop = Number(props.offsetTop)
  // 有指定container
  if (container) {
    if (boxTop.value - containerTop.value < offsetTop) {
      styleStr += `transform:translate3d(0, ${offsetTop - boxTop.value + containerTop.value}px, 0);`
    } else if (boxTop.value <= offsetTop) {
      styleStr += `position:fixed;top:${offsetTop + containerTop.value}px;`
      isFixed = true
    }
  }
  // 无指定container
  else if (boxTop.value <= offsetTop) {
    styleStr += `position:fixed;top:${offsetTop}px;`
    isFixed = true
  }
  emits('scroll', { scrollTop: contentTop.value, isFixed })
  return styleStr
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
