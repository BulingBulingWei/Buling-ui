<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Space 间距</h1>
    <p class="summary">用于....(功能描述)。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 样式设置">
      <Demo2 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
