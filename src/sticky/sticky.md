:: BASE_DOC ::

## API

### Sticky Props

| 名称      | 类型                          | 默认值 | 说明                      | 必传 |
| --------- | ----------------------------- | ------ | ------------------------- | ---- |
| container | `HTMLElement ` &#124; ` null` | -      | 指定容器                  | N    |
| offsetTop | `number ` &#124; ` string`    | `0`    | 距离容器顶部距离,单位`px` | N    |
| zIndex    | number                        | `1000` | z-index 值                | N    |

### Sticky Events

| 名称   | 参数                                    | 描述       |
| ------ | --------------------------------------- | ---------- |
| scroll | `({scrollTop: number, fixed: boolean})` | 滚动时触发 |

### Sticky Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
| ---- | ------ | ---- |
