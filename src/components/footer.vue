<template>
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
</template>

<script>
import * as icons from "@/components/icons"

export default {
  data() {
    return {
      icons
    }
  }
}
</script>

<style>

</style>