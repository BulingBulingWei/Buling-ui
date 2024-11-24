<template>
  <div class="picker-row">
    <BuButton type="outline" @click="visible = true">级联选择</BuButton>
  </div>
  <BuPopup v-model="visible" placement="bottom" close-on-overlay-click>
    <BuPicker
      v-model="data"
      :columns="roles"
      :field-names="{ label: 'name', value: 'val' }"
      @change="change"
      @confirm="confirm"
      @cancel="visible = false"
    ></BuPicker>
  </BuPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BuButton } from '@/components'
const visible = ref(false)
const data: any = ref(['法师', '扁鹊'])

const roles = [
  {
    name: '战士',
    val: '战士',
    children: [
      {
        name: '夏侯惇',
        val: '夏侯惇'
      },
      {
        name: '吕布',
        val: '吕布'
      },
      {
        name: '铠',
        val: '铠'
      },
      {
        name: '狂铁',
        val: '狂铁'
      }
    ]
  },
  {
    name: '法师',
    val: '法师',
    children: [
      {
        name: '安琪拉',
        val: '安琪拉'
      },
      {
        name: '扁鹊',
        val: '扁鹊'
      },
      {
        name: '不知火舞',
        val: '不知火舞'
      },
      {
        name: '嫦娥',
        val: '嫦娥'
      }
    ]
  }
]

const confirm = (val: any) => {
  console.log('confirm', val)
  visible.value = false
}

const change = (val: any) => {
  //   console.log('change', val)
}
</script>

<style lang="less" scoped>
.picker-row {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
