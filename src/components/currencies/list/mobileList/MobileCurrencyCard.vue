<template>
  <app-card class="ui-mobile-currency-card">
    <template #header>
      <div class="d-flex justify-content-between align-items-top">
        <div>
          <app-title level="3">
            <app-link class="m-r-8" :href="currencyRoute">{{digitalCurrency}}</app-link>
            <app-watch-flag :isSelected="hasAtWatchlist"
                            @isSelectedChanged="onChangeHasAtWatchlist"></app-watch-flag>
          </app-title>

          {{country}}
        </div>

        <app-arrow-link class="ui-mobile-currency-card_header-arrow-link" :route="currencyRoute"></app-arrow-link>
      </div>
    </template>

    <InfoList :items="commonFields"></InfoList>

    <app-collapse-block :id="'additionalFields' + componentId">
      <InfoList class="m-t-16" :items="additionalFields"></InfoList>
    </app-collapse-block>

    <template v-if="hasAdditionalFields">
      <app-card-line class="m-t-16"></app-card-line>

      <div class="m-t-16 text-center">
        <app-collapse-button :target="'additionalFields' + componentId"
                             :isTextRight="true"
                             collapseText="Hide advanced info"
                             expandText="Show advanced info"></app-collapse-button>
      </div>
    </template>
  </app-card>
</template>

<script>
import { getCurrencyRoute } from '@/utils/getCurrencyRoute'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import InfoList from '@/components/info/InfoList'
import { isEmptyCurrencyField } from '@/utils/isEmptyCurrencyField'

const HEADER_FIELDS = [
  CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY,
  CURRENCY_FIELD_NAMES.COUNTRY
]

const COMMON_FIELDS = [
  CURRENCY_FIELD_NAMES.STATUS,
  CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR,
  CURRENCY_FIELD_NAMES.CENTRAL_BANK,
  CURRENCY_FIELD_NAMES.UPDATE_RATE
]

export default {
  components: {
    InfoList
  },
  props: {
    data: Object
  },
  computed: {
    currency () {
      return this.data.currency
    },
    digitalCurrency () {
      return this.currency.digitalCurrency
    },
    country () {
      return this.currency.country
    },
    currencyRoute () {
      return getCurrencyRoute(this.currency)
    },
    hasAtWatchlist () {
      return this.data.hasAtWatchlist
    },
    fields () {
      return this.data.fields
    },
    commonFields () {
      return this.fields.filter((field) => {
        return COMMON_FIELDS.includes(field.name)
      })
    },
    additionalFields () {
      return this.fields.filter((field) => {
        const isCommonField = COMMON_FIELDS.includes(field.name)
        const isHeaderField = HEADER_FIELDS.includes(field.name)

        return !(isCommonField || isHeaderField)
      })
    },
    hasAdditionalFields () {
      return !!this.additionalFields.find((infoField) => {
        return !isEmptyCurrencyField(infoField.value)
      })
    }
  },
  methods: {
    onChangeHasAtWatchlist (hasAtWatchlist) {
      const currency = this.currency

      if (hasAtWatchlist) {
        this.$emit('addCurrencyToWatchlist', { currency })
      } else {
        this.$emit('removeCurrencyFromWatchlist', { currency })
      }
    }
  }
}
</script>

<style lang="scss">
  .ui-mobile-currency-card {
    .ui-mobile-currency-card_header-arrow-link {
      font-size: 16px;
    }

    .ui-card_header {
      background-color: #CDE0F1;
    }
  }
</style>
