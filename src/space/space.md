:: BASE_DOC ::

## API

### Space Props

| 名称      | 类型                             | 默认值    | 说明                                          | 必传 |
| --------- | -------------------------------- | --------- | --------------------------------------------- | ---- |
| gap       | string                           | `0.16rem` | 间距 gap                                      | N    |
| direction | `row ` &#124; ` column`          | `row`     | 轴方向,同 flex-direction                      | N    |
| wrap      | boolean                          | `false`   | 自动换行                                      | N    |
| justify   | `CSSProperties[justify-content]` | -         | 轴方向对齐方式,同 justify-content             | N    |
| align     | `CSSProperties[align-items]`     | -         | 垂直轴方向对齐方式,同 align-items             | N    |
| fill      | boolean                          | -         | 是否让 Space 变为一个块级元素，填充整个父元素 | N    |

### Space Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Space Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称           | 默认值 | 描述 |
| -------------- | ------ | ---- |
| --bu-space-gap | 16px   | 间距 |
