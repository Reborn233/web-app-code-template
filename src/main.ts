import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'amfe-flexible/index'
import { store } from './store';
import './router/permission';
import { setupGlobDirectives } from './directives';
import './styles/index.scss'
const app = createApp(App)
setupGlobDirectives(app)

// import '../mock/index'


app.use(store)
app.use(router)
app.mount('#app')
