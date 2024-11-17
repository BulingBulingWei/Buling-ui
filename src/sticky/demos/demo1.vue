<template>
  <div>
    <div ref="container" class="sticky-wrap">
      <BuSticky :offset-top="60">
        <BuButton type="primary">距离屏幕60 px</BuButton>
      </BuSticky>
    </div>
    <div
      ref="container"
      class="sticky-wrap container-wrap"
      :style="{ 'background-color': '#e6eef6' }"
    >
      <div style="height: 200vh">
        <BuSticky :offset-top="0" :container="container">
          <BuButton type="outline">距离blueBox 0 px</BuButton>
        </BuSticky>
        <BuSticky :offset-top="360">
          <BuButton type="primary">距离屏幕360 px</BuButton>
        </BuSticky>
        <BuSticky :offset-top="60" :container="container">
          <BuButton type="outline">距离blueBox 60 px</BuButton>
        </BuSticky>
        <BuSticky :offset-top="140" :container="container">
          <BuButton type="light">距离blueBox 140 px</BuButton>
        </BuSticky>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const container = ref()
const scrollHandler = (scrollTop: number, fixed: boolean) => {
  console.log(scrollTop, fixed)
}
</script>

<style lang="less" scoped>
.sticky-wrap {
  margin: 24px;
  background-color: #fff;
  height: 40vh;

  button {
    margin-bottom: 300px;
  }
}

.container-wrap {
  width: 70%;
  height: 70vh;
  overflow-y: scroll;
}
</style>
