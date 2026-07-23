


<template>
  <v-container class="pa-8">
    <div v-if="auctionStore.status !== 'finished'">
      <h1 class="text-h3 mb-6">
       📦 オークション
      </h1>

<v-card class="pa-6">

  <template v-if="auctionStore.currentItem">

    <div class="text-h4">
      {{ auctionStore.currentItem.name }}
    </div>

    <div class="text-h2 my-6">
      ¥{{ auctionStore.currentItem.currentPrice }}
    </div>

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
        +1000
      </v-btn>
    </v-col>

    <v-col cols="6" md="3">
      <v-btn
        block
        color="primary"
        @click="auctionStore.bid(5000)"
      >
        +5000
      </v-btn>
    </v-col>

    <v-col cols="6" md="3">
      <v-btn
  block
  color="error"
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
import { ref } from "vue"
import { useAuctionStore } from "@/stores/auctionStore"

const auctionStore = useAuctionStore()

const dialog = ref(false)
const bidderName = ref("")

function saveSold() {

  auctionStore.sold(bidderName.value)

  bidderName.value = ""

  dialog.value = false

}
</script>