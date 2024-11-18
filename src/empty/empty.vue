<template>
  <div :class="`${name}`" :style="{ paddingTop: top }">
    <div :class="`${name}__image ${name}__image-${size}`">
      <img :src="image" alt="" />
    </div>
    <div :class="`${name}__description`">
      <slot name="description">
        <template v-for="item in descArr" :key="item">
          <div>{{ item }}</div>
        </template>
      </slot>
    </div>
    <div :class="`${name}__action`">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import EmptyProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-empty`

const props = defineProps(EmptyProps)

const descArr = computed(() => {
  if (typeof props.description === 'string') {
    return [props.description]
  } else if (Array.isArray(props.description)) {
    return props.description as string[]
  }
  return [] as string[]
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
