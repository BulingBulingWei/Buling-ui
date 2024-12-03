:: BASE_DOC ::

## API

### Loading Props

| 名称         | 类型                                   | 默认值      | 说明                                     | 必传 |
| ------------ | -------------------------------------- | ----------- | ---------------------------------------- | ---- |
| visible      | boolean                                | `true`      | 是否显示                                 | N    |
| text         | string                                 | `加载中...` | 加载文案                                 | N    |
| showOverlay  | boolean                                | `false`     | 是否显示遮罩层                           | N    |
| delay        | number                                 | -           | 延迟显示，用于防止请求数据过快，出现闪动 | N    |
| overlayProps | `Partial<Omit<OverlayProps, visible>>` | `{}`        | 透传至 overlay                           | N    |

### Loading Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Loading Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                        | 默认值                           | 描述             |
| --------------------------- | -------------------------------- | ---------------- |
| --bu-loading-color          | `var(--bu-color-secondary-text)` | 文字颜色         |
| --bu-loading-icon-gap       | 8px                              | 图标与文案的间距 |
| --bu-loading-light-color    | `var(--bu-color-secondary-text)` | 亮色字体         |
| --bu-loading-dark-color     | `var(--bu-color-weak-text)`      | 暗色字体         |
| --bu-loading-text-font-size | 20px                             |                  |
| --bu-loading-zindex         | 900                              | 层级             |
