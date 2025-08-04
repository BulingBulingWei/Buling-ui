<template>
  <div class="count-down">
    <BuCountDown :time="1000000" auto-start type="default"></BuCountDown>
    <BuCountDown :time="1000000" auto-start split-with-unit type="circle"></BuCountDown>
    <BuCountDown :time="1000000" auto-start type="block"></BuCountDown>
    <BuCountDown :time="1000000" auto-start split-with-unit type="light-text"></BuCountDown>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.count-down {
  padding: 0 24px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
