<template>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="mini"></BuEmpty>
  </div>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="small" description="距离顶部1rem~" top="1rem"></BuEmpty>
  </div>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="large" description="空空如也~"></BuEmpty>
  </div>
</template>

<script setup lang="ts">
import { empty } from '../../assets/images'
</script>

<style lang="less" scoped>
.empty-wrap {
  height: fit-content;
  background-color: #efefef;
  margin: 24px 0;
  padding: 20px 0;
}
</style>
