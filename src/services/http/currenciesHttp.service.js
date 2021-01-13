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

  async getCurrencyTags () {
    return await this.httpSevice.get('/currencies/tags')
  }

  async getCurrencyNames () {
    const tags = await this.getCurrencyTags()

    const tagsWithСurrency = tags.filter((tag) => {
      return !!tag.currency
    })

    return tagsWithСurrency.map((tag) => {
      return tag.currency
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

  async getCountriesWithTechnologies () {
    return await this.httpSevice.get('technologies')
  }
}
