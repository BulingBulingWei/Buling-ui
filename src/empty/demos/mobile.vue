<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Empty 空状态</h1>
    <p class="summary">用于空状态时的占位提示。</p>
    <demo-block
      title="01 基本使用"
      summary="size 可设置三个尺寸：large、small、mini； top 参数可设置距离顶部的距离"
    >
      <Demo1 />
    </demo-block>
    <demo-block title="02 多行描述" summary="description参数支持传入字符串数组，显示多行描述">
      <Demo2 />
    </demo-block>
    <demo-block title="03 插槽" summary="描述插槽 & 底部插槽">
      <Demo3 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
