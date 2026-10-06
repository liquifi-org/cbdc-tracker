import { COUNTRIES, REAL_COUNTRY_CODE_MAP } from '@/views/pages/dashboard/main/map/countries'

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

        // The currency list is newest first. The first record is the current status.
        if (countryDataItem) {
          countryDataItem.currencies = [...countryDataItem.currencies, currency]
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
    })

    return countryDataMap
  }
}
