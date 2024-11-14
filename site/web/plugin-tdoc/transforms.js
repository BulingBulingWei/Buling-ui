import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import mdToVue from './md-to-vue'

let demoCodesImports = {}

export default {
  before({ source, file }) {
    const resourceDir = path.dirname(file)
    console.log('resourceDir', resourceDir)
    const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/)
    const fileName = reg && reg[0]
    const componentName = reg && reg[1]
    demoCodesImports = {}

    const { data } = matter(source)
    // 统一换成 common 文档内容
    if (fileName && source.includes(':: BASE_DOC ::')) {
      const docPath = path.resolve(__dirname, `../../../src/${data.isHook ? 'hooks/' : ''}${componentName}/docs/demo.md`)

      let baseDoc = ''
      if (fs.existsSync(docPath)) {
        // 优先载入语言版本
        baseDoc = fs.readFileSync(docPath, 'utf-8')
      } else {
        console.error(`未找到 ${docPath} 文件`)
      }

      source = source.replace(':: BASE_DOC ::', baseDoc)
    }

    // 替换成对应 demo 文件
    source = source.replace(/\{\{\s+(.+)\s+\}\}/g, (demoStr, demoFileName) => {
      const demoPath = path.resolve(resourceDir, `./demos/${demoFileName}.vue`)
      if (!fs.existsSync(demoPath)) {
        return '\n<h3>DEMO (🚧建设中）...</h3>'
      }

      return `\n::: demo demos/${demoFileName} ${componentName}\n:::\n`
    })

    source.replace(/:::\s*demo\s+([\\/.\w-]+)/g, (demoStr, relativeDemoPath) => {
      const demoPathOnlyLetters = relativeDemoPath.replace(/[^a-zA-Z\d]/g, '')
      const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`
      demoCodesImports[demoCodeDefName] = `import ${demoCodeDefName} from './${relativeDemoPath}.vue?raw';`
    })

    return source
  },
  render({ source, file, md }) {
    const demoCodesDefsStr = Object.keys(demoCodesImports)
      .map((key) => demoCodesImports[key])
      .join(';\n')

    const demoCodeInstallStr = Object.keys(demoCodesImports).join(',')

    const sfc = mdToVue({
      md,
      file,
      source,
      demoCodesDefsStr,
      demoCodeInstallStr
    })

    return sfc
  }
}
