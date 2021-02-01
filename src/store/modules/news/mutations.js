import { getNewsFiltersConfig } from '@/utils/getNewsFiltersConfig'
import Vue from 'vue'
import { TAG_FIELD_NAMES } from '@/constants/tags'

export const NEWS_MUTATION_TYPES = {
  SET_NEWS: 'setNews',
  ADD_NEWS: 'addNews',
  SET_CURRENCIES_TAGS: 'setCurrencyTags',
  CHANGE_COUNTRIES_WITH_CURRENCIES: 'changeCountriesWithCurrencies',
  CHANGE_CURRENCY_NAMES: 'changeCurrenciesNames',
  CHANGE_FILTERS: 'changeFilters',
  CLEAR_FILTERS: 'clearFilters',
  START_LOAD_NEWS: 'startLoadNews',
  FINISH_LOAD_NEWS: 'finishLoadNews',
  RESET: 'reset'
}

export const mutations = {
  [NEWS_MUTATION_TYPES.SET_NEWS] (state, payload) {
    state.currentPage = payload.page
    state.list = payload.list
    state.totalElements = payload.totalElements
  },
  [NEWS_MUTATION_TYPES.ADD_NEWS] (state, payload) {
    state.currentPage = payload.page
    state.list.push(...payload.list)
    state.totalElements = payload.totalElements
  },
  [NEWS_MUTATION_TYPES.SET_CURRENCIES_TAGS] (state, payload) {
    state.tags = payload.tags
  },
  [NEWS_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES] (state, payload) {
    state.filters.forEach((filter) => {
      if (TAG_FIELD_NAMES.COUNTRY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.countriesWithCurrencies)]
      }
    })
  },
  [NEWS_MUTATION_TYPES.CHANGE_CURRENCY_NAMES] (state, payload) {
    state.filters.forEach((filter) => {
      if (TAG_FIELD_NAMES.CURRENCY === filter.name) {
        filter.settings.possibleValues = [...new Set(payload.currencyNames)]
      }
    })
  },
  [NEWS_MUTATION_TYPES.CHANGE_FILTERS] (state, payload) {
    Vue.set(state, 'filters', payload.filters)
  },
  [NEWS_MUTATION_TYPES.CLEAR_FILTERS] (state, payload) {
    state.filters.forEach((filter) => {
      filter.value = null
    })
  },
  [NEWS_MUTATION_TYPES.START_LOAD_NEWS] (state, payload) {
    state.isLoading = true
  },
  [NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS] (state, payload) {
    state.isLoading = false
  },
  [NEWS_MUTATION_TYPES.RESET] (state, payload) {
    state.currentPage = 1
    state.list = []
    state.totalElements = 0
    state.isLoading = false
    state.currencyTags = []
    state.filters = getNewsFiltersConfig()
  }
}
