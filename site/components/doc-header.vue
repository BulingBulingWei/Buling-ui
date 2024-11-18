<template>
  <t-header class="doc-header">
    <div class="doc-icon">
      <img src="../assets/crown.png" />
      <h1>Buling Ui</h1>
    </div>
    <div class="doc-top-action">
      <ThemeSelector></ThemeSelector>
    </div>
  </t-header>
</template>

<script lang="ts" setup>
import ThemeSelector from './theme-select.vue'
</script>

<style lang="less" scoped>
.doc-header {
  position: relative;
  top: 0;
  left: -260px;
  width: 100vw !important;
  height: var(--header-height);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--header-box-shadow);

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

.doc-top-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 40px;
}
</style>
