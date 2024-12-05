<template>
  <div class="button-row">
    <BuButton disabled type="primary">填充按钮</BuButton>
    <BuButton disabled type="light">填充按钮</BuButton>
    <BuButton disabled type="outline">填充按钮</BuButton>
  </div>
  <div class="button-row">
    <BuButton disabled type="text">填充按钮</BuButton>
  </div>
</template>
<style lang="less" scoped>
.button-row {
  display: flex;
  padding: 0 32px;
  margin: 32px 0;

  button:not(:first-child) {
    margin-left: 32px;
  }
}
</style>
