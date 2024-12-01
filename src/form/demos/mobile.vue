<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Form 表单</h1>
    <p class="summary">
      用以收集、校验和提交数据，一般由输入框、单选框、复选框、选择器等控件组成。
    </p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
