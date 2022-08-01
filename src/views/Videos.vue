<template>
  <div id="videos" class="router-root" style="width: 100%; height: 100%">
    <v-container class="black d-flex justify-center flex-column  pt-0" fluid>
      <v-container v-if="!videoList.length" class="d-flex flex-column align-center justify-center">
        <v-icon size="200px">
          $loader
        </v-icon>
        <span class="text--secondary text-h3">Loading...</span>
      </v-container>
      <v-container v-else class="d-flex justify-center flex-wrap">
        <v-autocomplete
          prepend-inner-icon="mdi-magnify"
          :items="videoList ? videoList.map(video => video.title) : []"
          :label="components.searchbar.label[$lang]"
          color="secondary"
          item-color="secondary"
          clearable
          outlined
          hide-details
          :no-data-text="components.searchbar.noData[$lang]"
          v-model="search"
        />
        <v-expansion-panels class="transparent d-flex align-center justify-center pt-0 pb-6" v-model="expansionPanel">
          <v-expansion-panel class="transparent">
            <v-expansion-panel-header class="transparent" disable-icon-rotate disabled style="cursor: default">
              <template v-slot:actions>
                <v-icon size="30" @click="togglePanel" :title="components.filterBtn.tooltip[$lang]" style="order: 0">
                  mdi-tune
                </v-icon>
              </template>
              <span class="ml-3 font-weight-bold text-uppercase" style="order: 1">{{ components.filterLabel[$lang] }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="transparent px-12 pt-4">
              <v-row>
                <v-col class="text-center" cols="6">
                  <v-autocomplete
                    outlined
                    :label="components.filters.composer.label[$lang]"
                    color="secondary"
                    item-color="secondary"
                    dense
                    clearable
                    hide-details
                    multiple
                    :items="filters.available.composer"
                    v-model="filters.chosen.composer"
                  />
                </v-col>
                <v-col class="text-center" cols="6">
                  <v-autocomplete
                    outlined
                    :label="components.filters.interpreter.label[$lang]"
                    color="secondary"
                    item-color="secondary"
                    dense
                    clearable
                    hide-details
                    multiple
                    :items="filters.available.interpreter"
                    v-model="filters.chosen.interpreter"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="6">
                  <v-autocomplete
                    outlined
                    :label="components.filters.instrumentation.label[$lang]"
                    color="secondary"
                    item-color="secondary"
                    dense
                    clearable
                    hide-details
                    multiple
                    :items="filters.available.instrumentation"
                    v-model="filters.chosen.instrumentation"
                  />
                </v-col>
                <v-col class="text-center" cols="6">
                  <v-autocomplete
                    outlined
                    :label="components.filters.melody.label[$lang]"
                    color="secondary"
                    item-color="secondary"
                    dense
                    clearable
                    hide-details
                    multiple
                    :items="filters.available.melody"
                    v-model="filters.chosen.melody"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-inline">
                  <v-checkbox
                    color="secondary" 
                    v-model="exclusive"
                    persistent-hint
                    :label="components.checkbox.label[$lang]"
                    :hint="components.checkbox.hint[exclusive ? 'active' : 'inactive'][$lang]"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-container v-if="!cutVideoList.length" class="text-center">
          Oops, it seems we couldn't find any video...
        </v-container>
        <v-expansion-panels v-else class="transparent" v-model="tagsPanel">
          <template v-for="video in cutVideoList">
            <div id="cardBounds" :key="video.id" @mouseover="closeTagsPanel">
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
                        {{ components.cards.overlay[$lang] }} <v-icon>mdi-open-in-new</v-icon>
                      </v-overlay>
                    </v-img>
                  </div>
                </v-hover>
                <v-card-title class="d-block text-truncate">
                  <a :href="video.url" class="white--text text-decoration-none">{{ video.title }}</a>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-0">
                  <v-expansion-panel class="transparent">
                    <v-expansion-panel-header class="d-flex justify-center">
                      <div class="text-center">
                        {{ components.cards.tags.label[$lang] }}
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="px-4">
                      <div class="d-flex flex-column" v-for="(value, key) in video.tags" :key="key">
                        <div class="font-weight-bold">{{ components.cards.tags[key][$lang] }}</div>
                        <v-chip
                          v-for="(tag, i) in value"
                          :key="i"
                          outlined
                          pill
                          link
                          :close="filters.chosen[key].includes(tag[$lang])"
                          class="justify-self-center mx-auto my-2"
                          style="width: fit-content"
                          @click="addToFilters(key, tag[$lang])"
                          @click:close="removeFromFilters(key, tag[$lang])"
                        >
                          {{ tag[$lang] }}
                        </v-chip>
                        <v-divider class="mb-2"></v-divider>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-card-text>
              </v-card>
            </div>
          </template>
        </v-expansion-panels>
      </v-container>
    </v-container>
    <v-pagination
      v-model="pagination.currentPage"
      :length="pagination.totalPages"
      color="primary"
    />
    <footerbar />
  </div>
</template>

<script>
  import Footerbar from "@/components/footer"
  import * as utils from "@/assets/scripts/utils"
  import * as texts from "@/assets/scripts/texts"

  export default {
    components: {
      Footerbar,
    },
    data() {
      return {
        exclusive: false,
        videoList: [],
        finalFiltered: [],
        pagination: {
          currentPage: null,
          totalPages: null,
        },
        utils,
        composers: [],
        search: "",
        texts,
        filters: {
          chosen: {
            composer: [],
            interpreter: [],
            instrumentation: [],
            melody: [],
          },
          available: {
            composer: [],
            interpreter: [],
            instrumentation: [],
            melody: [],
          },
        },
        expansionPanel: false,
        tagsPanel: [],
        components: {
          searchbar: texts.videos.searchbar,
          filterLabel: texts.videos.expansionPanel.header.label,
          filterBtn: texts.videos.expansionPanel.header.button,
          checkbox: texts.videos.expansionPanel.content.checkbox,
          filters: {
            composer: texts.videos.expansionPanel.content.autoCompletes.composer,
            interpreter: texts.videos.expansionPanel.content.autoCompletes.interpreter,
            instrumentation: texts.videos.expansionPanel.content.autoCompletes.instrument,
            melody: texts.videos.expansionPanel.content.autoCompletes.melody,
          },
          cards: {
            tags: texts.videos.cards.tags,
            overlay: texts.videos.cards.overlay,
          }
        },
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
      this.getAvailableFilters(this.$lang)
      this.finalFiltered = this.videoList
    },
    methods: {
      togglePanel() {
        this.expansionPanel = this.expansionPanel === 0 ? undefined : 0
      },
      filterEmptyTags(tags) {
        return tags.filter(tag => tag.length > 0)
      },
      closeTagsPanel(e) {
        if(e.target.id === "cardBounds") {
          this.tagsPanel = undefined
        }
      },
      getAvailableFilters(lang) {
        for(let tagName in this.filters.available) {
          this.filters.available[tagName] = []
        }
        for(let video of this.videoList) {
          for(let tagName in video.tags) {
            for(let tag of video.tags[tagName]) {
              if(!this.filters.available[tagName].includes(tag[lang])) {
                this.filters.available[tagName].push(tag[lang])
              }
            }
          }
        }
      },
      updateChosenFilters(oldLang, newLang) {
        for(let tagName in this.filters.chosen) {
          for(let tag of this.filters.chosen[tagName]) {
            this.filters.chosen[tagName] = this.filters.chosen[tagName].filter(t => t !== tag)
            for(let id in utils.tags[utils.tagNames[tagName]]) {
              let chosenTagOldLang = utils.tags[utils.tagNames[tagName]][id][oldLang]
              if(chosenTagOldLang === tag) {
                this.filters.chosen[tagName].push(utils.tags[utils.tagNames[tagName]][id][newLang])
              }
            }
          }
        }
      },
      addToFilters(key, tag) {
        this.filters.chosen[key].push(tag)
      },
      removeFromFilters(key, tag) {
        this.filters.chosen[key] = this.filters.chosen[key].filter(t => t !== tag)
      },
      filterVideos(newChosenFilters, exclusive) {
        if(Object.values(newChosenFilters).every(filter => filter.length === 0)) {
            this.finalFiltered = this.videoList
            return
        }
        this.finalFiltered = this.videoList.filter(video => {
          let matchedCriteria = []
          for(let tagName in newChosenFilters) {
            if(!newChosenFilters[tagName].length) {
              matchedCriteria.push(exclusive ? true : false)
              continue
            }
            newChosenFilters[tagName].forEach(tag => {
              if(video.tags[tagName] && video.tags[tagName].map(t => t[this.$lang]).includes(tag)) {
                matchedCriteria.push(true)
              } else {
                matchedCriteria.push(false)
              }
            })
          }
          return exclusive ? matchedCriteria.every(criteria => !!criteria) : matchedCriteria.some(criteria => !!criteria)
        })
      }
    },
    computed: {
      filteredVideoList() {
        if(this.search) {
          return [this.videoList.find(video => video.title === this.search)]
        }
        if(!this.videoList) return []
        return this.videoList.filter(video => {
          
        })
      },
      cutVideoList() {
        if(!this.finalFiltered.length) return []
        const start = (this.pagination.currentPage - 1) * 12
        const end = start + 12
        return this.finalFiltered.slice(start, end)
      },
    },
    watch: {
      finalFiltered(newList) {
        this.pagination.totalPages = Math.ceil(newList.length / 12)
        this.pagination.currentPage = 1
      },
      search(newVal) {
        if(newVal === null)
          this.finalFiltered = this.videoList
        else
          this.finalFiltered = [this.videoList.find(video => video.title === newVal)]
      },
      $lang(newLang, oldLang) {
        this.getAvailableFilters(newLang)
        this.updateChosenFilters(oldLang, newLang)
      },
      "filters.chosen": {
        handler(newChosenFilters) {
          this.filterVideos(newChosenFilters, this.exclusive)
        },
        deep: true
      },
      exclusive(newVal) {
        this.filterVideos(this.filters.chosen, newVal)
      }
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