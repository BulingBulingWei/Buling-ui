<template>
  <div style="padding: 0 10px">
    <div class="divider-title">水平分割线</div>
    <BuDivider gap="0.3rem"></BuDivider>

    <div class="divider-title">带内容水平分割线</div>
    <BuDivider content="文字信息" gap="0.3rem" align="start"></BuDivider>
    <BuDivider content="文字信息" gap="0.3rem" align="center"></BuDivider>
    <BuDivider content="文字信息" gap="0.3rem" align="end"></BuDivider>
    <BuDivider dashed content="虚线分割线" gap="0.3rem"></BuDivider>
    <BuDivider gap="0.5rem"><div style="font-size: 0.3rem; color: blue">slot插槽</div></BuDivider>

    <div class="divider-title">垂直分割线</div>
    <view class="divider-wrapper">
      <span>文字信息</span>
      <BuDivider layout="vertical" gap="0.3rem"></BuDivider>
      <span>文字信息</span>
      <BuDivider layout="vertical" gap="0.3rem"></BuDivider>
      <span>文字信息</span>
    </view>

    <div class="divider-title">带内容垂直分割线</div>
    <view class="divider-wrapper">
      <BuDivider
        layout="vertical"
        gap="0.5rem"
        height="2rem"
        color="green"
        content="Buling"
        align="start"
      ></BuDivider>

      <BuDivider
        layout="vertical"
        gap="0.5rem"
        height="2rem"
        content="Buling"
        color="green"
        align="center"
      ></BuDivider>

      <BuDivider
        dashed
        layout="vertical"
        gap="0.5rem"
        height="2rem"
        color="green"
        content="Buling"
        align="end"
      ></BuDivider>
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
  font-size: 24px;
  color: rgb(154, 154, 154);
  padding-left: 16px;
}
</style>
