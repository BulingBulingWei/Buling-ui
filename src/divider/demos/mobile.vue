<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Divider 分割符</h1>
    <p class="summary">用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 更多自定义" summary="通过类名或内联style可以控制更多属性">
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
