import { PropType } from 'vue'
import { BadgeProps } from '@/badge'
export interface TGridProps {
  /**
   * 间距，等效于column-gap和row-gap
   * @default: -
   */
  gap: string
  /**
   * 行间距
   * @default: -
   */
  rowGap: string
  /**
   * 列间距
   * @default: -
   */
  columnGap: string
  /**
   * 列数
   * @default: 1
   */
  column: number | string
}

export interface TGridItem {
  text: string
  image: string
  description: string
  layout: 'horizontal' | 'vertical'
  badgeProps: Partial<BadgeProps>
}

export const TGridItemProps = {
  text: String,
  image: String,
  description: String,
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical'
  },
  badgeProps: Object as PropType<Partial<BadgeProps>>
}

export default {
  /**
   * 间距，等效于column-gap和row-gap
   * @default: -
   */
  gap: String,
  /**
   * 行间距
   * @default: -
   */
  rowGap: String,
  /**
   * 列间距
   * @default: -
   */
  columnGap: String,
  /**
   * 列数
   * @default: 1
   */
  column: {
    type: [Number, String],
    default: 1
  }
}
