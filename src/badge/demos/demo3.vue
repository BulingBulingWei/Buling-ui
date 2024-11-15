<template>
  <div class="badge-row">
    <BuBadge content="123" :max-count="99" transform="rotate(-10deg)">
      <BuButton type="outline">未读信息</BuButton>
    </BuBadge>
    <BuBadge content="新消息" transform="translate(0.2rem, -0.14rem)">
      <div :style="{ fontSize: '0.3rem' }">未读信息</div>
    </BuBadge>
    <BuBadge dot transform="translate(0.1rem, -0.1rem) scale(2.5)">
      <BuAvatar :image="img1" size="large"></BuAvatar>
    </BuBadge>
  </div>
</template>

<script setup lang="ts">
import { img1 } from '../../assets/images'
</script>

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
