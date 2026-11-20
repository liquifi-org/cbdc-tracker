import { COUNTRIES, REAL_COUNTRY_CODE_MAP } from '@/views/pages/dashboard/main/map/countries'

export class CountriesDataMapper {
  map (currencies) {
    const countryDataMap = new Map()

    currencies.length && currencies.forEach((currency) => {
      const participantNames = this.participantNames(currency)
      const seenCodes = new Set()
      const countries = []

      COUNTRIES.forEach((country) => {
        if (!participantNames.includes(country.name) || seenCodes.has(country.code)) {
          return
        }

        seenCodes.add(country.code)
        const realCountry = REAL_COUNTRY_CODE_MAP.get(country.code)

        !realCountry && console.warn(`CountriesDataMapper: Can\`t find country name for code: ${country.code}`)

        countries.push({
          ...country,
          name: realCountry ? realCountry.name : country.name
        })
      })

      if (!countries.length) {
        console.warn(`CountriesDataMapper: Can\`t find country/region: ${currency.country}`)
        return
      }

      countries.forEach((country) => {
        const countryCode = country.code
        const countryName = country.name
        const countryDataItem = countryDataMap.get(countryCode)
        const isDomestic = !currency.crossBorderProject

        // A domestic project colors the country. A cross-border project colors it
        // only when the country has no domestic project.
        if (countryDataItem) {
          countryDataItem.currencies = [...countryDataItem.currencies, currency]
          if (countryDataItem.statusFromCrossBorder && isDomestic) {
            countryDataItem.status = currency.status
            countryDataItem.statusFromCrossBorder = false
          }
        } else {
          countryDataMap.set(countryCode, {
            id: countryCode,
            name: countryName,
            status: currency.status,
            statusFromCrossBorder: !isDomestic,
            currencies: [currency]
          })
        }
      })
    })

    return countryDataMap
  }

  participantNames (currency) {
    if (Array.isArray(currency.countries) && currency.countries.length) {
      return currency.countries.map((country) => country.name).filter(Boolean)
    }

    if (!currency.country) {
      return []
    }

    return currency.country.split(',').map((name) => name.trim()).filter(Boolean)
  }
}
