<template>
  <div class="button-row">
    <BuButton type="outline" :circle="false" @click="change">填充按钮</BuButton>
    <BuButton type="outline" @click="change">填充按钮</BuButton>
    <BuButton type="outline" loading @click="change">Loading</BuButton>
  </div>
  <div class="button-row">
    <BuButton content="按钮" size="tiny"></BuButton>
    <BuButton content="按钮" size="mini"></BuButton>
    <BuButton content="按钮" size="small"></BuButton>
    <BuButton content="按钮" size="medium"></BuButton>
  </div>
  <div class="button-row">
    <BuButton block @click="change">填充按钮</BuButton>
  </div>
  <div class="button-row">
    <BuButton block content="客服按钮-icon插槽实现，同时文案过多了会单行溢出隐藏" @click="change">
    </BuButton>
  </div>
</template>

<script setup lang="ts">
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
