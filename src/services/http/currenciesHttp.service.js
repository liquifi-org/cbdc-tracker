import { HttpService } from '@/services/http/http.service'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import { getCurrencyMockName } from '@/utils/getCurrencyMockName'

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

    const currencies = await this.httpSevice.get(url)

    return currencies.map((currency) => {
      return {
        ...currency,
        digitalCurrency: currency.digitalCurrency || getCurrencyMockName(currency),
        hasCurrencyName: !!currency.digitalCurrency
      }
    })
  }

  async getCurrencyTags () {
    return await this.httpSevice.get('/currencies/tags')
  }

  async getCurrencyNames () {
    let tags = await this.getCurrencyTags()

    tags = tags.map((tag) => {
      return tag.currency || getCurrencyMockNameByTag(tag)
    })

    tags = tags.sort(function (a, b) {
      const valueA = a
      const valueB = b

      const sortedValueA = (valueA || '').toLowerCase()
      const sortedValueB = (valueB || '').toLowerCase()

      if (sortedValueA < sortedValueB) {
        return -1
      } else if (sortedValueA > sortedValueB) {
        return 1
      } else {
        return 0
      }
    })

    return tags
  }

  async getCurrencyByTag (tag) {
    const currency = await this.httpSevice.get(`currencies/tags/${tag}`)

    return {
      ...currency,
      digitalCurrency: currency.digitalCurrency || getCurrencyMockName(currency),
      hasCurrencyName: !!currency.digitalCurrency
    }
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
