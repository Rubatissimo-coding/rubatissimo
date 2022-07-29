import bmcWhite from "./bmc-white.vue"
import bmcColor from "./bmc-color.vue"
import discordWhite from "./discord-white.vue"
import dicordColor from "./discord-color.vue"
import mailWhite from "./mail-white.vue"
import mailColor from "./mail-color.vue"
import youtubeWhite from "./youtube-white.vue"
import youtubeColor from "./youtube-color.vue"

export const footer = {
  bmc: {
    name: "bmc",
    tooltip: "Buy me a coffee",
    white: bmcWhite,
    color: bmcColor
  },
  discord: {
    name: "discord",
    tooltip: "Discord",
    white: discordWhite,
    color: dicordColor
  },
  mail: {
    name: "mail",
    tooltip: "Email",
    white: mailWhite,
    color: mailColor
  },
  youtube: {
    name: "youtube",
    tooltip: "Youtube",
    white: youtubeWhite,
    color: youtubeColor
  }
}
