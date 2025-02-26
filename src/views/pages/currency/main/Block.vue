<template>
  <div>
    <div v-if="isMobileScreen">
      <div class="m-b-16">
        <app-title>
          {{ digitalCurrency }}
          <app-watch-flag :isSelected="hasCurrencyAtWatchlist(currency.tag)"
                          @isSelectedChanged="changeWatchFlag"></app-watch-flag>
        </app-title>

        <app-icon v-if="crossBorderProject"
                  :name="ICON_NAMES.CROSS_BORDER_PROJECT"
                  class="ui-currency-page_cross-border-project m-r-4"></app-icon>{{ currency.country }}
      </div>

      <app-card>
        <InfoList :items="mobileCommonFields"></InfoList>

        <app-collapse-block :id="'additionalFields' + componentId">
          <InfoList class="m-t-16" :items="mobileAdditionalFields"></InfoList>
        </app-collapse-block>

        <template v-if="hasMobileAdditionalFields">
          <app-card-line class="m-t-16"></app-card-line>

          <div class="m-t-16 text-center">
            <app-collapse-button :target="'additionalFields' + componentId"
                                 :isTextRight="true"
                                 collapseText="Hide advanced info"
                                 expandText="Show advanced info"></app-collapse-button>
          </div>
        </template>
      </app-card>
    </div>

    <app-card v-else>
      <template #header>
        <app-title>
          {{ digitalCurrency }}
          <app-watch-flag :isSelected="hasCurrencyAtWatchlist(currency.tag)"
                          @isSelectedChanged="changeWatchFlag"></app-watch-flag>
        </app-title>

        <app-icon v-if="crossBorderProject"
                  :name="ICON_NAMES.CROSS_BORDER_PROJECT"
                  class="ui-currency-page_cross-border-project m-r-4"></app-icon>{{currency.country}}
      </template>

      <InfoList :items="commonInfoFields"></InfoList>

      <div v-if="announcementLinkInfoField.value">
        <app-card-line class="m-t-16 m-b-16"></app-card-line>

        <InfoList :items="[announcementLinkInfoField]"></InfoList>
      </div>
    </app-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_MUTATION_TYPES } from '@/store/modules/watchlist.module'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import InfoList from '@/components/info/InfoList'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { isEmptyCurrencyField } from '@/utils/isEmptyCurrencyField'

const MOBILE_COMMON_FIELDS = [
  CURRENCY_FIELD_NAMES.STATUS,
  CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR,
  CURRENCY_FIELD_NAMES.CENTRAL_BANK,
  CURRENCY_FIELD_NAMES.UPDATE_RATE
]

const HEADER_FIELDS = [
  CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY,
  CURRENCY_FIELD_NAMES.COUNTRY
]

export default {
  mixins: [screenSizeMixin],
  components: {
    InfoList
  },
  computed: {
    ...mapState(MODULE_NAMES.CURRENCY_PAGE, {
      currency: (state) => {
        return state.currency || {}
      },
      infoFieldsMetadata: (state) => {
        return state.infoFieldsMetadata
      }
    }),
    ...mapGetters(MODULE_NAMES.WATCHLIST, {
      hasCurrencyAtWatchlist: 'hasCurrencyAtWatchlist'
    }),
    digitalCurrency () {
      return this.currency.digitalCurrency
    },
    infoFields () {
      return this.infoFieldsMetadata.map((metadata) => {
        return {
          ...metadata,
          value: this.currency[metadata.name]
        }
      })
    },
    commonInfoFields () {
      const IGNORED_FIELDS = [
        ...HEADER_FIELDS,
        CURRENCY_FIELD_NAMES.ANNOUNCEMENT_LINK
      ]

      return this.infoFields.filter((infoField) => {
        return !IGNORED_FIELDS.includes(infoField.name)
      })
    },
    mobileCommonFields () {
      return this.infoFields.filter((infoField) => {
        return MOBILE_COMMON_FIELDS.includes(infoField.name)
      })
    },
    mobileAdditionalFields () {
      return this.infoFields.filter((field) => {
        const isCommonField = MOBILE_COMMON_FIELDS.includes(field.name)
        const isHeaderField = HEADER_FIELDS.includes(field.name)

        return !(isCommonField || isHeaderField)
      })
    },
    hasMobileAdditionalFields () {
      return !!this.mobileAdditionalFields.find((infoField) => {
        return !isEmptyCurrencyField(infoField.value)
      })
    },
    announcementLinkInfoField () {
      const metadata = this.infoFieldsMetadata.find((v) => {
        return (CURRENCY_FIELD_NAMES.ANNOUNCEMENT_LINK === v.name)
      })

      if (!metadata) {
        return {}
      }

      return {
        ...metadata,
        value: this.currency[metadata.name]
      }
    },
    crossBorderProject () {
      return !!this.currency.crossBorderProject
    }
  },
  methods: {
    ...mapMutations(MODULE_NAMES.WATCHLIST, {
      addCurrencyToWatchlist: WATCHLIST_MUTATION_TYPES.ADD_CURRENCY,
      removeCurrencyFromWatchlist: WATCHLIST_MUTATION_TYPES.REMOVE_CURRENCY
    }),
    changeWatchFlag (isSelected) {
      const currency = this.currency
      isSelected ? this.addCurrencyToWatchlist({ currency }) : this.removeCurrencyFromWatchlist({ currency })
    }
  }
}
</script>

<style>
.ui-currency-page_cross-border-project {
  vertical-align: text-bottom;
  color: #7997C4;
}
</style>
