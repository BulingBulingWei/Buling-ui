import { PropType } from 'vue'
import { OverlayProps } from '@/overlay'

export interface TLoadingProps {
  /**
   * 是否显示
   * @default: true
   */
  visible: boolean
  /**
   * 加载文案
   * @default: 加载中...
   */
  text: string
  /**
   * 是否显示遮罩层
   * @default: false
   */
  showOverlay: boolean
  /**
   * 延迟显示，用于防止请求数据过快，出现闪动
   * @default: -
   */
  delay: number
  /**
   * 透传至overlay
   * @default: {}
   */
  overlayProps: Partial<Omit<OverlayProps, 'visible'>>
}

export default {
  /**
   * 是否显示
   * @default: true
   */
  visible: {
    type: Boolean as PropType<TLoadingProps['visible']>,
    default: true as TLoadingProps['visible']
  },
  /**
   * 加载文案
   * default: 加载中...
   */
  text: String,
  /**
   * 是否显示遮罩层
   * default: false
   */
  showOverlay: {
    type: Boolean,
    default: false
  },
  /**
   * 延迟显示，用于防止请求数据过快，出现闪动
   * default: -
   */
  delay: {
    type: Number
  },
  /**
   * 透传至overlay
   * @default: {}
   */
  overlayProps: {
    type: Object as PropType<TLoadingProps['overlayProps']>,
    default: {}
  }
}
