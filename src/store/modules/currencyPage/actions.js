import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { NewsHttpService } from '@/services/http/newsHttp.service'
import { CURRENCY_PAGE_MUTATION_TYPES } from '@/store/modules/currencyPage/mutations'
import { HistoryOfChangesHttpService } from '@/services/http/historyOfChangesHttp.service'

export const CURRENCY_PAGE_ACTION_TYPES = {
  FETCH_CURRENCY: 'fetchCurrency',
  FETCH_INFO_FIELDS_METADATA: 'fetchInfoFieldsMetadata',
  FETCH_FIRST_NEWS: 'fetchFirstNews',
  FETCH_NEXT_NEWS: 'fetchNextNews',
  FETCH_FIRST_TIMELINE_PAGE: 'fetchFirstTimelinePage',
  FETCH_NEXT_TIMELINE_PAGE: 'fetchNextTimelinePage'
}

const newsHttpService = new NewsHttpService()
const currenciesHttpService = new CurrenciesHttpService()
const historyOfChangesHttpService = new HistoryOfChangesHttpService()

export const actions = {
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_CURRENCY] ({ commit }, payload) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_CURRENCY, {})

    try {
      commit(CURRENCY_PAGE_MUTATION_TYPES.SET_CURRENCY, {
        currency: await currenciesHttpService.getCurrencyByTag(payload.tag)
      })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCY, {})
    }
  },
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_INFO_FIELDS_METADATA] ({ commit }) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_CURRENCY, {})

    try {
      commit(CURRENCY_PAGE_MUTATION_TYPES.SET_INFO_FIELDS_METADATA, {
        infoFieldsMetadata: await currenciesHttpService.getCurrencyColumns()
      })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCY, {})
    }
  },
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_FIRST_NEWS] ({ commit, state }) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews({ tags: [state.currency.tag] })

      commit(CURRENCY_PAGE_MUTATION_TYPES.SET_NEWS, { list, totalElements, page: 1 })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_NEXT_NEWS] ({ commit, state }) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = (state.news.currentPage + 1)

      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews({ page, tags: [state.currency.tag] })

      commit(CURRENCY_PAGE_MUTATION_TYPES.ADD_NEWS, { list, totalElements, page })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_FIRST_TIMELINE_PAGE] ({ commit, state }) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE, {})

    try {
      const {
        content: list,
        totalElements
      } = await historyOfChangesHttpService.getHistoryOfChanges({ tags: [state.currency.tag] })

      commit(CURRENCY_PAGE_MUTATION_TYPES.SET_TIMELINE, { list, totalElements, page: 1 })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE, {})
    }
  },
  async [CURRENCY_PAGE_ACTION_TYPES.FETCH_NEXT_TIMELINE_PAGE] ({ commit, state }) {
    commit(CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE, {})

    try {
      const page = (state.timeline.currentPage + 1)

      const {
        content: list,
        totalElements
      } = await historyOfChangesHttpService.getHistoryOfChanges({ page, tags: [state.currency.tag] })

      commit(CURRENCY_PAGE_MUTATION_TYPES.ADD_TIMELINE, { list, totalElements, page })
    } finally {
      commit(CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE, {})
    }
  }
}
