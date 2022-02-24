import type { RouteRecordRaw } from 'vue-router';

export const accessRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('/@/pages/home.vue'),
    meta: {
      isWhiteList: true
    }
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('/@/pages/todos/index.vue'),
    meta: {
      auth: ['ANY']
    }
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('/@/pages/goods/index.vue'),
    meta: {
      auth: ['ANY']
    }
  }
]

export const publicRoutes = [
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('/@/pages/error-page/404.vue'),
  },
]

export default [
  ...publicRoutes,
  ...accessRoutes
]
