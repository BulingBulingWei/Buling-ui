<template>
  <div :class="countdownClass">
    <slot v-if="slots.default" :times="showTimes"></slot>
    <template v-else>
      <template v-for="item in showTimes" :key="item.mark">
        <span :class="`${name}__item`">{{ item.value }}</span>
        <span v-if="item.mark" :class="[`${name}__split`, `${name}__split--${splitWithUnit ? 'text' : 'dot'}`]">{{
          item.mark
        }}</span>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCountDown } from '@/utils'
import CountDownProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-countdown`

const props = defineProps(CountDownProps)
const emits = defineEmits(['change', 'finish'])
const slots = defineSlots<{
  default?: (props: { times?: { mark?: string; value?: number | string }[] }) => any
}>()

const countdownClass = computed(() => [name, `${name}--${props.type}`, `${name}--${props.size}`])

const onChange = (val: any) => emits('change', val)
const onFinish = () => emits('finish')

const { showTimes } = useCountDown({ ...props, onChange, onFinish })
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
