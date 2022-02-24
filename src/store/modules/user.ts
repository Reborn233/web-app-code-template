import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      token: 'sadkakldjla',
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
