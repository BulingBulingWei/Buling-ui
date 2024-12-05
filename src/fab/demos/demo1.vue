<template>
  <div class="wrap">
    <BuButton block type="outline" @click="handler1">纯图标悬浮按钮</BuButton>
  </div>
  <div class="wrap">
    <BuButton block type="outline" @click="handler2">图标加文字悬浮按钮</BuButton>
  </div>
  <div v-if="fab1">
    <BuFab draggable aside :offset="{ right: '0.5rem', top: '2.4rem' }">
      <EvaluateIcon color="#fff" />
    </BuFab>
  </div>
  <div v-if="fab2">
    <BuFab text="按钮文字" :offset="{ left: '0.4rem', bottom: '4.7rem' }" :button-props="{ shape: 'round' }">
      <IncreaseIcon color="#fff" />
    </BuFab>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EvaluateIcon, IncreaseIcon } from '@buling-ui-icon'

const fab1 = ref(false)
const fab2 = ref(false)
const handler1 = () => {
  fab1.value = true
  fab2.value = false
}
const handler2 = () => {
  fab1.value = false
  fab2.value = true
}
</script>

<style lang="less" scoped>
.wrap {
  margin: 10px 15px;
}
.title {
  font-size: 26px;
  color: var(--bu-color-secondary-text);
  margin-bottom: 20px;
}
</style>
