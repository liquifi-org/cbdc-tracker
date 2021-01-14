<template>
  <b-container fluid>
    <b-row>
      <b-col class="m-b-16" cols="12" xxl="10">
        <MainBlock></MainBlock>
      </b-col>

      <b-col v-if="isDesktopScreen" class="m-b-16" cols="2">
        <FiltersCard></FiltersCard>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="m-b-16" cols="12">
        <NewsBlock></NewsBlock>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="m-b-16" cols="12">
        <AboutBlock></AboutBlock>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <ContributingOrganizations></ContributingOrganizations>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MainBlock from './main/Block.vue'
import FiltersCard from './filters/Card'
import NewsBlock from './news/Block'
import AboutBlock from './about/Block'
import ContributingOrganizations from './сontributingOrganizations/Block'
import { MODULE_NAMES } from '@/store'
import { mapActions, mapMutations } from 'vuex'
import { DASHBOARD_ACTION_TYPES } from '@/store/modules/dashboard/actions'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { CURRENCY_TABLE_SETTINGS_ACTION_TYPES } from '@/store/modules/currencyTableSettings/actions'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { SEO_DASHBOARD } from '@/constants/seo'

export default {
  components: {
    MainBlock,
    FiltersCard,
    NewsBlock,
    AboutBlock,
    ContributingOrganizations
  },
  metaInfo: {
    title: SEO_DASHBOARD.TITLE,
    meta: [
      {
        name: 'description',
        content: SEO_DASHBOARD.DESCRIPTION
      },
      {
        name: 'keywords',
        content: SEO_DASHBOARD.KEYWORDS
      }
    ]
  },
  mixins: [screenSizeMixin],
  async created () {
    await Promise.all([
      this.fetchCurrencies(),
      this.fetchTableColumns(),
      this.fetchHistoryOfChanges(),
      this.fetchCountries(),
      this.fetchCountryNames(),
      this.fetchTechnologies()
    ])
  },
  destroyed () {
    this.resetStore()
  },
  methods: {
    ...mapActions(MODULE_NAMES.DASHBOARD, {
      fetchCurrencies: DASHBOARD_ACTION_TYPES.FETCH_CURRENCIES_DATA,
      fetchHistoryOfChanges: DASHBOARD_ACTION_TYPES.FETCH_HISTORY_OF_CHANGES,
      fetchCountries: DASHBOARD_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES,
      fetchCountryNames: DASHBOARD_ACTION_TYPES.FETCH_CURRENCY_NAMES,
      fetchTechnologies: DASHBOARD_ACTION_TYPES.FETCH_TECHNOLOGIES_WITH_CURRENCIES
    }),
    ...mapActions(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      fetchTableColumns: CURRENCY_TABLE_SETTINGS_ACTION_TYPES.FETCH_TABLE_COLUMNS
    }),
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      resetStore: DASHBOARD_MUTATION_TYPES.RESET
    })
  }
}
</script>
