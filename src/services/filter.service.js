import { DateParserService, DATE_FORMATS } from '@/services/dateParser.service'

export const FILTER_TYPES = {
  SELECT: 'select',
  MULTIPLE_SELECT: 'multipleSelect',
  STRING: 'string',
  YEAR_RANGE: 'yearRange'
}

export class FilterService {
  constructor () {
    this.dataParserService = new DateParserService()
  }

  filter (items, filters) {
    items = items || []
    let filteredItems = [...items]

    filters.forEach((filter) => {
      filteredItems = this.applyFilter(filteredItems, filter)
    })

    return filteredItems
  }

  applyFilter (items, filter) {
    if (!filter.value) {
      return items
    }

    switch (filter.type) {
      case FILTER_TYPES.MULTIPLE_SELECT:
        return this.applyMultipleSelectFilter(items, filter)
      case FILTER_TYPES.YEAR_RANGE:
        return this.applyYearRangeFilter(items, filter)
      case FILTER_TYPES.SELECT:
        return this.applySelectFilter(items, filter)
      case FILTER_TYPES.STRING:
      default:
        return this.applyStringFilter(items, filter)
    }
  }

  applyMultipleSelectFilter (items, filter) {
    const selectedValues = filter.value

    return items.filter((item) => {
      const itemValue = item[filter.name]
      return selectedValues.includes(itemValue)
    })
  }

  applyYearRangeFilter (items, filter) {
    const selectedValue = filter.value
    const from = selectedValue.from
    const to = selectedValue.to

    return items.filter((item) => {
      const itemValue = this.dataParserService.format(item[filter.name], DATE_FORMATS.YEAR)

      const isMoreThanFrom = (!from || (itemValue >= from))
      const isLessThanTo = (!to || (itemValue <= to))

      return (isMoreThanFrom && isLessThanTo)
    })
  }

  applySelectFilter (items, filter) {
    const selectedValue = filter.value.toLowerCase()

    return items.filter((item) => {
      const itemValue = item[filter.name] ? item[filter.name].toLowerCase() : ''
      const regExp = new RegExp(selectedValue, 'i')
      return regExp.test(itemValue)
    })
  }

  applyStringFilter (items, filter) {
    const selectedValue = filter.value.toLowerCase()

    return items.filter((item) => {
      const itemValue = item[filter.name] ? item[filter.name].toLowerCase() : ''
      const regExp = new RegExp(selectedValue, 'i')
      return regExp.test(itemValue)
    })
  }
}
