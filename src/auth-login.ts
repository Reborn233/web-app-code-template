import { useUserStore } from '/@/store/modules/user'
import { getUrlParams } from './utils/common'

export const init = async () => {
  const { authLogin } = useUserStore()
  try {
    const params = getUrlParams()
    if (params.code) {
      const appid = params.state.slice(0, params.state.indexOf('#'))
      await authLogin(params.code, appid)
    }
  } catch (error) {

  }
}
