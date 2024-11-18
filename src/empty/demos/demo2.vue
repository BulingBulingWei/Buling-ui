<template>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="mini" description="啥也没有呢，赶紧参加活动吧~"></BuEmpty>
  </div>
  <div class="empty-wrap">
    <BuEmpty :image="empty" size="mini" :description="descArr"></BuEmpty>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { empty } from '../../assets/images'

const descArr = ref(['目前还没有参加过活动呢', '赶紧到首页参加活动吧~', ''])
</script>

<style lang="less" scoped>
.empty-wrap {
  height: fit-content;
  background-color: #efefef;
  margin: 24px 0;
}
</style>
