import fs from 'fs'
import path from 'path'

export const resolve = (s, base = path.dirname('')) => path.resolve(base, s)

export const firstUpperCase = (comp) => comp[0].toLocaleUpperCase() + comp.slice(1)

export const FilterCompName = ['styles', 'utils', 'hooks', 'icon', 'assets']

/**
 * 获取src路径下所有组件名
 */
export const getCompNameFromSrc = () => {
  const files = fs.readdirSync(resolve('./src'))
  // 去除不需要的文件夹名
  const compName = files.filter((item) => !FilterCompName.includes(item))
  // 去除文件名
  return compName.filter((item) => !item.includes('.'))
}

/**
 * 通过comp/type.ts获取组件props类型
 *
 * @param {String} compName 组件名
 * @return {Object} propsInfo 组件props信息
 */
export const getPropsInfoFromFile = (comp) => {
  const path = resolve(`./src/${comp}/types.ts`)
  const typeMd = fs.readFileSync(path, 'utf-8')
  const propsName = 'T' + comp[0].toLocaleUpperCase() + comp.slice(1) + 'Props'
  const reg = new RegExp(`export interface ${propsName} {([\\s\\S]*?)}\n\n`, 'ig')
  const temp = [...typeMd.matchAll(reg)]
  if (temp.length > 0) {
    const propsMd = temp[0][0]
    const propsRow = [
      ...propsMd.matchAll(
        /\/\*\*\s*\n\s*\*\s*([\s\S]*?)\s*\n\s*\*\s*@default:\s*([\s\S]*?)\s*\n\s*\*\/\s*\n\s*([\s\S\?]*?):\s*([\s\S]*?)\n/g
      )
    ]

    const ans = []
    propsRow.forEach((prop) => {
      let _default = prop[2]
      if (!['-', '', ' '].includes(_default)) {
        _default = '`' + _default + '`'
      }

      let type = prop[4]
      if (!['string', 'number', 'boolean'].includes(type)) {
        type = type.replaceAll('|', '` &#124; `').replaceAll("'", '')
        type = '`' + type + '`'
      }

      ans.push({
        desc: prop[1],
        default: _default,
        name: prop[3].replace('?', ''),
        type
      })
    })

    return ans
  }
}

/**
 * 将组件props信息写为JsDoc，插入到 comp/index.d.ts
 */
const writeJsDocToFile = (compName, content) => {
  if (compName) {
    const propsInfo = getPropsInfoFromFile(compName)

    const jsDoc = propsInfo.map((item) => ` * @property \`${item.name}\` ${item.desc}`)

    const ans = `
/**
 * \`Bu${firstUpperCase(compName)}\` 组件属性提示
 * 
${jsDoc.join('\n')}
*/
`

    const index = content.indexOf(`declare const ${firstUpperCase(compName)}`)
    const newContent = content.substring(0, index) + ans + content.substring(index)
    return newContent
  }
}

/**
 *  为组件声明文件添加jsDoc
 */
export function beforeWriteFile(file, content) {
  const compNames = getCompNameFromSrc()
  const fileNames = compNames.map((item) => `${item}/index.d.ts`)
  const target = fileNames.find((item) => file.endsWith(item))
  if (target) {
    const compName = target.split('/')[0]
    const newContent = writeJsDocToFile(compName, content)
    if (newContent)
      return {
        filePath: file,
        content: newContent
      }
  }
}
