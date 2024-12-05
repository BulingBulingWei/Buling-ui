<template>
  <div class="popover-row left">
    <BuSpace gap="0.24rem">
      <div v-for="(item, index) in list" :key="item" ref="triggerRef">
        <BuButton>Trigger</BuButton>
        <BuPopover
          placement="bottom"
          :trigger-ref="triggerRef[index]"
          title="最宽展示范围"
          content="最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围最宽展示范围"
        >
        </BuPopover>
      </div>
    </BuSpace>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'

const list = reactive<number[]>([])
onMounted(() => {
  list.splice(0, list.length, 1, 2, 3, 4, 5, 6)
})

const triggerRef = ref([])
</script>

<style lang="less" scoped>
.popover-row {
  display: flex;
  padding: 24px;
  overflow-x: auto;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }
}
</style>
