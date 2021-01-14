import { SORT_DIRECTIONS } from '@/constants/sortDirections'
import { isNumber } from 'lodash'

// Class for add sort and pagination to table data
export class ListDataAdapter {
  map ({ items, sort, currentPage, perPage }) {
    items = [...items]
    items = sort ? this.sort(items, sort) : items
    return this.getPage(items, currentPage, perPage)
  }

  sort (items, sort) {
    const sortName = sort.name
    const sortDirection = sort.direction

    const sortedItems = items.sort(function (a, b) {
      const valueA = a[sortName]
      const valueB = b[sortName]

      const sortedValueA = isNumber(valueA) ? valueA : (valueA || '').toLowerCase()
      const sortedValueB = isNumber(valueB) ? valueB : (valueB || '').toLowerCase()

      if (sortedValueA < sortedValueB) {
        return -1
      } else if (sortedValueA > sortedValueB) {
        return 1
      } else {
        return 0
      }
    })

    return (sortDirection === SORT_DIRECTIONS.ASC) ? sortedItems : sortedItems.reverse()
  }

  getPage (items, currentPage, perPage) {
    return items.slice((currentPage - 1) * perPage, currentPage * perPage)
  }
}
