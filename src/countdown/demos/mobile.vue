<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">CountDown 倒计时</h1>
    <p class="summary">用于实时展示倒计时数值。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
    <demo-block title="02 毫秒级倒计时" summary="">
      <Demo2 />
    </demo-block>
    <demo-block title="03 组件尺寸" summary="">
      <Demo3 />
    </demo-block>
    <demo-block title="04 自定义组件" summary="">
      <Demo4 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
