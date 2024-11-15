<!--
 * @Author: BulingBulingWei
 * @Date: 2024-11-14 00:48:05
 * @LastEditors: BulingBulingWei
 * @LastEditTime: 2024-11-15 20:47:54
 * @Description: 
-->
<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Avatar 头像</h1>
    <p class="summary">用图标的形式展示用户信息。</p>
    <demo-block title="01 头像形状&性别图标" summary="圆角及默认头像">
      <Demo1 />
    </demo-block>
    <demo-block
      title="02 头像尺寸"
      summary="分别对应：extra-large、large、medium、small、mini、tiny。&#10;也可通过添加类名或style自定义样式"
    >
      <Demo2 />
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
}
</style>
