import { isNull, isString, isUndefined } from 'lodash'

export const isEmptyCurrencyField = (value) => {
  return isUndefined(value) || isNull(value) || (isString(value) && !value)
}
