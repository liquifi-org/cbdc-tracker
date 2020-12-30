import { STATUS_NAMES } from '@/constants/statuses'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { FILTER_TYPES } from '@/services/filter.service'

const STATUS_FILTER_POSSIBLE_VALUES = Object.values(STATUS_NAMES).filter((status) => {
  return (STATUS_NAMES.NONE !== status)
})

export const getCurrencyFiltersConfig = () => {
  return [{
    name: CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY,
    label: 'Digital currency',
    placeholder: 'Enter currency name',
    type: FILTER_TYPES.STRING,
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
    placeholder: 'Enter technology name',
    type: FILTER_TYPES.STRING,
    value: null
  }]
}
