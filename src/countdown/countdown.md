:: BASE_DOC ::

## API

### CountDown Props

| 名称          | 类型                                                           | 默认值     | 说明                                           | 必传 |
| ------------- | -------------------------------------------------------------- | ---------- | ---------------------------------------------- | ---- |
| autoStart     | boolean                                                        | `false`    | 自动开始倒计时                                 | N    |
| format        | string                                                         | `HH:mm:ss` | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N    |
| time          | number                                                         | -          | 倒计时时长，单位毫秒                           | N    |
| millisecond   | boolean                                                        | `false`    | 开启毫秒级渲染                                 | N    |
| type          | `default ` &#124; `circle` &#124; `block` &#124; ` light-text` | `default`  | 类型                                           | N    |
| size          | `small ` &#124; `medium` &#124; ` large`                       | `medium`   | 尺寸                                           | N    |
| splitWithUnit | boolean                                                        | `false`    | 使用时间单位分割                               | N    |

### CountDown Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### CountDown Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                 | 默认值                        | 描述                        |
| ------------------------------------ | ----------------------------- | --------------------------- |
| --bu-countdown-default-color         | `var(--bu-color-normal-text)` | default 类型文本颜色        |
| --bu-countdown-light-text-time-color | `var(--bu-theme-color)`       | light-text 类型时间文字颜色 |
| --bu-countdown-light-text-unit-color | `var(--bu-color-normal-text)` | light-text 类型单位文字颜色 |
