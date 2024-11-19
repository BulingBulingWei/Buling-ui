import { PropType } from 'vue'

export interface TOverlayProps {
  /**
   * 是否显示遮罩层
   * @default: false
   */
  visible: boolean
  /**
   * 层级
   * @default: 900
   */
  zIndex: number
  /**
   * 背景色
   * @default: rgba(0, 0, 0, 0.70)
   */
  background: string
  /**
   * 动画时长
   * @default: 300
   */
  duration: number
  /**
   * 遮罩层距离屏幕顶部的距离
   * @default: 0
   */
  top: string
  /**
   * 遮罩层距离屏幕底部的距离
   * @default: 0
   */
  bottom: string
  /**
   * 遮罩层距离屏幕左侧的距离
   * @default: 0
   */
  left: string
  /**
   * 遮罩层距离屏幕右侧的距离
   * @default: 0
   */
  right: string
}

export default {
  /**
   * 是否显示遮罩层
   * @default: false
   */
  visible: {
    type: Boolean,
    default: false
  },
  /**
   * 层级
   * @default: 900
   */
  zIndex: Number,
  /**
   * 背景色
   * @default: rgba(0, 0, 0, 0.70)
   */
  background: String,
  /**
   * 动画时长
   * @default: 300
   */
  duration: Number,
  /**
   * 遮罩层距离屏幕顶部的距离
   * @default: 0
   */
  top: String,
  /**
   * 遮罩层距离屏幕底部的距离
   * @default: 0
   */
  bottom: String,
  /**
   * 遮罩层距离屏幕左侧的距离
   * @default: 0
   */
  left: String,
  /**
   * 遮罩层距离屏幕右侧的距离
   * @default: 0
   */
  right: String
}
