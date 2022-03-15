import type { RouteRecordRaw } from 'vue-router';

export const accessRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/message',
    component: () => import('/@/pages/layout/tabbar-view.vue'),
    meta: {
      roles: ['ANY']
    },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('/@/pages/message/index.vue'),
        meta: {
          roles: ['ANY']
        }
      },
      {
        path: 'clue',
        name: 'clue',
        component: () => import('/@/pages/clue/index.vue'),
        meta: {
          roles: ['ANY']
        }
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('/@/pages/statistics/index.vue'),
        meta: {
          roles: ['ANY']
        }
      }
    ]
  },
  {
    path: '/clue/:id',
    name: 'clueDetail',
    component: () => import('/@/pages/clue/detail.vue'),
    meta: {
      roles: ['ANY']
    }
  }
]

export const publicRoutes = [
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
  {
    path: '/404',
    component: () => import('/@/pages/error-page/404.vue'),
    meta: {
      isWhiteList: true
    }
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('/@/pages/error-page/index.vue'),
    meta: {
      isWhiteList: true
    }
  },
  {
    path: '/noPermission',
    component: () => import('/@/pages/error-page/no-permission.vue'),
    meta: {
      isWhiteList: true
    }
  }
]

export default [
  ...publicRoutes,
  ...accessRoutes
]
