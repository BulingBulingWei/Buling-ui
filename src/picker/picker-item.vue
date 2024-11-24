<template>
  <div
    ref="wrapper"
    :class="`${name}`"
    @touchstart="touchStartHandler"
    @touchmove="touchMoveHandler"
    @touchend="touchEndHandler"
  >
    <div ref="indicator" :class="`${name}-indicator`"></div>
    <div ref="content" :class="`${name}-content`" :style="transformCss">
      <template v-for="(item, index) in column" :key="item[fieldNames.value] ?? index">
        <div v-if="item && item[fieldNames.label]" :class="`${name}__item`">
          <!-- 再使用一个display为block的div，用于控制文字溢出显示省略号 -->
          <!-- 参考：https://juejin.cn/post/6844904166855278599 -->
          <div :class="`${name}__text`">{{ item[fieldNames.label] }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, ref, watch, onMounted, PropType } from 'vue'
import { PickerOption, PickerFieldNames } from './types'
import { useAnimate } from './useAnimate'
import { preventDefault } from '@/utils'
import config from '../config'

const { prefix } = config
const name = `${prefix}-picker-item`

const props = defineProps({
  // 当前选中项
  value: [String, Number],
  column: {
    type: Array as PropType<PickerOption[]>,
    default: () => []
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 5
  },
  fieldNames: {
    type: Object as PropType<Required<PickerFieldNames>>,
    default: () => ({})
  }
})
const emits = defineEmits(['change'])

const transformCss = ref({})

const wrapper = ref<HTMLDivElement>()
const indicator = ref<HTMLDivElement>()
const content = ref<HTMLDivElement>()

const { stopAnimate, startAnimate } = useAnimate()

const state = reactive({
  startY: 0,
  deltaY: 0, //移动的y轴距离
  startTime: 0, //触摸开始时间
  lastTouchTime: 0, //上一次触摸的时间
  isAnimating: 0, // 是否开启动画
  isDecelerating: 0, // 是否正在减速中
  deceleratingSpeed: 0, // 减速速度
  itemHeight: 0 // 每一个选项的高度
})

// 当前索引
// const currIndex = computed(() => {
//   return Math.floor((maxScrollTop.value - state.deltaY) / state.itemHeight)
// })

const miniDeceleratingSpeed: number = 4

const positions = ref<any[]>([]) // 记录位置和时间，用于计算惯性滚动的起始速度

const getOptionHeight = () => {
  const firstItem = content.value?.children?.[0]
  if (firstItem) {
    const height = parseFloat(getComputedStyle(firstItem).height)
    state.itemHeight = height
  }
}

onMounted(() => {
  getOptionHeight()
})

// 获取滚动区间
const maxScrollTop = computed(() => {
  if (content.value) {
    return Math.floor(Number(props.visibleOptionNum) / 2) * state.itemHeight
  }
  return 0
})
// 获取滚动区间
const minScrollTop = computed(() => {
  if (content.value) {
    const height = parseFloat(getComputedStyle(content.value).height)
    return -height + (Math.floor(Number(props.visibleOptionNum) / 2) + 1) * state.itemHeight
  }
  return 0
})

// 监听maxScrollTop的变化，更新目前所选择的选项所在的位置，adjustPosition方法里面用到maxScrollTop.value
watch(
  () => maxScrollTop.value,
  () => {
    if (props.value) {
      let index = props.column.findIndex(
        (item) => item[props.fieldNames.value] + '' === props.value + ''
      )
      if (index === -1) index = 0
      adjustPosition(index, 'index')
    } else {
      adjustPosition(0, 'index', false)
    }
  }
)

watch(
  () => props.column,
  () => {
    if (props.column && props.column.length > 0) {
      nextTick(() => {
        getOptionHeight()
      })
    }
  },
  {
    deep: true
  }
)

watch(
  () => props.value,
  () => {
    if (props.value !== undefined) {
      let index = props.column.findIndex((item) => item.value + '' === props.value + '')
      if (index === -1) index = 0
      adjustPosition(index, 'index')
    }
  }
)

// 更新content.style.transform
const updateTransform = (y: number) => {
  transformCss.value = {
    transform: `translate3d(0, ${y}px, 0)`
  }
}

// 代理执行updateTransform,看是立即更改style 还是 开启动画慢慢更改
const updateTransformProxy = (y: number, animationDuration?: number) => {
  if (animationDuration) {
    let beforeY = state.deltaY
    let diffY = y - beforeY
    let wasAnimating = state.isAnimating
    let step = function (percent: number) {
      state.deltaY = beforeY + diffY * percent
      updateTransform(state.deltaY)
    }
    let verify = function (id: number) {
      return state.isAnimating === id
    }
    let completed = function (_: any, animationId: number) {
      if (animationId === state.isAnimating) {
        state.isAnimating = 0
      }
    }
    state.isAnimating = startAnimate(
      step,
      verify,
      completed,
      animationDuration,
      wasAnimating ? easeOutCubic : easeInOutCubic
    )
  } else {
    state.deltaY = y
    updateTransform(y)
  }
}

