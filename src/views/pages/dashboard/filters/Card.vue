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
      countriesWithCurrencies: 'countriesWithCurrencies'
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
