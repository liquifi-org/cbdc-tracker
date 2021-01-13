<template>
  <app-table :columns="displayColumns"
             :rows="rows"
             :currentPage="currentPage"
             :totalRows="totalRows"
             :perPage="perPage"
             :sort="sort"
             :isLoading="isLoading"
             :loadHint="loadHint"
             @pageChanged="onChangePage"
             @sortChanged="onChangeSort"
             @cellChanged="onChangeCell">
    <template #empty>
      <slot name="empty"></slot>
    </template>
  </app-table>
</template>

<script>
import { TableMapper } from './tableMapper'
import { PAGE_ROW_COUNT } from '@/components/currencies/list/constants'

export default {
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
    displayColumns () {
      const tableMapper = new TableMapper()
      return tableMapper.mapColumns(this.columns)
    },
    rows () {
      const tableMapper = new TableMapper()

      return tableMapper.mapTablePage({
        columns: this.displayColumns,
        currencies: this.isOnlyWatchlistShown ? this.watchlistCurrencies : this.currencies,
        watchlist: this.watchlist,
        sort: this.sort,
        currentPage: this.currentPage,
        perPage: this.perPage
      })
    },
    totalRows () {
      return this.isOnlyWatchlistShown ? this.watchlistCurrencies.length : this.currencies.length
    }
  },
  methods: {
    onChangePage (event) {
      this.$emit('changePage', { currentPage: event })
    },
    onChangeSort (event) {
      this.$emit('changeSort', { sort: event })
    },
    onChangeCell ({ row, payload }) {
      const currency = row.data
      const hasAtWatchlist = payload.hasAtWatchlist

      hasAtWatchlist ? this.addCurrencyToWatchlist({ currency }) : this.removeCurrencyFromWatchlist({ currency })
    },
    addCurrencyToWatchlist (event) {
      this.$emit('addCurrencyToWatchlist', event)
    },
    removeCurrencyFromWatchlist (event) {
      this.$emit('removeCurrencyFromWatchlist', event)
    }
  }
}
</script>
