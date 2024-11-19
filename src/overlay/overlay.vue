<template>
  <div>
    <Transition
      :name="name"
      @before-enter="(el) => touchEmits('open', el)"
      @after-enter="(el) => touchEmits('opened', el)"
      @before-leave="(el) => touchEmits('close', el)"
      @after-leave="(el) => touchEmits('closed', el)"
    >
      <div
        v-show="visible"
        :class="overlayClass"
        :style="customStyles"
        @click="(e) => emits('click', e)"
        @touchmove.self.prevent.stop
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import OverlayProps from './types'
import config from '../config'
import { isNotNil } from '@/utils'

const { prefix } = config
const name = `${prefix}-overlay`

const props = defineProps(OverlayProps)
const emits = defineEmits(['click', 'open', 'opened', 'close', 'closed'])
const overlayClass = computed(() => [`${name}`, { [`${name}--active`]: props.visible }])

// 阻止滚动事件
// const handleTouchMove = (e: TouchEvent) => {
//   e.preventDefault()
//   e.stopPropagation()
// }

const touchEmits = (event: 'open' | 'opened' | 'close' | 'closed', dom: Element) => {
  emits(event, dom)
}

// 计算自定义样式
const customStyles = computed(() => {
  const style: Record<string, any> = {}

  if (isNotNil(props.zIndex)) {
    style['--bu-overlay-zindex'] = props.zIndex
  }
  if (isNotNil(props.duration)) {
    style['--bu-overlay-duration'] = props.duration + 'ms'
  }
  if (props.background) {
    style['--bu-overlay-bg-color'] = `${props.background}`
  }
  if (isNotNil(props.top)) {
    style['--bu-overlay-top'] = props.top
  }
  if (isNotNil(props.bottom)) {
    style['--bu-overlay-bottom'] = props.bottom
  }
  if (isNotNil(props.left)) {
    style['--bu-overlay-left'] = props.left
  }
  if (isNotNil(props.right)) {
    style['--bu-overlay-right'] = props.right
  }
  return style
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
