<template>
  <div>
    <b-container v-if="!isTabletScreen" fluid>
      <b-row>
        <b-col class="m-b-16" cols="12" xxl="3">
          <MainBlock></MainBlock>
        </b-col>

        <b-col cols="12" xxl="6">
          <NewsBlock></NewsBlock>
        </b-col>

        <b-col cols="12" xxl="3">
          <TimelineBlock></TimelineBlock>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="isTabletScreen" fluid>
      <b-row>
        <b-col cols="4">
          <MainBlock class="m-b-16"></MainBlock>
          <TimelineBlock></TimelineBlock>
        </b-col>

        <b-col cols="8">
          <NewsBlock></NewsBlock>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { MODULE_NAMES } from '@/store'
import { mapActions, mapMutations, mapState } from 'vuex'
import MainBlock from './main/Block'
import NewsBlock from './news/Block'
import TimelineBlock from './timeline/Block'
import { CURRENCY_PAGE_ACTION_TYPES } from '@/store/modules/currencyPage/actions'
import { CURRENCY_PAGE_MUTATION_TYPES } from '@/store/modules/currencyPage/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  metaInfo () {
    return {
      title: this.documentTitle,
      titleTemplate: '%s Digital Currency | CBDC tracker',
      meta: [
        {
          name: 'description',
          content: this.documentDescription
        }
      ]
    }
  },
  components: {
    MainBlock,
    NewsBlock,
    TimelineBlock
  },
  props: {
    tag: String
  },
  computed: {
    ...mapState(MODULE_NAMES.CURRENCY_PAGE, {
      documentTitle: (state) => {
        if (state.currency) {
          const digitalCurrency = state.currency.digitalCurrency
          const country = state.currency.country

          return digitalCurrency ? `${digitalCurrency} (${country})` : country
        } else {
          return ''
        }
      },
      documentDescription: (state) => {
        if (state.currency) {
          return state.currency.description
        } else {
          return 'Tracker for latest CBDC (Central Bank Digital Currency) developments'
        }
      }
    })
  },
  watch: {
    async tag () {
      await this.refresh()
    }
  },
  async created () {
    await this.initialize()
  },
  destroyed () {
    this.resetStore()
  },
  methods: {
    ...mapActions(MODULE_NAMES.CURRENCY_PAGE, {
      fetchCurrency: CURRENCY_PAGE_ACTION_TYPES.FETCH_CURRENCY,
      fetchInfoFieldsMetadata: CURRENCY_PAGE_ACTION_TYPES.FETCH_INFO_FIELDS_METADATA,
      fetchFirstNews: CURRENCY_PAGE_ACTION_TYPES.FETCH_FIRST_NEWS,
      fetchFirstTimeline: CURRENCY_PAGE_ACTION_TYPES.FETCH_FIRST_TIMELINE_PAGE
    }),
    ...mapMutations(MODULE_NAMES.CURRENCY_PAGE, {
      resetStore: CURRENCY_PAGE_MUTATION_TYPES.RESET
    }),
    async initialize () {
      await Promise.all([
        await this.fetchCurrency({ tag: this.tag }),
        this.fetchInfoFieldsMetadata()
      ])

      await Promise.all([
        this.fetchFirstNews(),
        this.fetchFirstTimeline()
      ])
    },
    async refresh () {
      this.resetStore()
      await this.initialize()
    }
  }
}
</script>
