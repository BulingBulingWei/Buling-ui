:: BASE_DOC ::

## API

### Badge Props

| 名称      | 类型                                     | 默认值   | 说明                                   | 必传 |
| --------- | ---------------------------------------- | -------- | -------------------------------------- | ---- |
| showBadge | boolean                                  | `true`   | 是否显示 badge                         | N    |
| dot       | boolean                                  | `false`  | 是否显示小红点                         | N    |
| content   | `string ` &#124; ` number`               | -        | 徽标内容                               | N    |
| size      | `small ` &#124; `medium` &#124; ` large` | `medium` | 徽标大小                               | N    |
| maxCount  | number                                   | -        | 最大值，超过最大值会显示 '{maxCount}+' | N    |
| border    | boolean                                  | `false`  | 是否显示边框                           | N    |
| transform | `CSSStyleDeclaration[transform]`         | -        | 徽标偏移量                             | N    |

### Badge Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Badge Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                             | 默认值                       | 描述               |
| -------------------------------- | ---------------------------- | ------------------ |
| --bu-badge-height                | 24px                         | 固定高度           |
| --bu-badge-bg-color              | #d54941                      | 背景颜色           |
| --bu-badge-color                 | `var(--bu-font-color-white)` | 徽标字体颜色       |
| --bu-badge-font-size             | 16px                         | 字体大小           |
| --bu-badge-font-weight           | 500                          | 字体粗细           |
| --bu-badge-dot-size              | 10px                         | 小圆点尺寸         |
| --bu-badge-content-border-radius | 14px 14px 14px 2px           | 徽标圆角           |
| --bu-badge-content-min-width     | 14px                         | 内容最小宽度       |
| --bu-badge-content-right         | -20px                        | 徽标距离右侧偏移量 |
| --bu-badge-content-top           | -18px                        | 距离顶部偏移量     |
| --bu-badge-border-color          | #fff                         | 徽标边框颜色       |
| --bu-badge-font-family           | inherit                      | 徽标字体           |
