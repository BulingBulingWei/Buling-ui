:: BASE_DOC ::

## API

### Avatar Props

| 名称           | 类型                                                                                      | 默认值     | 说明                     | 必传 |
| -------------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------ | ---- |
| image          | string                                                                                    | -          | 头像地址                 | N    |
| alt            | string                                                                                    | -          | 头像加载失败时的文字提示 | N    |
| defaultImage   | string                                                                                    | -          | 默认头像地址             | N    |
| circle         | boolean                                                                                   | `false`    | 头像形状是否为圆形       | N    |
| size           | `extra-large ` &#124; `large` &#124; `medium` &#124; `small` &#124; `mini` &#124; ` tiny` | `'medium'` | 头像大小                 | N    |
| gender         | `male ` &#124; ` female`                                                                  | -          | 性别                     | N    |
| showGenderIcon | boolean                                                                                   | `false`    | 是否显示性别图标         | N    |

### Avatar Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### Avatar Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                  | 默认值 | 描述     |
| ------------------------------------- | ------ | -------- |
| --bu-avatar-extra-large-size          | 150px  | 头像尺寸 |
| --bu-avatar-large-size                | 96px   |          |
| --bu-avatar-medium-size               | 88px   |          |
| --bu-avatar-small-size                | 72px   |          |
| --bu-avatar-mini-size                 | 44px   |          |
| --bu-avatar-tiny-size                 | 36px   |          |
| --bu-avatar-extra-large-border-radius | 16px   | 头像圆角 |
| --bu-avatar-large-border-radius       | 12px   |          |
| --bu-avatar-medium-border-radius      | 12px   |          |
| --bu-avatar-small-border-radius       | 8px    |          |
| --bu-avatar-mini-border-radius        | 4px    |          |
| --bu-avatar-tiny-border-radius        | 4px    |          |
