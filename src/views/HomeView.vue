<template>
  <v-container class="pa-8">

    <h1 class="text-h3 mb-8">
      ADA Event Studio
    </h1>

    <v-row>

      <v-col cols="12" md="6">
        <v-btn
          block
          color="primary"
          size="x-large"
          @click="goAuction"
        >
          📦 オークション
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-btn
          block
          color="secondary"
          size="x-large"
        >
          🎁 抽選
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-btn
          block
          color="success"
          size="x-large"
        >
          🏆 表彰
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-btn
          block
          color="grey"
          size="x-large"
        >
          ⚙ 設定
        </v-btn>
      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goAuction() {
  router.push('/auction')
}
</script>