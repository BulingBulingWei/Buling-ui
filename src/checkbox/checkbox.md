:: BASE_DOC ::

## API

### Checkbox Props

| 名称        | 类型                                        | 默认值  | 说明             | 必传 |
| ----------- | ------------------------------------------- | ------- | ---------------- | ---- |
| checked     | boolean                                     | `false` | 是否选中         | N    |
| label       | string                                      | -       | 标题             | N    |
| description | string                                      | -       | 描述文案         | N    |
| disabled    | boolean                                     | `false` | 禁用             | N    |
| value       | `string ` &#124; `number` &#124; ` boolean` | -       | 值               | N    |
| placement   | `left ` &#124; ` right`                     | `right` | 图标相对文案位置 | N    |
| card        | boolean                                     | `false` | 展示卡片类型     | N    |
| block       | boolean                                     | `true`  | 是否为块级       | N    |
| borderless  | boolean                                     | `false` | 无边框模式       | N    |

### Checkbox Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Checkbox Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                   | 默认值                           | 描述                      |
| -------------------------------------- | -------------------------------- | ------------------------- |
| --bu-checkbox-icon-size                | 48px                             | 图标尺寸                  |
| --bu-checkbox-bg-color                 | #fff                             | 背景色                    |
| --bu-checkbox-card-border-radius       | `var(--bu-card-border-radius)`   | 卡片样式圆角              |
| --bu-checkbox-card-gap                 | 16px                             | 分隔卡片的间距            |
| --bu-checkbox-vertical-padding         | 32px                             | 垂直内边距                |
| --bu-checkbox-horizontal-padding       | 24px                             | 水平内边距                |
| --bu-checkbox-icon-disabled-color      | `var(--bu-color-weak-text)`      | 禁用-选中状态下图标颜色   |
| --bu-checkbox-icon-uncheck-color       | `var(--bu-color-secondary-text)` | 禁用-非选择状态下图标颜色 |
| --bu-checkbox-label-color              | `var(--bu-color-important-text)` | 标题颜色                  |
| --bu-checkbox-label-disabled-color     | `var(--bu-color-secondary-text)` | 禁用状态标题颜色          |
| --bu-checkbox-description-color        | `var(--bu-color-secondary-text)` | 描述文案颜色              |
| --bu-checkbox-sub-gap-card-label-color | `var(--bu-color-normal-text)`    | 二级卡片 label 颜色       |
| --bu-checkbox-sub-gap-card-bg-color    | `var(--bu-color-global-bg)`      | 二级卡片背景颜色          |
