<template>
  <div class="ui-dashboard-map-legend">
    <app-status v-for="(status) in statuses" :key="status.name"
                ref="statuses"
                class="ui-dashboard-map-legend_item"
                :status-name="status.name"
                :isSelected="status.isSelected"
                :disabled="status.disabled"
                @isSelectedChanged="onIsSelectedChanged({status, isSelected: $event})"></app-status>
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

      return statusNames.map((statusName) => {
        const hasFilter = !!statusFilter.value

        const isStatusSelected = hasFilter && !!statusFilter.value.find((selectedStatuesName) => {
          return (selectedStatuesName === statusName)
        })

        return {
          name: statusName,
          isSelected: !hasFilter || isStatusSelected
        }
      })
    }
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS
    }),
    onIsSelectedChanged ({
      status,
      isSelected
    }) {
      const statusFilter = this.filters.find((filter) => {
        return (filter.name === CURRENCY_FIELD_NAMES.STATUS)
      })

      const oldValue = statusFilter.value || STATUS_FILTER_POSSIBLE_VALUES

      let newValue = null

      if (isSelected) {
        newValue = [status.name, ...oldValue]
      } else {
        newValue = oldValue.filter((selectedStatusName) => {
          return (status.name !== selectedStatusName)
        })

        newValue = newValue.length ? newValue : null

        !newValue && this.$refs.statuses.forEach((statusComponent) => {
          statusComponent.localIsSelected = true // For update in case when IsSelected not changed
        })
      }

      this.changeStateFilters({
        filters: this.filters.map((filter) => {
          const value = (filter.name === CURRENCY_FIELD_NAMES.STATUS) ? newValue : filter.value

          return {
            ...filter,
            value
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

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
