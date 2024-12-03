<template>
  <div ref="scroller" :class="listClass">
    <div :class="`${name}-container`">
      <slot></slot>
    </div>

    <div ref="loadingRef" :class="`${name}-load`">
      <!-- 仍有数据可加载 -->
      <div v-show="hasMore" :class="`${name}-loading`">
        <template v-if="isLoading && showLoading">
          <div :class="`${name}-loading-icon`">
            <LightLoadingIcon ref="lightRef" />
          </div>
          <div :class="`${name}-loading-text`">
            {{ loadingText }}
          </div>
        </template>
        <template v-if="!isLoading">
          <slot name="controller" :load-more="controllerClick"></slot>
        </template>
      </div>
      <!-- loading完结展示条件：无更多数据 -->
      <div v-show="!hasMore" :class="`${name}-loaded`">
        {{ loadingOverText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  computed,
  watch,
  nextTick,
  onUnmounted,
  onDeactivated,
  onActivated
} from 'vue'
import { LightLoadingIcon } from '@/loading'
import ListProps from './types'
import config from '../config'
import { useScrollParent, requestAniFrame, getScrollTopRoot } from '@/utils'
// 兼容window.scroll or window.scrollTo 在iOS下无滚动动画
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
const { prefix } = config
const name = `${prefix}-list`

const props = defineProps(ListProps)
const emits = defineEmits(['load-more', 'scroll'])
const slots = defineSlots()
const listClass = computed(() => [`${name}`])

// 列表dom，loading dom
const loadingRef = ref()

// 重置 SVG 动画
const lightRef = ref()
const svgRestart = () => {
  lightRef?.value?.restart()
}

watch(
  () => props.isLoading,
  (val) => {
    if (val) {
      nextTick(svgRestart)
    }
  }
)

// 逻辑展示loading
const showLoading = ref(false)

const scroller = ref<HTMLElement>()
const scrollParent = useScrollParent(scroller)

const calculateTopPosition = (el: HTMLElement): number => {
  return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent as HTMLElement)
}

const controllerClick = () => {
  showLoading.value = true
  nextTick(() => emits('load-more'))
}

// 记录之前的滚动位置，用于判断滚动的方向
const beforeScrollTop = ref(0)

const isScrollAtBottom = () => {
  // 在根元素（<html> 元素）或怪异模式下的 <body> 元素上使用 clientHeight 时，该属性将返回视口高度
  let offsetDistance = 0
  let resScrollTop = 0
  let direction = 'down'
  if (scrollParent.value == window) {
    const windowScrollTop = getScrollTopRoot()
    if (scroller.value) {
      offsetDistance =
        calculateTopPosition(scroller.value) +
        scroller.value.offsetHeight -
        windowScrollTop -
        window.innerHeight
    }

    resScrollTop = windowScrollTop
  } else {
    const { scrollHeight, clientHeight, scrollTop } = scrollParent.value as HTMLElement

    offsetDistance = scrollHeight - clientHeight - scrollTop
    resScrollTop = scrollTop
  }
  if (beforeScrollTop.value > resScrollTop) {
    direction = 'up'
  } else {
    direction = 'down'
  }

  emits('scroll', resScrollTop)

  const loadingElement = loadingRef.value
  const loadingHeight = parseFloat(window.getComputedStyle(loadingElement).height)
  return offsetDistance - loadingHeight <= props.loadMoreDistance && direction == 'down'
}

const handleScroll = () => {
  requestAniFrame(() => {
    if (!isScrollAtBottom() || !props.hasMore || props.isLoading) {
      return false
    } else {
      if (slots.controller) return
      showLoading.value = true
      nextTick(() => emits('load-more'))
    }
  })
}

const scrollListener = () => {
  scrollParent.value && scrollParent.value.addEventListener('scroll', handleScroll)
}

const removeScrollListener = () => {
  scrollParent.value && scrollParent.value.removeEventListener('scroll', handleScroll)
}

// 滚动到顶部
const scrollToTop = () => {
  scrollParent.value &&
    scrollParent.value.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
}

defineExpose({
  scrollToTop
})

onMounted(() => {
  svgRestart()
  scrollListener()
})

onUnmounted(() => {
  removeScrollListener()
})

const isKeepAlive = ref(false)

onActivated(() => {
  if (isKeepAlive.value) {
    isKeepAlive.value = false
    svgRestart()
    scrollListener()
  }
})

onDeactivated(() => {
  isKeepAlive.value = true
  removeScrollListener()
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
