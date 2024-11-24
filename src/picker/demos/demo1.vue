<template>
  <div class="picker-row">
    <BuButton type="outline" @click="visible1 = true">单项选择</BuButton>
    <BuButton type="outline" @click="visible2 = true">多项选择</BuButton>
  </div>
  <BuPopup v-model="visible1" placement="bottom" close-on-overlay-click>
    <BuPicker v-model="option1" :columns="cityOptions"></BuPicker>
  </BuPopup>
  <BuPopup v-model="visible2" placement="bottom" close-on-overlay-click>
    <BuPicker
      v-model="option2"
      :columns="items"
      @cancel="cancelHandler2"
      @confirm="confirmHandler"
      @change="change"
    ></BuPicker>
  </BuPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BuButton, BuPopup } from '@/components'
const visible1 = ref(false)
const option1 = ref(['杭州市的靓仔'])
const visible2 = ref(false)
const option2 = ref([])

const cities = [
  '北京市的靓仔',
  '上海市的靓仔',
  '广州市的靓仔',
  '深圳市的靓仔',
  '天津市的靓仔',
  '杭州市的靓仔',
  '南京市的靓仔',
  '成都市的靓仔',
  '重庆市的靓仔',
  '武汉市的靓仔',
  '西安市的靓仔',
  '长沙市的靓仔',
  '青岛市的靓仔',
  '大连市的靓仔',
  '宁波市的靓仔',
  '厦门市的靓仔',
  '苏州市的靓仔',
  '无锡市的靓仔',
  '郑州市的靓仔',
  '合肥市的靓仔',
  '福州市的靓仔',
  '济南市的靓仔',
  '昆明市的靓仔',
  '贵阳市的靓仔',
  '南昌市的靓仔',
  '南宁市的靓仔',
  '海口市的靓仔',
  '三亚市的靓仔'
]

const cityOptions = [cities.map((item) => ({ label: item, value: item }))]

const items = ref([
  [
    { label: 'English', value: '1' },
    { label: 'Chinese', value: '2' },
    { label: 'Wuhu', value: '3' },
    { label: 'Qifei', value: '4' },
    { label: 'Energy', value: '5' },
    { label: 'GoodBoy', value: '6' }
  ],
  [
    { label: 'English', value: '1' },
    { label: 'Chinese', value: '2' },
    { label: 'Wuhu', value: '3' },
    { label: 'Qifei', value: '4' },
    { label: 'Energy', value: '5' },
    { label: 'GoodBoy', value: '6' }
  ],
  [
    { label: 'English', value: '1' },
    { label: 'Chinese', value: '2' },
    { label: 'Wuhu', value: '3' },
    { label: 'Qifei', value: '4' },
    { label: 'Energy', value: '5' },
    { label: 'GoodBoy', value: '6' }
  ]
])

const confirmHandler = (val, context) => {
  console.log('confirm', val)
  visible2.value = false
}
const cancelHandler2 = () => (visible2.value = false)

const change = (val, context) => {
  console.log('change', val, context)
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
