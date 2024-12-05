<template>
  <svg viewBox="0 0 20 14">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-424, 2)">
      <path
        d="M436.458308,2.94996971 L444,12 L444,12 L424,12 L431.541692,2.94996971 C432.673097,1.59228364 434.690904,1.40884664 436.04859,2.5402517 C436.197272,2.6641532 436.334407,2.80128791 436.458308,2.94996971 Z"
        :class="name"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts" setup>
import config from '@/config'

const { prefix } = config
const name = `${prefix}-popover-arrow-icon`
</script>

<style scoped>
.icon {
  fill: var(--bu-popover-bg-color);
}
</style>
