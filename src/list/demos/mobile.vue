<template>
  <div class="tdesign-mobile-demo">
    <div class="demo">
      <div v-if="current === 'info'" class="norem_info">
        <h1 class="title">List 列表</h1>
        <p class="summary">
          滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。
        </p>
        <demo-block title="01 基本使用" summary="">
          <div class="button">
            <BuButton block @click="changeTab('one')">上划加载更多</BuButton>
          </div>
        </demo-block>
        <demo-block title="02 使用控制器" summary="通过controller插槽定制加载更多">
          <div class="button">
            <BuButton block @click="changeTab('two')">使用控制器</BuButton>
          </div>
        </demo-block>
      </div>
      <div v-if="current === 'one'" class="norem_one">
        <BuButton @click="changeTab('info')">返回</BuButton>
        <Demo1 />
      </div>
      <div v-if="current === 'two'" class="norem_one">
        <BuButton @click="changeTab('info')">返回</BuButton>
        <Demo2 />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'

const current = ref('info')
const changeTab = (val) => (current.value = val)
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
  padding-bottom: 0px;
}

.norem_info {
  padding-bottom: 100px;
}

.button {
  padding: 0 40px;
}

.norem_one,
.norem_two {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
}
</style>
