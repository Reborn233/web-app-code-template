import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import { createPinia } from 'pinia'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
