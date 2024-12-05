<template>
  <div class="button-row">
    <BuButton type="outline" content="填充按钮" :icon-src="img1" @click="change"></BuButton>
    <BuButton type="outline" loading @click="change">Loading</BuButton>
  </div>
  <div class="button-row">
    <BuButton block @click="change">块级按钮</BuButton>
  </div>
  <div class="button-row">
    <BuButton block content="如果文案过多多多多多多多多多多会单行溢出隐藏" @click="change"> </BuButton>
  </div>
</template>

<script setup lang="ts">
import { img1 } from '../../assets/images'
const change = () => {
  alert('click')
}
</script>

<style lang="less" scoped>
.button-row {
  display: flex;
  align-items: flex-end;
  padding: 0 32px;
  margin: 32px 0;

  button:not(:first-child) {
    margin-left: 32px;
  }
}
</style>
