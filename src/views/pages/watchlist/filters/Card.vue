<template>
  <div>
    <MobileFiltersCard v-if="isMobileScreen"
                       :filters="filters"
                       :countriesWithCurrencies="countriesWithCurrencies"
                       @change="changeStateFilters"
                       @clear="clearStateFilters"></MobileFiltersCard>

    <FiltersCard v-else
                 :filters="filters"
                 :countriesWithCurrencies="countriesWithCurrencies"
                 @change="changeStateFilters"
                 @clear="clearStateFilters"></FiltersCard>
  </div>
</template>

<script>
import FiltersCard from '@/components/currencies/filters/Card'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import MobileFiltersCard from '@/components/currencies/filters/MobileCard'

export default {
  mixins: [screenSizeMixin],
  components: {
    FiltersCard,
    MobileFiltersCard
  },
  computed: {
    ...mapState(MODULE_NAMES.WATCHLIST_PAGE, {
      filters: (state) => {
        return state.filters
      }
    }),
    ...mapGetters(MODULE_NAMES.WATCHLIST_PAGE, {
      countriesWithCurrencies: 'countriesWithCurrencies'
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.WATCHLIST_PAGE, {
      changeStateFilters: WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_FILTERS,
      clearStateFilters: WATCHLIST_PAGE_MUTATION_TYPES.CLEAR_FILTERS
    })
  }
}
</script>
