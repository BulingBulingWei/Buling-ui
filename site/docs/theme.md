---
title: 主题与全局变量
description: 支持Vue3项目使用，目前仅支持现有三种主题模板：Blue、Yellow、Orange
spline: explain
---

## 配置方式

### 1. 按需引入

如果您是按需引入的组件库，可通过下述方式配置主题

1. 在 `main.ts` 中引入 `useTheme` 方法配置主题

```js
import { useTheme } from 'buling-ui'

useTheme('Blue')
createApp(app).mount('#app')
```

2. 支持条件判断实现主题切换

```js
import { useTheme } from 'buling-ui'
useTheme('Yellow')
createApp(app).mount('#app')
```

### 2. 全局注册

1. 在 `main.ts` 中全局安装时配置

```js
import Buling from 'buling-ui'

createApp(app).use(Buling, { theme: 'Blue' }).mount('#app')
```

## 全局变量

主题依托 css 变量实现，分为基础全局变量与主题全局变量.
<br />
全局变量均配置在 `:root` 中，主题切换通过设置 html 的 theme 属性对应 `:root[theme="xxx"]` 的方式实现.

### 基础变量

| 名称                      | 默认值  | 描述             |
| ------------------------- | ------- | ---------------- |
| 中性色                    |
| --bu-color-important-text | #2a2a2d | 重要信息         |
| --bu-color-normal-text    | #534f63 | 正文文本、小标题 |
| --bu-color-secondary-text | #aba7b6 | 次级辅助文案     |
| --bu-color-weak-text      | #d0cfd3 | 弱文案           |
| --bu-color-disabled       | #e9e8ec | 禁用             |
| --bu-color-global-bg      | #f5f6fa | 全局背景色       |
| --bu-color-white          | #ffffff | 白色，辅助色     |
| 部分字体颜色              |
| --bu-font-color-white     | #ffffff | 白色字体颜色     |
| --bu-font-color-black     | #333333 | 黑色字体颜色     |
| --bu-font-color-success   | #2ba471 | 成功状态字体颜色 |
| --bu-font-color-error     | #d54941 | 失败状态字体颜色 |
| --bu-font-color-warning   | #e37318 | 告警状态字体颜色 |
| 卡片圆角                  |
| --bu-card-border-radius   | 24px    | 卡片类型圆角     |

### 主题变量

#### Blue 主题

配置在 `:root[theme="Blue"] `中

| 名称                             | 默认值  | 描述         |
| -------------------------------- | ------- | ------------ |
| --bu-theme-color                 | #1751FA | 主题色       |
| --bu-theme-light-color           | #d9e1ff | 主题浅色 10% |
| 按钮圆角与内边距                 |
| --bu-button-large-border-radius  | 48px    |              |
| --bu-button-medium-border-radius | 48px    |              |
| --bu-button-small-border-radius  | 48px    |              |
| --bu-button-mini-border-radius   | 48px    |              |
| --bu-button-tiny-border-radius   | 48px    |              |
| --bu-button-large-padding        | 0 120px |              |
| --bu-button-medium-padding       | 0 40px  |              |
| --bu-button-small-padding        | 0 32px  |              |
| --bu-button-mini-padding         | 0 24px  |              |
| --bu-button-tiny-padding         | 0 12px  |              |
| 其他组件圆角                     |
| --bu-toast-border-radius         | 16px    |              |
| --bu-popup-border-radius         | 16px    |              |
| --bu-dialog-border-radius        | 24px    |              |
| --bu-dialog-image-border-radius  | 16px    |              |
| --bu-dialog-input-border-radius  | 24px    |              |
| --bu-popover-border-radius       | 16px    |              |
| --bu-search-border-radius        | 36px    |              |

#### Yellow 主题

配置在 `:root[theme="Yellow"] `中

| 名称                             | 默认值  | 描述         |
| -------------------------------- | ------- | ------------ |
| --bu-theme-color                 | #f5ba18 | 主题色       |
| --bu-theme-light-color           | #ffe7b5 | 主题浅色 10% |
| 按钮圆角与内边距                 |
| --bu-button-large-border-radius  | 16px    |              |
| --bu-button-medium-border-radius | 8px     |              |
| --bu-button-small-border-radius  | 8px     |              |
| --bu-button-mini-border-radius   | 8px     |              |
| --bu-button-tiny-border-radius   | 4px     |              |
| --bu-button-large-padding        | 0 120px |              |
| --bu-button-medium-padding       | 0 32px  |              |
| --bu-button-small-padding        | 0 24px  |              |
| --bu-button-mini-padding         | 0 16px  |              |
| --bu-button-tiny-padding         | 0 8px   |              |
| 其他组件圆角                     |
| --bu-toast-border-radius         | 16px    |              |
| --bu-popup-border-radius         | 16px;   |              |
| --bu-dialog-border-radius        | 24px    |              |
| --bu-dialog-image-border-radius  | 16px    |              |
| --bu-dialog-input-border-radius  | 24px    |              |
| --bu-popover-border-radius       | 16px    |              |
| --bu-search-border-radius        | 36px    |              |

#### Orange 主题

配置在 `:root[theme="Orange"] `中

| 名称                             | 默认值  | 描述         |
| -------------------------------- | ------- | ------------ |
| --bu-theme-color                 | #e37318 | 主题色       |
| --bu-theme-light-color           | #ffd9c2 | 主题浅色 10% |
| 按钮圆角与内边距                 |
| --bu-button-large-border-radius  | 16px    |              |
| --bu-button-medium-border-radius | 8px     |              |
| --bu-button-small-border-radius  | 8px     |              |
| --bu-button-mini-border-radius   | 8px     |              |
| --bu-button-tiny-border-radius   | 4px     |              |
| --bu-button-large-padding        | 0 120px |              |
| --bu-button-medium-padding       | 0 32px  |              |
| --bu-button-small-padding        | 0 24px  |              |
| --bu-button-mini-padding         | 0 16px  |              |
| --bu-button-tiny-padding         | 0 8px   |              |
| 其他组件圆角                     |
| --bu-button-border-radius        | 48px    |              |
| --bu-toast-border-radius         | 16px    |              |
| --bu-popup-border-radius         | 16px    |              |
| --bu-dialog-border-radius        | 24px    |              |
| --bu-dialog-image-border-radius  | 16px    |              |
| --bu-dialog-input-border-radius  | 24px    |              |
| --bu-popover-border-radius       | 16px    |              |
| --bu-search-border-radius        | 36px    |              |
