import { FILTER_TYPES } from '@/services/filter.service'
import { TAG_FIELD_NAMES } from '@/constants/tags'

export const getNewsFiltersConfig = () => {
  return [{
    name: TAG_FIELD_NAMES.CURRENCY,
    label: 'Digital currency',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }, {
    name: TAG_FIELD_NAMES.COUNTRY,
    label: 'Country / Region',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }]
}
