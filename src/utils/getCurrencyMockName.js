export const getCurrencyMockName = (currency) => {
  const names = Array.isArray(currency.countries) && currency.countries.length
    ? currency.countries.map((country) => country.name).filter(Boolean)
    : String(currency.country || '').split(',').map((name) => name.trim()).filter(Boolean)

  if (names.length > 1) {
    return 'Cross-border CBDC'
  }

  return `${names[0] || currency.country} CBDC`
}
