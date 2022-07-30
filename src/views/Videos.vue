<template>
  <div id="videos" class="router-root" style="width: 100%; height: 100%">
    <v-container class="black d-flex justify-center flex-column" fluid>
      <v-container>
        <v-autocomplete
          prepend-inner-icon="mdi-magnify"
          :items="videoList ? videoList.map(video => video.title) : []"
          label="Search for a video"
          color="secondary"
          clearable
          outlined
          hide-details
          no-data-text="No videos found"
          class="ma-4 mt-0"
          v-model="search"
        />
        <span>
          Filter by composer : 
          <v-chip-group
            v-model="composers"
            color="secondary"
            multiple
          >
            <v-chip
              v-for="(composer, key) in utils.composers"
              :key="key"
              :value="key"
              outlined
              filter
            >
              {{ composer }}
            </v-chip>
          </v-chip-group>
        </span>
      </v-container>
      <v-container v-if="!videoList" class="d-flex flex-column align-center justify-center">
        <v-icon size="200px">
          $loader
        </v-icon>
        <span class="text--secondary text-h3">Loading...</span>
      </v-container>
      <v-container v-else class="d-flex justify-center flex-wrap">
        <template v-for="video in cutVideoList">
          <div :key="video.id">
              <v-card width="320" class="ma-2 primary_darken" :title="video.title">
                <v-hover v-slot="{ hover }">
                  <div class="overflow-hidden">
                    <v-img
                      aspect-ratio="16/9"
                      :src="video.thumbnail"
                      width="320"
                      min-height="180"
                      :style="`cursor: pointer; transition: transform 0.5s; transform: ${hover ? 'scale(1.1)' : 'scale(1)'}`"
                    >
                      <v-overlay :value="hover" absolute @click="utils.open(video.url)">
                        Open on Youtube <v-icon>mdi-open-in-new</v-icon>
                      </v-overlay>
                    </v-img>
                  </div>
                </v-hover>
                <v-card-title class="d-block text-truncate">
                  <a :href="video.url" class="white--text text-decoration-none">{{ video.title }}</a>
                </v-card-title>
                <v-card-text>
                  Composed by
                  <v-chip
                    link
                    ripple
                    @click="video.composedBy in composers ? null : composers = [...composers, video.composedBy]"
                  >
                    {{ utils.composers[video.composedBy] }}
                  </v-chip>
                </v-card-text>
            </v-card>
          </div>
        </template>
      </v-container>
      <v-pagination
        v-model="pagination.currentPage"
        :length="pagination.totalPages"
        color="primary"
      />
    </v-container>
    <footerbar />
  </div>
</template>

<script>
  import Footerbar from "@/components/footer"
  import * as utils from "@/assets/scripts/utils"

  export default {
    components: {
    Footerbar,
},
    data() {
      return {
        videoList: null,
        pagination: {
          currentPage: null,
          totalPages: null,
        },
        utils,
        composers: [],
        search: "",
      }
    },
    mounted() {
      let videosInStorage = localStorage.getItem("videos")
        if(videosInStorage && (new Date().getTime() - localStorage.getItem("videos-last-updated")) < (1000 * 60 * 60 * 24)) {
          this.videoList = JSON.parse(videosInStorage)
      } else {
        utils.getData().then(videosData => {
          this.videoList = videosData
          localStorage.setItem("videos", JSON.stringify(videosData))
          localStorage.setItem("videos-last-updated", new Date().getTime())
        })
      }
    },
    methods: {},
    computed: {
      filteredVideoList() {
        if(this.search) {
          return [this.videoList.find(video => video.title === this.search)]
        }
        if(!this.videoList) return []
        return this.videoList.filter(video => {
          if(this.composers.length > 0) {
            return this.composers.includes(video.composedBy)
          }
          return true
        })
      },
      cutVideoList() {
        if(!this.filteredVideoList) return null
        const start = (this.pagination.currentPage - 1) * 12
        const end = start + 12
        return this.filteredVideoList.slice(start, end)
      },
      imagesOptions() {
        let obj = {}
        for(let video of this.videoList) {
          obj[video.id] = {
            width: 320,
            showOverlay: false,
          }
        }
      }
    },
    watch: {
      filteredVideoList(newList) {
        this.pagination.totalPages = Math.ceil(newList.length / 12)
        this.pagination.currentPage = 1
      },
    },
  }
</script>

<style lang="scss" scoped>
  .v-image__image.v-image__image--cover {
    &:hover {
      transform: scale(1.2) !important;
    }
  }
</style>