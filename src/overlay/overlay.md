:: BASE_DOC ::

## API

### Overlay Props

| 名称       | 类型    | 默认值                | 说明                     | 必传 |
| ---------- | ------- | --------------------- | ------------------------ | ---- |
| visible    | boolean | `false`               | 是否显示遮罩层           | N    |
| zIndex     | number  | `900`                 | 层级                     | N    |
| background | string  | `rgba(0, 0, 0, 0.70)` | 背景色                   | N    |
| duration   | number  | `300`                 | 动画时长                 | N    |
| top        | string  | `0`                   | 遮罩层距离屏幕顶部的距离 | N    |
| bottom     | string  | `0`                   | 遮罩层距离屏幕底部的距离 | N    |
| left       | string  | `0`                   | 遮罩层距离屏幕左侧的距离 | N    |
| right      | string  | `0`                   | 遮罩层距离屏幕右侧的距离 | N    |

### Overlay Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Overlay Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                  | 默认值             | 描述                     |
| --------------------- | ------------------ | ------------------------ |
| --bu-overlay-bg-color | rgba(0, 0, 0, 0.7) | 背景颜色                 |
| --bu-overlay-duration | 300ms              | 动画时间                 |
| --bu-overlay-zindex   | 900                | 层级                     |
| --bu-overlay-top      | 0                  | 遮罩层距离屏幕边缘的距离 |
| --bu-overlay-bottom   | 0                  |                          |
| --bu-overlay-left     | 0                  |                          |
| --bu-overlay-right    | 0                  |                          |
