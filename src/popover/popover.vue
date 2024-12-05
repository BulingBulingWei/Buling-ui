<template>
  <Teleport to="body" :disabled="!triggerRef">
    <div
      ref="popoverRef"
      :class="name"
      :style="_visible || (inAnimate && !popoverAnimateEnded) ? virtualTriggerStyle : {}"
    >
      <div :class="`${name}__trigger`" @click="triggerHandler">
        <slot></slot>
      </div>

      <transition :name="`${name}`" @after-leave="animateEnded">
        <div
          v-if="showPopover"
          v-show="_visible"
          :class="popoverBodyClass"
          :style="{ transform: popoverTransfrom, ...style }"
        >
          <div :class="`${name}__body__mask`">
            <div v-show="showArrow" :class="`${name}__body__arrow`" :style="{ transform: arrowTransform }">
              <ArrowIcon />
            </div>
          </div>
          <!-- 气泡内容 -->
          <div :class="`${name}__body__wrap`">
            <div :class="`${name}__body__content`">
              <slot name="popover" :close="closePopover">
                <div :class="`${name}__body__title`">
                  {{ title }}
                </div>
                <div :class="`${name}__body__message`">
                  {{ content }}
                </div>
              </slot>
            </div>
            <!-- 关闭按钮图标 -->
            <div v-show="showClose" :class="`${name}__body__close`" @click="closePopover">
              <slot name="closeIcon" :close="closePopover">
                <CloseDarkIcon />
              </slot>
            </div>
          </div>
          <div :class="`${name}__body__bottom`">
            <slot name="bottom" :close="closePopover"></slot>
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, reactive, watch, nextTick } from 'vue'
import { useElementBounding, onClickOutside } from '@vueuse/core'
import { preventDefault } from '@/utils'
import CloseDarkIcon from './icon/CloseDarkIcon.vue'
import ArrowIcon from './icon/arrowIcon.vue'
import PopoverProps, { type TPopoverProps } from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-popover`

const props = defineProps(PopoverProps)
const emits = defineEmits(['close'])

// 维护内部的 placemnet，在top与bottom自适应转化时需要更改
const innerPlacement = ref(props.placement)
watch(
  () => props.placement,
  (val) => (innerPlacement.value = val)
)

const popoverBodyClass = computed(() => {
  return [
    `${name}__body`,
    `${name}__body-${innerPlacement.value}`,
    {
      [`${name}__body-noarrow`]: !props.showArrow
    }
  ]
})

/**
 * 更新气泡和箭头的位置
 */
const updatePlacement = (
  placement: TPopoverProps['placement'],
  domRect: { left: number; right: number; width: number }
) => {
  const { left, right, width } = domRect
  const { width: popWidth, top: popTop, bottom: popBottom } = popRef.value.getBoundingClientRect()
  if (!popWidth) return

  // 8px 的安全距离
  const popSafeGap = 4
  // 箭头宽度 22px + 箭头相对桥最小宽度 8px
  const arrowWidth = 11 + 4

  if (placement.includes('top') || placement.includes('bottom')) {
    // 垂直自适应
    if (placement.includes('top') && popTop < popSafeGap) {
      innerPlacement.value = placement.replace('top', 'bottom') as TPopoverProps['placement']
    }
    if (placement.includes('bottom') && window.innerHeight - popBottom < popSafeGap) {
      innerPlacement.value = placement.replace('bottom', 'top') as TPopoverProps['placement']
    }

    // 水平自适应
    if (placement === 'top-left' || placement === 'bottom-left') {
      const currentPopRight = left + popWidth
      const currentPopLeft = left

      // 气泡右侧位置 > 屏幕宽度 - 安全距离
      if (currentPopRight > window.innerWidth - popSafeGap) {
        // 气泡需左移位置 = 气泡右侧位置 - (屏幕 - 安全距离)
        const moveLeft = currentPopRight - (window.innerWidth - popSafeGap)
        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${-moveLeft}px)`)
        // 箭头相对气泡，向右移 width / 2
        const arrowMove = moveLeft + width / 2 > popWidth - arrowWidth ? popWidth - arrowWidth : moveLeft + width / 2
        if (placement === 'top-left') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        }
      }
      // 气泡左侧位置 < 安全距离
      else if (currentPopLeft < popSafeGap) {
        // 气泡需右移位置 = 安全距离 - 气泡左侧位置
        const moveRight = popSafeGap - currentPopLeft
        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${moveRight}px)`)
        // 箭头相对气泡，向右移 width / 2 - moveRight
        const arrowMove = width / 2 - moveRight > arrowWidth ? width / 2 - moveRight : arrowWidth
        if (placement === 'top-left') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        }
      } else {
        // 恢复默认
        popoverTransfrom.value = getCurrentPopoverStyle(``)
        if (placement === 'top-left') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-width / 2}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${width / 2}px)`)
        }
      }
    } else if (placement === 'top-right' || placement === 'bottom-right') {
      const currentPopLeft = right - popWidth
      const currentPopRight = right

      // 气泡左侧位置 < 安全距离
      if (currentPopLeft < popSafeGap) {
        // 气泡需右移位置 =  安全距离 - 气泡左侧位置
        const moveRight = popSafeGap - currentPopLeft
        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${moveRight}px)`)
        // 箭头相对气泡，向右移 width / 2
        const arrowMove = moveRight + width / 2 > popWidth - arrowWidth ? popWidth - arrowWidth : moveRight + width / 2
        if (placement === 'top-right') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        }
      }
      // 气泡右侧位置 > 屏幕宽度 - 安全距离
      else if (currentPopRight > window.innerWidth - popSafeGap) {
        // 气泡需左移位置 = 气泡右侧位置 - (屏幕 - 安全距离)
        const moveLeft = currentPopRight - (window.innerWidth - popSafeGap)
        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${-moveLeft}px)`)
        // 箭头相对气泡，向右移 width / 2 - moveLeft
        const arrowMove = width / 2 - moveLeft > arrowWidth ? width / 2 - moveLeft : arrowWidth
        if (placement === 'top-right') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        }
      } else {
        // 恢复默认
        popoverTransfrom.value = getCurrentPopoverStyle(``)
        if (placement === 'top-right') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${width / 2}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-width / 2}px)`)
        }
      }
    } else {
      // 气泡左侧位置
      const currentPopLeft = width / 2 + left - popWidth / 2
      // 气泡右侧位置
      const currentPopRight = left + (popWidth + width) / 2

      // 气泡右侧位置 > 屏幕宽度 - 安全距离
      if (currentPopRight > window.innerWidth - popSafeGap) {
        // 气泡需左移位置 = 气泡右侧位置 - (屏幕 - 安全距离)
        const moveLeft = currentPopRight - (window.innerWidth - popSafeGap)

        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${-moveLeft}px)`)
        // // 箭头相对气泡，向右移 popWidth / 2 - arrowWidth
        const arrowMove = moveLeft > popWidth / 2 - arrowWidth ? popWidth / 2 - arrowWidth : moveLeft
        if (placement === 'top') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        }
      }
      // 气泡左侧位置 < 安全距离
      else if (currentPopLeft < popSafeGap) {
        // 气泡需右移位置 =  安全距离 - 气泡左侧位置
        const moveRight = popSafeGap - currentPopLeft
        // 气泡左移 moveLeft
        popoverTransfrom.value = getCurrentPopoverStyle(`translateX(${moveRight}px)`)
        // 箭头相对气泡，向右移 popWidth / 2 - arrowWidth
        const arrowMove = moveRight > popWidth / 2 - arrowWidth ? popWidth / 2 - arrowWidth : moveRight
        if (placement === 'top') {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${arrowMove}px)`)
        } else {
          arrowTransform.value = getCurrentArrowStyle(`translateX(${-arrowMove}px)`)
        }
      } else {
        // 恢复默认
        popoverTransfrom.value = getCurrentPopoverStyle(``)
        arrowTransform.value = getCurrentArrowStyle(`translateX(${0}px)`)
      }
    }
  }
}

// 获取trigger节点的样式
const virtualTriggerStyle = reactive<Record<string, any>>({})
// 箭头的位置样式
const getBaseArrowStyle = () => {
  switch (innerPlacement.value) {
    case 'top':
      return `rotate(180deg) translateX(50%)`
    case 'top-left':
      return `rotate(180deg)`
    case 'top-right':
      return `rotate(180deg)`
    case 'bottom':
      return `translateX(-50%)`
    default:
      return ''
  }
}
// 气泡的位置样式
const getBasePopoverStyle = () => {
  switch (innerPlacement.value) {
    case 'top':
      return `translate(-50%, -100%)`
    case 'top-left':
      return `translate(0, -100%)`
    case 'top-right':
      return `translate(0, -100%)`
    case 'bottom':
      return `translate(-50%, 100%)`
    case 'bottom-left':
      return `translate(0, 100%)`
    case 'bottom-right':
      return `translate(0, 100%)`
    default:
      return ''
  }
}
const getCurrentArrowStyle = (transform = '') => {
  const base = getBaseArrowStyle()
  return base + ' ' + transform
}

const getCurrentPopoverStyle = (transform = '') => {
  const base = getBasePopoverStyle()
  return base + ' ' + transform
}
const arrowTransform = ref(getCurrentArrowStyle())

const popoverTransfrom = ref(getCurrentPopoverStyle())
const _visible = ref(false)

// trigger 节点的样式
const popoverRef = ref()
const trigger = computed(() => props.triggerRef || popoverRef?.value?.children?.[0])
const popRef = computed(() => popoverRef?.value?.children?.[1])
const { top, left, right, width, height } = useElementBounding(trigger)

// 监听trigger位置的变化
watch([popRef, _visible, innerPlacement, top, left, right, width, height], () => {
  if (!popRef.value) return
  if (_visible.value) {
    updatePlacement(innerPlacement.value, {
      left: left.value,
      right: right.value,
      width: width.value
    })
  }

  // 更新 虚拟trigger
  if (!props.triggerRef) return

  const style = {
    position: 'fixed',
    top: top.value + 'px',
    left: left.value + 'px',
    width: width.value + 'px',
    height: height.value + 'px'
  }

  Object.assign(virtualTriggerStyle, style)
})

// 等气泡动画结束后将popover样式去除，保证气泡动画能正常退出
const inAnimate = ref(false)
const popoverAnimateEnded = ref(false)
watch([_visible], () => {
  if (_visible.value) {
    inAnimate.value = true
    popoverAnimateEnded.value = false
  }
})
const animateEnded = () => {
  popoverAnimateEnded.value = true
}

const triggerHandler = (e: Event) => {
  preventDefault(e, true)
  _visible.value = true
  nextTick(() => {
    if (!popRef.value) return
    updatePlacement(innerPlacement.value, {
      left: left.value,
      right: right.value,
      width: width.value
    })
  })
}

const closePopover = () => {
  emits('close')
  _visible.value = false
}

watch(
  () => props.triggerRef,
  () => {
    if (props.triggerRef) {
      props.triggerRef.addEventListener('click', triggerHandler)
    }
  },
  { immediate: true }
)

watch(
  () => props.visible,
  () => {
    _visible.value = props.visible
  },
  { immediate: true }
)

onMounted(() => {
  if (props.closeOnClickOutside) {
    onClickOutside(popoverRef?.value, closePopover)
  }
})

defineExpose({
  updatePlacement
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
