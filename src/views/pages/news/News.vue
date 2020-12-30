<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" xxl="9">
        <NewsBlock :newsList="newsList"
                   :totalElements="totalElements"
                   :isLoading="isLoading"
                   :hasFilters="isTabletScreen"
                   @clearFilters="onClearFilters"
                   @showMoreNews="fetchNextNews">
          <template #filters>
            <FiltersContent></FiltersContent>
          </template>

          <template #mobileFilters>
            <MobileFiltersCard class="m-b-16"></MobileFiltersCard>
          </template>
        </NewsBlock>
      </b-col>

      <b-col v-if="isDesktopScreen" cols="12" xxl="3">
        <FiltersCard></FiltersCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewsBlock from '@/components/news/NewsBlock'
import { mapActions, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { NEWS_ACTION_TYPES, NEWS_MUTATION_TYPES } from '@/store/modules/news.module'
import FiltersCard from './filters/Card'
import FiltersContent from './filters/Content'
import MobileFiltersCard from './filters/MobileCard'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  metaInfo: {
    title: 'News',
    titleTemplate: '%s | CBDC tracker',
    meta: [
      {
        name: 'description',
        content: 'Today\'s Central Bank Digital Currencies news'
      }
    ]
  },
  components: {
    NewsBlock,
    FiltersCard,
    MobileFiltersCard,
    FiltersContent
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      newsList: (state) => {
        return state.list
      },
      totalElements: (state) => {
        return state.totalElements
      },
      isLoading: (state) => {
        return state.isLoading
      }
    })
  },
  async created () {
    await Promise.all([
      this.fetchFirstNews(),
      this.fetchTags()
    ])
  },
  destroyed () {
    this.resetNews()
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      fetchFirstNews: NEWS_ACTION_TYPES.FETCH_FIRST_NEWS,
      fetchTags: NEWS_ACTION_TYPES.FETCH_CURRENCIES_TAGS,
      fetchNextNews: NEWS_ACTION_TYPES.FETCH_NEXT_NEWS,
      changeIsSelected: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_TAGS
    }),
    ...mapMutations(MODULE_NAMES.NEWS, {
      resetNews: NEWS_MUTATION_TYPES.RESET
    }),
    onClearFilters () {
      this.changeIsSelected({ selectedCurrencyTags: [] })
    }
  }
}
</script>
