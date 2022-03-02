/**
 * @name permission
 * @description 全局路由过滤、权限过滤
 */

import { router } from '.';
// import { userStoreWithOut } from '/@/store/modules/user';

// const permissioStore = userStoreWithOut();

router.beforeEach(async (to: any, _, next) => {
  next()
  // const hasToken = permissioStore.getToken;
  // if (hasToken) {
  //   if (to.path === '/') {
  //     next();
  //   } else {
  //     const userInfo = permissioStore.getUserInfo;
  //     if (userInfo) {
  //       next();
  //     } else {
  //       await permissioStore.fetchUserInfo();
  //       next({ ...to, replace: true });
  //     }
  //   }
  // } else {
  //   if (to.meta.isWhiteList) {
  //     next();
  //   } else {
  //     next('/home');
  //   }
  // }
});
