<template>
  <div class="space-wrap">
    <BuSpace>
      <BuButton type="outline">item1</BuButton>
      <BuButton type="outline">item2</BuButton>
      <BuButton>item3</BuButton>
    </BuSpace>
  </div>

  <div class="space-wrap">自动换行</div>
  <div class="space-wrap">
    <BuSpace wrap>
      <BuButton v-for="(_, index) in new Array(6)" :key="index">item</BuButton>
    </BuSpace>
  </div>
  <div class="space-wrap">垂直方向</div>
  <div class="space-wrap">
    <BuSpace direction="column" fill>
      <BuButton block type="outline">垂直</BuButton>
      <BuButton block type="outline">垂直</BuButton>
      <BuButton block type="outline">垂直</BuButton>
      <BuButton block type="outline">垂直</BuButton>
    </BuSpace>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.space-wrap {
  padding: 24px;
  font-size: 28px;
}
</style>
