:: BASE_DOC ::

## API

### Button Props

| 名称     | 类型                                                                 | 默认值      | 说明                                                                                                                                   | 必传 |
| -------- | -------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| block    | boolean                                                              | `false`     | 是否为块级元素                                                                                                                         | N    |
| disabled | boolean                                                              | `false`     | 禁用状态                                                                                                                               | N    |
| size     | `large ` &#124; `medium` &#124; `small` &#124; `mini` &#124; ` tiny` | `medium`    | 尺寸，对应设计稿`750`尺寸<p>`large h-96px`</p> <p>`medium h-80px`</p> <p>`small h-56px`</p> <p>`mini h-48px`</p> <p>`tiny h-32px `</p> | N    |
| type     | `outline ` &#124; `primary` &#124; `text` &#124; ` light`            | `primary`   | 按钮类型                                                                                                                               | N    |
| shape    | `rectangle ` &#124; `square` &#124; `round` &#124; ` circle`         | `rectangle` | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle                                             | N    |
| iconSrc  | string                                                               | -           | 左侧按钮图标                                                                                                                           | N    |
| content  | string                                                               | -           | 按钮文字内容                                                                                                                           | N    |
| loading  | boolean                                                              | `false`     | 按钮执行中，不可点击                                                                                                                   | N    |
| width    | string                                                               | -           | 按钮长度                                                                                                                               | N    |

### Button Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Button Slots

| 名称    | 描述             |
| ------- | ---------------- |
| default | 默认内容插槽     |
| icon    | 内容左侧图标插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                      | 默认值                        | 描述                             |
| ----------------------------------------- | ----------------------------- | -------------------------------- |
| --bu-button-primary-bg-color              | `var(--bu-theme-color)`       | primary 按钮背景色，可使用渐变色 |
| --bu-button-primary-color                 | `var(--bu-font-color-white)`  | 按钮字体色                       |
| --bu-button-primary-disabled-bg-color     | `var(--bu-theme-light-color)` | 禁用时背景色                     |
| --bu-button-primary-disabled-color        | `var(--bu-font-color-white)`  | 禁用时字体色                     |
| --bu-button-outline-bg-color              | #fff                          |                                  |
| --bu-button-outline-border-color          | `var(--bu-theme-color)`       |                                  |
| --bu-button-outline-color                 | `var(--bu-theme-color)`       |                                  |
| --bu-button-outline-disabled-border-color | `var(--bu-color-weak-text)`   |                                  |
| --bu-button-outline-disabled-color        | `var(--bu-color-weak-text)`   |                                  |
| --bu-button-light-bg-color                | `var(--bu-theme-light-color)` |                                  |
| --bu-button-light-color                   | `var(--bu-theme-color)`       |                                  |
| --bu-button-light-disabled-bg-color       | `var(--bu-color-disabled)`    |                                  |
| --bu-button-light-disabled-color          | `var(--bu-font-color-white)`  |                                  |
| --bu-button-text-color                    | `var(--bu-theme-color)`       |                                  |
| --bu-button-text-disabled-color           | `var(--bu-color-weak-text)`   |                                  |
| --bu-button-text-padding                  | 10px                          |                                  |
| --bu-button-large-width                   | 520px                         | large 按钮固定宽度               |
| --bu-button-large-height                  | 96px                          | 按钮高度                         |
| --bu-button-medium-height                 | 80px                          |                                  |
| --bu-button-small-height                  | 56px                          |                                  |
| --bu-button-mini-height                   | 48px                          |                                  |
| --bu-button-tiny-height                   | 32px                          |                                  |
| --bu-button-large-round-padding           | 3px                           |                                  |
| --bu-button-medium-round-padding          | 2px                           |                                  |
| --bu-button-small-round-padding           | 2px                           |                                  |
| --bu-button-mini-round-padding            | 1px                           |                                  |
| --bu-button-tiny-round-padding            | 1px                           |                                  |
| --bu-button-large-font-size               | 32px                          | 文字大小                         |
| --bu-button-medium-font-size              | 28px                          |                                  |
| --bu-button-small-font-size               | 24px                          |                                  |
| --bu-button-mini-font-size                | 22px                          |                                  |
| --bu-button-tiny-font-size                | 20px                          |                                  |
| --bu-button-large-icon-size               | 40px                          | 图标大小                         |
| --bu-button-medium-icon-size              | 40px                          |                                  |
| --bu-button-small-icon-size               | 32px                          |                                  |
| --bu-button-mini-icon-size                | 24px                          |                                  |
| --bu-button-tiny-icon-size                | 24px                          |                                  |
| --bu-button-large-icon-gap                | 16px                          | 图标与文字的间距                 |
| --bu-button-medium-icon-gap               | 8px                           |                                  |
| --bu-button-small-icon-gap                | 8px                           |                                  |
| --bu-button-mini-icon-gap                 | 8px                           |                                  |
| --bu-button-tiny-icon-gap                 | 4px                           |                                  |
| --bu-button-font-weight                   | 500                           | 文字粗细                         |
