import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'lib-flexible'
import { store } from './store';
import './router/permission';
import { setupGlobDirectives } from './directives';
import './styles/index.scss'
const app = createApp(App)
setupGlobDirectives(app)
app.use(store)
app.use(router)
app.mount('#app')
