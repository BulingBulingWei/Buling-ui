<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Badge 徽标</h1>
    <p class="summary">用于告知用户，该区域的状态变化或者待处理任务的数量。</p>
    <demo-block
      title="01 组件类型"
      summary="content 设置徽标内容，dot设置圆点徽标；border设置边框 "
    >
      <Demo1 />
    </demo-block>
    <demo-block title="02 最大数值" summary="maxCount 可设置最大数值">
      <Demo2 />
    </demo-block>
    <demo-block title="03 自定义偏移量" summary="transform 对徽标进行偏移调节或者缩放到想要的大小">
      <Demo3 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
