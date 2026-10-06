import { swapObjectKeyAndValue } from '@/utils/swapObjectKeyAndValue'
import { STATUS_NAMES } from '@/constants/statuses'
import { COUNTRIES, REAL_COUNTRY_CODE_MAP } from '@/views/pages/dashboard/main/map/countries'

// Open projects only. Cancelled is the country color when nothing else is open.
const STATUS_ORDER = {
  [`${STATUS_NAMES.RESEARCH}`]: 1,
  [`${STATUS_NAMES.DEVELOPMENT}`]: 2,
  [`${STATUS_NAMES.PROOF_OF_CONCEPT}`]: 3,
  [`${STATUS_NAMES.PILOT}`]: 4,
  [`${STATUS_NAMES.LAUNCHED}`]: 5
}

const SWAP_STATUS_ORDER = swapObjectKeyAndValue(STATUS_ORDER)

const statusForCurrencies = (currencies) => {
  const openOrders = currencies
    .map((currency) => STATUS_ORDER[currency.status])
    .filter((order) => Number.isFinite(order))

  if (openOrders.length) {
    return SWAP_STATUS_ORDER[Math.max(...openOrders)]
  }

  if (currencies.some((currency) => currency.status === STATUS_NAMES.CANCELLED)) {
    return STATUS_NAMES.CANCELLED
  }

  return STATUS_NAMES.NONE
}

export class CountriesDataMapper {
  map (currencies) {
    const countryDataMap = new Map()

    currencies.length && currencies.forEach((currency) => {
      const countries = COUNTRIES.filter((country) => {
        return (country.name === currency.country)
      }).map((country) => {
        const realCountry = REAL_COUNTRY_CODE_MAP.get(country.code)

        !realCountry && console.warn(`CountriesDataMapper: Can\`t find country name for code: ${country.code}`)

        return {
          ...country,
          name: realCountry ? realCountry.name : country.name
        }
      })

      if (!countries.length) {
        console.warn(`CountriesDataMapper: Can\`t find country/region: ${currency.country}`)
        return
      }

      countries.forEach((country) => {
        const countryCode = country.code
        const countryName = country.name
        const countryDataItem = countryDataMap.get(countryCode)

        if (countryDataItem) {
          countryDataItem.currencies = [...countryDataItem.currencies, currency]

          countryDataItem.status = statusForCurrencies(countryDataItem.currencies)
        } else {
          const countryData = {
            id: countryCode,
            name: countryName,
            status: statusForCurrencies([currency]),
            currencies: [currency]
          }

          countryDataMap.set(countryCode, countryData)
        }
      })
    })

    return countryDataMap
  }
}
