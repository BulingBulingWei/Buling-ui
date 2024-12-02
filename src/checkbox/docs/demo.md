---
title: CheckBox 复选框
description: 用于预设的一组选项中执行多项选择，并呈现选择结果。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

CheckBox 复选框 与 Radio 用法基本类似

### 通栏模式

当只有单个单选框建议直接使用 checkbox, 有多个选项单选时建议使用 checkboxGroup 包裹
{{ demo1 }}

### 卡片模式

卡片模式本身并不提供外边距，而需要外层或页面提供内边距实现
<br/>
卡片的 type 类型有 4 种：`default(默认) | card | gap-card | sub-gap-card`
{{ demo2 }}

### 横向布局

{{ demo3 }}

### 禁用状态

{{ demo4 }}
