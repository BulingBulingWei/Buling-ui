<template>
  <div class="radio-wrap">
    <BuRadioGroup default-value="1" disabled @change="change">
      <BuRadio
        value="1"
        label="标题文案"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
        placement="left"
        checked
      ></BuRadio>

      <BuRadio
        value="2"
        label="禁用不可选"
        description="描述文案描述文案描述文案描述文案描述文案描述文案描述文案。"
        placement="left"
      ></BuRadio>
    </BuRadioGroup>
  </div>
</template>

<script setup lang="ts">
const change = (val: string) => console.log('change', val)
</script>

<style lang="less" scoped>
.radio-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
