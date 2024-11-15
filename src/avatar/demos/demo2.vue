<template>
  <div class="demo-container">
    <div class="avatar-row">
      <BuAvatar :image="img1" size="extra-large" circle></BuAvatar>
      <BuAvatar :image="img2" size="large" circle></BuAvatar>
      <BuAvatar :image="img3" size="medium" circle gender="female" show-gender-icon />
      <BuAvatar :image="img4" size="small" circle gender="male" show-gender-icon />
    </div>
    <div class="avatar-row">
      <BuAvatar :image="img1" size="extra-large"></BuAvatar>
      <BuAvatar :image="img2" size="large"></BuAvatar>
      <BuAvatar :image="img3" size="medium" gender="female" show-gender-icon />
      <BuAvatar :image="img4" size="small" gender="male" show-gender-icon />
    </div>
    <div class="avatar-row">
      <BuAvatar :image="img5" size="mini" circle gender="female" />
      <BuAvatar :image="img6" size="tiny" circle gender="male" />
    </div>
    <div class="avatar-row">
      <BuAvatar :image="img5" size="mini" gender="female" />
      <BuAvatar :image="img6" size="tiny" gender="male" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { img1, img2, img3, img4, img5, img6 } from '../../assets/images'
</script>

<style lang="less" scoped>
.demo-container {
  padding: 20px 0;
}
.avatar-row {
  display: flex;
  padding: 0 20px;
  margin: 30px 0;

  & > * {
    flex-shrink: 0;
  }

  & > :not(:last-child) {
    margin-right: 40px;
  }
}
</style>
