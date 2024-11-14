import { createApp } from 'vue'
import app from './app.vue'
import DemoBlock from './components/demo-block.vue'
import router from './router'
import VConsole from 'vconsole'

import '../../public/styles/reset.css'

import Buling from '@/index'
import '../styles/mobile/index.less'

const vconsole = new VConsole()

createApp(app)
  .use(Buling, { theme: localStorage.getItem('bulingTheme') || 'Blue' })
  .use(router)
  .component('demo-block', DemoBlock)
  .mount('#app')
