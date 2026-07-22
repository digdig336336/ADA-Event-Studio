<template>
  <v-container class="pa-8">
    <div v-if="!auctionFinished">
      <h1 class="text-h3 mb-6">
       📦 オークション
      </h1>

          <v-card class="pa-6">
          
             <div class="text-h4">
              {{ items[currentItemIndex].name }}
            </div>

          <div class="text-h2 my-6">
            ¥{{ price }}
          </div>

      <v-row>

        <v-col cols="6" md="3">
          <v-btn
           block
            color="primary"
            @click="addPrice(500)"
          >
           +500
          </v-btn>
        </v-col>

        <v-col cols="6" md="3">
          <v-btn
           block
            color="primary"
            @click="addPrice(1000)"
          >
           +1000
          </v-btn>
        </v-col>

        <v-col cols="6" md="3">
          <v-btn
           block
            color="primary"
            @click="addPrice(5000)"
          >
           +5000
          </v-btn>
        </v-col>

        <v-col cols="6" md="3">
          <v-btn
            block
            color="error"
            @click="sold"
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

const items = [
  {
    name: 'ブセファランドラ',
    startPrice: 10000,
  },
  {
    name: 'アヌビアス・ナナ',
    startPrice: 5000,
  },
  {
    name: 'エキノドルス・ルビン',
    startPrice: 3000,
  },
]

const currentItemIndex = ref(0)

const price = ref(items[currentItemIndex.value].startPrice)

const auctionFinished = ref(false)

function addPrice(amount) {
  price.value += amount
}

function sold() {
  if (currentItemIndex.value < items.length - 1) {

    currentItemIndex.value++
    price.value = items[currentItemIndex.value].startPrice

  } else {

    auctionFinished.value = true

  }
}
</script>