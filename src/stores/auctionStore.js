import { auctionItems } from "@/data/auctionItems"
import { defineStore } from "pinia"

export const useAuctionStore = defineStore("auction", {
  state: () => ({
  items: auctionItems,
  currentItemIndex: 0,
  status: "running",
}),

  getters: {
    currentItem(state) {
      return state.items[state.currentItemIndex] ?? null
    },
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
      this.currentItem.status = "sold"

      this.nextItem()
    },

    nextItem() {
  if (this.currentItemIndex < this.items.length - 1) {
    this.currentItemIndex++
  } else {
    this.status = "finished"
  }
}
  },
})