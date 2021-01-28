import TextValueChange from '@/components/timeline/changeValue/TextValueChange'
import LinksValueChange from '@/components/timeline/changeValue/LinksValueChange'
import { CURRENCY_LINKS_FIELDS } from '@/constants/currencies'

export const getChangeValueComponent = (property) => {
  if (CURRENCY_LINKS_FIELDS.includes(property)) {
    return LinksValueChange
  }

  return TextValueChange
}
