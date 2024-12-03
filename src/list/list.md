:: BASE_DOC ::

## API

### List Props

| 名称             | 类型    | 默认值            | 说明                     | 必传 |
| ---------------- | ------- | ----------------- | ------------------------ | ---- |
| isLoading        | boolean | `false`           | 是否在加载中             | N    |
| hasMore          | boolean | `true`            | 是否仍有数据             | N    |
| loadingText      | string  | -                 | 加载时的显示文案         | N    |
| loadingOverText  | string  | `我也是有底线的~` | 全部加载完毕时的显示文案 | N    |
| loadMoreDistance | number  | `30`              | 加载更多时的触底距离     | N    |

### List Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### List Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 默认值                           | 描述                   |
| ----------------------------- | -------------------------------- | ---------------------- |
| --bu-list-load-height         | 180px                            | load 区域整体高度      |
| --bu-list-load-text-color     | `var(--bu-color-secondary-text)` | load 区域文字颜色      |
| --bu-list-load-text-font-size | 20px                             | load 区域文字大小      |
| --bu-list-loading-icon-gap    | 4px                              | loading 图标与文字间距 |
| --bu-list-loading-icon-height | 76px                             | loading 图标高度       |
| --bu-list-loading-icon-width  | 40px                             | loading 图标宽度       |
