<template>
  <div class="ui-watchlist-currency-filters">
    <MobileFiltersCard v-if="isMobileScreen"
                       :filters="filters"
                       :countriesWithCurrencies="countriesWithCurrencies"
                       :currencyNames="currencyNames"
                       :technologiesWithCurrencies="technologiesWithCurrencies"
                       @change="changeStateFilters"
                       @clear="clearStateFilters"></MobileFiltersCard>

    <FiltersCard v-else
                 :filters="filters"
                 :countriesWithCurrencies="countriesWithCurrencies"
                 :currencyNames="currencyNames"
                 :technologiesWithCurrencies="technologiesWithCurrencies"
                 @change="changeStateFilters"
                 @clear="clearStateFilters"></FiltersCard>
  </div>
</template>

<script>
import FiltersCard from '@/components/filters/Card'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import MobileFiltersCard from '@/components/filters/MobileCard'

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
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames',
      technologiesWithCurrencies: 'technologiesWithCurrencies'
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

<style lang="scss">
@media (min-width: $min-desktop-width) {
  .ui-watchlist-currency-filters {
    position: sticky;
    top: 0;
  }
}
</style>
