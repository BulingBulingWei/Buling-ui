<template>
  <BuDatePicker
    v-model="time1"
    start="2024-03-08 18:00:00"
    end="2024-03-08 23:59:59"
    cancel-text="不选了"
    confirm-text="就是你了"
    format="HH:mm"
    :mode="['year', 'minute']"
    @change="change"
    @confirm="confirm"
    @cancel="cancel"
  ></BuDatePicker>

  <BuDatePicker
    v-model="time2"
    start="2024-03-08 18:00:00"
    end="2024-03-14 23:59:59"
    format="YYYY-MM-DD HH:mm:ss"
    :mode="['date', 'second']"
    @change="change"
    @confirm="confirm"
    @cancel="cancel"
  ></BuDatePicker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const time1 = ref()
const time2 = ref()

const change = (val: any) => console.log('change', val)
const confirm = (val: any) => console.log('confirm', val)
const cancel = (val: any) => console.log('cancel', val)
</script>

<style lang="less" scoped></style>
