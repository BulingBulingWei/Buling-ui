---
title: List 列表
description: 滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

### 基本使用

`isLoading` 用于表示当前是否处于加载中状态。
<br/>

`hasMore` 用于表示数据是否还有更多。(对应接口一般为 page \* pageSize < count)

{{ demo1 }}

### 使用控制器

通过 controller 插槽定制加载更多
{{ demo2 }}
