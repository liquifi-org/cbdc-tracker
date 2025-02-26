<template>
  <div class="ui-country-tooltip">
    <div class="ui-country-tooltip_header">{{country.name}}</div>

    <div class="ui-country-tooltip_currency" v-for="(currency) in country.currencies" :key="currency.tag">
      <div class="ui-country-tooltip_currency-watch-flag">
        <app-watch-flag :isSelected="hasAtWatchlist(currency)" :isDisabled="true"></app-watch-flag>
      </div>

      <div class="ui-country-tooltip_currency-name">
        <app-link :href="getCurrencyRoute(currency)"
                  class="ui-country-tooltip_currency-name-link"
                  :text="currency.digitalCurrency"></app-link>
        <app-icon v-if="currency.crossBorderProject"
                  class="ui-country-tooltip_cross-border-project"
                  :name="ICON_NAMES.CROSS_BORDER_PROJECT"
                  :text="getCrossBorderProjectText(currency)"></app-icon>
      </div>

      <div class="ui-country-tooltip_currency-status-wrapper">
        <div :class="currency.status.replaceAll(' ', '_')"
             class="ui-country-tooltip_currency-status"
             :title="getStatusDescription(currency.status)">{{currency.status}}</div>
      </div>

      <app-arrow-link class="ui-country-tooltip_currency-link" :route="getCurrencyRoute(currency)"></app-arrow-link>
    </div>
  </div>
</template>

<script>
import { getCurrencyRoute } from '@/utils/getCurrencyRoute'
import { STATUS_DESCRIPTION } from '@/constants/statuses'

export default {
  data () {
    return {
      country: this.$root.country,
      watchlist: this.$root.watchlist
    }
  },
  methods: {
    getCurrencyRoute (currency) {
      return getCurrencyRoute(currency)
    },
    hasAtWatchlist (currency) {
      return this.watchlist.includes(currency.tag)
    },
    getStatusDescription (status) {
      return STATUS_DESCRIPTION[status]
    },
    getCrossBorderProjectText (currency) {
      return `This cross-border project is available in: ${currency.country}`
    }
  }
}
</script>

<style lang="scss">
.ui-country-tooltip {
  @extend %ui-default-font;

  width: 330px;

  .ui-country-tooltip_header {
    background-color: $site-secondary-color;
    color: $site-primary-color;
    padding: 12px;
  }

  .ui-country-tooltip_currency {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ui-country-tooltip_cross-border-project {
    vertical-align: text-bottom;
    color: #7997C4;
    margin-left: 4px;
  }

  .ui-country-tooltip_currency-status {
    padding: 0 6px;
    border-radius: 6px;
    border: 1px solid;
    display: inline-block;

    &.Research {
      color: $status-research-secondary-color;
      border-color: $status-research-secondary-color;
    }

    &.Development, &.Proof_of_concept {
      color: $status-development-primary-color;
      border-color: $status-development-primary-color;
    }

    &.Pilot {
      color: $status-pilot-primary-color;
      border-color: $status-pilot-primary-color;
    }

    &.Launched {
      color: $status-launched-primary-color;
      border-color: $status-launched-primary-color;
    }

    &.Cancelled {
      color: $status-cancelled-primary-color;
      border-color: $status-cancelled-primary-color;
    }

    &.None {
      color: $status-none-primary-color;
      border-color: $status-none-primary-color;
    }
  }

  .ui-country-tooltip_currency-watch-flag {
    flex: 1;
  }

  .ui-country-tooltip_currency-name {
    flex: 5;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 8px;
  }

  .ui-country-tooltip_currency-name-link {
    max-width: none;
  }

  .ui-country-tooltip_currency-status-wrapper {
    flex: 5;
  }

  .ui-country-tooltip_currency-link {
    flex: 1;
  }
}
</style>
