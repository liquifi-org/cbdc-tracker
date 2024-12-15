<template>
  <div class="ui-dashboard-map-legend">
    <div class="ui-dashboard-map-legend_left"></div>

    <div class="ui-dashboard-map-legend_center">
      <MapLegendItem v-for="(status) in statuses" :key="status" :status="status"></MapLegendItem>
    </div>

    <div class="ui-dashboard-map-legend_right">
      <app-clear-button v-if="isDesktopScreen" @click="onClearClick"></app-clear-button>

      <span v-if="isTabletScreen" class="ui-info">
        <app-active-element ref="activeElement"
                            :id="'info-' + componentId"
                            class="ui-dashboard-map-legend_info-button">
          <app-icon :name="ICON_NAMES.QUESTION"></app-icon>
        </app-active-element>

        <app-tooltip trigger="click"
                     :target="'info-' + componentId"
                     custom-class="ui-dashboard-map-legend_info-tooltip">
          <div v-for="(statusWithDescription, index) in statusesWithDescription" :key="index">
            <strong>{{statusWithDescription.name}}:</strong> {{statusWithDescription.description}}
          </div>
        </app-tooltip>
      </span>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { STATUS_FILTER_POSSIBLE_VALUES } from '@/utils/getCurrencyFiltersConfig'
import MapLegendItem from './MapLegendItem.vue'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { STATUS_DESCRIPTION } from '@/constants/statuses'
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  mixins: [screenSizeMixin],
  components: {
    MapLegendItem
  },
  data () {
    return {
      statuses: STATUS_FILTER_POSSIBLE_VALUES,
      ICON_NAMES: ICON_NAMES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      currenciesData: (state) => {
        return state.currenciesData
      },
      filters: (state) => {
        return state.filters
      }
    }),
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      countriesWithCurrencies: 'countriesWithCurrencies',
      currencyNames: 'currencyNames',
      technologiesWithCurrencies: 'technologiesWithCurrencies',
      technologyNameWithCurrencies: 'technologyNameWithCurrencies'
    }),
    statusesWithDescription () {
      return STATUS_FILTER_POSSIBLE_VALUES.map((status) => {
        return {
          name: status,
          description: STATUS_DESCRIPTION[status]
        }
      })
    }
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS
    }),
    onClearClick () {
      this.changeStateFilters({
        filters: this.filters.map((filter) => {
          return {
            ...filter,
            value: (filter.name === CURRENCY_FIELD_NAMES.STATUS) ? null : filter.value
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.ui-dashboard-map-legend {
  display: grid;
  grid-template-columns: [left] 70px [center] 1fr [right] 70px;
}

.ui-dashboard-map-legend_left {
  grid-column: left;
}

.ui-dashboard-map-legend_center {
  grid-column: center;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.ui-dashboard-map-legend_right {
  grid-column: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.ui-dashboard-map-legend_info-button {
  font-size: 16px;
  color: #7997C4;
}

.ui-dashboard-map-legend_info-tooltip {
  .tooltip-inner {
    width: 380px;
    max-width: 380px;
  }
}

@media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
  .ui-dashboard-map-legend {
    grid-template-columns: [left] 0 [center] 1fr [right] auto;
  }

  .ui-dashboard-map-legend_center {
    justify-content: flex-start;
    gap: 4px;
  }
}
</style>
