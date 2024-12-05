<template>
  <div class="popover-row left">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="top-left"
      show-close
    >
      <BuButton>Show-Close</BuButton>
    </BuPopover>
  </div>
  <div class="popover-row left">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="top-left"
      :style="{ width: '6rem' }"
    >
      <BuButton>Bottom-BuButton</BuButton>
      <template #bottom="{ close }">
        <div class="bottom-button">
          <BuButton size="mini" @click="close">去看看</BuButton>
        </div>
      </template>
    </BuPopover>
  </div>

  <div class="popover-row left">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="top-left"
      :show-arrow="false"
    >
      <BuButton>Don't Show Burow</BuButton>
    </BuPopover>
  </div>

  <div class="popover-row left">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="top-left"
      :show-popover="false"
    >
      <BuButton>Don't Show Popover</BuButton>
    </BuPopover>
  </div>

  <div class="popover-row left">
    <BuPopover
      title="最宽展示范围"
      content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
      placement="right"
    >
      <BuButton>BuPopover Slot</BuButton>
      <template #popover="{ close }">
        <div style="color: #fff; font-size: 14px">
          <div>亲亲😙~</div>
          <div>这里有温柔的客服姐姐哦~</div>
          <div class="bottom-button" style="margin-top: 0.16rem">
            <BuButton size="mini" @click="closeHandler(close)">🖱立即畅聊</BuButton>
          </div>
        </div>
      </template>
    </BuPopover>
  </div>
</template>

<script setup lang="ts">
const closeHandler = (close: Function) => {
  alert('hiahia~我来啦！')
  close()
}
</script>

<style lang="less" scoped>
.popover-row {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 24px;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }
}
</style>
