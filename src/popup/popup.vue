<template>
  <Teleport to="body">
    <Overlay :visible="show" v-bind="overlayProps" :style="propsStyle" @click="overlayClickHandler">
      <div :class="wrapClass" @touchmove.self.prevent.stop>
        <Transition
          :name="`${name}-${placement}`"
          @before-enter="(el) => touchEmits('open', el)"
          @after-enter="(el) => touchEmits('opened', el)"
          @before-leave="(el) => touchEmits('close', el)"
          @after-leave="(el) => touchEmits('closed', el)"
        >
          <div
            v-show="show"
            :class="contentClass"
            @click="(e) => e.stopPropagation()"
            @touchmove.self.prevent.stop
          >
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Overlay>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import PopupProps from './types'
import config from '../config'
import Overlay from '../overlay'
import { isNotNil } from '@/utils'
const { prefix } = config
const name = `${prefix}-popup`

const props = defineProps(PopupProps)
const model = defineModel({
  type: Boolean,
  default: false
})
const emit = defineEmits([
  'click-overlay',
  'close',
  'closed',
  'open',
  'opened',
  'update:modelValue'
])

const show = computed(() => model.value || props.visible)

const wrapClass = computed(() => [`${name}`, `${name}-${props.placement}__wrap`])
const contentClass = computed(() => [
  `${name}__content`,
  `${name}-${props.placement}`,
  {
    [`${name}__content--safe-bottom`]: props.safeBottom
  }
])

// 计算自定义样式
const propsStyle = computed(() => {
  const style: Record<string, any> = {}
  if (isNotNil(props.zIndex)) {
    style['--bu-popup-zindex'] = props.zIndex
  }
  if (isNotNil(props.background)) {
    style['--bu-popup-bg-color'] = props.background
  }
  return style
})

// popup弹出动画是否结束，保证在动画未结束前点击蒙层无法关闭
const popupLoaded = ref(false)

const overlayClickHandler = (dom: Element) => {
  if (!popupLoaded.value) {
    console.log('popup动画未结束')
    return
  }
  emit('click-overlay', dom)
  if (props.closeOnOverlayClick) {
    emit('update:modelValue', false)
  }
}

const touchEmits = (name: 'open' | 'opened' | 'close' | 'closed', dom: Element) => {
  if (name === 'open') {
    popupLoaded.value = false
  } else if (name === 'opened') {
    popupLoaded.value = true
  }
  emit(name, dom)
}
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
