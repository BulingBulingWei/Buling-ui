:: BASE_DOC ::

## API

### Popup Props

| 名称                | 类型                                                                 | 默认值   | 说明                         | 必传 |
| ------------------- | -------------------------------------------------------------------- | -------- | ---------------------------- | ---- |
| visible             | boolean                                                              | `false`  | 是否显示弹出层, 支持 v-model | N    |
| placement           | `left ` &#124; `right` &#124; `top` &#124; `bottom` &#124; ` center` | `center` | 弹出层呈现位置               | N    |
| closeOnOverlayClick | boolean                                                              | `false`  | 是否点击遮罩层关闭弹出层     | N    |
| overlayProps        | `Partial<Omit<OverlayProps, visible>>`                               | -        | 透传至遮罩层的 props         | N    |
| zIndex              | number                                                               | `900`    | 层级                         | N    |
| background          | string                                                               | `#fff`   | 背景色属性                   | N    |
| safeBottom          | boolean                                                              | `true`   | 安全底部                     | N    |

### Popup Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Popup Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                 | 默认值                           | 描述                   |
| ------------------------------------ | -------------------------------- | ---------------------- |
| --bu-popup-zindex                    | 900                              | 层级                   |
| --bu-popup-content-bg-color          | #fff                             | 内容区背景颜色         |
| --bu-popup-toolbar-height            | 104px                            | toolbar 高度           |
| --bu-popup-toolbar-cancel-color      | `var(--bu-color-secondary-text)` | 取消字体颜色           |
| --bu-popup-toolbar-confirm-color     | `var(--bu-theme-color)`          | 确定字体颜色           |
| --bu-popup-toolbar-close-color       | `var(--bu-color-normal-text)`    | 关闭按钮的颜色         |
| --bu-popup-toolbar-font-size         | 26px                             | toolbar 字体大小       |
| --bu-popup-toolbar-title-font-size   | 32px                             | toolbar title 字体大小 |
| --bu-popup-toolbar-title-padding     | 0 24px                           | toolbar 内间距         |
| --bu-popup-toolbar-title-font-weight | 600                              |                        |
