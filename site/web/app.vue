<template>
  <td-doc-layout>
    <doc-header />
    <td-doc-aside ref="docAside" title="Vue3 comps for Mobile"> </td-doc-aside>
    <router-view :style="contentStyle" @loaded="contentLoaded" />
  </td-doc-layout>
</template>

<script setup>
import siteConfig from '../docs.config'
import DocHeader from '../components/doc-header.vue'
import { sortDocs } from './utils'
import { onMounted, ref, computed, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const currentPath = ref()
const docAside = ref()

const docs = JSON.parse(JSON.stringify(siteConfig).replace(/component:.+/g, ''))

const docsMap = reactive(sortDocs(docs))

function watchHtmlMode(callback = () => {}) {
  const targetNode = document.documentElement
  const config = { attributes: true }

  const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'theme-mode') {
        const themeMode = mutation.target.getAttribute('theme-mode') || 'light'
        if (themeMode) callback(themeMode)
      }
    }
  }

  const observer = new MutationObserver(observerCallback)
  observer.observe(targetNode, config)

  return observer
}

function changeIframeMode(mode) {
  const iframe = document.querySelector('iframe')
  if (iframe?.contentWindow) {
    iframe.contentWindow.document.documentElement.setAttribute('theme-mode', mode)
  }
}

const loaded = ref(false)

const contentStyle = computed(() => {
  return { visibility: loaded.value ? 'visible' : 'hidden' }
})

const clickHandler = ({ detail }) => {
  if (route.path === detail) return
  loaded.value = false
  router.push({ path: detail })
  currentPath.value = route.path
  window.scrollTo(0, 0)
}

const contentLoaded = (callback) => {
  requestAnimationFrame(() => {
    loaded.value = true
    callback()
  })
}

onMounted(() => {
  docAside.value.routerList = docsMap
  docAside.value.onchange = clickHandler
  watchHtmlMode(changeIframeMode)
})

watch(
  () => route.path,
  () => {
    currentPath.value = route.path
  }
)
</script>

<style lang="less">
.doc-aside {
  height: 100vh;
  position: sticky !important;
  top: 0;
}
.doc-menu {
  width: 100%;
  box-shadow: rgb(231, 231, 231) -1px 0px 0px 0px inset;
  box-sizing: border-box;
  height: 100vh;

  &-title {
    color: #999 !important;
    font-size: 12px !important;
    margin-left: 10px;
    margin-top: 20px !important;
  }
}
</style>
