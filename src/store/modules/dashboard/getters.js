import { FilterService } from '@/services/filter.service'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { getLastUpdateDateFromHistoryOfChanges } from '@/utils/getLastUpdateDateFromHistoryOfChanges'

export const getters = {
  filteredCurrencies: (state) => {
    if (!state.currenciesData) {
      return []
    }

    const filterService = new FilterService()
    return filterService.filter(state.currenciesData, state.filters)
  },
  countriesWithCurrencies: (state) => {
    const filter = state.filters.find((filter) => {
      return (CURRENCY_FIELD_NAMES.COUNTRY === filter.name)
    })

    return filter ? filter.settings.possibleValues : []
  },
  newsList: (state) => {
    const news = state.news
    return (news.data && news.data.content)
  },
  isNextNewsButtonDisabled: (state) => {
    const hasData = !!state.news.data
    const hasNextPage = hasData && (state.news.currentPage < state.news.data.totalPages)
    const isLoading = !!state.news.isLoading

    return (!hasNextPage || isLoading)
  },
  isPreviousNewsButtonDisabled: (state) => {
    const hasData = !!state.news.data
    const hasPreviousPage = hasData && (state.news.currentPage > 1)
    const isLoading = !!state.news.isLoading

    return (!hasPreviousPage || isLoading)
  },
  lastUpdate: (state) => {
    if (state.historyOfChanges) {
      return getLastUpdateDateFromHistoryOfChanges(state.historyOfChanges.content)
    } else {
      return ''
    }
  }
}
