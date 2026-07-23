import { defineStore } from 'pinia'

export const useAuctionStore = defineStore('auction', {
  state: () => ({
    status: 'preparing',
    currentItemIndex: 0,
    items: [
      {
        id: 1,
        number: 1,
        name: 'ADA ソーラーRGBⅡ',
        startPrice: 1000,
        currentPrice: 1000,
        soldPrice: null,
        bidder: '',
        status: 'waiting'
      }
    ]
  }),

  getters: {
    currentItem(state) {
      return state.items[state.currentItemIndex] ?? null
    }
  },

  actions: {
    bid(amount) {
      if (!this.currentItem) return
      this.currentItem.currentPrice += amount
    },

    setPrice(price) {
      if (!this.currentItem) return
      this.currentItem.currentPrice = price
    },

    sold(bidder = '') {
      if (!this.currentItem) return

      this.currentItem.soldPrice = this.currentItem.currentPrice
      this.currentItem.bidder = bidder
      this.currentItem.status = 'sold'
    },

    nextItem() {
      if (this.currentItemIndex < this.items.length - 1) {
        this.currentItemIndex++
      } else {
        this.status = 'finished'
      }
    }
  }
})