<template>
  <div class="wrap">
    <BuButton block type="outline" @click="handler1">可拖拽</BuButton>
  </div>
  <div class="wrap">
    <BuButton block type="outline" @click="handler2">可拖拽且自动贴边</BuButton>
  </div>
  <div v-if="fab3">
    <BuFab
      draggable
      text="可拖拽"
      :offset="{ right: '0.4rem', bottom: '2rem' }"
      :button-props="{ shape: 'round', type: 'light' }"
    >
      <HeartCheckedIcon color="#f79" />
    </BuFab>
  </div>
  <div v-if="fab4">
    <BuFab
      text="自动贴边"
      draggable
      aside
      :offset="{ right: '0rem', bottom: '5rem' }"
      :button-props="{ shape: 'round', type: 'light' }"
    >
      <HeartCheckedIcon color="#f79" />
    </BuFab>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IncreaseIcon, HeartCheckedIcon } from '@buling-ui-icon'

const fab3 = ref(false)
const fab4 = ref(false)
const handler1 = () => {
  fab3.value = true
  fab4.value = false
}
const handler2 = () => {
  fab3.value = false
  fab4.value = true
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
