import { getCurrencyFiltersConfig } from '@/utils/getCurrencyFiltersConfig'

export const state = () => {
  return {
    currenciesData: null,
    date: new Date().getTime(),
    isCurrenciesLoading: false,
    historyOfChanges: null,
    table: {
      currentPage: 1
    },
    filters: getCurrencyFiltersConfig(),
    news: {
      data: null,
      currentPage: 1,
      isLoading: false
    }
  }
}
