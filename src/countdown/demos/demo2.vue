<template>
  <div class="count-down">
    <BuCountDown :time="1000000" type="block" auto-start millisecond></BuCountDown>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.count-down {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
}
</style>
