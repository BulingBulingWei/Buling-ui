<!--
 * @Author: BulingBulingWei
 * @Date: 2024-11-14 00:48:05
 * @LastEditors: BulingBulingWei
 * @LastEditTime: 2024-11-15 21:49:47
 * @Description: 
-->
<template>
  <div :class="avatarClass">
    <img v-show="avatarImgSrc" :src="avatarImgSrc" :alt="alt" @error="handleImageError" />
    <div v-if="showGenderIcon" :class="`${name}-icon`">
      <MaleIcon v-if="gender === 'male'" />
      <FemaleIcon v-else-if="gender === 'female'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MaleIcon from './icons/male.vue'
import FemaleIcon from './icons/female.vue'
import { default_female, default_male } from '../assets/defauleImages'
import AvatarProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-avatar`

const props = defineProps(AvatarProps)
const emits = defineEmits(['error'])

const avatarClass = computed(() => [
  `${name}`,
  `${name}-${props.size}`,
  {
    [`${name}-circle`]: props.circle
  }
])

// 根据gender属性计算图像源
const avatarImgSrc = computed(() => {
  const defaultSrc = props.gender === 'female' ? default_female : default_male
  return props.image || defaultSrc
})

// 图像加载错误处理函数
const handleImageError = (e: Event) => {
  if (avatarImgSrc.value === '') {
    return
  }
  emits('error', e)
}
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
