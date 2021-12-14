import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { WATCHLIST_PAGE_MUTATION_TYPES } from './mutations'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_MUTATION_TYPES } from '@/store/modules/watchlist.module'
import { SubscribesHttpService } from '@/services/http/subscribesHttp.service'

export const WATCHLIST_PAGE_ACTION_TYPES = {
  FETCH_CURRENCIES_DATA: 'fetchCurrenciesData',
  FETCH_COUNTRIES_WITH_CURRENCIES: 'fetchCountriesWithCurrencies',
  FETCH_CURRENCY_NAMES: 'fetchCountryNames',
  FETCH_TECHNOLOGIES_WITH_CURRENCIES: 'fetchTechnologiesWithCurrencies',
  FETCH_TECHNOLOGY_NAME_WITH_CURRENCIES: 'fetchTechnologyNameWithCurrencies',
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscribe'
}

const currenciesHttpService = new CurrenciesHttpService()
const subscribesHttpService = new SubscribesHttpService()

export const actions = {
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_CURRENCIES_DATA] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.START_LOAD_CURRENCIES, {})

    try {
      commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_CURRENCIES_DATA, {
        currenciesData: await currenciesHttpService.getCurrencies()
      })

      commit(`${MODULE_NAMES.WATCHLIST}/${WATCHLIST_MUTATION_TYPES.SET_ACTUAL_CURRENCIES}`, {
        currencies: await currenciesHttpService.getCurrencies()
      }, { root: true })
    } finally {
      commit(WATCHLIST_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCIES, {})
    }
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES, {
      countriesWithCurrencies: await currenciesHttpService.getCountriesWithCurrencies()
    })
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_CURRENCY_NAMES] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_CURRENCY_NAMES, {
      currencyNames: await currenciesHttpService.getCurrencyNames()
    })
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_TECHNOLOGIES_WITH_CURRENCIES] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_TECHNOLOGIES_WITH_CURRENCIES, {
      countriesWithTechnologies: await currenciesHttpService.getCountriesWithTechnologies()
    })
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.FETCH_TECHNOLOGY_NAME_WITH_CURRENCIES] ({ commit }) {
    commit(WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_TECHNOLOGY_NAME_WITH_CURRENCIES, {
      countriesWithTechnologyName: await currenciesHttpService.getCountriesWithTechnologyName()
    })
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.SUBSCRIBE] ({ commit, state, rootState }, payload) {
    const email = state.subscription.email
    const currencyTags = rootState[MODULE_NAMES.WATCHLIST].list
    const recaptchaToken = payload.recaptchaToken

    await subscribesHttpService.subscribe(email, currencyTags, recaptchaToken)

    commit(WATCHLIST_PAGE_MUTATION_TYPES.CLEAR_EMAIL)
  },
  async [WATCHLIST_PAGE_ACTION_TYPES.UNSUBSCRIBE] ({ commit, state, rootState }, payload) {
    const email = state.subscription.email
    const recaptchaToken = payload.recaptchaToken

    await subscribesHttpService.unsubscribe(email, recaptchaToken)

    commit(WATCHLIST_PAGE_MUTATION_TYPES.CLEAR_EMAIL)
  }
}
