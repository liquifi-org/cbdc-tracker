export const getActualCurrenciesWatchlist = (currencies, watchlist) => {
  return currencies.reduce((actualWatchlist, currency) => {
    watchlist.includes(currency.tag) && actualWatchlist.push(currency.tag)
    return watchlist.includes(currency.tag)
  }, [])
}
