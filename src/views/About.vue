<template>
  <div id="about" class="router-root" style="width: 100%; height: 100%">
    <v-container fluid style="height: calc(100% - 96px)">
      About
    </v-container>
    <footerbar />
  </div>
</template>

<script>
  import Footerbar from "@/components/footer"

  export default {
    components: {
      Footerbar
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>