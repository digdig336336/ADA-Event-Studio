import { auctionItems } from "@/data/auctionItems"
import { defineStore } from "pinia"

export const useAuctionStore = defineStore("auction", {
  state: () => ({
  items: auctionItems,
  currentItemIndex: 0,
  status: "running",

  undoStack: []
}),

  getters: {
    currentItem(state) {
      return state.items[state.currentItemIndex] ?? null
    },
    currentItemNumber(state) {
      return state.currentItemIndex + 1
    },

    totalItems(state) {
      return state.items.length
    },

    remainingItems(state) {
      return state.items.length - state.currentItemIndex - 1
    } ,
      canUndo(state) {
  return state.undoStack.length > 0
},

    
  },

  actions: {

    setItems(items) {
        this.items = items
      },

    bid(amount) {
       if (!this.currentItem) return

      this.saveUndoState()

      this.currentItem.currentPrice += amount
      },

    setPrice(price) {
  if (!this.currentItem) return

  this.saveUndoState()

  this.currentItem.currentPrice = price
},

    sold(bidder = "") {

  this.saveUndoState()

  console.log("保存", this.undoStack)

  this.currentItem.status = "sold"
  this.currentItem.bidder = bidder
  this.currentItem.soldPrice = this.currentItem.currentPrice

  this.nextItem()
},

    nextItem() {
  if (this.currentItemIndex < this.items.length - 1) {
    this.currentItemIndex++
  } else {
    this.status = "finished"
  }
},
undo() {

  console.log("UNDO開始")

  if (this.undoStack.length === 0) {
    console.log("履歴なし")
    return
  }

  const last = this.undoStack.pop()

  this.items = last.items
  this.currentItemIndex = last.currentItemIndex
  this.status = last.status

  console.log("UNDO完了")
},

saveUndoState() {
  this.undoStack.push({
    items: this.items.map(item => ({ ...item })),
    currentItemIndex: this.currentItemIndex,
    status: this.status
  })

  console.log("UNDO保存")
},
  },
})