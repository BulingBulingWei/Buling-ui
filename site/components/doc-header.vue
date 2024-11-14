<template>
  <t-header class="doc-header">
    <div class="doc-icon">
      <img src="../assets/crown.png" />
      <h1>Vue3组件库</h1>
    </div>
    <div class="doc-top-action">
      <!-- <t-switch size="large" @change="">
        </t-switch> -->
    </div>
  </t-header>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.doc-header {
  height: 64px !important;
  box-sizing: border-box;
  display: flex;
  box-shadow: rgb(231, 231, 231) 0px -1px 0px 0px inset;

  .doc-icon {
    height: 100%;
    padding-left: 40px;
    display: flex;

    img {
      width: 48px;
      height: 48px;
      margin-right: 20px;
      margin-top: 4px;
      filter: blur(0px);
    }

    h1 {
      line-height: 64px;
      color: #888;
    }
  }
}
</style>
