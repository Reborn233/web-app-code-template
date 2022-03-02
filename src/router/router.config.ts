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
    path: '/goods/:id',
    name: 'goods',
    component: () => import('/@/pages/goods/index.vue'),
    meta: {
      isWhiteList: true
    }
  },
  {
    path: '/subscription/:id',
    name: 'subscription',
    component: () => import('/@/pages/subscription/index.vue'),
    meta: {
      isWhiteList: true
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
