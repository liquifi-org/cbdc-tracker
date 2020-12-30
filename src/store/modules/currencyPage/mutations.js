export const CURRENCY_PAGE_MUTATION_TYPES = {
  SET_CURRENCY: 'setCurrency',
  SET_INFO_FIELDS_METADATA: 'setInfoFieldsMetadata',
  START_LOAD_CURRENCY: 'startLoadCurrency',
  FINISH_LOAD_CURRENCY: 'finishLoadCurrency',
  SET_NEWS: 'setNews',
  ADD_NEWS: 'addNews',
  START_LOAD_NEWS: 'startLoadNews',
  FINISH_LOAD_NEWS: 'finishLoadNews',
  SET_TIMELINE: 'setTimeline',
  ADD_TIMELINE: 'addTimeline',
  START_LOAD_TIMELINE: 'startLoadTimeline',
  FINISH_LOAD_TIMELINE: 'finishLoadTimeline',
  RESET: 'reset'
}

export const mutations = {
  [CURRENCY_PAGE_MUTATION_TYPES.SET_CURRENCY] (state, payload) {
    state.currency = payload.currency
  },
  [CURRENCY_PAGE_MUTATION_TYPES.SET_INFO_FIELDS_METADATA] (state, payload) {
    state.infoFieldsMetadata = payload.infoFieldsMetadata
  },
  [CURRENCY_PAGE_MUTATION_TYPES.SET_NEWS] (state, payload) {
    state.news.currentPage = payload.page
    state.news.list = payload.list
    state.news.totalElements = payload.totalElements
  },
  [CURRENCY_PAGE_MUTATION_TYPES.ADD_NEWS] (state, payload) {
    state.news.currentPage = payload.page
    state.news.list.push(...payload.list)
    state.news.totalElements = payload.totalElements
  },
  [CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_CURRENCY] (state, payload) {
    state.isLoading = true
  },
  [CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_CURRENCY] (state, payload) {
    state.isLoading = false
  },
  [CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_NEWS] (state, payload) {
    state.news.isLoading = true
  },
  [CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_NEWS] (state, payload) {
    state.news.isLoading = false
  },
  [CURRENCY_PAGE_MUTATION_TYPES.SET_TIMELINE] (state, payload) {
    state.timeline.currentPage = payload.page
    state.timeline.list = payload.list
    state.timeline.totalElements = payload.totalElements
  },
  [CURRENCY_PAGE_MUTATION_TYPES.ADD_TIMELINE] (state, payload) {
    state.timeline.currentPage = payload.page
    state.timeline.list.push(...payload.list)
    state.timeline.totalElements = payload.totalElements
  },
  [CURRENCY_PAGE_MUTATION_TYPES.START_LOAD_TIMELINE] (state, payload) {
    state.timeline.isLoading = true
  },
  [CURRENCY_PAGE_MUTATION_TYPES.FINISH_LOAD_TIMELINE] (state, payload) {
    state.timeline.isLoading = false
  },
  [CURRENCY_PAGE_MUTATION_TYPES.RESET] (state, payload) {
    state.currency = null
    state.isLoading = false
    state.infoFieldsMetadata = []

    state.news.currentPage = 1
    state.news.list = []
    state.news.isLoading = false

    state.timeline.currentPage = 1
    state.timeline.list = []
    state.timeline.totalElements = 0
    state.timeline.isLoading = false
  }
}
