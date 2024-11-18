<template>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="mini" description="这个人很懒，什么也没留下~" top="10px">
      <template #description>
        <span style="color: #e37318">这个人很懒，什么也没留下~</span>
      </template>
    </BuEmpty>
  </div>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="mini" description="这个人很懒，什么也没留下~" top="10px">
      <template #action>
        <BuButton type="outline" size="small">去编辑</BuButton>
      </template>
    </BuEmpty>
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
}
</style>
