/**
 * @name usePermission
 * @description 处理权限
 */

import intersection from 'lodash-es/intersection';
import { isArray } from '../utils/is';
import { userStore } from '/@/store/modules/user';

export function usePermission() {
  const permissioStore = userStore();

  function hasPermission(value?: string | string[], def = true): boolean {
    // Visible by default
    if (!value) {
      return def;
    }
    console.log(value)

    const roles = permissioStore.userInfo?.privilegeCodes || []
    if (!isArray(value)) {
      return roles.includes(value);
    }

    if (isArray(value)) {
      return intersection(value, roles).length > 0;
    }

    return true;
  }

  return { hasPermission };
}
