<template>
  <div class="demo-container">
    <div class="avatar-row">
      <BuAvatar size="extra-large" gender="female" show-gender-icon />
      <BuAvatar size="extra-large" gender="male" show-gender-icon />
    </div>
    <div class="avatar-row">
      <BuAvatar :image="img1" size="extra-large"></BuAvatar>
      <BuAvatar :image="img2" size="extra-large" circle></BuAvatar>
    </div>
    <div class="avatar-row">
      <BuAvatar
        size="extra-large"
        :image="funny4"
        gender="female"
        show-gender-icon
        circle
      ></BuAvatar>
      <BuAvatar size="extra-large" :image="img3" gender="male" show-gender-icon></BuAvatar>
      <BuAvatar size="large" :image="funny2" gender="male" show-gender-icon circle></BuAvatar>
      <BuAvatar size="large" :image="funny3" gender="female" show-gender-icon></BuAvatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img1, img2, img3, funny2, funny3, funny4 } from '../../assets/images'
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
