import { PropType } from 'vue'

export interface TEmptyProps {
  /**
   * 空状态图片地址
   * @default: -
   */
  image: string
  /**
   * 描述内容
   * @default: 暂无内容~
   */
  description?: string | string[]
  /**
   * 距离顶部的距离
   * @default: -
   */
  top?: string
  /**
   * 图片尺寸大小
   * @default: large
   */
  size?: 'large' | 'small' | 'mini'
}

export default {
  image: {
    type: String,
    required: true
  },
  description: {
    type: [String, Array<string>],
    default: '暂无内容~'
  },
  top: String,
  size: {
    type: String as PropType<TEmptyProps['size']>,
    default: 'small' as TEmptyProps['size']
  }
}
