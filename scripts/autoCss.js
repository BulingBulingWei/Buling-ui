/**
 * @author: 1v
 * @description: 此插件，用于在打包时向 'comp/index.js' 添加导入css的代码
 */

import { FilterCompName } from './utils'

export default () => ({
  name: 'vite:auto-import-css',
  apply: 'build',
  enforce: 'post',
  renderChunk(code, chunk) {
    code = code.replaceAll('.less', '.css')
    if (chunk.fileName === 'index.js') {
      return `import './styles/reset.css';\n${code}`
    }

    // 组件入口js添加导入css代码
    // 正则表达式是用来匹配形如"loading/index.js"的字符串，而不匹配形如"loading/otherword/index.js"的字符串的
    if (!chunk.isEntry && chunk.type === 'chunk' && /^\w+\/index\.js$/.test(chunk.fileName)) {
      // 截取出组件名称
      let str = chunk.fileName.split('/')[0]
      // 去除非组件目录
      if (FilterCompName.includes(str)) return
      return `import './${str}.css';\n${code}`
    }
  }
})
