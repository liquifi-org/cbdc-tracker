import { TAG_FIELD_NAMES } from '@/constants/tags'

export const getters = {
  countriesWithCurrencies: (state) => {
    const filter = state.filters.find((filter) => {
      return (TAG_FIELD_NAMES.COUNTRY === filter.name)
    })

    return filter ? filter.settings.possibleValues : []
  },
  currencyNames: (state) => {
    const filter = state.filters.find((filter) => {
      return (TAG_FIELD_NAMES.CURRENCY === filter.name)
    })

    return filter ? filter.settings.possibleValues : []
  }
}
