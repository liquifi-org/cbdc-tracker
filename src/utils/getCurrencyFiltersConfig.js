import { STATUS_NAMES } from '@/constants/statuses'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { FILTER_TYPES } from '@/services/filter.service'

export const STATUS_FILTER_POSSIBLE_VALUES = Object.values(STATUS_NAMES).filter((status) => {
  return (STATUS_NAMES.NONE !== status)
})

export const getCurrencyFiltersConfig = () => {
  return [{
    name: CURRENCY_FIELD_NAMES.TYPE,
    label: 'Type',
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
