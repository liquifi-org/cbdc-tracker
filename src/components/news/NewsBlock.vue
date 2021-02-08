<template>
  <div>
    <app-list-card v-if="!isMobileScreen"
                   :items="newsList"
                   :totalItemsCount="totalElements"
                   :isLoading="isLoading"
                   :showMoreButtonText="showMoreButtonText"
                   @showMore="onShowMore">
      <template #header>
        <div class="d-flex justify-content-between align-items-top">
          <div>
            <app-title>News</app-title>
            Sorted by date
          </div>

          <div v-if="hasFilters">
            <app-clear-button v-if="isFiltersExpanded"
                              class="m-r-32"
                              :disabled="isLoading"
                              text="Clear filtering"
                              @click="onClearFilters"></app-clear-button>

            <app-collapse-button :target="'filters' + componentId"
                                 collapseText="Hide filters"
                                 expandText="Show filters"
                                 @toggle=onToggleFilters></app-collapse-button>
          </div>
        </div>

        <app-collapse-block v-if="hasFilters"
                            class="m-t-16 m-b-16"
                            :id="'filters' + componentId">
          <app-card-line class="m-b-16"></app-card-line>
          <slot name="filters"></slot>
        </app-collapse-block>
      </template>

      <template v-slot:item="{ item }">
        <NewsItem :adaptiveType="newsItemAdaptiveType" :data="item"></NewsItem>
      </template>
    </app-list-card>

    <div v-if="isMobileScreen">
      <header class="m-b-16">
        <app-title>News</app-title>
        Sorted by date
      </header>

      <slot name="mobileFilters"></slot>

      <app-card-list :items="newsList"
                     :totalItemsCount="totalElements"
                     :isLoading="isLoading"
                     :showMoreButtonText="showMoreButtonText"
                     @showMore="onShowMore">
        <template v-slot:item="{ item }">
          <NewsItem ref="items" :adaptiveType="NEWS_ITEM_ADAPTIVE_TYPE.MOBILE" :data="item"></NewsItem>
        </template>
      </app-card-list>
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/news/NewsItem'
import { RESIZE_EVENT_NAME, ResizeEventEmitter } from '@/utils/EventEmitters/resizeEventEmitter'
import { NEWS_ITEM_ADAPTIVE_TYPE } from './constants'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    NewsItem
  },
  props: {
    newsList: Array,
    totalElements: Number,
    isLoading: Boolean,
    hasFilters: Boolean
  },
  data () {
    return {
      newsItemAdaptiveType: NEWS_ITEM_ADAPTIVE_TYPE.DESKTOP,
      NEWS_ITEM_ADAPTIVE_TYPE,
      showMoreButtonText: 'Show more news',
      isFiltersExpanded: false
    }
  },
  mounted () {
    this.resizeEventEmitter = new ResizeEventEmitter(this.$el)
    this.$el.addEventListener(RESIZE_EVENT_NAME, this.onResizeEvent.bind(this))
  },
  destroyed () {
    this.resizeEventEmitter && this.resizeEventEmitter.destroy()
  },
  methods: {
    onShowMore () {
      this.$emit('showMoreNews')
    },
    onResizeEvent (event) {
      const newWidth = event.detail.newWidth
      this.newsItemAdaptiveType = (newWidth > 650) ? NEWS_ITEM_ADAPTIVE_TYPE.DESKTOP : NEWS_ITEM_ADAPTIVE_TYPE.TABLET
    },
    onClearFilters () {
      this.$emit('clearFilters')
    },
    onToggleFilters (isExpanded) {
      this.isFiltersExpanded = isExpanded
    }
  }
}
</script>
