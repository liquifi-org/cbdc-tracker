<template>
  <div>
    <Table v-if="!isMobileScreen"
           :currencies="currencies"
           :columns="columns"
           :sort="sort"
           :currentPage="currentPage"
           :watchlist="watchlist"
           :isLoading="isLoading"
           :isOnlyWatchlistShown="isOnlyWatchlistShown"
           :loadHint="loadHint"
           @changePage="onChangePage"
           @changeSort="onChangeSort"
           @addCurrencyToWatchlist="onAddCurrencyToWatchlist"
           @removeCurrencyFromWatchlist="onRemoveCurrencyFromWatchlist">
      <template #empty>
        <slot name="empty"></slot>
      </template>
    </Table>

    <MobileList v-else
                :currencies="currencies"
                :columns="columns"
                :sort="sort"
                :currentPage="currentPage"
                :watchlist="watchlist"
                :isLoading="isLoading"
                :isOnlyWatchlistShown="isOnlyWatchlistShown"
                :loadHint="loadHint"
                @changePage="onChangePage"
                @changeSort="onChangeSort"
                @addCurrencyToWatchlist="onAddCurrencyToWatchlist"
                @removeCurrencyFromWatchlist="onRemoveCurrencyFromWatchlist">
      <template #empty>
        <slot name="empty"></slot>
      </template>
    </MobileList>
  </div>
</template>

<script>
import Table from './table/Table'
import MobileList from './mobileList/MobileList'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    Table,
    MobileList
  },
  props: {
    currencies: Array,
    columns: Array,
    sort: null,
    currentPage: Number,
    watchlist: Array,
    isLoading: Boolean,
    isOnlyWatchlistShown: Boolean
  },
  data () {
    return {
      loadHint: 'Please wait while list of currencies will be loaded'
    }
  },
  methods: {
    onChangePage (event) {
      this.$emit('changePage', event)
    },
    onChangeSort (event) {
      this.$emit('changeSort', event)
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
