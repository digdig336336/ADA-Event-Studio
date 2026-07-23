

<template>
  <v-container class="pa-8">
    <div v-if="auctionStore.status !== 'finished'">
      <v-row class="mb-4" align="center">

  <v-col>
    <h1 class="text-h3">
      📦 オークション
    </h1>
  </v-col>

  <v-col class="text-right">

    <div class="text-h6">
      商品 {{ auctionStore.currentItemNumber }} /
      {{ auctionStore.totalItems }}
    </div>

    <div class="text-subtitle-1">
      残り {{ auctionStore.remainingItems }} 件
    </div>

  </v-col>

</v-row>

<v-card class="pa-6">

  <template v-if="auctionStore.currentItem">

    <div class="text-h4">
      {{ auctionStore.currentItem.name }}
    </div>

    <div class="text-h2 my-6">
      ¥{{ auctionStore.currentItem?.currentPrice?.toLocaleString?.() ?? "価格なし" }}
    </div>
<v-row class="my-4">
  <v-col cols="8">
    <v-text-field
       ref="priceField"
      v-model="inputPrice"
      label="価格を入力"
      type="text"
      hide-details
      @keyup.enter="setPrice"
    />
  </v-col>

  <v-col cols="4">
    <v-btn
      block
      color="secondary"
      @click="setPrice"
    >
      設定
    </v-btn>
  </v-col>
</v-row>

  </template>

  <v-row>

    <v-col cols="6" md="3">
      <v-btn
        block
        color="primary"
        @click="auctionStore.bid(500)"
      >
        +500
      </v-btn>
    </v-col>

    <v-col cols="6" md="3">
      <v-btn
        block
        color="primary"
        @click="auctionStore.bid(1000)"
      >
        +1,000
      </v-btn>
    </v-col>

    <v-col cols="6" md="3">
      <v-btn
        block
        color="primary"
        @click="auctionStore.bid(5000)"
      >
        +5,000
      </v-btn>
    </v-col>
</v-row>
  <v-row class="mt-4">

  <v-col cols="6">
    <v-btn
  block
  color="warning"
  prepend-icon="mdi-undo"
  :disabled="false"
  @click="testUndo"
>
  UNDO
</v-btn>
  </v-col>

  <v-col cols="6">
    <v-btn
      block
      color="error"
      prepend-icon="mdi-gavel"
      @click="dialog = true"
    >
      SOLD
    </v-btn>
  </v-col>

</v-row>
</v-card>

<v-dialog v-model="dialog" max-width="500">
  <v-card>

    <v-card-title>
      落札者名
    </v-card-title>

    <v-card-text>

      <v-text-field
        v-model="bidderName"
        label="落札者名"
      />

    </v-card-text>

    <v-card-actions>

      <v-spacer />

      <v-btn
        @click="dialog = false"
      >
        キャンセル
      </v-btn>

      <v-btn
        color="primary"
        @click="saveSold"
      >
        保存
      </v-btn>

    </v-card-actions>

  </v-card>
</v-dialog>


    </div>

  <div v-else>

    <h1>🎉 オークション終了</h1>

  </div>

  </v-container>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue"
import { getAuction } from "@/services/auctionService"
import { useAuctionStore } from "@/stores/auctionStore"
import { getAuctionItems } from "@/services/auctionService"


const auctionStore = useAuctionStore()

onMounted(async () => {
  const items = await getAuctionItems()

  console.log("Firestore:", items)

  auctionStore.setItems(items)

  console.log("Store:", auctionStore.items)
  console.log("Current:", auctionStore.currentItem)
})

const inputPrice = ref("")
const priceField = ref(null)



const dialog = ref(false)
const bidderName = ref("")





async function setPrice() {
  const price = Number(inputPrice.value)

  if (isNaN(price) || price < 0) return

  auctionStore.setPrice(price)

  inputPrice.value = ""

  await nextTick()

  priceField.value.focus()
}

function saveSold() {

  auctionStore.sold(bidderName.value)

  bidderName.value = ""

  dialog.value = false

}

function testUndo() {
  console.log("UNDOボタンが押された")
  console.log(typeof auctionStore.undo)

  auctionStore.undo()
}



</script>