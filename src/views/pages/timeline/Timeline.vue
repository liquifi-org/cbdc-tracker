<template>
  <b-container fluid>
    <template v-if="isMobileScreen">
      <app-title>Timeline</app-title>
      Last update: {{ lastUpdate }}

      <app-card class="m-t-16">
        <SmallBlock :list="list"></SmallBlock>
      </app-card>
    </template>

    <app-card v-if="isTabletScreen">
      <template #header>
        <app-title>Timeline</app-title>
        Last update: {{ lastUpdate }}
      </template>

      <SmallBlock :list="list"></SmallBlock>
    </app-card>

    <app-card v-if="isDesktopScreen">
      <div class="m-b-16">
        <app-title>Timeline</app-title>
        Last update: {{ lastUpdate }}
      </div>

      <app-full-card-block :toBottom="true">
        <BigBlock :list="list"></BigBlock>
      </app-full-card-block>
    </app-card>

    <app-infinite-loading ref="infiniteLoading"
                          @next="onInfiniteLoadingNext">
      <template #spinner>
        <app-show-more-button :isBlock="isMobileScreen"
                              :isLoading="true"
                              class="m-t-16 m-b-16"></app-show-more-button>
      </template>

      <template #fallback>
        <app-show-more-button :isBlock="isMobileScreen"
                              class="m-t-16 m-b-16"
                              text="Show more events"
                              @click="onNextClick"></app-show-more-button>
      </template>
    </app-infinite-loading>
  </b-container>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { SEO_TIMELINE } from '@/constants/seo'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { TIMELINE_PAGE_ACTION_TYPES, TIMELINE_PAGE_MUTATION_TYPES } from '@/store/modules/timelinePage.module'
import SmallBlock from './timeline/small/Block'
import BigBlock from './timeline/big/Block'

export default {
  mixins: [screenSizeMixin],
  components: {
    SmallBlock,
    BigBlock
  },
  metaInfo: {
    title: SEO_TIMELINE.TITLE,
    meta: [
      {
        name: 'description',
        content: SEO_TIMELINE.DESCRIPTION
      },
      {
        name: 'keywords',
        content: SEO_TIMELINE.KEYWORDS
      }
    ]
  },
  computed: {
    ...mapState(MODULE_NAMES.TIMELINE_PAGE, {
      isLoading: (state) => {
        return state.isLoading
      },
      totalElements: (state) => {
        return state.totalElements
      }
    }),
    ...mapGetters(MODULE_NAMES.TIMELINE_PAGE, {
      list: 'listWithTitles',
      lastUpdate: 'lastUpdate'
    }),
    hasMoreItems () {
      return (this.totalElements > this.list.length)
    }
  },
  async mounted () {
    await this.initialize()
  },
  destroyed () {
    this.resetStore()
  },
  methods: {
    ...mapActions(MODULE_NAMES.TIMELINE_PAGE, {
      fetchInfoFieldsMetadata: TIMELINE_PAGE_ACTION_TYPES.FETCH_INFO_FIELDS_METADATA,
      fetchFirstTimeline: TIMELINE_PAGE_ACTION_TYPES.FETCH_FIRST_TIMELINE_PAGE,
      fetchNextTimeline: TIMELINE_PAGE_ACTION_TYPES.FETCH_NEXT_TIMELINE_PAGE
    }),
    ...mapMutations(MODULE_NAMES.TIMELINE_PAGE, {
      resetStore: TIMELINE_PAGE_MUTATION_TYPES.RESET
    }),
    onInfiniteLoadingNext () {
      this.loadNext()
    },
    onNextClick () {
      this.loadNext()
    },
    async initialize () {
      await Promise.all([
        this.fetchInfoFieldsMetadata(),
        this.loadFirst()
      ])
    },
    async refresh () {
      this.resetStore()
      await this.initialize()
    },
    async loadFirst () {
      try {
        this.loadInfiniteLoading()
        await this.fetchFirstTimeline()
        this.hasMoreItems ? this.loadedInfiniteLoading() : this.completeInfiniteLoading()
      } catch (error) {
        this.errorInfiniteLoading()
        throw error
      }
    },
    async loadNext () {
      try {
        this.loadInfiniteLoading()
        await this.fetchNextTimeline()
        this.hasMoreItems ? this.loadedInfiniteLoading() : this.completeInfiniteLoading()
      } catch (error) {
        this.errorInfiniteLoading()
        throw error
      }
    },
    loadInfiniteLoading () {
      this.$refs.infiniteLoading.load()
    },
    loadedInfiniteLoading () {
      this.$refs.infiniteLoading.loaded()
    },
    completeInfiniteLoading () {
      this.$refs.infiniteLoading.complete()
    },
    errorInfiniteLoading () {
      this.$refs.infiniteLoading.error()
    }
  }
}
</script>
