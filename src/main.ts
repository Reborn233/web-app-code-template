import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import VantComponents from './configs/vant'
import { createPinia } from 'pinia'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)
// 按需引入Vant组件
Object.values(VantComponents).forEach(comp => {
  app.use(comp)
})

app.use(pinia)
app.use(router)
app.mount('#app')
