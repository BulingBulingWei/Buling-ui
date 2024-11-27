:: BASE_DOC ::

## API

### Picker Props

| 名称         | 类型                                          | 默认值                                                   | 说明               | 必传 |
| ------------ | --------------------------------------------- | -------------------------------------------------------- | ------------------ | ---- |
| cancelText   | string                                        | `取消`                                                   | 取消按钮文字       | N    |
| confirmText  | string                                        | `确定`                                                   | 确认按钮文字       | N    |
| title        | string                                        | `标题`                                                   | 标题文字           | N    |
| columns      | `Array<PickerColumn> ` &#124; ` PickerColumn` | `[]`                                                     | 配置每一列的选项。 | N    |
| fieldNames   | `PickerFieldNames`                            | `{label: 'label', value: 'value', children: 'children'}` | 自定义字段名。     | N    |
| value        | `Array<PickerValue>`                          | `[]`                                                     | 值，支持 v-model。 | N    |
| defaultValue | `Array<PickerValue>`                          | `[]`                                                     | 默认值。           | N    |

### Picker Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Picker Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                         | 默认值                           | 描述         |
| ---------------------------- | -------------------------------- | ------------ |
| --bu-picker-bg-color         | #fff                             | 背景颜色     |
| --bu-picker-title-color      | `var(--bu-color-important-text)` | 标题颜色     |
| --bu-picker-cancel-color     | `var(--bu-color-secondary-text)` | 取消字体颜色 |
| --bu-picker-confirm-color    | `var(--bu-theme-color)`          | 确定字体颜色 |
| --bu-picker-item-color       | `var(--bu-color-normal-text)`    | 选项字体颜色 |
| --bu-picker-height           | 654px                            | 高度         |
| --bu-picker-item-height      | 110px                            | 选项高度     |
| --bu-picker-item-font-family | inherit                          | 选项字体     |
| --bu-picker-indicator-color  | #d0d0d0                          |              |
