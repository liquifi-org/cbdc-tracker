import { STATUS_NAMES } from '@/constants/statuses'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { FILTER_TYPES } from '@/services/filter.service'

export const STATUS_FILTER_POSSIBLE_VALUES = [
  STATUS_NAMES.CANCELLED,
  STATUS_NAMES.RESEARCH,
  STATUS_NAMES.PILOT,
  STATUS_NAMES.DEVELOPMENT,
  STATUS_NAMES.LAUNCHED
]

export const getCurrencyFiltersConfig = () => {
  return [{
    name: CURRENCY_FIELD_NAMES.TYPE,
    label: 'Retail/Wholesale',
    placeholder: 'All',
    type: FILTER_TYPES.SELECT,
    settings: {
      possibleValues: ['Retail', 'Wholesale']
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY,
    label: 'Digital currency',
    placeholder: 'Choose currencies',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.COUNTRY,
    label: 'Country',
    placeholder: 'Choose countries',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR,
    label: 'Announcement year',
    type: FILTER_TYPES.YEAR_RANGE,
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.STATUS,
    label: 'Status',
    placeholder: 'Choose statuses',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: STATUS_FILTER_POSSIBLE_VALUES
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.TECHNOLOGY,
    label: 'Technology',
    placeholder: 'Choose technologies',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }]
}
