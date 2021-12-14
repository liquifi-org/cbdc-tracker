<template>
  <div>
    <div class="d-flex justify-content-between align-items-top">
      <div>
        <app-title>Watchlist</app-title>
        <app-arrow-link-back text="Back to full list of currencies" route="/"></app-arrow-link-back>
      </div>

      <div class="d-flex justify-content-right align-items-center">
        <div v-if="isTabletScreen">
          <app-clear-button v-if="isFiltersExpanded"
                            class="m-r-32"
                            text="Clear filtering"
                            @click="onClearFilters"></app-clear-button>

          <app-collapse-button :target="'filters' + componentId"
                               collapseText="Hide filters"
                               expandText="Show filters"
                               @toggle=onToggleFilters></app-collapse-button>
        </div>

        <EditColumnsButton v-if="!isMobileScreen"
                           class="m-l-16"
                           :columns="columns"
                           @changeColumnsVisible="changeColumnsVisible"></EditColumnsButton>
      </div>
    </div>

    <app-collapse-block v-if="isTabletScreen"
                        class="m-t-16 m-b-16"
                        :id="'filters' + componentId">
      <app-card-line class="m-b-16"></app-card-line>

      <FiltersContent ref="filters"
                      :filters="filters"
                      :countriesWithCurrencies="countriesWithCurrencies"
                      :currencyNames="currencyNames"
                      :technologiesWithCurrencies="technologiesWithCurrencies"
                      :technologyNameWithCurrencies="technologyNameWithCurrencies"
                      fieldCols="6"
                      @change="changeStateFilters"></FiltersContent>
    </app-collapse-block>
  </div>
</template>

<script>
import EditColumnsButton from '@/components/currencies/list/table/EditColumnsButton'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { CURRENCY_TABLE_SETTINGS_MUTATION_TYPES } from '@/store/modules/currencyTableSettings/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import FiltersContent from '@/components/filters/Content'

export default {
  mixins: [screenSizeMixin],
  components: {
    EditColumnsButton,
    FiltersContent
  },
  data () {
    return {
      isFiltersExpanded: false
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      columns: (state) => {
        return state.columns
      }
    }),
    ...mapGetters(MODULE_NAMES.WATCHLIST_PAGE, {
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames',
      technologiesWithCurrencies: 'technologiesWithCurrencies',
      technologyNameWithCurrencies: 'technologyNameWithCurrencies'
    }),
    ...mapState(MODULE_NAMES.WATCHLIST_PAGE, {
      filters: (state) => {
        return state.filters
      }
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      changeColumnsVisible: CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_COLUMNS_VISIBLE
    }),
    ...mapMutations(MODULE_NAMES.WATCHLIST_PAGE, {
      changeStateFilters: WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_FILTERS,
      clearStateFilters: WATCHLIST_PAGE_MUTATION_TYPES.CLEAR_FILTERS
    }),
    onToggleFilters (isExpanded) {
      this.isFiltersExpanded = isExpanded
    },
    onClearFilters () {
      this.$refs.filters.clear()
      this.clearStateFilters()
    }
  }
}
</script>
