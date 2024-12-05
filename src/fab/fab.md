:: BASE_DOC ::

## API

### Fab Props

| 名称        | 类型                                                               | 默认值                                                | 说明                   | 必传 |
| ----------- | ------------------------------------------------------------------ | ----------------------------------------------------- | ---------------------- | ---- |
| iconSrc     | string                                                             | -                                                     | 图标地址               | N    |
| text        | string                                                             | -                                                     | 文本内容               | N    |
| offset      | `{ bottom?: string; right?: string; left?: string; top?: string }` | `{ bottom: 80px, right: 40px }`                       | 定位                   | N    |
| draggable   | boolean                                                            | `false`                                               | 是否可拖动             | N    |
| aside       | boolean                                                            | `false`                                               | 可拖动时是否自动贴边   | N    |
| buttonProps | `Partial<ButtonProps>`                                             | `{ type: 'primary', shape: 'circle', size: 'large' }` | 透传至 button 的 props | N    |

### Fab Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Fab Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称            | 默认值 | 描述                 |
| --------------- | ------ | -------------------- |
| --bu-fab-right  | 40px   | 默认离屏幕右边的距离 |
| --bu-fab-bottom | 80px   | 默认离屏幕底部的距离 |
| --bu-fab-zIndex | 700    | 悬浮按钮层级         |
