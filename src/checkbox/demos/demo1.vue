<template>
  <div class="checkbox-wrap">
    <BuCheckBoxGroup :default-value="['1', '2', '4']" :options="options" @change="change">
    </BuCheckBoxGroup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { CheckBoxProps } from '../index'
const options = reactive<Partial<CheckBoxProps>[]>([])
onMounted(() => {
  options.push(
    { label: '使用 CheckBoxGroup 包裹一组单选', value: '1', placement: 'left' },
    {
      label: '通过 options 属性传入列表',
      value: '2',
      description: '描述文案描述文案描述文案描述文案。',
      placement: 'left'
    },
    {
      label: '标题文案',
      value: '3',
      description: '描述文案描述文案描述文案描述文案。',
      placement: 'left'
    },
    {
      label: '禁用文案',
      value: '4',
      description: '描述文案描述文案描述文案描述文案。',
      placement: 'left',
      disabled: true
    }
  )
})
const change = (val: any[]) => console.log('change', val)
</script>

<style lang="less" scoped>
.checkbox-wrap {
  padding: 40px 0;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
}
</style>
