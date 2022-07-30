<template>
  <v-app>
    <v-app-bar
      app
      fixed
      color="black"
      class="white--text"
    >
      <v-container fluid class="d-none d-md-flex pa-0" style="height: 100%; width: 100%">
        <navbar-large />
      </v-container>
      <v-container fluid class="d-xs-flex d-md-none pa-0" style="height: 100%; width: 100%">
        <navbar-small />
      </v-container>
    </v-app-bar>

    <v-main class="black">
      <router-view/>
    </v-main>

    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center black"
      width="100%"
    >
      <v-card-text class="pb-0 d-inline-flex justify-center">
        <template 
          v-for="(icon, i) in icons.footer"
        >
        <span :key="i">
          <v-hover v-slot="{ hover }">
            <div>
              <v-btn
              class="mx-1"
              icon
              >
                <v-icon :title="icon.tooltip" v-if="hover" :size="icon.name === 'youtube' ? '32px' : '24px'">
                  ${{ icon.name }}_color
                </v-icon>
                <v-icon v-else :size="icon.name === 'youtube' ? '32px' : '24px'">
                  ${{ icon.name }}_white
                </v-icon>
              </v-btn>
            </div>
          </v-hover>
        </span>
        </template>
      </v-card-text>
      <v-card-text class="white--text pt-1">
        © Kilian Davies {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue"
import * as icons from "@/components/icons/footer"
import Navbar from "@/components/navbar"

export default {
  name: 'App',
  components: {
    NavbarSmall: Navbar.small,
    NavbarLarge: Navbar.large,
  },
  data() {
    return {
      icons: icons,
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
}
</script>

<style lang="scss">
  .v-toolbar__content, .v-expansion-panel-content__wrap {
    padding: 0;
  }

  .home-active {
    &::before {
      opacity: 0 !important;
    }
  }

  #path110 {
    fill: url(#linear-gradient);
  }

  .home { 
    svg {
      stroke: white;
      stroke-width: 5px;
      stroke-dasharray: 3100;
      stroke-dashoffset: 3100;
      transition: stroke-dashoffset 1s ease-in-out;

      &:hover {
        stroke-dashoffset: 0;
      }
    }
  }
</style>