<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Picker 选择器</h1>
    <p class="summary">用于一组预设数据中的选择。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="01 级联选择">
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