// 响应变化change事件（更新value）
const setChooseValue = (y?: number) => {
  let moveY: number = state.deltaY
  if (y) moveY = y
  const currIndex = Math.floor((maxScrollTop.value - moveY) / state.itemHeight)
  // 未变化不触发
  if (props.column[currIndex]?.[props.fieldNames.value] === props.value) return
  emits('change', props.column[currIndex])
  // console.log('change', props.column[currIndex])
}

// 将元素位置调整回正确的位置
const adjustPosition = async (y: number, type?: 'position' | 'index', doChange: boolean = true) => {
  let moveY: number = y
  // 直接改变value的值而导致的滚动位置,参数y为要滚动到的值的index
  if (type && type === 'index') {
    moveY = maxScrollTop.value - y * state.itemHeight
    const diff = Math.abs(Math.floor((state.deltaY - moveY) / state.itemHeight)) - 1
    let moveTime: number = 200 + diff * 50
    moveTime = Math.min(moveTime, 1200)
    await updateTransformProxy(moveY, moveTime)
  } else {
    // 触摸滑动而导致的滚动位置
    moveY = Math.round(y / state.itemHeight) * state.itemHeight
    console.log('moveY', moveY, y, maxScrollTop.value, minScrollTop.value)
    // 开启动画慢慢回到正确位置
    await updateTransformProxy(moveY, 200)
  }
  // 触发change事件，更改value
  if (doChange) setChooseValue(moveY)
  state.startY = state.deltaY
}

const touchStartHandler = (e: TouchEvent) => {
  preventDefault(e, true)
  state.startY = e.touches[0].pageY
  if (state.isDecelerating) {
    stopAnimate(state.isDecelerating)
    state.isDecelerating = 0
  }
  if (state.isAnimating) {
    stopAnimate(state.isAnimating)
    state.isAnimating = 0
  }
}

const touchMoveHandler = (e: TouchEvent) => {
  preventDefault(e, true)
  // 计算纵向滚动距离以便更新transform
  let currentTouchY = e.touches[0].pageY
  let moveY = currentTouchY - state.startY
  let scrollY = state.deltaY + moveY
  if (scrollY > maxScrollTop.value) {
    scrollY = maxScrollTop.value
  }
  if (scrollY < minScrollTop.value) {
    scrollY = minScrollTop.value
  }

  updateTransformProxy(scrollY)

  //   记住move过程中的位置和时间
  state.lastTouchTime = e.timeStamp
  if (positions.value.length > 40) {
    positions.value.splice(0, 20)
  }
  positions.value.push(scrollY, e.timeStamp)
  state.lastTouchTime = e.timeStamp
  state.startY = currentTouchY
}

const touchEndHandler = (e: TouchEvent) => {
  preventDefault(e, true)
  // 如果抬起时间和最后移动时间小于 100 证明快速滚动过
  if (e.timeStamp - state.lastTouchTime < 50) {
    // 第一步：判断是否要执行惯性滚动
    let endPos: number = positions.value.length - 1
    let startPos: number = endPos
    for (let i = endPos; startPos > 0 && positions.value[i] > state.lastTouchTime - 50; i -= 2) {
      startPos = i
    }
    // 计算两点之间的相对运动数据
    if (startPos !== endPos) {
      const duration = positions.value[endPos] - positions.value[startPos]
      const offsetY = positions.value[endPos - 1] - positions.value[startPos - 1]
      // 惯性滚动速度,(时间单位为刷新速率为每秒60帧时，每帧之间的间隔时间)
      state.deceleratingSpeed = (offsetY / duration) * (1000 / 60)
      // 第二步：如果要执行惯性滚动，则开启动画
      if (Math.abs(state.deceleratingSpeed) > miniDeceleratingSpeed) startDeceleration()
    }
  }

  // 第三步：滚动完毕将元素位置调整回正确的位置
  if (!state.isDecelerating) {
    adjustPosition(state.deltaY)
  }
  positions.value = []
  // 第四步：更新value的值和出发change事件
}

//   开启惯性滚动
const startDeceleration = () => {
  const stepCb = () => {
    let moveY: number = state.deltaY + state.deceleratingSpeed
    // 滚动到达边界
    if (moveY > maxScrollTop.value) {
      moveY = maxScrollTop.value
      state.deceleratingSpeed = 0
    }
    if (moveY < minScrollTop.value) {
      moveY = minScrollTop.value
      state.deceleratingSpeed = 0
    }
    // 速度递减
    if (Math.abs(state.deceleratingSpeed) < 1) {
      if (Math.abs(moveY % state.itemHeight) < 1) {
        state.deceleratingSpeed = 0
      }
    } else {
      state.deceleratingSpeed *= 0.95
    }
    // 执行这一帧的动画
    updateTransformProxy(moveY)
  }

  const identifyCb = () => {
    const miniSpeed: number = 0.5
    if (Math.abs(state.deceleratingSpeed) < miniSpeed) {
      return false
    }
    return true
  }

  const completedCb = () => {
    adjustPosition(state.deltaY)
    state.isDecelerating = 0
  }

  state.isDecelerating = startAnimate(stepCb, identifyCb, completedCb)
}

// 开始快后来慢的渐变曲线
const easeOutCubic = (pos: number): number => {
  return Math.pow(pos - 1, 3) + 1
}
// 以满足开始和结束的动画
const easeInOutCubic = (pos: number): number => {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3)
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2)
}
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
