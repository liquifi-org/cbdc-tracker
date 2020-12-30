export const swapObjectKeyAndValue = (targetObejct) => {
  return Object.entries(targetObejct).reduce((memo, [value, key]) => {
    memo[key] = value
    return memo
  }, {})
}
