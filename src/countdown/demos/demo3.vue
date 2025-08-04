<template>
  <div class="count-down-wrap">
    <div class="count-down">
      <BuCountDown :time="1000000" size="small" split-with-unit type="light-text"></BuCountDown>
      <BuCountDown :time="1000000" size="medium" split-with-unit type="light-text"></BuCountDown>
      <BuCountDown :time="1000000" size="large" split-with-unit type="light-text"></BuCountDown>
    </div>
    <div class="count-down">
      <BuCountDown :time="1000000" size="small" split-with-unit type="default"></BuCountDown>
      <BuCountDown :time="1000000" size="medium" split-with-unit type="default"></BuCountDown>
      <BuCountDown :time="1000000" size="large" split-with-unit type="default"></BuCountDown>
    </div>
    <div class="count-down">
      <BuCountDown :time="1000000" size="small" split-with-unit type="circle"></BuCountDown>
      <BuCountDown :time="1000000" size="medium" split-with-unit type="circle"></BuCountDown>
      <BuCountDown :time="1000000" size="large" split-with-unit type="circle"></BuCountDown>
    </div>
    <div class="count-down">
      <BuCountDown :time="1000000" size="small" split-with-unit type="block"></BuCountDown>
      <BuCountDown :time="1000000" size="medium" split-with-unit type="block"></BuCountDown>
      <BuCountDown :time="1000000" size="large" split-with-unit type="block"></BuCountDown>
    </div>
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

  &-wrap {
    display: flex;
    flex-wrap: wrap;
    & > *:not(:last-child) {
      margin-bottom: 48px;
    }
  }
}
</style>
