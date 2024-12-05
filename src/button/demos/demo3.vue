<template>
  <div class="button-row">
    <BuButton shape="rectangle">填充按钮</BuButton>
    <BuButton shape="square">
      <template #icon>
        <SearchIcon></SearchIcon>
      </template>
    </BuButton>
    <BuButton shape="round">大按钮</BuButton>
    <BuButton shape="circle">
      <template #icon>
        <SearchIcon></SearchIcon>
      </template>
    </BuButton>
  </div>
</template>
<script lang="ts" setup>
import { SearchIcon } from '@buling-ui-icon'
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
