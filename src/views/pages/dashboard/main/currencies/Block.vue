<template>
  <div>
    <div v-if="!isMobileScreen" class="ui-dashboard-table-controls">
      <WatchlistButton></WatchlistButton>

      <div class="ui-dashboard-table-controls_right">
        <DownloadCsvButton></DownloadCsvButton>

        <EditColumnsButton :columns="columns"
                           @changeColumnsVisible="changeColumnsVisible"></EditColumnsButton>
      </div>
    </div>

    <FixedWatchlistButton v-if="isMobileScreen"></FixedWatchlistButton>

    <List :currencies="currencies"
          :columns="columns"
          :sort="sort"
          :currentPage="currentPage"
          :watchlist="watchlist"
          :isLoading="isLoading"
          @changePage="changePage"
          @changeSort="onChangeSort"
          @addCurrencyToWatchlist="addCurrencyToWatchlist"
          @removeCurrencyFromWatchlist="removeCurrencyFromWatchlist">
      <template #empty>
        <EmptyFilteredList></EmptyFilteredList>
      </template>
    </List>
  </div>
</template>

<script>
import List from '@/components/currencies/list/List'
import DownloadCsvButton from '@/views/pages/dashboard/main/currencies/DownloadCsvButton.vue'
import EditColumnsButton from '@/components/currencies/list/table/EditColumnsButton'
import WatchlistButton from './WatchlistButton'
import FixedWatchlistButton from './FixedWatchlistButton'
import EmptyFilteredList from '@/components/currencies/list/EmptyFilteredList'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { WATCHLIST_MUTATION_TYPES } from '@/store/modules/watchlist.module'
import { CURRENCY_TABLE_SETTINGS_MUTATION_TYPES } from '@/store/modules/currencyTableSettings/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    List,
    DownloadCsvButton,
    EditColumnsButton,
    WatchlistButton,
    FixedWatchlistButton,
    EmptyFilteredList
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      currentPage: (state) => {
        return state.table.currentPage
      },
      isLoading: (state) => {
        return state.isCurrenciesLoading
      }
    }),
    ...mapState(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      sort: (state) => {
        return state.sort
      },
      columns: (state) => {
        return state.columns
      }
    }),
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      currencies: 'filteredCurrencies'
    }),
    ...mapState(MODULE_NAMES.WATCHLIST, {
      watchlist: (state) => {
        return state.list
      }
    })
  },
  methods: {
    ...mapMutations(MODULE_NAMES.DASHBOARD, {
      changePage: DASHBOARD_MUTATION_TYPES.TABLE_CHANGE_PAGE
    }),
    ...mapMutations(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      changeSort: CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_SORT,
      changeColumnsVisible: CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_COLUMNS_VISIBLE
    }),
    ...mapMutations(MODULE_NAMES.WATCHLIST, {
      addCurrencyToWatchlist: WATCHLIST_MUTATION_TYPES.ADD_CURRENCY,
      removeCurrencyFromWatchlist: WATCHLIST_MUTATION_TYPES.REMOVE_CURRENCY
    }),
    onChangeSort (event) {
      this.changePage({ currentPage: 1 })
      this.changeSort(event)
    }
  }
}
</script>

<style lang="scss">
.ui-dashboard-table-controls {
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
}

.ui-dashboard-table-controls_right {
  display: flex;
  gap: 8px;
}
</style>
