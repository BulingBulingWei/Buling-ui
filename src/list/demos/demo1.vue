<template>
  <div class="list-wrap">
    <BuList
      ref="listRef"
      :is-loading="isLoading"
      :has-more="hasMore"
      loading-text="加载中"
      @load-more="getList"
    >
      <div class="item-wrap">
        <div v-for="(_, index) in items" :key="index" class="item">
          {{ index }}
        </div>
      </div>
    </BuList>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useLoading } from '@/loading'
const loading = useLoading()

const listRef = ref()

// 是否加载完成
const hasMore = ref(true)
// 正在加载
const isLoading = ref(false)
const items = reactive<number[]>([])

const getList = async () => {
  isLoading.value = true
  if (items.length < 30) {
    await sleep()
    items.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
  } else {
    // 业务中可根据 pages * pageSize >= counts 来判断
    hasMore.value = false
  }
  isLoading.value = false
}

onMounted(() => {
  const init = async () => {
    loading.show()
    await getList()
    loading.hide()
  }
  init()
})

const sleep = (num = 2000): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, num)
  })
</script>

<style lang="less" scoped>
.list-wrap {
  height: 100%;
  background-color: #efefef;
  box-sizing: border-box;
}

.item {
  background-color: #fff;
  height: 140px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &-wrap {
    padding: 24px 24px 0;
  }
}
</style>
