<template>
  <template v-if="showOverlay">
    <Overlay v-bind="overlayProps" :visible="show">
      <!-- 带遮罩loading -->
      <Transition :name="`${name}__wrap`" @before-enter="restart">
        <div v-show="show" :class="`${name}__wrap`">
          <div :class="loadingClass">
            <DarkLoading ref="darkRef" :class="`${name}-svg`" />
            <div :class="`${name}__text`">
              {{ text }}
            </div>
          </div>
        </div>
      </Transition>
    </Overlay>
  </template>

  <template v-else>
    <Transition :name="`${name}__wrap`" @before-enter="restart">
      <!-- 无遮罩loading -->
      <div v-show="show" :class="`${name}__wrap`">
        <div :class="loadingClass">
          <LightLoading ref="lightRef" :class="`${name}-svg`" />
          <div :class="`${name}__text`">
            {{ text }}
          </div>
        </div>
      </div>
    </Transition>
  </template>
</template>

<script lang="ts" setup>
import { computed, ref, watch, toRefs } from 'vue'
import LightLoading from './icon/light.vue'
import DarkLoading from './icon/dark.vue'
import Overlay from '@/overlay'
import LoadingProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-loading`

const props = defineProps(LoadingProps)

const loadingClass = computed(() => [
  `${name}__content`,
  `${name}-${props.showOverlay ? 'dark' : 'light'}`
])

const show = ref(false)
const timer = ref()

const countDelay = () => {
  console.log('countDelay', props.delay)
  timer.value = setTimeout(() => {
    show.value = true
    clearTimeout(timer.value)
  }, props.delay)
}

watch(
  () => props.visible,
  (value) => {
    if (props.delay && value) {
      countDelay()
    } else {
      if (props.delay && timer.value) clearTimeout(timer.value)
      show.value = value
    }
  }
)

// 重置 SVG 动画
const lightRef = ref()
const darkRef = ref()

// @before-enter:在元素被插入到 DOM 之前restart
// 设置元素的 "enter-from" 状态
const restart = () => {
  lightRef?.value?.restart()
  darkRef?.value?.restart()
}

// open-api
const showLoading = () => {
  // restart()
  if (props.delay) countDelay()
  else show.value = true
}

// close-api
const hideLoading = () => {
  if (props.delay && timer.value) clearTimeout(timer.value)
  show.value = false
}

defineExpose({
  ...toRefs(props),
  show,
  lightRef,
  darkRef,
  restart,
  showLoading,
  hideLoading
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
