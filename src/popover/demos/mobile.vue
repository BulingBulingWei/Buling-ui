<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Popover 弹出气泡</h1>
    <p class="summary">用于文字提示的气泡框。</p>
    <demo-block title="01 弹出方向" summary="气泡展示位置">
      <Demo1 />
    </demo-block>
    <demo-block title="02 triggerRef 指定触发元素" summary="popover将会定位至body上，不受父容器影响">
      <Demo2 />
    </demo-block>
    <demo-block title="03 更多用法" summary="关闭按钮、底部插槽、不显示箭头">
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
