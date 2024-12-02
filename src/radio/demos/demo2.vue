<template>
  <div class="radio-wrap">
    <BuRadio value="1" label="单独使用Radio的卡片样式" borderless card />
  </div>

  <div class="radio-wrap">
    <BuRadioGroup :value="radioValue1" type="card" @change="change1">
      <BuRadio value="1" label="card大卡片样式" />
      <BuRadio
        value="2"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      />
      <BuRadio
        value="3"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      ></BuRadio>
    </BuRadioGroup>
  </div>

  <div class="radio-gap-wrap">
    <BuRadioGroup v-model="radioValue2" type="gap-card" @change="change">
      <BuRadio value="1" label="gap-card隔断卡片样式" />
      <BuRadio
        value="2"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      />
      <BuRadio
        value="3"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      ></BuRadio>
    </BuRadioGroup>
  </div>

  <div class="radio-sub-gap-wrap">
    <BuRadioGroup default-value="3" type="sub-gap-card" @change="change">
      <BuRadio value="1" label="sub-gap-card二级卡片样式" />
      <BuRadio value="2" label="一种罕见于弹窗中的单选框" />
      <BuRadio value="3" label="与一般单项框大小和颜色有差异"></BuRadio>
    </BuRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radioValue1 = ref('1')
const radioValue2 = ref('2')

const change1 = (val: string) => (radioValue1.value = val)
const change = (val: string) => console.log('change', val)
</script>

<style lang="less" scoped>
.radio-wrap {
  padding: 24px;
  background-color: #efefef;
}

.radio-gap-wrap {
  padding: 24px;
  background-color: #efefef;
}

.radio-sub-gap-wrap {
  padding: 24px;
}
</style>
