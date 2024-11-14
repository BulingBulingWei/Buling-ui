<template>
  <div :class="cellClass">
    <div :class="`${name}__container`">
      <!-- 左侧内容:image -->
      <div :class="`${name}__left`">
        <slot name="left"> </slot>
        <div v-if="image" :class="`${name}__left-image`">
          <img :src="image" />
        </div>
      </div>

      <!-- 中间的主要内容：title + description -->
      <div :class="`${name}__content`">
        <div :class="`${name}__title`">
          <span>{{ title }}</span>
          <span v-if="required" :class="`${name}--required`">&nbsp;*</span>
        </div>
        <div :class="`${name}__description`">
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </div>
      <!-- 辅助说明 -->
      <div :class="`${name}__note`">
        <slot name="note">
          {{ note }}
        </slot>
      </div>

      <!-- 小红点 -->
      <!-- todo: 待实现 badge -->
      <div v-if="computedBadgeProps" :class="`${name}__badge`">.</div>

      <!-- 右侧内容：箭头 -->
      <div :class="`${name}__right`">
        <slot name="right"></slot>
        <AngleRightIcon v-if="arrow" color="#aba7b6" />
      </div>
    </div>
    <slot name="bottom" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { AngleRightIcon } from '@buling-ui-icon'

import CellProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-cell`

const props = defineProps(CellProps)

const cellClass = computed(() => [`${name}`])

const computedBadgeProps = computed(() => {
  if (props.badgeProps instanceof Object) {
    if (props.badgeProps.dot) {
      return { ...props.badgeProps, transform: 'translate(0, -50%)' }
    } else if ('content' in props.badgeProps) {
      // 手动将徽标位移至中心位置
      return {
        ...props.badgeProps,
        transform: 'translate(0, calc(var(--bu-badge-height) / -2))'
      }
    }
    return null
  }
  return null
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
