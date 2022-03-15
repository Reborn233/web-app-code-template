import { defineStore } from 'pinia'
import { api_queryDict, IDict } from '/@/apis/index'
import { store } from '/@/store';

type TDict = IDict | null

interface IDictState {
  dict: TDict
}

export const dictStore = defineStore('dict', {
  state: (): IDictState => {
    return {
      dict: null
    }
  },
  getters: {
    getAllDict(): TDict {
      return this.dict
    }
  },
  actions: {
    setDict(dict: IDict) {
      this.dict = dict
    },
    async queryDict() {
      try {
        const _data = await api_queryDict()
        this.setDict(_data)
      } catch (error) {

      }
    },
    getDict(key: number) {
      if (this.dict) {
        const dict = this.dict[key] || []
        return dict.map(d => {
          return {
            label: d.name,
            value: Number(d.code)
          }
        })
      } else {
        return []
      }
    }
  }
})

export function useDictStore() {
  return dictStore(store)
}
