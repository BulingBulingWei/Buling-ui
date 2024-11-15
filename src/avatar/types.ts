import { PropType } from 'vue'

export interface TAvatarProps {
  /**
   * 头像地址
   *  @default: -
   */
  image: string
  /**
   * 头像加载失败时的文字提示
   *  @default: -
   */
  alt: string
  /**
   * 默认头像地址
   * @default: -
   */
  defaultImage: string
  /**
   * 头像形状是否为圆形
   * @default: false
   */
  circle: boolean
  /**
   * 头像大小
   *  @default: 'medium'
   */
  size: 'extra-large' | 'large' | 'medium' | 'small' | 'mini' | 'tiny'
  /**
   * 性别
   *  @default: -
   */
  gender: 'male' | 'female'
  /**
   * 是否显示性别图标
   *  @default: false
   */
  showGenderIcon: boolean
}

export default {
  /**
   * 头像地址
   *  @default: -
   */
  image: String,
  /**
   * 头像加载失败时的文字提示
   *  @default: -
   */
  alt: String,
  /**
   * 默认头像地址
   * @default: -
   */
  defaultImage: String,
  /**
   * 头像形状是否为圆形
   * @default: false
   */
  circle: {
    type: Boolean,
    default: false
  },
  /**
   * 尺寸，对应设计稿`750`尺寸<p>`extra-large h-150px`</p><p>`large h-96px`</p> <p>`medium h-88px`</p> <p>`small h-72px`</p> <p>`mini h-44px`</p> <p>`tiny h-36px`</p>
   *  @default: 'medium'
   */
  size: {
    type: String as PropType<TAvatarProps['size']>,
    default: 'medium'
  },
  /**
   * 性别
   *  @default: -
   */
  gender: {
    type: String as PropType<TAvatarProps['gender']>
  },
  /**
   * 是否显示性别图标
   *  @default: false
   */
  showGenderIcon: {
    type: Boolean,
    default: false
  }
}
