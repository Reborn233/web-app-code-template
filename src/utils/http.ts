import { useMessage } from '/@/hooks/useMessage';
import axios from 'axios'
import { isString } from './is'
import { ResultEnum, ResponseTypeEnum } from '../enums/http-enums'
import { Result } from '/#/axios'
import qs from 'qs'
const { Toast } = useMessage()


// 设置http get请求不缓存
axios.defaults.headers.get['Cache-Control'] = 'no-cache'
axios.defaults.headers.get['Pragma'] = 'no-cache'

const http = axios.create()

/**
 * 拼接
 * @param {String} url 请求路径
 */
function appendToken(url: string | undefined) {
  if (!url || !isString(url)) return url
  if (url.indexOf('?') > -1) {
    url = `${url}&_=${+new Date()}`
  }
  else {
    url = `${url}?_=${+new Date()}`
  }
  return url
}

// 请求前进行拦截
http.interceptors.request.use(
  config => {
    // req.url = appendToken(req.url)
    // 在这里对config进行统一处理
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
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
    if (_data.code === ResultEnum.SUCCESS && _data.data.gateReturnType === ResultEnum.GATE_SUCCESS) {
      return Promise.resolve(_data.data)
    }
    else {
      if (_data.code !== ResultEnum.SUCCESS) {
        Toast.fail(_data.message)
        return Promise.reject(_data.message)
      }
      if (_data.data.gateReturnType !== ResultEnum.GATE_SUCCESS) {
        Toast.fail(_data.data.gateReturnMessage)
        return Promise.reject(_data.data.gateReturnMessage)
      }
    }
  },
  error => {
    Toast.fail(error.message)
    return Promise.reject(error.message)
  }
)

export default http
