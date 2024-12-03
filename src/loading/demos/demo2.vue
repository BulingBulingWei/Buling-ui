<template>
  <div class="loading-row">
    <BuButton :loading="btn1" @click="loadingHook1">无遮罩</BuButton>
    <BuButton @click="loadingHook2">有遮罩</BuButton>
    <BuButton @click="loadingHook3">有delay</BuButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLoading } from '@/index'

const loading1 = useLoading('loading')
const loading2 = useLoading({
  text: '加载中',
  showOverlay: true
})
const loading3 = useLoading({
  text: 'Loading...',
  delay: 1500,
  showOverlay: true,
  overlayProps: {
    background: 'rgba(94, 175, 249, 0.35)'
  }
})

const btn1 = ref(false)
const loadingHook1 = () => {
  loading1.show()
  btn1.value = true
  setTimeout(() => {
    loading1.hide()
    btn1.value = false
  }, 3600)
}

const loadingHook2 = () => {
  loading2.show()
  setTimeout(() => {
    loading2.hide()
  }, 3600)
}

const loadingHook3 = () => {
  loading3.show()
  setTimeout(() => {
    loading3.hide()
  }, 6000)
}
</script>
