import { NewsHttpService } from '@/services/http/newsHttp.service'
import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'

const state = {
  currentPage: 1,
  list: [],
  totalElements: 0,
  currencyTags: [],
  selectedCurrencyTags: [],
  isLoading: false
}

export const NEWS_ACTION_TYPES = {
  FETCH_FIRST_NEWS: 'fetchFirstNews',
  FETCH_NEXT_NEWS: 'fetchNextNews',
  FETCH_CURRENCIES_TAGS: 'fetchCurrencyTags',
  FETCH_NEWS_BY_SELECTED_TAGS: 'fetchNewsBySelectedTags'
}

export const NEWS_MUTATION_TYPES = {
  SET_NEWS: 'setNews',
  ADD_NEWS: 'addNews',
  SET_CURRENCIES_TAGS: 'setCurrencyTags',
  SET_SELECTED_CURRENCIES_TAGS: 'setSelectedCurrencyTags',
  START_LOAD_NEWS: 'startLoadNews',
  FINISH_LOAD_NEWS: 'finishLoadNews',
  RESET: 'reset'
}

const newsHttpService = new NewsHttpService()
const currenciesHttpService = new CurrenciesHttpService()

const actions = {
  async [NEWS_ACTION_TYPES.FETCH_FIRST_NEWS] ({ commit }) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews()

      commit(NEWS_MUTATION_TYPES.SET_NEWS, { list, totalElements, page: 1 })
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [NEWS_ACTION_TYPES.FETCH_NEXT_NEWS] ({ commit, state }) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = (state.currentPage + 1)
      const tags = state.selectedCurrencyTags.map((tag) => {
        return tag.name
      })

      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews({ page, tags })

      commit(NEWS_MUTATION_TYPES.ADD_NEWS, { list, totalElements, page })
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [NEWS_ACTION_TYPES.FETCH_CURRENCIES_TAGS] ({ commit, state }) {
    const currencyTags = await currenciesHttpService.getCurrencyTags()
    commit(NEWS_MUTATION_TYPES.SET_CURRENCIES_TAGS, { currencyTags })
  },
  async [NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_TAGS] ({ commit, state }, payload) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = 1
      const tags = payload.selectedCurrencyTags.map((tag) => {
        return tag.name
      })

      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews({ page, tags })

      commit(NEWS_MUTATION_TYPES.SET_NEWS, { list, totalElements, page, tags: payload.selectedCurrencyTags })
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  }
}

const mutations = {
  [NEWS_MUTATION_TYPES.SET_NEWS] (state, payload) {
    state.currentPage = payload.page
    state.list = payload.list
    state.totalElements = payload.totalElements
    state.selectedCurrencyTags = payload.tags || []
  },
  [NEWS_MUTATION_TYPES.ADD_NEWS] (state, payload) {
    state.currentPage = payload.page
    state.list.push(...payload.list)
    state.totalElements = payload.totalElements
  },
  [NEWS_MUTATION_TYPES.SET_CURRENCIES_TAGS] (state, payload) {
    state.currencyTags = payload.currencyTags
  },
  [NEWS_MUTATION_TYPES.SET_SELECTED_CURRENCIES_TAGS] (state, payload) {
    state.selectedCurrencyTags = payload.selectedCurrencyTags
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
    state.selectedCurrencyTags = []
    state.historyOfChanges = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
