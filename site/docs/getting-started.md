---
title: Vue3 for Mobile
description:  适配移动端的组件库，适合在 vue 3 技术栈项目中使用。
spline: explain
---

## 安装

### 使用 npm 安装

```bash
npm i buling-ui
```

### 使用 pnpm 安装

```bash
pnpm i buling-ui
```

## 使用

 提供了两种方式使用组件，具体使用方式如下

### 按需引入（推荐）

借助 Vite 等支持 tree-shaking 特性的构建工具，按需引入可以达到减少打包体积的效果。

```vue
<template>
  <Button type="primary">按钮</Button>
</template>

<script setup lang="ts">
import { Button } from 'buling-ui'
</script>
```

### 全局注册（不推荐）

使用全局注册不利于组件使用数据的收集

```js
import { createApp } from 'vue'
import Buling from 'buling-ui'
import App from './app.vue'

createApp(App).use(Buling).mount('#root')
```
