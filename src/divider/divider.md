:: BASE_DOC ::

## API

### Divider Props

| 名称        | 类型                             | 默认值                     | 说明                                 | 必传 |
| ----------- | -------------------------------- | -------------------------- | ------------------------------------ | ---- |
| dashed      | boolean                          | `false`                    | 是否为虚线                           | N    |
| layout      | `horizontal ` &#124; ` vertical` | `horizontal`               | 分隔线类型有两种：水平和垂直         | N    |
| gap         | string                           | `0px`                      | 分隔间距                             | N    |
| color       | string                           | `var(--bu-color-disabled)` | 颜色                                 | N    |
| borderWidth | string                           | `1px`                      | 粗细                                 | N    |
| height      | string                           | -                          | 垂直状态下的高度，默认跟随父容器高度 | N    |
| content     | string                           | -                          | 子元素                               | N    |

### Divider Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                         | 默认值                     | 描述                   |
| ---------------------------- | -------------------------- | ---------------------- |
| --bu-divider-color           | `var(--bu-color-disabled)` | 颜色                   |
| --bu-divider-width           | 1px                        | 粗细                   |
| --bu-divider-after-flex-grow | 1                          | 后面的分割线的伸缩比例 |
