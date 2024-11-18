import * as path from 'path'
import createTDesignPlugin from './web/plugin-tdoc'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const resolvePath = (r) => path.resolve(__dirname, r)

const isCustomElement = (tag) => tag.startsWith('td-')

export default ({ mode }) => {
  return defineConfig({
    base: '/',
    root: '.',
    resolve: {
      alias: {
        '@': resolvePath('../src'),
        '@docs': resolvePath('./docs'),
        'buling-ui': resolvePath('../src/index.ts')
      }
    },
    server: {
      host: '127.0.0.1',
      port: 3000,
      open: '/',
      https: false
    },
    build: {
      outDir: '../_site',
      rollupOptions: {
        input: {
          sites: 'index.html',
          mobile: 'mobile.html'
        }
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement
          }
        }
      }),
      createTDesignPlugin()
    ]
  })
}
