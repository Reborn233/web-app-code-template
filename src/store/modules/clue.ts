import { defineStore } from 'pinia'
import { IClue } from '../../apis/clue/model.d'
import { store } from '/@/store';

type TClue = IClue | null

interface IClueState {
  clue: TClue
}

export const clueStore = defineStore('clue', {
  state: (): IClueState => {
    return {
      clue: null
    }
  },
  getters: {
    getClue(): TClue {
      return this.clue
    }
  },
  actions: {
    setClue(clue: IClue) {
      this.clue = clue
    }
  }
})

export function useClueStore() {
  return clueStore(store)
}
