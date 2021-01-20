<template>
  <div class="ui-dashboard-map-legend">
    <app-status-checkbox v-for="(status) in statuses" :key="status.name"
                         ref="statuses"
                         class="ui-dashboard-map-legend_item"
                         :status-name="status.name"
                         :value="status.value"
                         @changeValue="onStatusChanged({status, value: $event})"></app-status-checkbox>

    <app-text-button text="Show all" @click="onShowAllClick"></app-text-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { STATUS_FILTER_POSSIBLE_VALUES } from '@/utils/getCurrencyFiltersConfig'

export default {
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
    }),
    statuses () {
      const statusNames = STATUS_FILTER_POSSIBLE_VALUES

      const statusFilter = this.filters.find((filter) => {
        return (filter.name === CURRENCY_FIELD_NAMES.STATUS)
      })

      return statusNames.map((name) => {
        const hasFilter = !!statusFilter.value

        const value = hasFilter && !!statusFilter.value.find((selectedStatuesName) => {
          return (selectedStatuesName === name)
        })

        return {
          name,
          value
        }
      })
    }
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS
    }),
    onStatusChanged ({
      status,
      value
    }) {
      const statusFilter = this.filters.find((filter) => {
        return (filter.name === CURRENCY_FIELD_NAMES.STATUS)
      })

      const oldValue = statusFilter.value || []

      let newValue = null

      if (value) {
        newValue = [status.name, ...oldValue]
      } else {
        newValue = oldValue.filter((selectedStatusName) => {
          return (status.name !== selectedStatusName)
        })
      }

      newValue = newValue.length ? newValue : null

      this.changeStateFilters({
        filters: this.filters.map((filter) => {
          const value = (filter.name === CURRENCY_FIELD_NAMES.STATUS) ? newValue : filter.value

          return {
            ...filter,
            value
          }
        })
      })
    },
    onShowAllClick () {
      this.changeStateFilters({
        filters: this.filters.map((filter) => {
          return {
            ...filter,
            value: (filter.name === CURRENCY_FIELD_NAMES.STATUS) ? STATUS_FILTER_POSSIBLE_VALUES : filter.value
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.ui-dashboard-map-legend {
  display: flex;
  padding: 8px 12px;
  border-radius: 6px;
  border: $card-line-border;
}

.ui-dashboard-map-legend_item {
  margin-right: 24px;
}
</style>
