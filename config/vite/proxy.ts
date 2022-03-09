/**
 * Generate proxy
 */

import {
  API_BASE_URL,
  API_TARGET_URL
} from '../index'
import { ProxyOptions } from 'vite'

type ProxyTargetList = Record<string, ProxyOptions>;

const ret: ProxyTargetList = {
  // test
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true
  }
};

export default ret;
