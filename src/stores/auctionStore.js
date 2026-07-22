import { defineStore } from 'pinia'

export const useAuctionStore = defineStore('auction', {
  state: () => ({
    items: [],
    currentItemIndex: 0,
    status: 'preparing'
  }),

  getters: {
    currentItem(state) {
      return state.items[state.currentItemIndex] ?? null
    }
  },

  actions: {
    bid(amount) {
      // 後で実装
    },

    sold() {
      // 後で実装
    },

    nextItem() {
      this.currentItemIndex++
    }
  }
})