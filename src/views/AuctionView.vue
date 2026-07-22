


<template>
  <v-container class="pa-8">
    <div v-if="!auctionFinished">
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
        @click="auctionStore.sold()"
      >
        SOLD
      </v-btn>
    </v-col>

  </v-row>

</v-card>
    </div>

  <div v-else>

    <h1>🎉 オークション終了</h1>

  </div>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuctionStore } from "@/stores/auctionStore"

const auctionStore = useAuctionStore()

const auctionFinished = ref(false)

</script>