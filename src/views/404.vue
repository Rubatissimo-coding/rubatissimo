<template>
  <v-container>
    <v-card class="black d-flex justify-center align-center flex-column ma-6">
      <v-card-title class="text-h2">
        404
      </v-card-title>
      <v-card-subtitle class="text-h4">
        {{ texts.error404.subtitle[$lang] }}
      </v-card-subtitle>
      <v-card-text class="text-h5 text-center">
        {{ texts.error404.text[$lang] }}
      </v-card-text>
      <v-img src="@/assets/images/schubert.png" width="300"></v-img>
      <v-card-text class="text-h5 text-center">
        <router-link class="white--text" :to="{ name: 'home' }">{{ texts.error404.return[$lang].toLowerCase() }}</router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import * as texts from "@/assets/scripts/texts"

export default {
  data() {
    return {
      texts
    }
  }
}
</script>

<style>

</style>