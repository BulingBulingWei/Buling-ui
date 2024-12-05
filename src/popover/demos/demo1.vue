<template>
  <div class="popover-row">
    <BuPopover show-close title="最宽展示范围" content="最宽展示范围" placement="top-left">
      <BuButton>Top-Left</BuButton>
    </BuPopover>
    <BuPopover title="最宽展示范围" content="最宽展示范围最宽展示范围" placement="top">
      <BuButton>Top</BuButton>
    </BuPopover>
    <BuPopover title="最宽展示范围" content="最宽展示范围最宽展示范围最宽展示范围" placement="top-right">
      <BuButton>Top-Right</BuButton>
    </BuPopover>
  </div>

  <div class="popover-row left">
    <BuPopover title="最宽展示范围" content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围" placement="right">
      <BuButton>Right</BuButton>
    </BuPopover>
  </div>
  <div class="popover-row right">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="left"
    >
      <BuButton>Left</BuButton>
    </BuPopover>
  </div>

  <div class="popover-row">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="bottom-left"
    >
      <BuButton>Btm-Left</BuButton>
    </BuPopover>
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="bottom"
    >
      <BuButton>Btm</BuButton>
    </BuPopover>
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="bottom-right"
    >
      <BuButton>Btm-Right</BuButton>
    </BuPopover>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.popover-row {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }
}
</style>
