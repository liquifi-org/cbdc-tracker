import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { isEmptyCurrencyField } from '@/utils/isEmptyCurrencyField'
import { TIMELINE_CHANGE_TYPES } from '@/constants/timeline'

export class TimelineChangesService {
  splitByType (changes) {
    const changesByType = {
      [TIMELINE_CHANGE_TYPES.STATUS]: [],
      [TIMELINE_CHANGE_TYPES.UPDATED]: [],
      [TIMELINE_CHANGE_TYPES.ADDED]: [],
      [TIMELINE_CHANGE_TYPES.DELETED]: []
    }

    changes.forEach((change) => {
      changesByType[this.getChangeType(change)].push(change)
    })

    return changesByType
  }

  getChangeType (change) {
    if (change.property === CURRENCY_FIELD_NAMES.STATUS) {
      return TIMELINE_CHANGE_TYPES.STATUS
    } else if (isEmptyCurrencyField(change.valueOld)) {
      return TIMELINE_CHANGE_TYPES.ADDED
    } else if (isEmptyCurrencyField(change.valueNew)) {
      return TIMELINE_CHANGE_TYPES.DELETED
    } else {
      return TIMELINE_CHANGE_TYPES.UPDATED
    }
  }
}
