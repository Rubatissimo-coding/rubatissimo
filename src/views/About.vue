<template>
  <div id="about" class="router-root" style="width: 100%; height: 100%">
    <v-container fluid style="height: calc(100% - 96px)" @wheel.once="handleWheel" @touchstart="handleTouch('start', $event)" @touchend="handleTouch('end', $event)">
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
      return {
        beforeY: 0,
        afterY: 0,
      }
    },
    methods: {
      handleWheel(e) {
        if(e.deltaY < 0) {
          this.$router.push("/home")
        }
      },
      handleTouch(type, e) {
        if(type === "start") {
          this.beforeY = e.touches[0].clientY
        } else if(type === "end") {
          this.afterY = e.changedTouches[0].clientY
          if(this.afterY - this.beforeY > 0) {
            this.$router.push("/home")
          }
        }
      }
    }
  }
</script>