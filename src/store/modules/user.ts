import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router';
import { store } from '/@/store';
import { accessRoutes, publicRoutes } from '../../router/router.config'
interface IUser {
  id: number,
  name: string,
  roles: string[]
}

type TUser = IUser | null

interface IUserState {
  token: string,
  userInfo: TUser
}

export const userStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: '1e78cd9c-e279-4030-9225-e9eb88f44f50',
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
    async fetchUserInfo() {
      this.setUserInfo({
        id: 1,
        name: 'Reborn',
        roles: ['ANY']
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
