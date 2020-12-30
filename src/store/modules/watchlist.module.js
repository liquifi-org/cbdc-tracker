import {
  SAVE_USER_SETTING_PLUGIN_GETTER_NAMES,
  SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES
} from '@/store/saveUserSettingsPlugin/constants'

export const WATCHLIST_MUTATION_TYPES = {
  ADD_CURRENCY: 'addCurrencies',
  REMOVE_CURRENCY: 'removeCurrencies'
}

const state = {
  list: []
}

const mutations = {
  [WATCHLIST_MUTATION_TYPES.ADD_CURRENCY] (state, payload) {
    state.list.push(payload.currency.uid)
  },
  [WATCHLIST_MUTATION_TYPES.REMOVE_CURRENCY] (state, payload) {
    const index = state.list.indexOf(payload.currency.uid)
    state.list.splice(index, 1)
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
