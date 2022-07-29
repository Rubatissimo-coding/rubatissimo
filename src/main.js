import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import * as texts from "@/assets/scripts/texts"

Vue.config.productionTip = false

Vue.prototype.$texts = texts

const obs = Vue.observable({
  lang: "en"
})

Object.defineProperty(Vue.prototype, "$lang", {
  get() {
    return obs.lang
  },
  set(value) {
    obs.lang = value
  }
})

new Vue({
  router,
  vuetify,
  render: function (h) {
    return h(App)
  }
}).$mount("#app")
