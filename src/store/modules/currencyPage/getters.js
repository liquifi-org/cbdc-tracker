import { getLastUpdateDateFromHistoryOfChanges } from '@/utils/getLastUpdateDateFromHistoryOfChanges'

export const getters = {
  listWithTitles: (state) => {
    const fieldTitleMap = state.infoFieldsMetadata.reduce((memo, field) => {
      memo.set(field.name, field.title)
      return memo
    }, new Map())

    return state.timeline.list.map((item) => {
      return {
        ...item,
        tags: item.tags.map((tag) => {
          return {
            ...tag,
            changes: tag.changes.map((change) => {
              return {
                ...change,
                title: fieldTitleMap.get(change.property)
              }
            })
          }
        })
      }
    })
  },
  lastUpdate: (state) => {
    if (state.timeline.list.length) {
      return getLastUpdateDateFromHistoryOfChanges(state.timeline.list)
    } else {
      return ''
    }
  }
}
