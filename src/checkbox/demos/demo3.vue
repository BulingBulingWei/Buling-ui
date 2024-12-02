<template>
  <div class="checkBox-wrap">
    <BuCheckBoxGroup class="box" :default-value="['1', '2']">
      <BuCheckBox :block="false" value="1" label="既会唱歌" placement="left" />
      <BuCheckBox :block="false" value="2" label="又会跳舞" placement="left" />
      <BuCheckBox :block="false" value="3" label="暗藏玄机" placement="left" />
    </BuCheckBoxGroup>

    <BuCheckBoxGroup class="box box1" type="card">
      <BuCheckBox :block="false" value="1" label="唱" placement="left" />
      <BuCheckBox :block="false" value="2" label="跳" placement="left" />
      <BuCheckBox :block="false" value="3" label="Rap" placement="left"></BuCheckBox>
    </BuCheckBoxGroup>
  </div>
</template>

<script setup lang="ts"></script>

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
.checkBox-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
