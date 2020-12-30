import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { WATCHLIST_PAGE_MUTATION_TYPES } from './mutations'

export const WATCHLIST_PAGE_ACTION_TYPES = {
  FETCH_CURRENCIES_DATA: 'fetchCurrenciesData',
  FETCH_COUNTRIES_WITH_CURRENCIES: 'fetchCountriesWithCurrencies'
}

const currenciesHttpService = new CurrenciesHttpService()

export const actions = {
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_CURRENCIES_DATA] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.START_LOAD_CURRENCIES, {})

    try {
      commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_CURRENCIES_DATA, {
        currenciesData: await currenciesHttpService.getCurrencies()
      })
    } finally {
      commit(WATCHLIST_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCIES, {})
    }
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES, {
      countriesWithCurrencies: await currenciesHttpService.getCountriesWithCurrencies()
    })
  }
}
