/*
 * @Author: BulingBulingWei
 * @Date: 2024-11-13 20:45:40
 * @LastEditors: BulingBulingWei
 * @LastEditTime: 2024-11-15 17:36:52
 * @Description:
 */
import { PropType } from 'vue'
// TODO: import { BadgeProps } from '@/badge'

export interface TCellProps {
  /**
   * 图片地址
   * @default: -
   */
  image: string
  /**
   * 标题
   * @default: -
   */
  title: string
  /**
   * 显示右箭头
   * @default: false
   */
  arrow: boolean
  /**
   * 是否显示表单必填星号
   * @default: false
   */
  required: boolean
  /**
   * 描述
   * @default: -
   */
  description: string
  /**
   * 位于右侧的说明文字
   * @default: -
   */
  note: string
  /**
   * 配置位于右侧的徽标
   * @default: -
   * */
  badgeProps: any
}

export default {
  /**
   * 图片地址
   * @default: -
   */
  image: String,
  /**
   * 标题
   * @default: -
   */
  title: {
    type: String,
    required: true
  },
  /**
   * 显示右箭头
   * @default: false
   */
  arrow: {
    type: Boolean,
    default: false
  },
  /**
   * 是否显示表单必填星号
   * @default: false
   */
  required: {
    type: Boolean,
    default: false
  },
  /**
   * 描述
   * @default: -
   */
  description: String,
  /**
   * 位于右侧的说明文字
   * @default: -
   */
  note: String,
  /**
   * 配置位于右侧的徽标
   * @default: -
   * */
  // TODO:  Object as PropType<TCellProps['badgeProps']>
  badgeProps: Object
}
