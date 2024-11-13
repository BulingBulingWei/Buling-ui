/**
 * @author: 1v
 * @description: 此脚本用于
 *    将 `comp/types.ts` 中的类型写入到 `comp/comp.md#props` 中；
 *    将 `comp/styles/mixin.less` 中的css变量写入到 `comp/comp.md#css` 中
 *    支持多个参数: 【组件名】【.】【--force】
 */
import fs from 'fs'
import { $ } from 'execa'
import ora from 'ora'
import chalk from 'chalk'
import { resolve, getCompNameFromSrc, getPropsInfoFromFile } from './utils.js'

const succeedText = (s) => chalk.green(s)
const failedText = (s) => chalk.red(s)

const canRewriteProps = (md, forceRewrite) => {
  const ans = md.match(/\| -*? \| -*? \| -*? \| -*? \| -*? \|([\s\S]*?)\n\n/)
  if (!ans || !ans[1]) return md
  if (/[a-zA-Z0-9]/.test(ans[1])) {
    if (forceRewrite) {
      md = md.replaceAll(ans[1], '')
      return md
    }
    return false
  }
}

const canRewriteCss = (md, forceRewrite) => {
  const ans = md.match(/\|\s*?名称\s*?\|\s*?默认值\s*?\|\s*?描述\s*?\|\n\| -*? \| -*? \| -*? \|\n([\s\S]*?)$/)
  if (!ans || !ans[1]) return md
  if (/[a-zA-Z0-9]/.test(ans[1])) {
    if (forceRewrite) {
      md = md.replaceAll(ans[1], '')
      return md
    }
    return false
  }
}

const writeProps = (props, mdPath, forceRewrite) => {
  let apiMd = fs.readFileSync(mdPath, 'utf8').toString()

  const newMd = canRewriteProps(apiMd, forceRewrite)

  if (!newMd) {
    return false
  }

  apiMd = newMd
  const res = apiMd.match(/\| -*? \| -*? \| -*? \| -*? \| -*? \|/)
  const insertIndex = res[0].length + res.index
  let propsMd = ``
  props.forEach((item) => (propsMd += `\n|${item.name}|${item.type}|${item.default}|${item.desc}|N|`))
  apiMd = apiMd.slice(0, insertIndex) + propsMd + apiMd.slice(insertIndex)

  fs.writeFileSync(mdPath, apiMd)
  return true
}

const getCssFromMixin = (path) => {
  const rowFile = fs.readFileSync(path, 'utf-8')
  const temp = rowFile.match(/:root {([\s\S]*?)}/)
  if (!temp) return

  const lessRow = [...temp[0].matchAll(/\s*([a-z-A-Z]+):\s*(.*?);(.*?)\n/g)]

  const lessArr = lessRow.map((item) => {
    let value = item[2]
    if (value.includes('var')) {
      value = '`' + value + '`'
    }
    let desc = item[3].replaceAll('/', '').trim()
    return {
      name: item[1],
      value,
      desc
    }
  })
  return lessArr
}

const writeCss = (css, mdPath, forceRewrite) => {
  let apiMd = fs.readFileSync(mdPath, 'utf8').toString()

  const newMd = canRewriteCss(apiMd, forceRewrite)

  if (!newMd) {
    return false
  }

  apiMd = newMd
  const res = apiMd.match(/\|\s*?名称\s*?\|\s*?默认值\s*?\|\s*?描述\s*?\|\n\| -*? \| -*? \| -*? \|\n/)
  const insertIndex = res[0].length + res.index
  let cssMd = ``
  css.forEach((item) => (cssMd += `|${item.name}|${item.value}|${item.desc}|\n`))
  apiMd = apiMd.slice(0, insertIndex) + cssMd + apiMd.slice(insertIndex)

  fs.writeFileSync(mdPath, apiMd)
  return true
}

const main = (comp, forceRewrite) => {
  const mdPath = resolve(`./src/${comp}/${comp}.md`)
  const typesPath = resolve(`./src/${comp}/types.ts`)
  const mixinPath = resolve(`./src/${comp}/styles/mixin.less`)

  const propsLoading = ora(succeedText(`正在获取组件 ${comp} 的类型...`)).start()

  if (!fs.existsSync(mdPath)) {
    return propsLoading.fail(failedText(`Failed! ${mdPath} file is not found`))
  }

  if (!fs.existsSync(typesPath)) {
    return propsLoading.fail(failedText(`Failed! ${typesPath} file is not found`))
  }

  // 从 ${comp}/types.ts 读取 props，并写入至 ${comp}/${comp}.md
  const props = getPropsInfoFromFile(comp)
  const isSucceedProps = writeProps(props, mdPath, forceRewrite)

  if (isSucceedProps) {
    propsLoading.succeed(succeedText(`${comp} 组件类型已插入 -> ${comp}/${comp}.md`))
  } else {
    propsLoading.fail(failedText(`${comp}/${comp}.md 中props不为空，取消写入覆盖`))
  }

  const cssLoading = ora(succeedText(`正在获取组件 ${comp} 的css变量...`)).start()

  if (!fs.existsSync(mixinPath)) {
    return cssLoading.fail(failedText(`Failed! ${mixinPath} file is not found`))
  }

  // 从 ${comp}/styles/mixin.less 读取 css变量，并写入至 ${comp}/${comp}.md
  const css = getCssFromMixin(mixinPath)
  const isSucceedCss = writeCss(css, mdPath, forceRewrite)

  if (isSucceedCss) {
    cssLoading.succeed(succeedText(`${comp} 组件css变量已插入 -> ${comp}/${comp}.md`))
  } else {
    cssLoading.fail(failedText(`${comp}/${comp}.md 中css不为空，取消写入覆盖`))
  }
}

const entry = () => {
  let comp = process.argv.splice(2)
  let forceRewrite = false

  // 强制覆写
  if (comp.includes('--force')) {
    forceRewrite = true
    console.log(succeedText('启用强制覆写...'))
    comp = comp.filter((item) => item !== '--force')
  }

  // 获取所有组件
  if (comp[0] === '.') {
    comp = getCompNameFromSrc()
  }

  comp.forEach((comp) => main(comp, forceRewrite))

  $`npx prettier --config ${resolve('.prettierrc')} --write src/**/*.md`
}

entry()
