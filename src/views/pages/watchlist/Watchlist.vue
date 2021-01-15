<template>
  <b-container fluid>
    <b-row>
      <b-col class="m-b-16" cols="12" xxl="10">
        <MainBlock></MainBlock>
      </b-col>

      <b-col v-if="isDesktopScreen" class="m-b-16" cols="2">
        <FiltersCard></FiltersCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MainBlock from './main/Block.vue'
import FiltersCard from './filters/Card'
import { MODULE_NAMES } from '@/store'
import { mapActions, mapMutations } from 'vuex'
import { CURRENCY_TABLE_SETTINGS_ACTION_TYPES } from '@/store/modules/currencyTableSettings/actions'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import { WATCHLIST_PAGE_ACTION_TYPES } from '@/store/modules/watchlistPage/actions'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { SEO_WHATCHLIST } from '@/constants/seo'

export default {
  mixins: [screenSizeMixin],
  metaInfo: {
    title: SEO_WHATCHLIST.TITLE,
    meta: [
      {
        name: 'description',
        content: SEO_WHATCHLIST.DESCRIPTION
      }
    ]
  },
  components: {
    MainBlock,
    FiltersCard
  },
  async created () {
    await Promise.all([
      this.fetchCurrencies(),
      this.fetchTableColumns(),
      this.fetchCountries(),
      this.fetchCountryNames(),
      this.fetchTechnologies()
    ])
  },
  destroyed () {
    this.resetStore()
  },
  methods: {
    ...mapActions(MODULE_NAMES.WATCHLIST_PAGE, {
      fetchCurrencies: WATCHLIST_PAGE_ACTION_TYPES.FETCH_CURRENCIES_DATA,
      fetchCountries: WATCHLIST_PAGE_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES,
      fetchCountryNames: WATCHLIST_PAGE_ACTION_TYPES.FETCH_CURRENCY_NAMES,
      fetchTechnologies: WATCHLIST_PAGE_ACTION_TYPES.FETCH_TECHNOLOGIES_WITH_CURRENCIES
    }),
    ...mapActions(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      fetchTableColumns: CURRENCY_TABLE_SETTINGS_ACTION_TYPES.FETCH_TABLE_COLUMNS
    }),
    ...mapMutations(MODULE_NAMES.WATCHLIST_PAGE, {
      resetStore: WATCHLIST_PAGE_MUTATION_TYPES.RESET
    })
  }
}
</script>
