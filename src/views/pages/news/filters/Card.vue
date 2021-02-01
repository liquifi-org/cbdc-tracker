<template>
  <div class="ui-news-currency-filters">
    <MobileFiltersCard v-if="isMobileScreen"
                       :currencyFieldName="TAG_FIELD_NAMES.CURRENCY"
                       :countriesWithCurrencies="countriesWithCurrencies"
                       :currencyNames="currencyNames"
                       :filters="filters"
                       @change="changeStateFilters"
                       @clear="clearStateFilters"></MobileFiltersCard>

    <FiltersCard v-else
                 :currencyFieldName="TAG_FIELD_NAMES.CURRENCY"
                 :countriesWithCurrencies="countriesWithCurrencies"
                 :currencyNames="currencyNames"
                 :filters="filters"
                 @change="changeStateFilters"
                 @clear="clearStateFilters"></FiltersCard>
  </div>
</template>

<script>
import FiltersCard from '@/components/filters/Card'
import MobileFiltersCard from '@/components/filters/MobileCard'
import { mapActions, mapGetters, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { TAG_FIELD_NAMES } from '@/constants/tags'
import { NEWS_ACTION_TYPES } from '@/store/modules/news/actions'

export default {
  mixins: [screenSizeMixin],
  components: {
    FiltersCard,
    MobileFiltersCard
  },
  data () {
    return {
      TAG_FIELD_NAMES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      filters: (state) => {
        return state.filters
      }
    }),
    ...mapGetters(MODULE_NAMES.NEWS, {
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames'
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      clearStateFilters: NEWS_ACTION_TYPES.CLEAR_FILTERS_AND_FETCH_NEWS,
      changeStateFilters: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_FILTERS
    })
  }
}
</script>

<style lang="scss">
@media (min-width: $min-desktop-width) {
  .ui-news-currency-filters {
    position: sticky;
    top: 0;
  }
}
</style>
