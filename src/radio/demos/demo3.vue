<template>
  <div class="radio-wrap">
    <BuRadioGroup class="box" default-value="1" @change="change">
      <BuRadio :block="false" value="1" label="单项选择" placement="left" />
      <BuRadio :block="false" value="2" label="单项选择" placement="left" />
      <BuRadio :block="false" value="3" label="单项选择" placement="left" />
    </BuRadioGroup>

    <BuRadioGroup class="box box1" type="card" default-value="1" @change="change">
      <BuRadio :block="false" value="1" label="唱" placement="left" />
      <BuRadio :block="false" value="2" label="跳" placement="left" />
      <BuRadio :block="false" value="3" label="Rap" placement="left"></BuRadio>
    </BuRadioGroup>
  </div>
</template>

<script setup lang="ts">
const change = (val: string) => console.log('change', val)
</script>

<style lang="less" scoped>
.box {
  display: flex;
  padding: 24px;
  background-color: #fff;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
}

.box1 {
  margin: 0 24px;
}
.radio-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
