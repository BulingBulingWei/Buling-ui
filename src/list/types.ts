export interface TListProps {
  /**
   * 是否在加载中
   * @default: false
   */
  isLoading: boolean
  /**
   * 是否仍有数据
   * @default: true
   */
  hasMore: boolean
  /**
   * 加载时的显示文案
   * @default: -
   */
  loadingText: string
  /**
   * 全部加载完毕时的显示文案
   * @default: 我也是有底线的~
   */
  loadingOverText: string
  /**
   * 加载更多时的触底距离
   * @default: 30
   */
  loadMoreDistance: number
}

export default {
  /**
   * 是否在加载中
   * @default: false
   */
  isLoading: Boolean,
  /**
   * 是否仍有数据
   * @default: true
   */
  hasMore: {
    type: Boolean,
    default: true
  },
  /**
   * 加载时的显示文案
   * @default: -
   */
  loadingText: String,
  /**
   * 全部加载完毕显示文案
   * @default: 我也是有底线的~
   */
  loadingOverText: {
    type: String,
    default: '我也是有底线的~'
  },
  /**
   * 加载更多时的触底距离，单位px
   * @default: 30
   */
  loadMoreDistance: {
    type: Number,
    default: 30
  }
}
