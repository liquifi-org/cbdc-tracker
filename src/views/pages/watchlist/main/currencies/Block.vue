<template>
  <List :currencies="currencies"
         :columns="columns"
         :sort="sort"
         :currentPage="currentPage"
         :watchlist="watchlist"
         :isLoading="isLoading"
         :isOnlyWatchlistShown="true"
         @changePage="changePage"
         @changeSort="onChangeSort"
         @removeCurrencyFromWatchlist="removeCurrencyFromWatchlist">
    <template #empty>
      <EmptyFilteredList v-if="hasFilters"></EmptyFilteredList>
      <EmptyList v-else></EmptyList>
    </template>
  </List>
</template>

<script>
import List from '@/components/currencies/list/List'
import EmptyList from './EmptyList'
import EmptyFilteredList from '@/components/currencies/list/EmptyFilteredList'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_MUTATION_TYPES } from '@/store/modules/watchlist.module'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import { CURRENCY_TABLE_SETTINGS_MUTATION_TYPES } from '@/store/modules/currencyTableSettings/mutations'

export default {
  components: {
    List,
    EmptyList,
    EmptyFilteredList
  },
  computed: {
    ...mapState(MODULE_NAMES.WATCHLIST_PAGE, {
      currentPage: (state) => {
        return state.table.currentPage
      },
      isLoading: (state) => {
        return state.isCurrenciesLoading
      }
    }),
    ...mapGetters(MODULE_NAMES.WATCHLIST_PAGE, {
      hasFilters: 'hasFilters'
    }),
    ...mapState(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      sort: (state) => {
        return state.sort
      },
      columns: (state) => {
        return state.columns
      }
    }),
    ...mapGetters(MODULE_NAMES.WATCHLIST_PAGE, {
      currencies: 'filteredCurrencies'
    }),
    ...mapState(MODULE_NAMES.WATCHLIST, {
      watchlist: (state) => {
        return state.list
      }
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.WATCHLIST_PAGE, {
      changePage: WATCHLIST_PAGE_MUTATION_TYPES.TABLE_CHANGE_PAGE
    }),
    ...mapMutations(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      changeSort: CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_SORT
    }),
    ...mapMutations(MODULE_NAMES.WATCHLIST, {
      removeCurrencyFromWatchlist: WATCHLIST_MUTATION_TYPES.REMOVE_CURRENCY
    }),
    onChangeSort (event) {
      this.changePage({ currentPage: 1 })
      this.changeSort(event)
    }
  }
}
</script>
