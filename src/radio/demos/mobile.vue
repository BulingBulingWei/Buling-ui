<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Radio 单选框</h1>
    <p class="summary">用于在预设的一组选项中执行单项选择，并呈现选择结果。</p>
    <demo-block
      title="01 通栏模式"
      summary="对于Radio通过checked控制开关，对于RadioGroup不配置时默认选择第一项"
    >
      <Demo1 />
    </demo-block>
    <demo-block
      title="02 卡片模式"
      summary="RadioGroup可使用value（v-model）或defaultValue控制状态"
    >
      <Demo2 />
    </demo-block>
    <demo-block title="03 横向布局" summary="基础使用">
      <Demo3 />
    </demo-block>
    <demo-block title="04 禁用状态" summary="基础使用">
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
