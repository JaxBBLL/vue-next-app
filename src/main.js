import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.less'
import plugin from '@/plugins/index'

createApp(App)
  .use(store)
  .use(router)
  .use(plugin)
  .mount('#app')
