import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { DASHBOARD_MUTATION_TYPES } from '@/store/modules/dashboard/mutations'
import { NewsHttpService } from '@/services/http/newsHttp.service'
import { HistoryOfChangesHttpService } from '@/services/http/historyOfChangesHttp.service'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_MUTATION_TYPES } from '@/store/modules/watchlist.module'

export const DASHBOARD_ACTION_TYPES = {
  FETCH_CURRENCIES_DATA: 'fetchCurrenciesData',
  FETCH_CURRENCIES_DATA_BY_DATE: 'fetchCurrenciesDataByDate',
  FETCH_HISTORY_OF_CHANGES: 'fetchHistoryOfChanges',
  FETCH_FIRST_NEWS: 'fetchFirstNews',
  FETCH_COUNTRIES_WITH_CURRENCIES: 'fetchCountriesWithCurrencies',
  FETCH_CURRENCY_NAMES: 'fetchCountryNames',
  FETCH_TECHNOLOGIES_WITH_CURRENCIES: 'fetchTechnologiesWithCurrencies',
  FETCH_TECHNOLOGY_NAME_WITH_CURRENCIES: 'fetchTechnologyNameWithCurrencies',
  FETCH_NEWS_CURRENT_PAGE: 'fetchNewsCurrentPage',
  FETCH_NEWS_NEXT_PAGE: 'fetchNewsNextPage',
  FETCH_NEWS_PREVIOUS_PAGE: 'fetchNewsPreviousPage'
}

const currenciesHttpService = new CurrenciesHttpService()
const newsHttpService = new NewsHttpService()
const historyOfChangesHttpService = new HistoryOfChangesHttpService()
const DASHBOARD_NEWS_PAGE_SIZE = 4

export const actions = {
  async [DASHBOARD_ACTION_TYPES.FETCH_CURRENCIES_DATA] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.START_LOAD_CURRENCIES, {})

    try {
      commit(DASHBOARD_MUTATION_TYPES.CHANGE_CURRENCIES_DATA, {
        currenciesData: await currenciesHttpService.getCurrencies()
      })

      commit(`${MODULE_NAMES.WATCHLIST}/${WATCHLIST_MUTATION_TYPES.SET_ACTUAL_CURRENCIES}`, {
        currencies: await currenciesHttpService.getCurrencies()
      }, { root: true })
    } finally {
      commit(DASHBOARD_MUTATION_TYPES.FINISH_LOAD_CURRENCIES, {})
    }
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_CURRENCIES_DATA_BY_DATE] ({ commit }, payload) {
    commit(DASHBOARD_MUTATION_TYPES.START_LOAD_CURRENCIES, {})

    try {
      commit(DASHBOARD_MUTATION_TYPES.CHANGE_DATE, {
        currenciesData: await currenciesHttpService.getCurrencies({ date: payload.date }),
        date: payload.date
      })
    } finally {
      commit(DASHBOARD_MUTATION_TYPES.FINISH_LOAD_CURRENCIES, {})
    }
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_HISTORY_OF_CHANGES] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.SET_HISTORY_OF_CHANGES, {
      historyOfChanges: await historyOfChangesHttpService.getHistoryOfChanges({ size: 1 })
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_FIRST_NEWS] ({ commit }) {
    const news = await newsHttpService.getNews({ size: 1 })

    commit(DASHBOARD_MUTATION_TYPES.SET_FIRST_NEWS, {
      firstNews: news.content[0]
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES, {
      countriesWithCurrencies: await currenciesHttpService.getCountriesWithCurrencies()
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_CURRENCY_NAMES] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.CHANGE_CURRENCY_NAMES, {
      currencyNames: await currenciesHttpService.getCurrencyNames()
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_TECHNOLOGIES_WITH_CURRENCIES] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.CHANGE_TECHNOLOGIES_WITH_CURRENCIES, {
      countriesWithTechnologies: await currenciesHttpService.getCountriesWithTechnologies()
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_TECHNOLOGY_NAME_WITH_CURRENCIES] ({ commit }) {
    commit(DASHBOARD_MUTATION_TYPES.CHANGE_TECHNOLOGY_NAME_WITH_CURRENCIES, {
      countriesWithTechnologyName: await currenciesHttpService.getCountriesWithTechnologyName()
    })
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_NEWS_CURRENT_PAGE] ({ commit, state }) {
    commit(DASHBOARD_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = state.news.currentPage

      commit(DASHBOARD_MUTATION_TYPES.CHANGE_NEWS, {
        data: await newsHttpService.getNews({ page, size: DASHBOARD_NEWS_PAGE_SIZE }),
        page
      })
    } finally {
      commit(DASHBOARD_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_NEWS_NEXT_PAGE] ({ commit, state }) {
    commit(DASHBOARD_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = (state.news.currentPage + 1)

      commit(DASHBOARD_MUTATION_TYPES.CHANGE_NEWS, {
        data: await newsHttpService.getNews({ page, size: DASHBOARD_NEWS_PAGE_SIZE }),
        page
      })
    } finally {
      commit(DASHBOARD_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [DASHBOARD_ACTION_TYPES.FETCH_NEWS_PREVIOUS_PAGE] ({ commit, state }) {
    commit(DASHBOARD_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = (state.news.currentPage - 1)

      commit(DASHBOARD_MUTATION_TYPES.CHANGE_NEWS, {
        data: await newsHttpService.getNews({ page, size: DASHBOARD_NEWS_PAGE_SIZE }),
        page
      })
    } finally {
      commit(DASHBOARD_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  }
}
