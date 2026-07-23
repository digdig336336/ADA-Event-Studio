import { db } from "@/firebase/firebase"
import { doc, getDoc, collection, getDocs } from "firebase/firestore"

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