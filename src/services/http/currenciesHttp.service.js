import { HttpService } from '@/services/http/http.service'

export class CurrenciesHttpService {
  constructor () {
    this.httpSevice = new HttpService()
  }

  async getCurrencies (options) {
    options = options || {}
    let url = 'currencies'

    if (options.date) {
      url += `?date=${options.date}`
    }

    return await this.httpSevice.get(url)
  }

  // Return all sorted tags without duplicates
  async getCurrencyTags () {
    const currencies = await this.getCurrencies()

    return currencies.map((currency) => {
      return {
        country: currency.country,
        currency: currency.digitalCurrency,
        name: currency.tag
      }
    })
  }

  async getCurrencyByTag (tag) {
    return await this.httpSevice.get(`currencies/tags/${tag}`)
  }

  async getCurrencyColumns () {
    return await this.httpSevice.get('currencies/columns')
  }

  async getCountriesWithCurrencies () {
    return await this.httpSevice.get('countries')
  }
}
