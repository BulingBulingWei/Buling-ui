<template>
  <div class="button-row">
    <BuButton type="primary">填充按钮</BuButton>
    <BuButton type="light">次级按钮</BuButton>
    <BuButton type="outline">描边按钮</BuButton>
  </div>
  <div class="button-row">
    <BuButton type="text">文字按钮</BuButton>
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
