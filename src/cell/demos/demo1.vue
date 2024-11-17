<template>
  <div class="cell-wrap">
    <BuCellGroup>
      <BuCell
        title="标题标题标题标"
        arrow
        description="descriptiondescriptiondescription"
        note="说明"
      >
      </BuCell>
      <BuCell title="标题标题" arrow :badge-props="{ dot: true }"> </BuCell>
      <BuCell title="标题标题" arrow :badge-props="{ content: '123' }"> </BuCell>
      <BuCell
        title="标题标题"
        arrow
        description="辅助文案辅助文案辅助文案"
        :badge-props="{ dot: true }"
        required
      >
      </BuCell>
      <BuCell
        title="标题标题巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉"
        arrow
        description="辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案辅助文案"
        :badge-props="{ dot: true }"
        required
      >
      </BuCell>
    </BuCellGroup>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.cell-wrap {
  padding: 40px 0;
  background-color: #efefef;
}
</style>
