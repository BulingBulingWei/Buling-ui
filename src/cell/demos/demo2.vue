<template>
  <div class="cell-wrap">
    <BuCellGroup>
      <BuCell title="带图标" arrow>
        <template #left>
          <PictureIcon color="var(--bu-theme-color)" size="0.48rem" />
        </template>
      </BuCell>
      <BuCell title="带图标" description="描述文案描述文案描述文案" arrow>
        <template #left>
          <PictureIcon color="var(--bu-theme-color)" size="0.72rem" />
        </template>
      </BuCell>
      <BuCell title="带图片/头像" :image="img1" description="描述文案描述文案描述文案">
        <template #right>
          <BuButton type="primary" size="mini" :style="{ width: '1.18rem' }">领取</BuButton>
        </template>
      </BuCell>
    </BuCellGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PictureIcon } from '@buling-ui-icon'
import { img1 } from '@/assets/images'
</script>

<style lang="less" scoped>
.cell-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
