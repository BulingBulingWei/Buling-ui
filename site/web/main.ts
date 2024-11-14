import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import TDesign from 'tdesign-vue-next'

import 'tdesign-site-components'
import '../styles/style.css'

// 引入组件库的少量全局样式变量
import '../styles/index.css'

const app = createApp(App)

app.use(TDesign).use(router).mount('#app')
