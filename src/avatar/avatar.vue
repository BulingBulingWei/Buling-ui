<template>
  <div :class="avatarClass">Avatar</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import AvatarProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-avatar`

// const props = defineProps(AvatarProps)

const avatarClass = computed(() => [`${name}`])
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
