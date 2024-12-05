<template>
  <BuDatePicker
    v-model="year"
    format="YYYY-MM-DD"
    mode="year"
    @change="change"
    @confirm="confirm"
    @cancel="cancel"
  ></BuDatePicker>

  <BuDatePicker
    v-model="month"
    format="YYYY-MM-DD"
    mode="month"
    @change="change"
    @confirm="confirm"
    @cancel="cancel"
  ></BuDatePicker>

  <BuDatePicker
    v-model="date"
    format="YYYY-MM-DD"
    mode="date"
    @change="change"
    @confirm="confirm"
    @cancel="cancel"
  ></BuDatePicker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const year = ref('2024')
const month = ref('2024/04')
const date = ref(new Date().getTime())

const visible = ref(false)
const change = (val: string) => console.log('change', val)
const confirm = (val: string) => {
  visible.value = false
  console.log('confirm', val)
}
const cancel = () => {
  visible.value = false
}
</script>

<style lang="less" scoped>
.datepicker-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
