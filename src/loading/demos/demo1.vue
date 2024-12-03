<template>
  <div class="loading-row">
    <div class="icon-box">
      <BuLightLoadingIcon autoplay />
    </div>
    <div class="icon-box">
      <BuDarkLoadingIcon autoplay />
    </div>
  </div>
  <div class="loading-row">
    <BuSpace justify="space-around">
      <BuButton type="light" :loading="no_mask" @click="showLoading1">无遮罩</BuButton>
      <BuButton type="light" :loading="mask" @click="showLoading2">有遮罩</BuButton>
    </BuSpace>
  </div>
  <BuLoading text="加载中" :visible="no_mask"></BuLoading>
  <BuLoading text="加载中" show-overlay :visible="mask"></BuLoading>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const no_mask = ref(false)
const mask = ref(false)

const showLoading1 = () => {
  no_mask.value = true
  setTimeout(() => {
    no_mask.value = false
  }, 3600)
}
const showLoading2 = () => {
  mask.value = true
  setTimeout(() => {
    mask.value = false
  }, 3600)
}
</script>
