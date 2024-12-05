<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">Button 按钮</h1>
    <p class="summary">按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</p>
    <demo-block title="01 组件类型" summary="基本类型：primary(default)、light、outline、text">
      <Demo1 />
    </demo-block>
    <demo-block title="02 组件尺寸" summary="五种大小：tiny、mini、small、medium(default)、large">
      <Demo2 />
    </demo-block>
    <demo-block
      title="03 组件形状"
      summary="shape 一共有四种基本类型，分别对应：默认的 rectangle、square、round、circle "
    >
      <Demo3 />
    </demo-block>
    <demo-block
      title="04 加载中 & 块元素 & 图标"
      summary=" loading  状态不触发点击事件；block 控制按钮是否独占一行；左侧按钮图标可通过 iconSrc 配置，也可以通过 icon 插槽实现。"
    >
      <Demo4 />
    </demo-block>
    <demo-block title="05 禁用状态" summary="禁用状态下不可点击，不可触发事件">
      <Demo5 />
    </demo-block>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
import Demo5 from './demo5.vue'
</script>

<style scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
