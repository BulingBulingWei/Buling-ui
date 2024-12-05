<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Fab 悬浮按钮</h1>
    <p class="summary">用于承载用户快速执行某个重要/高频的操作。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 组件可拖拽" summary="可以使用 draggable 设置可拖拽，并且通过 aside 设置拖拽后是否自动贴边">
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
