import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'

export default {
  plugins: [
    /**
     * 根据 .browserslistrc 中配置的环境自动添加样式前缀
     * https://github.com/postcss/autoprefixer
     */
    pxtorem({
      rootValue: 100,
      propList: ['*'],
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
      exclude: 'site'
    }),
    autoprefixer()
  ]
}
