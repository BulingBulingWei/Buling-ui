<template>
  <div class="warp">
    <BuButton @click="visible1 = true">遮罩层</BuButton>
    <BuButton @click="visible2 = true">自定义遮罩层</BuButton>
  </div>
  <BuOverlay :visible="visible1" @click="visible1 = false"></BuOverlay>
  <BuOverlay
    :visible="visible2"
    background="rgba(181, 199, 255, .8)"
    top="20px"
    :duration="500"
    @click="visible2 = false"
  >
  </BuOverlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<style lang="less" scoped>
.warp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
  height: 120vh;
}
</style>
