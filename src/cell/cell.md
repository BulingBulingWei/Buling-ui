:: BASE_DOC ::

## API

### Cell Props

| 名称        | 类型      | 默认值  | 说明                 | 必传 |
| ----------- | --------- | ------- | -------------------- | ---- |
| image       | `string`  | -       | 图片地址             | N    |
| title       | `string`  | -       | 标题                 | N    |
| arrow       | `boolean` | `false` | 显示右箭头           | N    |
| required    | `boolean` | `false` | 是否显示表单必填星号 | N    |
| description | `string`  | -       | 描述                 | N    |
| note        | `string,` | -       | 位于右侧的说明文字   | N    |

### Cell Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Cell Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
| ---- | ------ | ---- |
