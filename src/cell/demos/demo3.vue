<template>
  <div class="cell-wrap">
    <BuCellGroup type="card">
      <BuCell title="单行标题" arrow />
      <BuCell title="单行标题" arrow required />
      <BuCell title="单行标题">
        <template #right>
          <BuSwitch v-model="text" size="small"></BuSwitch>
        </template>
      </BuCell>
      <BuCell
        title="单行标题"
        description="辅助文案辅助文案辅助文案"
        note="辅助说明"
        arrow
      ></BuCell>
      <BuCell title="带图标" arrow>
        <template #left>
          <PictureIcon color="var(--bu-theme-color)" size="0.48rem" />
        </template>
      </BuCell>
    </BuCellGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PictureIcon } from '@buling-ui-icon'
const text = ref(true)
</script>

<style lang="less" scoped>
.cell-wrap {
  padding: 40px 24px;
  background-color: #efefef;
}
</style>
