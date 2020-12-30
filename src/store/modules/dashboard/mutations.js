import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { getCurrencyFiltersConfig } from '@/utils/getCurrencyFiltersConfig'

export const DASHBOARD_MUTATION_TYPES = {
  CHANGE_CURRENCIES_DATA: 'changeCurrenciesData',
  START_LOAD_CURRENCIES: 'startLoadCurrencies',
  FINISH_LOAD_CURRENCIES: 'finishLoadCurrencies',
  CHANGE_DATE: 'changeDate',
  SET_HISTORY_OF_CHANGES: 'setHistoryOfChanges',
  TABLE_CHANGE_SORT: 'tableChangeSort',
  TABLE_CHANGE_PAGE: 'tableChangePage',
  TABLE_CHANGE_COLUMNS: 'tableChangeColumns',
  TABLE_CHANGE_COLUMNS_VISIBLE: 'tableChangeColumnsVisible',
  CHANGE_COUNTRIES_WITH_CURRENCIES: 'changeCountriesWithCurrencies',
  CHANGE_FILTERS: 'changeFilters',
  CLEAR_FILTERS: 'clearFilters',
  CHANGE_NEWS: 'changeNews',
  START_LOAD_NEWS: 'startLoadNews',
  FINISH_LOAD_NEWS: 'finishLoadNews',
  RESET: 'reset'
}

export const mutations = {
  [DASHBOARD_MUTATION_TYPES.CHANGE_CURRENCIES_DATA] (state, payload) {
    state.currenciesData = payload.currenciesData
  },
  [DASHBOARD_MUTATION_TYPES.START_LOAD_CURRENCIES] (state, payload) {
    state.isCurrenciesLoading = true
  },
  [DASHBOARD_MUTATION_TYPES.FINISH_LOAD_CURRENCIES] (state, payload) {
    state.isCurrenciesLoading = false
  },
  [DASHBOARD_MUTATION_TYPES.CHANGE_DATE] (state, payload) {
    state.date = payload.date
    state.currenciesData = payload.currenciesData
  },
  [DASHBOARD_MUTATION_TYPES.SET_HISTORY_OF_CHANGES] (state, payload) {
    state.historyOfChanges = payload.historyOfChanges
  },
  [DASHBOARD_MUTATION_TYPES.TABLE_CHANGE_PAGE] (state, payload) {
    state.table.currentPage = payload.currentPage
  },
  [DASHBOARD_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES] (state, payload) {
    state.filters.forEach((filter) => {
      if (CURRENCY_FIELD_NAMES.COUNTRY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.countriesWithCurrencies)]
      }
    })
  },
  [DASHBOARD_MUTATION_TYPES.CHANGE_FILTERS] (state, payload) {
    state.table.currentPage = 1

    payload.filters.forEach((filter) => {
      const stateFilter = state.filters.find((v) => {
        return (v.name === filter.name)
      })

      stateFilter.value = filter.value
    })
  },
  [DASHBOARD_MUTATION_TYPES.CLEAR_FILTERS] (state, payload) {
    state.table.currentPage = 1

    state.filters.forEach((filter) => {
      filter.value = null
    })
  },
  [DASHBOARD_MUTATION_TYPES.CHANGE_NEWS] (state, payload) {
    state.news.currentPage = payload.page
    state.news.data = payload.data
  },
  [DASHBOARD_MUTATION_TYPES.START_LOAD_NEWS] (state, payload) {
    state.news.isLoading = true
  },
  [DASHBOARD_MUTATION_TYPES.FINISH_LOAD_NEWS] (state, payload) {
    state.news.isLoading = false
  },
  [DASHBOARD_MUTATION_TYPES.RESET] (state, payload) {
    state.currenciesData = null
    state.isCurrenciesLoading = false
    state.filters = getCurrencyFiltersConfig()

    state.date = new Date().getTime()

    state.table.currentPage = 1

    state.news.data = 1
    state.news.currentPage = 1
    state.news.isLoading = 1

    state.historyOfChanges = null
  }
}
