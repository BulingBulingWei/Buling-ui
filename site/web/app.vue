<template>
  <t-layout>
    <doc-header />
    <t-layout>
      <t-aside class="doc-aside" width="260px">
        <t-menu class="doc-menu" :value="currentPath" width="260px">
          <template v-for="(menu, index) in docsMap">
            <div v-if="menu.children.length" class="doc-menu-title">{{ menu.title }}</div>
            <template v-for="item in menu.children">
              <t-menu-item :value="item.path" @click="clickHandler(menu.type, item.path)">{{ item.title }}</t-menu-item>
            </template>
          </template>
        </t-menu>
      </t-aside>
      <t-content style="background-color: #fff">
        <router-view :style="contentStyle" @loaded="contentLoaded" />
      </t-content>
    </t-layout>
  </t-layout>
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

onMounted(() => {
  watchHtmlMode(changeIframeMode)
})

watch(
  () => route.path,
  () => {
    currentPath.value = route.path
  }
)

const clickHandler = (type, path) => {
  if (route.path === path) return
  loaded.value = false
  router.push({ path })
  currentPath.value = route.path
  window.scrollTo(0, 0)
}

const contentLoaded = (callback) => {
  requestAnimationFrame(() => {
    loaded.value = true
    callback()
  })
}
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
