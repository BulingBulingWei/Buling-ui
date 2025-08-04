<template>
  <div class="count-down">
    <BuCountDown :time="1000000000" split-with-unit format="DD天HH个小时以及mm分钟ss" auto-start>
      <template #default="{ times }">
        <span v-if="times">
          还剩 {{ times[0].value }} 天 {{ times[1].value }} 个小时以及 {{ times[2].value }} 分钟
          {{ times[3].value }} 秒啊！
        </span>
      </template>
    </BuCountDown>
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
