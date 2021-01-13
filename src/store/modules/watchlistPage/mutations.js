import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { getCurrencyFiltersConfig } from '@/utils/getCurrencyFiltersConfig'

export const WATCHLIST_PAGE_MUTATION_TYPES = {
  CHANGE_CURRENCIES_DATA: 'changeCurrenciesData',
  START_LOAD_CURRENCIES: 'startLoadCurrencies',
  FINISH_LOAD_CURRENCIES: 'finishLoadCurrencies',
  TABLE_CHANGE_PAGE: 'tableChangePage',
  CHANGE_COUNTRIES_WITH_CURRENCIES: 'changeCountriesWithCurrencies',
  CHANGE_TECHNOLOGIES_WITH_CURRENCIES: 'changeTechnologiesWithCurrencies',
  CHANGE_CURRENCY_NAMES: 'changeCountryNames',
  CHANGE_FILTERS: 'changeFilters',
  CLEAR_FILTERS: 'clearFilters',
  RESET: 'reset'
}

export const mutations = {
  [WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_CURRENCIES_DATA] (state, payload) {
    state.currenciesData = payload.currenciesData
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.START_LOAD_CURRENCIES] (state, payload) {
    state.isCurrenciesLoading = true
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCIES] (state, payload) {
    state.isCurrenciesLoading = false
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.TABLE_CHANGE_PAGE] (state, payload) {
    state.table.currentPage = payload.currentPage
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES] (state, payload) {
    state.filters.forEach((filter) => {
      if (CURRENCY_FIELD_NAMES.COUNTRY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.countriesWithCurrencies)]
      }
    })
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_CURRENCY_NAMES] (state, payload) {
    state.filters.forEach((filter) => {
      if (CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.currencyNames)]
      }
    })
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_TECHNOLOGIES_WITH_CURRENCIES] (state, payload) {
    state.filters.forEach((filter) => {
      if (CURRENCY_FIELD_NAMES.TECHNOLOGY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.countriesWithTechnologies)]
      }
    })
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_FILTERS] (state, payload) {
    state.table.currentPage = 1

    payload.filters.forEach((filter) => {
      const stateFilter = state.filters.find((v) => {
        return (v.name === filter.name)
      })

      stateFilter.value = filter.value
    })
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.CLEAR_FILTERS] (state, payload) {
    state.table.currentPage = 1

    state.filters.forEach((filter) => {
      filter.value = null
    })
  },
  [WATCHLIST_PAGE_MUTATION_TYPES.RESET] (state, payload) {
    state.currenciesData = null
    state.isCurrenciesLoading = false
    state.filters = getCurrencyFiltersConfig()

    state.table.currentPage = 1
  }
}
