<template>
  <v-expansion-panels flat readonly accordion item style="height: 100%" v-model="panel">
    <v-expansion-panel class="d-md-none pa-0 transparent">
      <v-expansion-panel-header style="height: 64px" disabled>
        <div style="width: 36px">
          <v-menu style="border: 1px solid white">
            <template #activator="{on, attrs}">
              <v-btn tile class="transparent px-0" v-on="on" v-bind="attrs" @click="() => {if(panel === 0) togglePanel()}" width="36px" min-width="36px">
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
          <div>
            <v-btn class="home" title="Home" icon :to="{ name: 'home' }" active-class="home-active">
              <v-icon size="48px">$logo</v-icon>
            </v-btn>
          </div>
        <v-spacer></v-spacer>
        <template v-slot:actions>
          <v-icon large v-if="panel === undefined" @click="togglePanel">
            mdi-menu
          </v-icon>
          <v-icon large v-else @click="() => undefined">
            mdi-close
          </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list class="primary py-0">
          <v-list-item v-for="link in $texts.router" :key="link.name" link :to="{name: link.name}" class="pa-0">
            <v-divider></v-divider>
            <v-list-item-content class="justify-center text-h6">
              {{ link[$lang] }}
            </v-list-item-content>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Vue from "vue"
import * as icons from "@/components/icons"

console.log(Vue.prototype)

export default {
  data() {
    return {
      panel: undefined,
      langs: ["en", "fr", "ru"],
      icons
    }
  },
  mounted() {
    window.addEventListener('click', e => {
      if(this.panel === 0) {
        this.togglePanel()
      }
    })
  },
  methods: {
    togglePanel() {
      setTimeout(() => {
        this.panel = this.panel === 0 ? undefined : 0
      }, 100)
    },
  },
  watch: {
    $lang(newVal, oldVal) {
      const indexNewLang = this.langs.indexOf(newVal),
        indexOldLang = this.langs.indexOf(oldVal)
      
      Vue.set(this.langs, indexNewLang, oldVal)
      Vue.set(this.langs, indexOldLang, newVal)
    }
  }
}
</script>

<style lang="scss">
</style>