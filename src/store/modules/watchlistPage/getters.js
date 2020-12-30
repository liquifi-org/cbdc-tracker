import { FilterService } from '@/services/filter.service'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'

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
  hasFilters (state) {
    return !!state.filters.find((filter) => {
      return filter.value
    })
  }
}
