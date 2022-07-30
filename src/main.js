import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import * as texts from "@/assets/scripts/texts"
import * as utils from "@/assets/scripts/utils"

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

let cached_language = localStorage.getItem("language")

if (!cached_language) {
  fetch(
    "https://api.geoapify.com/v1/ipinfo?apiKey=" + process.env.VUE_APP_GEOAPIFY,
    { method: "GET" }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (res) {
      localStorage.setItem(
        "language",
        utils.iso_codes[res.country.iso_code] || "en"
      )
      Vue.prototype.$lang = utils.iso_codes[res.country.iso_code] || "en"
    })
    .catch(err => {
      console.log(err)
      Vue.prototype.$lang = "en"
    })
} else {
  Vue.prototype.$lang = cached_language
}

new Vue({
  router,
  vuetify,
  render: function (h) {
    return h(App)
  }
}).$mount("#app")
