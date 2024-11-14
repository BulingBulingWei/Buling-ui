<template>
  <div v-show="title" class="tdesign-demo-topnav">
    <BuButton type="text" class="more" @click="visible = true">更多</BuButton>
    <div class="tdesign-demo-topnav-title" @click="open">{{ title }}</div>
    <BuButton type="text" class="open" @click="showThemePicker = true">主题</BuButton>
    <!-- <BuPopup placement="left" v-model="visible" close-on-overlay-click>
      <div class="route-wrap">
        <div class="comp-list">
          <BuButton block v-for="item in routesMap" :type="current === item.path ? 'primary' : 'outline'"
            :class="`route-item ${item}`" @click="clickHandler(item.path)">{{ item.name?.slice(0, 1).toUpperCase() +
              item.name?.slice(1) }}</BuButton>
        </div>
        <div class="feback">
          <BuButton type="text" @click="pushQuestion">有问题? 点击反馈</BuButton>
        </div>
      </div>
    </BuPopup>

    <BuPopup placement="bottom" v-model="showThemePicker" close-on-overlay-click>
      <BuPicker :value="currentTheme" title="切换主题" :columns="themeColumns" @confirm="changeTheme"
        @cancel="showThemePicker = false" />
    </BuPopup> -->
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { docsRoutes } from '../router'
import { useTheme } from '@/index'

const routesMap = docsRoutes.filter((item) => item.component)

const router = useRouter()
const route = useRoute()
const title = computed(() => router.currentRoute.value.meta.title)

const visible = ref(false)
const current = computed(() => route.fullPath)

const clickHandler = (path: string) => {
  router.replace(path)
  visible.value = false
}

const showThemePicker = ref(false)
const currentTheme = ref([localStorage.getItem('buingTheme') || 'Blue'])

const themeColumns = [
  [
    { label: 'Blue', value: 'Blue' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'Orange', value: 'Orange' }
  ]
]
const changeTheme = (val: string[]) => {
  useTheme(val[0])
  localStorage.setItem('buingTheme', val[0])
  showThemePicker.value = false
}

const open = () => {
  window.open(location.href)
}

const pushQuestion = () => {
  window.open('')
}
</script>
<style lang="less">
.tdesign-demo-topnav-title {
  cursor: pointer;
}

.route-wrap {
  font-size: 16px;
  width: 160px;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;

  .feback {
    border-top: 1px solid #ccc;
    padding-top: 14px;
  }

  .comp-list {
    flex: 1;
    overflow-y: scroll;
  }

  .route-item {
    margin-bottom: 20px;
  }
}
</style>
