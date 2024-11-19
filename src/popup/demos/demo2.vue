<template>
  <div class="wrap">
    <BuButton block type="primary" @click="toolbar = true">结合ArPopupToolBar</BuButton>
    <BuButton block type="primary" @click="common = true">自定义样式</BuButton>
  </div>
  <BuPopup v-model="toolbar" placement="bottom" close-on-overlay-click>
    <BuPopupToolBar
      type="operation"
      confirm-text="好的"
      cancel-text="返回"
      title="balabala"
      @confirm="toolbar = false"
      @cancel="toolbar = false"
    ></BuPopupToolBar>
    <div class="bottom">请相信我好吗？</div>
  </BuPopup>

  <BuPopup v-model="common" placement="center" close-on-overlay-click>
    <BuPopupToolBar
      type="tips"
      title="提示"
      @confirm="common = false"
      @close="common = false"
    ></BuPopupToolBar>
    <div class="center">这是一条提示。</div>
  </BuPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const toolbar = ref(false)
const common = ref(false)
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 40px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 3rem;
  font-size: 30px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 30px;
}
</style>
