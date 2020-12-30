import { COUNTRIES_MAP } from './countries'
import { swapObjectKeyAndValue } from '@/utils/swapObjectKeyAndValue'
import { STATUS_NAMES } from '@/constants/statuses'

// Use for set country status
const STATUS_ORDER = {
  [`${STATUS_NAMES.RESEARCH}`]: 2,
  [`${STATUS_NAMES.DEVELOPMENT}`]: 3,
  [`${STATUS_NAMES.PILOT}`]: 4,
  [`${STATUS_NAMES.LAUNCHED}`]: 5,
  [`${STATUS_NAMES.CANCELLED}`]: 1,
  [`${STATUS_NAMES.NONE}`]: 0
}

const SWAP_STATUS_ORDER = swapObjectKeyAndValue(STATUS_ORDER)

export class CountriesDataMapper {
  map (currencies) {
    const countryDataMap = new Map()

    currencies.length && currencies.forEach((currency) => {
      const country = COUNTRIES_MAP.get(currency.country)

      if (!country) {
        console.warn(`CountriesDataMapper: Can\`t find country: ${currency.country}`)
        return
      }

      const countryCode = country.code
      const countryName = country.name
      const countryDataItem = countryDataMap.get(countryCode)

      if (countryDataItem) {
        countryDataItem.currencies = [...countryDataItem.currencies, currency]

        const statusOrders = countryDataItem.currencies.map((currency) => {
          return STATUS_ORDER[currency.status]
        })

        countryDataItem.status = SWAP_STATUS_ORDER[Math.max(...statusOrders)]
      } else {
        const countryData = {
          id: countryCode,
          name: countryName,
          status: currency.status,
          currencies: [currency]
        }

        countryDataMap.set(countryCode, countryData)
      }
    })

    return countryDataMap
  }
}
