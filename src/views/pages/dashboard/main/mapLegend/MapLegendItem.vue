<template>
  <app-active-element :class="[status.replaceAll(' ', '_'), isActive && 'active']"
                      class="ui-map-legend-item"
                      @click="onClick">
    <span class="ui-map-legend-item_number">
      {{ cbdcNumber }}
    </span>
    <span class="ui-map-legend-item_text" :id="'map-legend-item-' + componentId">{{ status }}</span>

    <app-tooltip v-if="description" :target="'map-legend-item-' + componentId">
      {{ description }}
    </app-tooltip>
  </app-active-element>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { STATUS_DESCRIPTION } from '@/constants/statuses'

export default {
  props: {
    status: String
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
    cbdcNumber () {
      return (this.currenciesData || []).filter(v => (v.status === this.status)).length
    },
    isActive () {
      const statusFilter = this.filters.find((filter) => {
        return (filter.name === CURRENCY_FIELD_NAMES.STATUS)
      })

      return (statusFilter.value || []).includes(this.status)
    },
    description () {
      return STATUS_DESCRIPTION[this.status]
    }
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changeStateFilters: DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS
    }),
    onClick () {
      const statusFilter = this.filters.find((filter) => {
        return (filter.name === CURRENCY_FIELD_NAMES.STATUS)
      })

      const oldValue = statusFilter.value || []

      let newValue = null

      if (this.isActive) {
        newValue = oldValue.filter((status) => {
          return (this.status !== status)
        })
      } else {
        newValue = [this.status, ...oldValue]
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
    }
  }
}
</script>

<style lang="scss">
.ui-map-legend-item {
  display: inline-grid;
  grid-template-columns: [number] auto [text] auto;
  height: 26px;
  box-sizing: border-box;

  .ui-map-legend-item_number {
    grid-column: number;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;
    border-radius: 4px 0 0 4px;
    background-color: $status-none-primary-color;
    border: 1px solid $status-none-primary-color;
  }

  .ui-map-legend-item_text {
    grid-column: text;
    color: $default-font-color;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;
    border-radius: 0 4px 4px 0;
    border: 1px solid $status-none-secondary-color;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.active {
    .ui-map-legend-item_text {
      background-color: rgba($status-none-primary-color, .15);
      border-color: $status-none-primary-color;
    }
  }

  &:hover, &:focus-visible {
    outline: 0;

    .ui-map-legend-item_text {
      background-color: rgba($status-none-primary-color, .15);
      border-color: $status-none-secondary-color;
    }
  }

  &.Research {
    .ui-map-legend-item_number {
      background-color: $status-research-primary-color;
      border-color: $status-research-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-research-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-research-primary-color, .15);
        border-color: $status-research-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-research-primary-color, .15);
        border-color: $status-research-secondary-color;
      }
    }
  }

  &.Proof_of_concept {
    .ui-map-legend-item_number {
      background-color: $status-development-primary-color;
      border-color: $status-development-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-development-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-development-primary-color, .15);
        border-color: $status-development-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-development-primary-color, .15);
        border-color: $status-development-secondary-color;
      }
    }
  }

  &.Pilot {
    .ui-map-legend-item_number {
      background-color: $status-pilot-primary-color;
      border-color: $status-pilot-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-pilot-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-pilot-primary-color, .15);
        border-color: $status-pilot-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-pilot-primary-color, .15);
        border-color: $status-pilot-secondary-color;
      }
    }
  }

  &.Launched {
    .ui-map-legend-item_number {
      background-color: $status-launched-primary-color;
      border-color: $status-launched-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-launched-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-launched-primary-color, .15);
        border-color: $status-launched-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-launched-primary-color, .15);
        border-color: $status-launched-secondary-color;
      }
    }
  }

  &.Inactive {
    .ui-map-legend-item_number {
      background-color: $status-inactive-primary-color;
      border-color: $status-inactive-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-inactive-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-inactive-primary-color, .15);
        border-color: $status-inactive-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-inactive-primary-color, .15);
        border-color: $status-inactive-secondary-color;
      }
    }
  }

  &.Cancelled {
    .ui-map-legend-item_number {
      background-color: $status-cancelled-primary-color;
      border-color: $status-cancelled-primary-color;
    }

    .ui-map-legend-item_text {
      border-color: $status-cancelled-secondary-color;
    }

    &.active {
      .ui-map-legend-item_text {
        background-color: rgba($status-cancelled-primary-color, .15);
        border-color: $status-cancelled-primary-color;
      }
    }

    &:hover, &:focus-visible {
      outline: 0;

      .ui-map-legend-item_text {
        background-color: rgba($status-cancelled-primary-color, .15);
        border-color: $status-cancelled-secondary-color;
      }
    }
  }
}

@media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
  .ui-map-legend-item {
    .ui-map-legend-item_number {
      padding-left: 6px;
      padding-right: 6px;
      font-size: 12px;
    }

    .ui-map-legend-item_text {
      font-size: 12px;
    }
  }
}
</style>
