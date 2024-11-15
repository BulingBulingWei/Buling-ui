---
title: Button 按钮
description: 按钮用于开启一个闭环的操作任务。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

### 组件类型

type 一共有四种基本类型，分别对应：默认的 primary、light、outline、text

{{ demo1 }}

### 组件尺寸

size 共五种大小，从小到大分别对应：tiny、mini、small、默认的 medium、large

{{ demo2 }}

### 圆角&加载中&块级&图标

circle 控制圆角显示，默认为 true；loading 状态不触发点击事件，默认为 false；block 控制按钮是否独占一行，默认为 false；左侧按钮图标可通过 iconSrc 配置，也可以通过 icon 插槽实现。

{{ demo3 }}

### 禁用状态

{{ demo4 }}
