import { getCurrencyFiltersConfig } from '@/utils/getCurrencyFiltersConfig'

export const state = () => {
  return {
    currenciesData: null,
    isCurrenciesLoading: false,
    table: {
      currentPage: 1
    },
    filters: getCurrencyFiltersConfig(),
    subscription: {
      email: ''
    }
  }
}
