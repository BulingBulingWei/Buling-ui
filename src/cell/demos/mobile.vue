<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Cell 单元格</h1>
    <p class="summary">用于各个类别行的信息展示。</p>
    <demo-block title="01 基本用法" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 拓展用法" summary="使用插槽">
      <Demo2 />
    </demo-block>
    <demo-block title="03 卡片样式" summary="">
      <Demo3 />
    </demo-block>
    <demo-block title="04 使用案例" summary="">
      <Demo4 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
