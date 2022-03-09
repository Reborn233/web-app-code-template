import { useMessage } from '/@/hooks/useMessage'
import axios from 'axios'
import { isString } from './is'
import { ResultEnum, ResponseTypeEnum } from '../enums/http-enums'
import { Result } from '/#/axios'
import { useUserStore } from '/@/store/modules/user'
const { Toast } = useMessage()
const userStore = useUserStore()


// 设置http get请求不缓存
axios.defaults.headers.get['Cache-Control'] = 'no-cache'
axios.defaults.headers.get['Pragma'] = 'no-cache'

const http = axios.create({
  baseURL: '/autocloud'
})

/**
 * 拼接
 * @param {String} url 请求路径
 */
function appendToken(url: string | undefined) {
  if (!url || !isString(url)) return url
  if (url.indexOf('?') > -1) {
    url = `${url}&token=${userStore.getToken}`
  }
  else {
    url = `${url}?token=${userStore.getToken}`
  }
  return url
}

// 请求前进行拦截
http.interceptors.request.use(
  config => {
    config.url = appendToken(config.url)
    // 在这里对config进行统一处理
    return config
  },
  error => {
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  res => {
    // 屏蔽导出excel时的错误信息提示，默认resolve
    if (res.config.responseType === ResponseTypeEnum.ARRAYBUFFER || res.config.responseType === ResponseTypeEnum.BLOB) {
      return Promise.resolve(res.data)
    }
    let _data: Result = res.data
    if (_data.code === ResultEnum.SUCCESS) {
      return Promise.resolve(_data.content)
    }
    else {
      Toast.fail(_data.message)
      return Promise.reject(_data.message)
    }
  },
  error => {
    Toast.fail(error.message)
    return Promise.reject(error.message)
  }
)

export default http
