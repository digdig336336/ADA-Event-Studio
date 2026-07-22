import { auctionItems } from "@/data/auctionItems"
import { defineStore } from "pinia"

export const useAuctionStore = defineStore("auction", {
  state: () => ({
    items: auctionItems,
    currentItemIndex: 0,
    status: "preparing",
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

    sold(bidder = "") {
      if (!this.currentItem) return

      this.currentItem.soldPrice = this.currentItem.currentPrice
      this.currentItem.bidder = bidder
      this.currentItem.status = "sold"

      this.nextItem()
    },

    nextItem() {
      this.currentItemIndex++
    },
  },
})