<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Popup 弹出层</h1>
    <p class="summary">由其他控件触发，屏幕滑出或弹出一块自定义内容区域。</p>
    <demo-block title="01 组件类型" summary="基础弹出层">
      <Demo1 />
    </demo-block>
    <demo-block title="02 组件示例" summary="应用示例">
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
