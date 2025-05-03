import { CELL_TYPES, HEADER_CELL_TYPES } from '@/components/table/constants'
import { ListDataAdapter } from '../listDataAdapter'
import { getCurrencyRoute } from '@/utils/getCurrencyRoute'
import { CURRENCY_FIELD_NAMES, CURRENCY_LINKS_FIELDS } from '@/constants/currencies'

export class TableMapper {
  constructor () {
    this.tableDataAdapter = new ListDataAdapter()
  }

  mapColumns (columnsMetadata) {
    const columns = columnsMetadata.map((columnMetadata) => {
      const isDigitalCurrency = (CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY === columnMetadata.name)

      return {
        ...columnMetadata,
        isSortable: columnMetadata.sortable,
        stickyColumn: isDigitalCurrency,
        headerCellType: isDigitalCurrency ? HEADER_CELL_TYPES.DIGITAL_CURRENCY : HEADER_CELL_TYPES.TEXT
      }
    })

    return columns.filter((column) => {
      return column.visible
    })
  }

  mapTablePage ({
    currencies,
    watchlist,
    columns,
    sort,
    currentPage,
    perPage
  }) {
    if (!currencies.length || !columns.length) {
      return []
    }

    const items = this.tableDataAdapter.map({
      items: currencies,
      sort,
      currentPage,
      perPage
    })

    return items.map((currency) => {
      const cells = columns.reduce((memo, column) => {
        const columnName = column.name
        memo[columnName] = this.getCell({
          currency,
          columnName,
          watchlist
        })
        return memo
      }, {})

      return {
        cells,
        data: currency
      }
    })
  }

  getCell ({
    currency,
    columnName,
    watchlist
  }) {
    if (CURRENCY_LINKS_FIELDS.includes(columnName)) {
      return this.getLinksCell({
        currency,
        columnName
      })
    }

    switch (columnName) {
      case CURRENCY_FIELD_NAMES.DIGITAL_CURRENCY:
        return this.getDigitalCurrencyCell({
          currency,
          columnName,
          watchlist
        })
      case CURRENCY_FIELD_NAMES.COUNTRY:
        return this.getCountryCell({
          currency,
          columnName
        })
      case CURRENCY_FIELD_NAMES.STATUS:
        return this.getStatusCell({
          currency,
          columnName
        })
      case CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR:
        return this.getAnnouncementYearCell({
          currency,
          columnName
        })
      case CURRENCY_FIELD_NAMES.UPDATE_RATE:
        return this.getUpdateRateCell({
          currency,
          columnName
        })
      case CURRENCY_FIELD_NAMES.INTEROPERABILITY:
        return this.getInteroperabilityCell({
          currency,
          columnName
        })
      default:
        return {
          type: CELL_TYPES.TEXT,
          displayData: {
            text: currency[columnName]
          }
        }
    }
  }

  getDigitalCurrencyCell ({
    currency,
    columnName,
    watchlist
  }) {
    return {
      type: CELL_TYPES.DIGITAL_CURRENCY,
      displayData: {
        text: currency.digitalCurrency,
        url: getCurrencyRoute(currency),
        hasAtWatchlist: watchlist.includes(currency.tag)
      }
    }
  }

  getCountryCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.COUNTRY,
      displayData: {
        country: currency.country,
        crossBorderProject: currency.crossBorderProject
      }
    }
  }

  getStatusCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.STATUS,
      displayData: {
        statusName: currency[columnName]
      }
    }
  }

  getAnnouncementYearCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.YEAR,
      displayData: {
        timestamp: currency[columnName]
      }
    }
  }

  getUpdateRateCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.UPDATE_RATE,
      displayData: {
        updateRate: currency[columnName]
      }
    }
  }

  getInteroperabilityCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.INTEROPERABILITY_VALUE,
      displayData: {
        value: currency[columnName]
      }
    }
  }

  getLinksCell ({
    currency,
    columnName
  }) {
    return {
      type: CELL_TYPES.LINKS,
      displayData: {
        value: currency[columnName]
      }
    }
  }
}
