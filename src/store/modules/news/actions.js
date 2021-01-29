import { NewsHttpService } from '@/services/http/newsHttp.service'
import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { NEWS_MUTATION_TYPES } from '@/store/modules/news/mutations'
import { FilterService } from '@/services/filter.service'

export const NEWS_ACTION_TYPES = {
  FETCH_FIRST_NEWS: 'fetchFirstNews',
  FETCH_NEXT_NEWS: 'fetchNextNews',
  FETCH_COUNTRIES_WITH_CURRENCIES: 'fetchCountriesWithCurrencies',
  FETCH_CURRENCY_NAMES: 'fetchCountryNames',
  FETCH_CURRENCIES_TAGS: 'fetchCurrencyTags',
  FETCH_NEWS_BY_SELECTED_FILTERS: 'fetchNewsByFilters',
  CLEAR_FILTERS_AND_FETCH_NEWS: 'clearFiltersAndFetchNews'
}

const newsHttpService = new NewsHttpService()
const currenciesHttpService = new CurrenciesHttpService()

export const actions = {
  async [NEWS_ACTION_TYPES.FETCH_FIRST_NEWS] ({ commit }) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const {
        content: list,
        totalElements
      } = await newsHttpService.getNews()

      commit(NEWS_MUTATION_TYPES.SET_NEWS, {
        list,
        totalElements,
        page: 1
      })
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [NEWS_ACTION_TYPES.FETCH_NEXT_NEWS] ({
    commit,
    state
  }) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const page = (state.currentPage + 1)
      const filters = state.filters

      const filterService = new FilterService()
      let tags = filterService.filter(state.tags, filters).map((tag) => {
        return tag.name
      })

      if (tags.length) {
        tags = (tags.length === state.tags.length) ? null : tags

        const {
          content: list,
          totalElements
        } = await newsHttpService.getNews({
          page,
          tags
        })

        commit(NEWS_MUTATION_TYPES.ADD_NEWS, {
          list,
          totalElements,
          page
        })
      } else {
        commit(NEWS_MUTATION_TYPES.ADD_NEWS, {
          list: [],
          totalElements: 0,
          page: 1
        })
      }
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [NEWS_ACTION_TYPES.FETCH_COUNTRIES_WITH_CURRENCIES] ({ commit }) {
    commit(NEWS_MUTATION_TYPES.CHANGE_COUNTRIES_WITH_CURRENCIES, {
      countriesWithCurrencies: await currenciesHttpService.getCountriesWithCurrencies()
    })
  },
  async [NEWS_ACTION_TYPES.FETCH_CURRENCY_NAMES] ({ commit }) {
    commit(NEWS_MUTATION_TYPES.CHANGE_CURRENCY_NAMES, {
      currencyNames: await currenciesHttpService.getCurrencyNames()
    })
  },
  async [NEWS_ACTION_TYPES.FETCH_CURRENCIES_TAGS] ({
    commit,
    state
  }) {
    const tags = await currenciesHttpService.getCurrencyTags()
    commit(NEWS_MUTATION_TYPES.SET_CURRENCIES_TAGS, { tags })
  },
  async [NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_FILTERS] ({
    commit,
    state
  }, payload) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      const filters = payload.filters

      commit(NEWS_MUTATION_TYPES.CHANGE_FILTERS, {
        filters
      })

      const filterService = new FilterService()
      let tags = filterService.filter(state.tags, filters).map((tag) => {
        return tag.name
      })

      if (tags.length) {
        tags = (tags.length === state.tags.length) ? null : tags

        const {
          content: list,
          totalElements
        } = await newsHttpService.getNews({
          page: 1,
          tags
        })

        commit(NEWS_MUTATION_TYPES.SET_NEWS, {
          list,
          totalElements,
          page: 1
        })
      } else {
        commit(NEWS_MUTATION_TYPES.SET_NEWS, {
          list: [],
          totalElements: 0,
          page: 1
        })
      }
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  },
  async [NEWS_ACTION_TYPES.CLEAR_FILTERS_AND_FETCH_NEWS] ({
    commit,
    dispatch
  }) {
    commit(NEWS_MUTATION_TYPES.START_LOAD_NEWS, {})

    try {
      commit(NEWS_MUTATION_TYPES.CLEAR_FILTERS, {})
      dispatch(NEWS_ACTION_TYPES.FETCH_FIRST_NEWS, {})
    } finally {
      commit(NEWS_MUTATION_TYPES.FINISH_LOAD_NEWS, {})
    }
  }
}
