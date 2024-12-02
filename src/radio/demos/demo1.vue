<template>
  <div class="radio-wrap">
    <BuSpace direction="column" gap="0.24rem">
      <BuRadio
        :checked="single"
        label="单选按钮"
        value="single"
        borderless
        @change="
          (val) => {
            single = val
          }
        "
      />
    </BuSpace>

    <BuRadioGroup :options="options" @change="change" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RadioProps } from '../index'
const single = ref(false)
const options = reactive<Partial<RadioProps>[]>([
  { label: '使用 RadioGroup 包裹一组单选', value: '1', placement: 'left' },
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
])
const change = (val: string) => console.log('change', val)
</script>

<style lang="less" scoped>
.radio-wrap {
  padding: 40px 0;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
}
</style>
