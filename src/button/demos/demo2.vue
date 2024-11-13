<template>
  <div class="button-row">
    <BuButton size="tiny">极小按钮</BuButton>
    <BuButton size="mini">迷你按钮</BuButton>
    <BuButton size="small">小按钮</BuButton>
    <BuButton size="medium">默认按钮</BuButton>
  </div>
  <div class="button-row">
    <BuButton size="large">大按钮</BuButton>
  </div>
</template>

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
