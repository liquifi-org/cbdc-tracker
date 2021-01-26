import { HistoryOfChangesHttpService } from '@/services/http/historyOfChangesHttp.service'
import { getLastUpdateDateFromHistoryOfChanges } from '@/utils/getLastUpdateDateFromHistoryOfChanges'
import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'

export const TIMELINE_PAGE_ACTION_TYPES = {
  FETCH_INFO_FIELDS_METADATA: 'fetchInfoFieldsMetadata',
  FETCH_FIRST_TIMELINE_PAGE: 'fetchFirstTimelinePage',
  FETCH_NEXT_TIMELINE_PAGE: 'fetchNextTimelinePage'
}

export const TIMELINE_PAGE_MUTATION_TYPES = {
  SET_INFO_FIELDS_METADATA: 'setInfoFieldsMetadata',
  SET_TIMELINE: 'setTimeline',
  ADD_TIMELINE: 'addTimeline',
  START_LOAD_TIMELINE: 'startLoadTimeline',
  FINISH_LOAD_TIMELINE: 'finishLoadTimeline',
  RESET: 'reset'
}

const state = {
  infoFieldsMetadata: [],
  currentPage: 1,
  list: [],
  totalElements: 0,
  isLoading: false
}

const currenciesHttpService = new CurrenciesHttpService()
const historyOfChangesHttpService = new HistoryOfChangesHttpService()

const actions = {
  async [TIMELINE_PAGE_ACTION_TYPES.FETCH_INFO_FIELDS_METADATA] ({ commit }) {
    commit(TIMELINE_PAGE_MUTATION_TYPES.SET_INFO_FIELDS_METADATA, {
      infoFieldsMetadata: await currenciesHttpService.getCurrencyColumns()
    })
  },
  async [TIMELINE_PAGE_ACTION_TYPES.FETCH_FIRST_TIMELINE_PAGE] ({ commit }) {
    commit(TIMELINE_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE, {})

    try {
      const {
        content: list,
        totalElements
      } = await historyOfChangesHttpService.getHistoryOfChanges()

      commit(TIMELINE_PAGE_MUTATION_TYPES.SET_TIMELINE, { list, totalElements, page: 1 })
    } finally {
      commit(TIMELINE_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE, {})
    }
  },
  async [TIMELINE_PAGE_ACTION_TYPES.FETCH_NEXT_TIMELINE_PAGE] ({ commit }) {
    commit(TIMELINE_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE, {})

    try {
      const page = (state.currentPage + 1)

      const {
        content: list,
        totalElements
      } = await historyOfChangesHttpService.getHistoryOfChanges({ page })

      commit(TIMELINE_PAGE_MUTATION_TYPES.ADD_TIMELINE, { list, totalElements, page })
    } finally {
      commit(TIMELINE_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE, {})
    }
  }
}

const mutations = {
  [TIMELINE_PAGE_MUTATION_TYPES.SET_INFO_FIELDS_METADATA] (state, payload) {
    state.infoFieldsMetadata = payload.infoFieldsMetadata
  },
  [TIMELINE_PAGE_MUTATION_TYPES.SET_TIMELINE] (state, payload) {
    state.currentPage = payload.page
    state.list = payload.list
    state.totalElements = payload.totalElements
  },
  [TIMELINE_PAGE_MUTATION_TYPES.ADD_TIMELINE] (state, payload) {
    state.currentPage = payload.page
    state.list.push(...payload.list)
    state.totalElements = payload.totalElements
  },
  [TIMELINE_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE] (state, payload) {
    state.isLoading = true
  },
  [TIMELINE_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE] (state, payload) {
    state.isLoading = false
  },
  [TIMELINE_PAGE_MUTATION_TYPES.RESET] (state, payload) {
    state.infoFieldsMetadata = []
    state.currentPage = 1
    state.list = []
    state.totalElements = 0
    state.isLoading = false
  }
}

const getters = {
  listWithTitles: (state) => {
    const fieldTitleMap = state.infoFieldsMetadata.reduce((memo, field) => {
      memo.set(field.name, field.title)
      return memo
    }, new Map())

    return state.list.map((item) => {
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
    if (state.list.length) {
      return getLastUpdateDateFromHistoryOfChanges(state.list)
    } else {
      return ''
    }
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
