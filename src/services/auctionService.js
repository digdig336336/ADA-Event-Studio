import { db } from "@/firebase/firebase"
import {
  doc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  increment
} from "firebase/firestore"

export async function getAuction() {
  const ref = doc(db, "auctions", "current")

  const snapshot = await getDoc(ref)

  if (!snapshot.exists()) {
    return null
  }

  return snapshot.data()
}

export async function getAuctionItems() {
  const snapshot = await getDocs(collection(db, "auctionItems"))

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

export async function bid(itemId, amount) {

  const ref = doc(db, "auctionItems", itemId)

  await updateDoc(ref, {
    currentPrice: increment(amount)
  })

  // 更新後に読み直す
  const snapshot = await getDoc(ref)

  console.log("更新後", snapshot.data())
}

export function subscribeAuctionItems(callback) {
  return onSnapshot(collection(db, "auctionItems"), (snapshot) => {
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    callback(items)
  })
}



export async function setCurrentPrice(itemId, price) {
  const ref = doc(db, "auctionItems", itemId)

  await updateDoc(ref, {
    currentPrice: price
  })
}