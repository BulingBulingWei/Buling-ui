<template>
  <div class="cell-wrap">
    <BuCellGroup>
      <BuCell title="新人见面礼" :image="img1">
        <template #right>
          <BuButton type="primary" size="mini" :style="{ width: '1.18rem' }">领取</BuButton>
        </template>
        <template #description>
          <div class="cell-desc">
            <span>500个布丁，每个账号限领1次</span>
            <WarningIcon color="var(--bu-theme-color)" @click="alertDialog" />
          </div>
        </template>
      </BuCell>
      <BuCell title="新人见面礼" :image="img2">
        <template #right>
          <BuButton type="primary" size="mini" :style="{ width: '1.18rem' }">领取</BuButton>
        </template>
        <template #description>
          <div class="cell-desc">
            <span>500个布丁，每个账号限领1次, 点击图标弹窗</span>
          </div>
        </template>
        <template #bottom>
          <div class="demo-bottom">tip：500个布丁，每个账号限领1次500个布丁</div>
        </template>
      </BuCell>
      <BuCell title="新人见面礼" :image="img3">
        <template #right>
          <BuButton type="primary" size="mini" :style="{ width: '1.18rem' }">领取</BuButton>
        </template>
        <template #description>
          <div class="cell-desc">
            <span
              >500个布丁，每个账号限领1次500个布丁，每个账号限领1次500个布丁，每个账号限领1次</span
            >
          </div>
        </template>
        <template #bottom>
          <div class="demo-bottom">tip：500个布丁，每个账号限领1次500个布丁</div>
        </template>
      </BuCell>
    </BuCellGroup>
  </div>
</template>

<script setup lang="ts">
import { WarningIcon } from '@buling-ui-icon'
import { img1, img2, img3 } from '@/assets/images'
// todo: 暂时没有弹窗组件
// import { useDialog } from '@/dialog'
// const dialog = useDialog()
// const alertDialog = () => dialog.alert('点击触发弹窗')
const alertDialog = () => alert('点击触发弹窗')
</script>

<style lang="less" scoped>
.cell-wrap {
  padding: 40px 0;
  background-color: #efefef;
}

.cell-desc {
  svg {
    margin-left: 4px;
  }
}

.demo-bottom {
  font-size: 22px;
  color: #555;
  text-align: right;
}
</style>
