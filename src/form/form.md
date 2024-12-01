:: BASE_DOC ::

## API

### Form Props

| 名称         | 类型                                    | 默认值                            | 说明                 | 必传 |
| ------------ | --------------------------------------- | --------------------------------- | -------------------- | ---- |
| layout       | `horizontal ` &#124; ` vertical`        | `vertical`                        | 布局方式             | N    |
| labelWidth   | string                                  | `auto`                            | label 的宽度         | N    |
| labelAlign   | `top ` &#124; `bottom` &#124; ` center` | `top`                             | label 的纵向排列方式 | N    |
| contentAlign | `left ` &#124; `center` &#124; ` right` | `垂直布局为left，水平布局为right` | 内容区的排列方式     | N    |

### Form Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Form Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                   | 默认值                           | 描述                        |
| -------------------------------------- | -------------------------------- | --------------------------- |
| --bu-form-vertical-lable-margin-bottom | 8px                              | 垂直布局中 label 的下外边距 |
| --bu-form-item-vertical-padding        | 32px                             | formItem 的垂直方向边距     |
| --bu-form-item-label-font-weight       | 500                              | label 文字粗细              |
| --bu-form-item-label-font-size         | 32px                             | label 文字大小              |
| --bu-form-item-label-color             | `var(--bu-color-important-text)` | label 文字颜色              |
| --bu-form-item-required-color          | `var(--bu-font-color-important)` | 必填符号颜色                |
| --bu-form-item-content-color           | `var(--bu-color-normal-text)`    | 内容区文字颜色              |
| --bu-form-item-help-font-size          | 26px                             | 帮助文字大小                |
| --bu-form-item-help-font-weight        | 300                              |                             |
| --bu-form-item-arrow-font-size         | 32px                             | 右侧箭头尺寸                |
| --bu-form-item-arrow-gap               | 16px                             | 右侧箭头与内容区域的间距    |
| --bu-form-item-arrow-color             | `var(--bu-color-secondary-text)` | 箭头颜色                    |
