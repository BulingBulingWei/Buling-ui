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

const fabStyle = ref<CSSProperties>({})
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

watch(
  () => props.offset,
  (val) => {
    if (val) {
      const style: CSSProperties = {}
      if (props.offset) {
        if (props.offset.bottom) {
          style.bottom = props.offset.bottom
        }
        if (props.offset.right) {
          style.right = props.offset.right
        }
        if (props.offset.left) {
          style.left = props.offset.left
        }
        if (props.offset.top) {
          style.top = props.offset.top
        }
      }
      fabStyle.value = style
    }
  },
  {
    immediate: true
  }
)

const updatePlacement = (style: { top: number; left: number }, smooth?: boolean) => {
  const newStyle: CSSProperties = {}
  newStyle.top = Math.max(Math.min(style.top, state.maxY), state.miniY) + 'px'
  newStyle.left = Math.max(Math.min(style.left, state.maxX), state.miniX) + 'px'
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
  // console.log('start', top.value, left.value)
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
