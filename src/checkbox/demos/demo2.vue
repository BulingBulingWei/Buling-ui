<template>
  <div class="checkbox-wrap">
    <BuCheckBox value="1" label="单独使用CheckBox的卡片样式" borderless card />
  </div>

  <div class="checkbox-wrap">
    <BuCheckBoxGroup :value="checkboxValue1" type="card" @change="change1">
      <BuCheckBox value="1" label="card大卡片样式" />
      <BuCheckBox
        value="2"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      />
      <BuCheckBox
        value="3"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      ></BuCheckBox>
    </BuCheckBoxGroup>
  </div>

  <div class="checkbox-gap-wrap">
    <BuCheckBoxGroup v-model="checkboxValue2" type="gap-card">
      <BuCheckBox value="1" label="gap-card隔断卡片样式" />
      <BuCheckBox
        value="2"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      />
      <BuCheckBox
        value="3"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
      ></BuCheckBox>
    </BuCheckBoxGroup>
  </div>

  <div class="checkbox-sub-gap-wrap">
    <BuCheckBoxGroup :default-value="['3']" type="sub-gap-card" @change="change">
      <BuCheckBox value="1" label="sub-gap-card二级卡片样式" />
      <BuCheckBox value="2" label="一种罕见于弹窗中的单选框" />
      <BuCheckBox value="3" label="与一般单项框大小和颜色有差异"></BuCheckBox>
    </BuCheckBoxGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const checkboxValue1 = reactive(['1', '2'])
const checkboxValue2 = ref(['2', '3'])

const change1 = (val: string[]) => checkboxValue1.splice(0, checkboxValue1.length, ...val)
const change = (val: string[]) => console.log('change', val)
</script>

<style lang="less" scoped>
.checkbox-wrap {
  padding: 40px 24px;
  background-color: #efefef;
}

.checkbox-gap-wrap {
  padding: 40px 24px;
  background-color: #efefef;
}

.checkbox-sub-gap-wrap {
  padding: 40px 24px;
}
</style>
