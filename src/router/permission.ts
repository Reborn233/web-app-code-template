/**
 * @name permission
 * @description 全局路由过滤、权限过滤
 */

import { isWxWork } from '../utils/navigator'
import { router } from './index'
import { useUserStore } from '/@/store/modules/user'

router.beforeEach(async (to: any, _, next) => {
  if (!isWxWork()) {
    if (to.name === 'error') {
      next()
    }
    else {
      next({
        name: 'error',
        query: {
          message: '请在企业微信中打开'
        }
      })
    }
  } else {
    const permissioStore = useUserStore()
    const hasToken = !!permissioStore.getToken
    if (hasToken) {
      const userInfo = permissioStore.getUserInfo
      if (userInfo) {
        next()
      } else {
        await permissioStore.fetchUserInfo()
        next({ ...to, replace: true })
      }
    } else {
      if (to.meta.isWhiteList) {
        next()
      } else {
        next('/noPermission')
      }
    }
  }

})
