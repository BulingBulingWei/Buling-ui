import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import autoImportCss from './scripts/autoCss'
import { beforeWriteFile } from './scripts/utils'
import { visualizer } from 'rollup-plugin-visualizer'

const resolvePath = (r) => path.resolve(__dirname, r)

export default defineConfig({
  build: {
    target: 'es2015',
    // 打包文件目录
    outDir: 'es',
    // 不压缩
    minify: false,
    // css分离
    cssCodeSplit: true,
    rollupOptions: {
      // 忽略打包三方库
      external: [
        'vue',
        'nanoid',
        'smoothscroll-polyfill',
        '@buling-ui-icon',
        'swiper/vue',
        'swiper/modules',
        'dayjs',
        '@vueuse/core',
        'lodash-es'
      ],
      input: ['src/index.ts'],
      output: {
        format: 'es',
        entryFileNames: ({ name }) => {
          if (name.includes('.less')) return name
          return `${name}.js`
        },
        // 让输出目录和输入目录对应
        preserveModules: true,
        preserveModulesRoot: 'src',
        // 输出目录
        dir: 'es'
      }
    },
    lib: {
      entry: './src/index.ts',
      formats: ['es']
    }
  },
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@buling-ui-icon': resolvePath('../buling-ui-icon/src/index.ts'),
      'buling-ui': resolvePath('./src/index.ts')
    },
    extensions: ['.js', '.ts', '.vue', '.css', '.less']
  },
  plugins: [
    vue(),
    dts({
      beforeWriteFile
    }),
    autoImportCss(),
    visualizer({
      // open: true
    })
  ]
})
