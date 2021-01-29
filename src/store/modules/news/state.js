import { getNewsFiltersConfig } from '@/utils/getNewsFiltersConfig'

export const state = {
  currentPage: 1,
  list: [],
  tags: [],
  totalElements: 0,
  currencyTags: [],
  isLoading: false,
  filters: getNewsFiltersConfig()
}
