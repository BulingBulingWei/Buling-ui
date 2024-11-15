<template>
  <div class="badge-row">
    <BuBadge content="123">
      <BuButton type="outline">待办事项</BuButton>
    </BuBadge>
    <BuBadge :content="123" :max-count="99">
      <BuButton type="outline">待办事项</BuButton>
    </BuBadge>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.badge-row {
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin: 40px;

  & > *:not(:last-child) {
    margin-right: 60px;
  }
}
</style>
