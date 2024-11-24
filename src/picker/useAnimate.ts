import { ref } from 'vue'

export function useAnimate() {
  const running = ref<any>({}) // 动画记录
  const counter = ref(1) // 用于计算动画的帧数
  const desiredFrames = 60 // 每秒多少帧
  const millisecondsPerSecond = 1000 // 每秒的毫秒数

  // 停止动画
  const stopAnimate = (id: number) => {
    if (running.value[id]) {
      running.value[id] = null
      return true
    }
    return false
  }

  // 判断给定的动画是否还在运行
  const isRunning = (id: number) => {
    return running.value[id] != null
  }

  /**
   * @description: 动画函数
   * @param {*} stepCallback 每帧执行的回调函数
   * @param {*} identifyCallback 是否要继续动画？
   * @param {*} completedCallback 动画完成时的回调函数
   * @param {*} duration 动画持续时间
   * @param {*} easingMethod 动画缓动函数
   * @return {*}
   */
  const startAnimate = (
    stepCallback: Function,
    identifyCallback?: Function,
    completedCallback?: Function,
    duration?: number,
    easingMethod?: Function
  ) => {
    const start = Date.now()
    let percent = 0 // 百分比
    const id = counter.value++
    const dropCounter = 0 // 丢帧计数器(待完善)
    // 递归调用requestAnimationFrame
    const step = () => {
      // 计算时间百分比
      const now = Date.now()
      const deltaTime: number = now - start
      if (!running.value[id] || (identifyCallback && !identifyCallback(id, percent, deltaTime))) {
        stopAnimate(id)
        if (completedCallback) {
          completedCallback(
            desiredFrames - dropCounter / (deltaTime / millisecondsPerSecond), // 每秒执行帧数
            id,
            false
          ) // 动画完成时的回调函数
        }
        return
      }
      // 计算动画百分比
      if (duration) {
        percent = deltaTime / duration
        if (percent > 1) {
          percent = 1
        }
      }

      let value = percent
      if (easingMethod) {
        // 计算动画的缓动效果
        value = easingMethod(percent)
      }
      if (percent < 1) {
        stepCallback(value) // 每帧执行的回调函数
        window.requestAnimationFrame(step)
      }
      return
    }

    running.value[id] = true
    window.requestAnimationFrame(step)
    return id
  }

  return {
    running,
    stopAnimate,
    isRunning,
    startAnimate
  }
}
