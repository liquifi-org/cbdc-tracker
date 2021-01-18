<template>
  <div class="ui-dashboard-currency-filters">
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
import FiltersCard from '@/components/currencies/filters/Card'
import MobileFiltersCard from '@/components/currencies/filters/MobileCard'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    FiltersCard,
    MobileFiltersCard
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      filters: (state) => {
        return state.filters
      }
    }),
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames',
      technologiesWithCurrencies: 'technologiesWithCurrencies'
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS,
      clearStateFilters: DASHBOARD_MUTATION_TYPES.CLEAR_FILTERS
    })
  }
}
</script>

<style lang="scss">
@media (min-width: $min-desktop-width) {
  .ui-dashboard-currency-filters {
    position: sticky;
    top: 0;
  }
}
</style>
