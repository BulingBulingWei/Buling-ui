<template>
  <div style="padding: 0 10px">
    <view class="divider-wrapper">
      <span>Buling</span>
      <BuDivider
        layout="vertical"
        gap="0.2rem"
        border-width="0.02rem"
        color="green"
        height="0.4rem"
      ></BuDivider>
      <span>Buling</span>
      <BuDivider
        layout="vertical"
        gap="0.2rem"
        border-width="0.1rem"
        color="red"
        height="0.4rem"
      ></BuDivider>
      <span>Buling</span>
      <BuDivider
        layout="vertical"
        gap="0.2rem"
        border-width="0.02rem"
        color="blue"
        height="1rem"
      ></BuDivider>
      <span>Buling</span>
      <BuDivider
        dashed
        layout="vertical"
        gap="0.2rem"
        border-width="0.02rem"
        color="orange"
        height="1rem"
      ></BuDivider>
      <span>Buling</span>
    </view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.divider-title {
  font-size: 26px;
  color: rgb(80, 80, 80);
  padding: 18px 26px;
  line-height: 26px;
  margin-bottom: 20px;
  margin-top: 30px;
}
.divider-wrapper {
  display: flex;
  align-items: center;
  font-size: 30px;
  color: rgb(154, 154, 154);
  padding-left: 16px;
}
</style>
