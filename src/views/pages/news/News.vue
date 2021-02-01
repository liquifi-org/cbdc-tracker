<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" xxl="10">
        <NewsBlock :newsList="newsList"
                   :totalElements="totalElements"
                   :isLoading="isLoading"
                   :hasFilters="isTabletScreen"
                   @clearFilters="onClearFiltersClick"
                   @showMoreNews="fetchNextNews">
          <template #filters>
            <FiltersContent ref="tabletFiltersContent"
                            :currencyFieldName="TAG_FIELD_NAMES.CURRENCY"
                            :countriesWithCurrencies="countriesWithCurrencies"
                            :currencyNames="currencyNames"
                            :filters="filters"
                            @change="changeStateFilters"
                            fieldCols="6"></FiltersContent>
          </template>

          <template #mobileFilters>
            <FiltersCard class="m-b-16"></FiltersCard>
          </template>
        </NewsBlock>
      </b-col>

      <b-col v-if="isDesktopScreen" cols="2">
        <FiltersCard></FiltersCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewsBlock from '@/components/news/NewsBlock'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import FiltersCard from './filters/Card'
import FiltersContent from '@/components/filters/Content'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { REPLACE_OG_TWITTER_NEWS, SEO_NEWS } from '@/constants/seo'
import { NEWS_MUTATION_TYPES } from '@/store/modules/news/mutations'
import { NEWS_ACTION_TYPES } from '@/store/modules/news/actions'
import { TAG_FIELD_NAMES } from '@/constants/tags'

export default {
  mixins: [screenSizeMixin],
  metaInfo: {
    title: SEO_NEWS.TITLE,
    meta: [
      {
        name: 'description',
        content: SEO_NEWS.DESCRIPTION
      },
      {
        name: 'keywords',
        content: SEO_NEWS.KEYWORDS
      },
      ...REPLACE_OG_TWITTER_NEWS
    ]
  },
  components: {
    NewsBlock,
    FiltersCard,
    FiltersContent
  },
  data () {
    return {
      TAG_FIELD_NAMES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      newsList: (state) => {
        return state.list
      },
      totalElements: (state) => {
        return state.totalElements
      },
      filters: (state) => {
        return state.filters
      },
      isLoading: (state) => {
        return state.isLoading
      }
    }),
    ...mapGetters(MODULE_NAMES.NEWS, {
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames'
    })
  },
  async created () {
    await Promise.all([
      this.fetchFirstNews(),
      this.fetchTags(),
      this.fetchCountries(),
      this.fetchCurrencyNames()
    ])
  },
  destroyed () {
    this.resetNews()
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      fetchFirstNews: NEWS_ACTION_TYPES.FETCH_FIRST_NEWS,
      fetchTags: NEWS_ACTION_TYPES.FETCH_CURRENCIES_TAGS,
      fetchCountries: NEWS_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES,
      fetchCurrencyNames: NEWS_ACTION_TYPES.FETCH_CURRENCY_NAMES,
      fetchNextNews: NEWS_ACTION_TYPES.FETCH_NEXT_NEWS,
      clearStateFilters: NEWS_ACTION_TYPES.CLEAR_FILTERS_AND_FETCH_NEWS,
      changeStateFilters: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_FILTERS
    }),
    ...mapMutations(MODULE_NAMES.NEWS, {
      resetNews: NEWS_MUTATION_TYPES.RESET
    }),
    onClearFiltersClick () {
      this.$refs.tabletFiltersContent.clear()
      this.clearStateFilters()
    }
  }
}
</script>
