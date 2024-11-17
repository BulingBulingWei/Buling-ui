export const demoTemplate = (compInfo) =>
  `<template>
  <Bu${compInfo.compUpperName}></Bu${compInfo.compUpperName}>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
`

export const mobileDemoTemplate = (compInfo) =>
  `<template>
  <div class="tdesign-mobile-demo">
    <h1 class="title">${compInfo.compUpperName} ${compInfo.compDesc}</h1>
    <p class="summary">用于....(功能描述)。</p>
    <demo-block title="01 组件类型" summary="基础使用">
      <Demo1 />
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
</script>

<style lang="less" scoped>
.tdesign-mobile-demo {
  background-color: #fff;
}
</style>
`

export const guideMdTemplate = () => `## 🚧建设中`

export const demoMdTemplate = (compInfo) =>
  `---
title: ${compInfo.compUpperName} ${compInfo.compDesc}
description: 组件描述。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

### 组件类型

{{ demo1 }}
`

export const compMdTemplate = (compInfo) =>
  `:: BASE_DOC ::

## API

### ${compInfo.compUpperName} Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| ---- | ---- | ------ | ---- | ---- |

### ${compInfo.compUpperName} Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | \`(e: MouseEvent)\` | 点击时触发 |

### ${compInfo.compUpperName} Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                     | 默认值                    | 描述         |
| ------------------------ | ------------------------- | ------------ |
`

export const compTemplate = (compInfo) =>
  `<template>
  <div :class="${compInfo.compName}Class">${compInfo.compUpperName}</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import ${compInfo.compUpperName}Props from './types'
import config from '../config'

const { prefix } = config
const name = \`\${prefix}-${compInfo.compName}\`

const props = defineProps(${compInfo.compUpperName}Props)

const ${compInfo.compName}Class = computed(() => [\`\${name}\`])

</script>

<style lang="less">
@import url('./styles/index.less');
</style>
`

export const indexTemplate = (compInfo) =>
  `import _${compInfo.compUpperName} from './${compInfo.compName}.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { T${compInfo.compUpperName}Props as ${compInfo.compUpperName}Props } from './types'

const ${compInfo.compUpperName} = withInstall(_${compInfo.compUpperName}) as WithInstallType<typeof _${compInfo.compUpperName}>

export default ${compInfo.compUpperName}

declare module 'vue' {
  interface GlobalComponents {
    Bu${compInfo.compUpperName}: typeof ${compInfo.compUpperName}
  }
}
`

export const typesTemplate = (compInfo) =>
  `import { PropType } from 'vue'

export interface T${compInfo.compUpperName}Props {}

export default {}
`

export const mixinStyleTemplate = () =>
  `@import '@/styles/variable.less';

:root {}`

export const indexStyleTemplate = (compInfo) =>
  `@import "./mixin.less";

.@{prefix}-${compInfo.compName} {}`

export default {
  guideMdTemplate,
  demoMdTemplate,
  compMdTemplate,
  demoTemplate,
  mobileDemoTemplate,
  compTemplate,
  indexTemplate,
  typesTemplate,
  indexStyleTemplate,
  mixinStyleTemplate
}
