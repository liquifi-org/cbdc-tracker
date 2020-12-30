import { ListDataAdapter } from '../listDataAdapter'

export class InfoFieldsMapper {
  constructor () {
    this.listDataAdapter = new ListDataAdapter()
  }

  map ({
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

    const items = this.listDataAdapter.map({
      items: currencies,
      sort,
      currentPage,
      perPage
    })

    return items.map((currency) => {
      const fields = this.mapFields(currency, columns)

      return {
        fields,
        hasAtWatchlist: watchlist.includes(currency.uid),
        currency
      }
    })
  }

  mapFields (currency, columns) {
    return columns.map((column) => {
      return {
        ...column,
        value: currency[column.name]
      }
    })
  }
}
