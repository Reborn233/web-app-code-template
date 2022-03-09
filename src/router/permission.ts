/**
 * @name permission
 * @description 全局路由过滤、权限过滤
 */

import { router } from '.';
import { useUserStore } from '/@/store/modules/user';

const permissioStore = useUserStore();

router.beforeEach(async (to: any, _, next) => {
  const hasToken = !!permissioStore.getToken;
  if (hasToken) {
    const userInfo = permissioStore.getUserInfo;
    if (userInfo) {
      next();
    } else {
      await permissioStore.fetchUserInfo();
      next({ ...to, replace: true });
    }
  } else {
    if (to.meta.isWhiteList) {
      console.log('isWhiteList')
      next();
    } else {
      next('/noPermission');
    }
  }
});
