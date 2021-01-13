import {
  SAVE_USER_SETTING_PLUGIN_GETTER_NAMES,
  SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES
} from '@/store/saveUserSettingsPlugin/constants'
import Vue from 'vue'

export const WATCHLIST_MUTATION_TYPES = {
  ADD_CURRENCY: 'addCurrencies',
  REMOVE_CURRENCY: 'removeCurrencies',
  SET_ACTUAL_CURRENCIES: 'update'
}

const state = {
  list: []
}

const mutations = {
  [WATCHLIST_MUTATION_TYPES.ADD_CURRENCY] (state, payload) {
    state.list.push(payload.currency.tag)
  },
  [WATCHLIST_MUTATION_TYPES.REMOVE_CURRENCY] (state, payload) {
    const index = state.list.indexOf(payload.currency.tag)
    state.list.splice(index, 1)
  },
  [WATCHLIST_MUTATION_TYPES.SET_ACTUAL_CURRENCIES] (state, payload) {
    const list = payload.currencies.reduce((actualList, currency) => {
      state.list.includes(currency.tag) && actualList.push(currency.tag)
      return actualList
    }, [])

    Vue.set(state, 'list', list)
  },
  [SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.LOAD_SAVED_DATA] (state, payload) {
    state.list = [...new Set(payload.list)]
  }
}

const getters = {
  hasCurrencyAtWatchlist (state) {
    return (uid) => {
      return state.list.includes(uid)
    }
  },
  [SAVE_USER_SETTING_PLUGIN_GETTER_NAMES.SAVED_DATA] () {
    return {
      list: state.list
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
