---
title: DatePicker 日期选择器
description: 用于选择一个时间点或者一个时间段。<div style="font-size:28px;font-family:DIN-Medium;color:#0052d9;padding:8px 12px;border-radius:10px;background:#d9e1ff;display:inline-block;">^1.0.0</div>
isComponent: true
---

### 年月日

start-end 选择时间范围，可以传递时间戳或字符串(如'2024-03-12'、'2024-03-12 17:28:45')
<br/>
format 用于 change、confirm 事件参数格式化
<br/>
mode: year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。
{{ demo1 }}

### 时间

{{ demo2 }}
