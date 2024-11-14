<template>
  <div :class="cellGroupClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import config from '../config'

const { prefix } = config
const name = `${prefix}-cell-group`

const props = defineProps({
  type: {
    type: String as PropType<'default' | 'card'>,
    default: 'default'
  }
})
const cellGroupClass = computed(() => [`${name}`, `${name}--${props.type}`])
</script>
