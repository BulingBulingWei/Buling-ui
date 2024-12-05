:: BASE_DOC ::

## API

### Popover Props

| 名称                | 类型           | 默认值  | 说明                       | 必传 |
| ------------------- | -------------- | ------- | -------------------------- | ---- |
| triggerRef          | `HTMLElement`  | -       | 触发元素，此优先级大于插槽 | N    |
| showPopover         | boolean        | `true`  | 是否显示气泡               | N    |
| title               | string         | -       | 气泡内标题                 | N    |
| content             | string         | -       | 内容                       | N    |
| showClose           | boolean        | `false` | 显示关闭按钮               | N    |
| showArrow           | boolean        | `true`  | 显示箭头                   | N    |
| placement           | ``&#124;` top` | `top`   | 弹出位置                   | N    |
| closeOnClickOutside | boolean        | `true`  | 点击外层关闭气泡           | N    |
| style               | `object`       | `{}`    | style 样式传递             | N    |

### Popover Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Popover Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                      | 默认值        | 描述                     |
| ------------------------- | ------------- | ------------------------ |
| --bu-popover-max-width    | 500px         | 最大宽度                 |
| --bu-popover-bg-color     | rgba(0, 0, 0) | 背景颜色                 |
| --bu-popover-title-color  | #fff          | 标题字色                 |
| --bu-popover-color        | #fff          | 内容字色                 |
| --bu-popover-bg-opacity   | 0.7           | 背景透明度               |
| --bu-popover-arrow-width  | 22px          | 箭头的长度               |
| --bu-popover-arrow-height | 14px          | 箭头的高度               |
| --bu-popover-body-padding | 24px          | 浮窗的内边距             |
| --bu-popover-gap          | 10px          | popover 与触发元素的间距 |
| --bu-popover-arrow-gap    | 18px          | 箭头离最近一条边的边距   |
| --bu-popover-duration     | 300ms         | 动画时间                 |
| --bu-popover-zIndex       | 800           | 层级                     |
