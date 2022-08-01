<template>
  <v-app
    class="d-flex justify-center align-center overflow-hidden"
    style="max-width: 1280px; border-radius: 5px; margin-inline: auto;"
  >
    <v-app-bar
      app
      fixed
      color="black"
      class="white--text"
      max-width="1280"
      width="100%"
      style="left: 50%; transform: translateX(-50%);"
    >
      <v-container fluid class="d-none d-md-flex pa-0" style="height: 100%; width: 100%">
        <navbar-large />
      </v-container>
      <v-container fluid class="d-xs-flex d-md-none pa-0" style="height: 100%; width: 100%">
        <navbar-small />
      </v-container>
    </v-app-bar>
    <v-main class="black pa-0 pt-16">
      <v-container fluid class="pa-0 fill-height overflow-hidden" style="max-width: 1280px">
        <h1 v-if="test">{{ test }}</h1>
        <transition
          :enter-active-class="$route.meta.enterClass"
          :leave-active-class="$route.meta.leaveClass"
        >
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import * as icons from "@/components/icons/footer"
import Navbar from "@/components/navbar"
import "animate.css"


export default {
  name: 'App',
  components: {
    NavbarSmall: Navbar.small,
    NavbarLarge: Navbar.large,
  },
  data() {
    return {
      icons: icons,
      console,
      test: "",
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
  body {
    width: 100%;
    height: 100%;
    background: #00001A;
  }

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

  .router-root {
    position: absolute !important;
    left: 0 !important;
    height: calc(100vh - 64px) !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
</style>