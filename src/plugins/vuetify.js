import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import * as icons from "@/components/icons"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        white: "#E5E5FF",
        black: "#00001A",

        primary: "#2A2875",
        secondary: "#FFE399",
        neutral: "#2A2874",

        primary_lighten: "#4844BF",
        primary_darken: "#0F0E29",

        secondary_lighten: "#FFD051",
        secondary_darken: "#FFC938",

        neutral_lighten: "#4442BC",
        neutral_darken: "#1B1A4B"
      }
    }
  },
  icons: {
    values: {
      flag_fr: {
        component: icons.fr
      },
      flag_en: {
        component: icons.en
      },
      flag_ru: {
        component: icons.ru
      },
      logo: {
        component: icons.logo.image
      },
      loader: {
        component: icons.logo.loader
      },
      bmc_white: {
        component: icons.footer.bmc.white
      },
      bmc_color: {
        component: icons.footer.bmc.color
      },
      discord_white: {
        component: icons.footer.discord.white
      },
      discord_color: {
        component: icons.footer.discord.color
      },
      mail_white: {
        component: icons.footer.mail.white
      },
      mail_color: {
        component: icons.footer.mail.color
      },
      youtube_white: {
        component: icons.footer.youtube.white
      },
      youtube_color: {
        component: icons.footer.youtube.color
      }
    }
  }
})
