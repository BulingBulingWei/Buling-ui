---
title: Loading 加载中
description: 用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

### 在模板中使用

text 设置文本，默认为空；visible 控制组件是否显示；showOverlay 控制组件是否存在蒙层
{{ demo1 }}

### 组件 Hook

使用 useLoading 创建 loading 实例，配置参数参考 API
{{ demo2 }}
