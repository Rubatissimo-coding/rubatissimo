<template>
  <v-container id="home" class="router-root" @wheel.once="handleWheel" @touchstart="handleTouch('start', $event)" @touchend="handleTouch('end', $event)">
    <Canvas />
  </v-container>
</template>

<script>
  import Canvas from "@/components/canvas"

  export default {
    components: {
      Canvas
    },
    data() {
      return {
        beforeY: 0,
        afterY: 0,
      }
    },
    methods: {
      handleWheel(e) {
        if(e.deltaY > 0) {
          this.$router.push("/about")
        }
      },
       handleTouch(type, e) {
        if(type === "start") {
          this.beforeY = e.touches[0].clientY
        } else if(type === "end") {
          this.afterY = e.changedTouches[0].clientY
          if(this.afterY - this.beforeY < 0) {
            this.$router.push("/about")
          }
        }
      }
    }
  }
</script>