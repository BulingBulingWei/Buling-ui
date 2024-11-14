<template>
  <div @touchstart.stop class="tdesign-demo-page">
    <mobile-header />
    <div class="tdesign-demo-main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import MobileHeader from './components/header.vue'

const initIframeMode = () => {
  const parent = window.parent
  if (!parent) return

  const mode = parent.document.documentElement.getAttribute('theme-mode') || 'light'
  document.documentElement.setAttribute('theme-mode', mode)
}

onMounted(() => {
  initIframeMode()
})
</script>
