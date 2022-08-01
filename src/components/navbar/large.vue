<template>
  <div class="d-flex px-6 py-4 align-center" style="width: 100%">
    <div style="width: 72px">
      <v-menu style="border: 1px solid white">
        <template #activator="{on, attrs}">
          <v-btn tile class="transparent px-0" v-on="on" v-bind="attrs" width="36px" min-width="36px">
            <v-icon>$flag_{{ $lang }}</v-icon>
          </v-btn>
        </template>
        <v-list tile class="transparent pa-0">
          <v-list-item v-for="lang in langs" :key="lang" class="pa-0 justify-center pa-0" link @click="$lang = lang" style="min-height: 36px; background: rgba(255, 255, 255, 0.2)">
            <v-icon>$flag_{{ lang }}</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'home' }" active-class="home-active" icon class="transparent home">
      <v-icon size="48px">$logo</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div>
      <v-tabs background-color="transparent" color="secondary">
        <v-tab v-for="link in $texts.router" :key="link.name" :to="{ name: link.name }">
          {{ link[$lang] }}
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import * as icons from "@/components/icons"

export default {
  data() {
    return {
      langs: ["en", "fr", "ru"],
      icons
    }
  },
  beforeMount() {
    if(this.$lang !== "en") {
      const indexLang = this.langs.indexOf(this.$lang),
      indexEn = this.langs.indexOf("en")

      Vue.set(this.langs, indexEn, this.$lang)
      Vue.set(this.langs, indexLang, "en")
    }
  },
  watch: {
    $lang(newVal, oldVal) {
      const indexNewLang = this.langs.indexOf(newVal),
        indexOldLang = this.langs.indexOf(oldVal)
      
      Vue.set(this.langs, indexNewLang, oldVal)
      Vue.set(this.langs, indexOldLang, newVal)
    }
  },
}
</script>

<style scoped lang="scss">
</style>