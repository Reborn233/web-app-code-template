import { api_getUserInfo, IUser, api_getTokenByQYWX } from './../../apis/index';
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router';
import { store } from '/@/store';
import { accessRoutes, publicRoutes } from '../../router/router.config'

type TUser = IUser | null

interface IUserState {
  token: string,
  userInfo: TUser
}

export const userStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: '8066fdcc-596b-4fd4-a6a9-d3a253003381',
      userInfo: null
    }
  },
  getters: {
    getUserInfo(): TUser {
      return this.userInfo
    },
    getToken(): string {
      return this.token
    }
  },
  actions: {
    setUserInfo(info: IUser) {
      this.userInfo = info
    },
    setToken(token: string) {
      this.token = token
    },
    fetchUserInfo() {
      return new Promise<IUser>(async (resolve, reject) => {
        try {
          const _data = await api_getUserInfo()
          this.setUserInfo(_data)
          resolve(_data)
        } catch (error) {
          reject(error)
        }
      })
    },
    authLogin(code: string, appid: string) {
      return new Promise<string>(async (resolve, reject) => {
        try {
          const _data = await api_getTokenByQYWX(code, appid)
          this.setToken(_data)
          resolve(_data)
        } catch (error) {
          reject(error)
        }
      })
    },
    async buildRoutesAction(): Promise<RouteRecordRaw[]> {
      let routes: RouteRecordRaw[] = [...accessRoutes, ...publicRoutes]

      return routes
    }
  }
})

export function useUserStore() {
  return userStore(store)
}
