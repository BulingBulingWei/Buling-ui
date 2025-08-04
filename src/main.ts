import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import buling from '../src/index'
import TDesign from 'tdesign-vue-next'

import 'tdesign-site-components'

const app = createApp(App)

// buling.install(app)

app.use(TDesign).use(buling).mount('#app')
