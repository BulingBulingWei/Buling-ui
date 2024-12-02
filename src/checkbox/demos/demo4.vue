<template>
  <div class="CheckBox-wrap">
    <BuCheckBoxGroup :default-value="['1']" disabled @change="change">
      <BuCheckBox
        value="1"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
        placement="left"
        checked
      ></BuCheckBox>

      <BuCheckBox
        value="2"
        label="禁用不可选"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
        placement="left"
      ></BuCheckBox>
    </BuCheckBoxGroup>
  </div>
</template>

<script setup lang="ts">
const change = (val: string[]) => console.log('change', val)
</script>

<style lang="less" scoped>
.CheckBox-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
