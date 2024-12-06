<template>
  <Teleport to="body">
    <div
      ref="fabRef"
      :class="fabClass"
      :style="fabStyle"
      @touchstart="touchStartHandler"
      @touchmove="touchMoveHandler"
      @touchend="touchEndHandler"
    >
      <Button v-bind="innerButtonProps" :class="`${name}__button`">
        <template #icon>
          <slot> </slot>
        </template>
      </Button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Button, { ButtonProps } from '@/button'
import { computed, CSSProperties, ComputedRef, reactive, watch, ref } from 'vue'
import FabProps from './types'
import { useElementBounding } from '@vueuse/core'
import config from '../config'
import { preventDefault } from '@/utils'

const { prefix } = config
const name = `${prefix}-fab`

const props = defineProps(FabProps)
const emit = defineEmits(['click'])

const fabClass = computed(() => [`${name}`])
const defultButtonProps: Partial<ButtonProps> = {
  type: 'primary',
  shape: 'circle'
}

const innerButtonProps: ComputedRef<Partial<ButtonProps>> = computed(() => ({
  content: props.text,
  ...defultButtonProps,
  ...props.buttonProps
}))

const fabRef = ref()
const { height, width } = useElementBounding(fabRef)

// 组件之内统一使用 top 和 left 设置偏移量，这样就可以做到改动偏移位置的时候，
// fabStyle 中加上 transition 属性就可以有平滑移动的动画效果
const getOffsset = (val: {
  left?: number | string
  right?: number | string
  top?: number | string
  bottom?: number | string
}): CSSProperties => {
  const style: CSSProperties = {}
  if (val.bottom) {
    style.top = `calc(100vh - ${val.bottom} - ${height.value}px)`
  }
  if (val.right) {
    style.left = `calc(100vw - ${val.right} - ${width.value}px)`
    console.log('style.left', style.left)
  }
  if (val.left) {
    style.left = val.left
  }
  if (val.top) {
    style.top = val.top
  }

  return style
}

const fabStyle = ref<CSSProperties>()
const state = reactive({
  mouseBeforeY: 0,
  mouseBeforeX: 0,
  miniY: 0,
  maxY: window.innerHeight - (height.value ?? 0),
  miniX: 0,
  maxX: window.innerWidth - (width.value ?? 0),
  startTime: Date.now()
})

watch(
  () => [height.value, width.value],
  () => {
    state.maxY = window.innerHeight - (height.value ?? 0)
    state.maxX = window.innerWidth - (width.value ?? 0)
  },
  {
    immediate: true
  }
)

// 合理化：使val在原本设定的区间范围之内
const rationalize = (val: number, type: 'x' | 'y'): number => {
  if (type === 'y') {
    return Math.max(Math.min(val, state.maxY), state.miniY)
  } else {
    return Math.max(Math.min(val, state.maxX), state.miniX)
  }
}

watch(
  () => [props.offset, height.value, width.value],
  () => {
    if (props.offset && height.value) {
      const style: CSSProperties = getOffsset(props.offset)
      style.transition = 'all 0.3s ease-in-out'
      fabStyle.value = style
    } else if (height.value) {
      fabStyle.value = { top: '80vh', left: '80vw' }
    }
  },
  {
    immediate: true,
    deep: true
  }
)

const updatePlacement = (style: { top: number; left: number }, smooth?: boolean) => {
  const newStyle: CSSProperties = {}
  newStyle.top = rationalize(style.top, 'y') + 'px'
  newStyle.left = rationalize(style.left, 'x') + 'px'
  if (smooth) {
    newStyle.transition = 'all 0.3s ease-in-out'
  }
  fabStyle.value = newStyle
}

const touchStartHandler = (e: TouchEvent) => {
  state.startTime = Date.now()
  preventDefault(e, true)
  if (!props.draggable) return
  state.mouseBeforeY = e.touches[0].clientY
  state.mouseBeforeX = e.touches[0].clientX
}

const touchMoveHandler = (e: TouchEvent) => {
  preventDefault(e, true)
  if (!props.draggable) return
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  const deltaX = x - state.mouseBeforeX
  const deltaY = y - state.mouseBeforeY
  state.mouseBeforeX = x
  state.mouseBeforeY = y
  const { top, left } = fabRef.value.getBoundingClientRect()
  updatePlacement({ top: top + deltaY, left: left + deltaX })
}

const touchEndHandler = (e: TouchEvent) => {
  preventDefault(e, true)
  if (!props.draggable) {
    clickHandler()
    return
  }
  const duration = Date.now() - state.startTime
  if (duration < 150) {
    clickHandler()
  }
  if (!props.aside) return
  const { top, left } = fabRef.value.getBoundingClientRect()
  if (left < state.maxX >> 1) {
    updatePlacement({ left: 0, top: top }, true)
  } else {
    updatePlacement({ left: state.maxX, top: top }, true)
  }
}

const clickHandler = () => {
  emit('click')
}
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
