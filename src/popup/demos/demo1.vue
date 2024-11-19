<template>
  <div class="wrap">
    <BuButton block type="outline" @click="left = true">left</BuButton>
    <BuButton block type="outline" @click="right = true">right</BuButton>
    <BuButton block type="outline" @click="top = true">top</BuButton>
    <BuButton block type="outline" @click="bottom = true">bottom</BuButton>
    <BuButton block type="outline" @click="center = true">center</BuButton>
  </div>
  <BuPopup v-model="left" placement="left" close-on-overlay-click>
    <div class="left">左边的popup</div>
  </BuPopup>
  <BuPopup v-model="right" placement="right" close-on-overlay-click>
    <div class="right">右边的popup</div>
  </BuPopup>
  <BuPopup v-model="top" placement="top" close-on-overlay-click>
    <div class="top">上边的popup</div>
  </BuPopup>
  <BuPopup v-model="bottom" placement="bottom" close-on-overlay-click>
    <div class="bottom">底部的popup</div>
  </BuPopup>
  <BuPopup v-model="center" placement="center" close-on-overlay-click>
    <div class="center">中间的popup</div>
  </BuPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const left = ref(false)
const right = ref(false)
const top = ref(false)
const bottom = ref(false)
const center = ref(false)
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 40px;
}

.left,
.right {
  width: 4rem;
  height: 100%;
  font-size: var(--bu-popup-toolbar-title-font-size);
  padding: 40px;
}

.top,
.bottom {
  height: 4rem;
  font-size: 40px;
  padding: 40px;
  background-color: antiquewhite;
}

.center {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  font-size: 40px;
  padding: 40px;
  color: var(--bu-theme-color);
  background: var(--bu-theme-light-color);
}
</style>
