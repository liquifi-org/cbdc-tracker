<template>
  <div>
    <div class="text-right">
      <SortDropdown class="m-b-16"
                    :columns="columns"
                    :sort="sort"
                    @sortChanged="onChangeSort"></SortDropdown>
    </div>

    <div v-if="!isLoading">
      <MobileCurrencyCard v-for="(currency, index) in mappedCurrencies" :key="index"
                          class="m-b-16"
                          :data="currency"
                          @addCurrencyToWatchlist="onAddCurrencyToWatchlist"
                          @removeCurrencyFromWatchlist="onRemoveCurrencyFromWatchlist"></MobileCurrencyCard>
    </div>

    <app-card v-if="isLoading" class="d-flex justify-content-center align-items-center">
      <app-spinner :hint="loadHint"></app-spinner>
    </app-card>

    <div v-show="!isLoading && isEmpty">
      <slot name="empty"></slot>
    </div>

    <app-pagination v-show="!isLoading && !isEmpty"
                    :currentPage="currentPage"
                    :totalRows="totalRows"
                    :perPage="perPage"
                    @pageChanged="onChangePage"></app-pagination>
  </div>
</template>

<script>
import { PAGE_ROW_COUNT } from '@/components/currencies/list/constants'
import MobileCurrencyCard from './MobileCurrencyCard'
import SortDropdown from './SortDropdown'
import { InfoFieldsMapper } from './infoFieldsMapper'

export default {
  components: {
    MobileCurrencyCard,
    SortDropdown
  },
  props: {
    currencies: Array,
    columns: Array,
    sort: null,
    currentPage: Number,
    watchlist: Array,
    isLoading: Boolean,
    isOnlyWatchlistShown: Boolean,
    loadHint: String
  },
  data () {
    return {
      perPage: PAGE_ROW_COUNT
    }
  },
  computed: {
    watchlistCurrencies () {
      return this.currencies.filter((item) => {
        return this.watchlist.includes(item.tag)
      })
    },
    currentCurrencies () {
      return this.isOnlyWatchlistShown ? this.watchlistCurrencies : this.currencies
    },
    mappedCurrencies () {
      const infoFieldsMapper = new InfoFieldsMapper()

      return infoFieldsMapper.map({
        columns: this.columns,
        currencies: this.currentCurrencies,
        watchlist: this.watchlist,
        sort: this.sort,
        currentPage: this.currentPage,
        perPage: this.perPage
      })
    },
    totalRows () {
      return this.currentCurrencies.length
    },
    isEmpty () {
      return !this.totalRows
    }
  },
  methods: {
    onChangePage (event) {
      this.$emit('changePage', { currentPage: event })
    },
    onChangeSort (event) {
      this.$emit('changeSort', { sort: event })
    },
    onAddCurrencyToWatchlist (event) {
      this.$emit('addCurrencyToWatchlist', event)
    },
    onRemoveCurrencyFromWatchlist (event) {
      this.$emit('removeCurrencyFromWatchlist', event)
    }
  }
}
</script>
