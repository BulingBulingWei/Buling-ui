<template>
  <div class="empty-wrap">
    <BuEmpty :image="empty" description="暂无内容~">
      <template #action>
        <BuButton type="outline" size="small">去首页</BuButton>
      </template>
    </BuEmpty>
  </div>
</template>

<script setup lang="ts">
import { empty } from '../../assets/images'
</script>

<style lang="less" scoped>
.empty-wrap {
  height: 4rem;
  background-color: #efefef;
  margin: 24px 0;
}
</style>
