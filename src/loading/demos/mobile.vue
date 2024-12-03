<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Loading 加载中</h1>
    <p class="summary">用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感。</p>
    <demo-block title="01 组件模板" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 组件Hook" summary="使用useLoading函数式使用">
      <demo2 />
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

  .loading-row {
    display: flex;
    padding: 0 20px;
    justify-content: center;
    & > *:not(:last-child) {
      margin-right: 24px;
    }

    button {
      flex: 1;
    }

    .icon-box {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 24px;
      height: 300px;
      border-radius: 8px;

      &:first-child {
        background-color: #eee;
      }

      &:last-child {
        background-color: #444;
      }
    }
  }
}
</style>
