/**
 * @author: 1v
 * @description: 此脚本用于快速创建并初始化新组件
 */
import enquirer from 'enquirer'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { $ } from 'execa'
import ora from 'ora'
import docsConfig from '../site/docs.config.js'
import TemplateGenerator from './template.js'
import { resolve } from './utils.js'

const themeText = (s) => chalk.hex('#e37318')(s)
const succeedText = (s) => chalk.green(s)
const failedText = (s) => chalk.red(s)
const colorLog = (s) => console.log(chalk.green('-') + themeText(` ${s}`))

// 获取组件信息
async function getCompInfo() {
  async function getCompName() {
    return await new enquirer.Input({
      name: 'compName',
      message: themeText('step1: 要新增组件了嘛？取个好听的name吧~\n'),
      initial: 'name'
    }).run()
  }

  async function getCompNameDesc() {
    return await new enquirer.Input({
      name: 'compDesc',
      message: themeText('step2: 再来个中文名字描述吧~\n'),
      initial: '取个啥名呢？'
    }).run()
  }

  async function selectCompLocation() {
    return await new enquirer.Select({
      name: 'compType',
      message: themeText('step3: emmm, 那组件放哪个位置好呢？'),
      choices: ['开始', '基础组件', '导航', '输入', '数据展示', '反馈']
    }).run()
  }

  const compName = await getCompName()
  const compDesc = await getCompNameDesc()
  const compLocation = await selectCompLocation()

  return {
    compUpperName: compName.slice(0, 1).toUpperCase() + compName.slice(1),
    compName: compName.toLowerCase(),
    compDesc,
    compLocation
  }
}

// 创建组件文件
const createCompFiles = (compInfo) => {
  const loading = ora('正在创建组件...').start()

  const compPath = resolve(`./src/${compInfo.compName}`)
  if (fs.existsSync(compPath)) {
    const err = `组件创建失败, Failed! ${compPath}路径已存在`
    loading.fail(chalk.red(err))
    return err
  }

  try {
    // src/comp
    fs.mkdirSync(compPath)

    // comp/index.ts
    fs.writeFileSync(resolve('./index.ts', compPath), TemplateGenerator.indexTemplate(compInfo))
    // comp/types.ts
    fs.writeFileSync(resolve('./types.ts', compPath), TemplateGenerator.typesTemplate(compInfo))
    // comp/comp.vue
    fs.writeFileSync(
      resolve(`./${compInfo.compName}.vue`, compPath),
      TemplateGenerator.compTemplate(compInfo)
    )
    // comp/comp.md
    fs.writeFileSync(
      resolve(`./${compInfo.compName}.md`, compPath),
      TemplateGenerator.compMdTemplate(compInfo)
    )

    // comp/demos
    const demosPath = resolve('./demos', compPath)
    fs.mkdirSync(demosPath)

    // demos/demo1.vue
    fs.writeFileSync(resolve('./demo1.vue', demosPath), TemplateGenerator.demoTemplate(compInfo))
    // demos/mobile.vue
    fs.writeFileSync(
      resolve('./mobile.vue', demosPath),
      TemplateGenerator.mobileDemoTemplate(compInfo)
    )

    // comp/docs
    const docsPath = resolve('./docs', compPath)
    fs.mkdirSync(docsPath)

    // docs/demo.md
    fs.writeFileSync(resolve('./demo.md', docsPath), TemplateGenerator.demoMdTemplate(compInfo))
    // docs/guide.md
    fs.writeFileSync(resolve('./guide.md', docsPath), TemplateGenerator.guideMdTemplate())

    // comp/styles
    const stylesPath = resolve('./styles', compPath)
    fs.mkdirSync(stylesPath)

    // styles/mixin.less
    fs.writeFileSync(resolve('./mixin.less', stylesPath), TemplateGenerator.mixinStyleTemplate())

    // styles/index.less
    fs.writeFileSync(
      resolve('./index.less', stylesPath),
      TemplateGenerator.indexStyleTemplate(compInfo)
    )

    prettierWrite(compPath)
  } catch (error) {
    const err = `组件创建失败, Failed! ${error}`
    // 清除已创建的文件
    cleanErrorCompFiles(compInfo)
    loading.fail(chalk.red(err))
    return err
  }

  loading.succeed(themeText(`组件创建完成: /src/${compInfo.compName}, Done!`))
}

const insertComponent = (compInfo) => {
  const loading = ora('更新component文件...').start()

  const componentPath = resolve('./src/components.ts')
  const raw = fs.readFileSync(componentPath).toString()
  const newContent =
    raw +
    `export { default as Bu${compInfo.compUpperName}, type ${compInfo.compUpperName}Props } from './${compInfo.compName}'\n`

  fs.writeFile(componentPath, newContent, (err) => {
    if (err) {
      loading.fail(chalk.red('更新 component 文件失败 Failed!'))
      throw err
    }
    loading.succeed(themeText('更新 component 文件成功 Done!'))
  })
}

// 插入配置
const insertConfig = (compInfo) => {
  const loading = ora('更新docs.config配置...').start()

  // docs.config中的菜单索引
  const menuIndex = docsConfig.findIndex((item) => item.title === compInfo.compLocation)
  if (menuIndex < 0) return console.error(compInfo.compLocation + ' 路径不存在')

  if (!docsConfig[menuIndex].children?.length) docsConfig[menuIndex].children = []

  const docsConfigPath = resolve('./site/docs.config.js')
  const raw = fs.readFileSync(docsConfigPath).toString()

  // 通过索引和 ']' 寻找插入位置
  const actionIndex = [...raw.matchAll(`]`)].at(menuIndex)?.index
  if (!actionIndex) return console.log('无法定位插入位置')

  const newCompConfig = `${docsConfig[menuIndex].children.length ? ',' : ''}{
    title: "${compInfo.compUpperName} ${compInfo.compDesc}",
    name: "${compInfo.compName}",
    path: "/components/${compInfo.compName}",
    component: () => import('@/${compInfo.compName}/${compInfo.compName}.md')
  }`
  const newDocsConfig = raw.slice(0, actionIndex) + newCompConfig + raw.slice(actionIndex)

  fs.writeFile(docsConfigPath, newDocsConfig, (err) => {
    if (err) {
      loading.fail(chalk.red('更新 docs.config 配置失败 Failed!'))
      throw err
    }
    loading.succeed(themeText('更新 docs.config 配置成功 Done!'))
    prettierWrite(docsConfigPath)
    ora(themeText(`🌈🌈🌈: 欢迎 ${compInfo.compUpperName} 组件进入大家庭当中~`))
      .start()
      .succeed()
  })
}

// prettier
const prettierWrite = (path) => {
  $`npx prettier --config ${resolve('.prettierrc')} --write ${path}`
}

const cleanErrorCompFiles = (compInfo) => {
  // 移除src/comp
  function removeDirectory(dirPath) {
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach((file) => {
        const currentPath = path.join(dirPath, file)
        if (fs.lstatSync(currentPath).isDirectory()) {
          removeDirectory(currentPath)
        } else {
          fs.unlinkSync(currentPath)
        }
      })
      fs.rmdirSync(dirPath)
    }
  }

  removeDirectory(resolve(`./src/${compInfo.compName}`))
}

const entry = async () => {
  colorLog('天呐~，你终于来了!\n')
  const compInfo = await getCompInfo()
  colorLog('\n已获取组件信息')

  // 创建文件
  const err = createCompFiles(compInfo)
  if (err) return

  // 插入到component.ts
  insertComponent(compInfo)

  // 插入docs配置
  insertConfig(compInfo)
  // cleanErrorCompFiles(compInfo)
}

entry()
