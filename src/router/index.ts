import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('/@/pages/todos/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('/@/pages/about.vue'),
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('/@/pages/goods/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
