:: BASE_DOC ::

## API

### DatePicker Props

| 名称         | 类型                       | 默认值                | 说明                                                                                                                                                                    | 必传    |
| ------------ | -------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------ | -------- | -------- | --- |
| title        | string                     | `选择时间`            | 标题                                                                                                                                                                    | N       |
| start        | `string ` &#124; ` number` | `默认10年前`          | 最小时间                                                                                                                                                                | N       |
| end          | `string ` &#124; ` number` | `默认10年后`          | 最大时间                                                                                                                                                                | N       |
| mode         | `TMode ` &#124; ` TMode[]` | `date`                | 供选择的时间模式。year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TMode = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second' | N   |
| format       | string                     | `YYYY-MM-DD HH:mm:ss` | 用于 change、confirm 事件参数格式化                                                                                                                                     | N       |
| cancelText   | string                     | `取消`                | 取消按钮文字                                                                                                                                                            | N       |
| confirmText  | string                     | `确定`                | 确认按钮文字                                                                                                                                                            | N       |
| value        | `string ` &#124; ` number` | -                     | 当前值，支持 v-model                                                                                                                                                    | N       |
| defaultValue | `string ` &#124; ` number` | -                     | 默认值                                                                                                                                                                  | N       |

### DatePicker Events

| 名称  | 参数              | 描述       |
| ----- | ----------------- | ---------- |
| click | `(e: MouseEvent)` | 点击时触发 |

### DatePicker Slots

| 名称    | 描述         |
| ------- | ------------ |
| default | 默认内容插槽 |

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称    | 默认值 | 描述 |
| ------- | ------ | ---- |
| display | block  |      |
