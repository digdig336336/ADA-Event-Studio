<template>
  <v-container class="pa-8">
    <h1 class="text-h3 mb-6">
      📦 オークション
    </h1>

    <v-card class="pa-6">
      <div class="text-h5">
        商品名
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
          <v-btn block color="error">
            SOLD
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const price = ref(10000)

function addPrice(amount) {
  price.value += amount
}
</script>