<template>
  <div>
    <div class="ui-dashboard-header">
      <div class="ui-dashboard-header_title">
        <app-title>Today's Central Bank Digital Currencies Status</app-title>
        Last update: {{ lastUpdate }}
      </div>

      <MapLegend v-if="isDesktopScreen" class="ui-dashboard-header_statuses"></MapLegend>

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
                      fieldCols="6"
                      @change="changeStateFilters"></FiltersContent>
    </app-collapse-block>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import FiltersContent from '@/components/currencies/filters/Content'
import MapLegend from './MapLegend'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'

export default {
  mixins: [screenSizeMixin],
  components: {
    FiltersContent,
    MapLegend
  },
  data () {
    return {
      isFiltersExpanded: false
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      filters: (state) => {
        return state.filters
      }
    }),
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      lastUpdate: 'lastUpdate',
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames',
      technologiesWithCurrencies: 'technologiesWithCurrencies'
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS,
      clearStateFilters: DASHBOARD_MUTATION_TYPES.CLEAR_FILTERS
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

<style lang="scss">
.ui-dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ui-dashboard-header_title {
  flex: 1;
}

.ui-dashboard-header_statuses {
  display: flex;
  padding: 8px 12px;
  border-radius: 6px;
  border: $card-line-border;
}

.ui-dashboard-header_status {
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
