<template>
  <div class="badge-row">
    <BuBadge dot content="123" border>
      <BuAvatar :image="funny2"></BuAvatar>
    </BuBadge>
    <BuBadge content="123">
      <BuButton type="light">消息</BuButton>
    </BuBadge>
    <BuBadge :content="123" :max-count="99">
      <BuButton type="light">消息</BuButton>
    </BuBadge>
  </div>
  <div class="badge-row">
    <BuBadge content="1234" border>
      <BuAvatar :image="funny3" size="large"></BuAvatar>
    </BuBadge>
    <BuBadge content="1234">
      <BuButton type="text">文字按钮</BuButton>
    </BuBadge>
    <BuBadge dot>
      <BuButton type="text">文字按钮</BuButton>
    </BuBadge>
  </div>
</template>

<script setup lang="ts">
import { img1, img2, img3, funny1, funny2, funny3, funny4 } from '../../assets/images'
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
