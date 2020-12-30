import { SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES } from '@/store/saveUserSettingsPlugin/constants'

export const CURRENCY_TABLE_SETTINGS_MUTATION_TYPES = {
  TABLE_CHANGE_SORT: 'tableChangeSort',
  TABLE_CHANGE_COLUMNS: 'tableChangeColumns',
  TABLE_CHANGE_COLUMNS_VISIBLE: 'tableChangeColumnsVisible'
}

export const mutations = {
  [CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_SORT] (state, payload) {
    state.sort = payload.sort
  },
  [CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_COLUMNS] (state, payload) {
    // Merge column options
    const columns = payload.columns.map((payloadColumn) => {
      const stateColumn = state.columns.find((v) => {
        return (v.name === payloadColumn.name)
      })

      return {
        ...payloadColumn,
        visible: stateColumn ? stateColumn.visible : payloadColumn.visible
      }
    })

    state.columns = [...new Set(columns)]
  },
  [CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_COLUMNS_VISIBLE] (state, payload) {
    payload.changedColumns.forEach((item) => {
      const column = state.columns.find((column) => {
        return (item.name === column.name)
      })

      column.visible = item.visible
    })
  },
  [SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.LOAD_SAVED_DATA] (state, payload) {
    state.sort = payload.sort

    if (state.columns.length) {
      payload.columns.forEach((item) => {
        const column = state.columns.find((column) => {
          return (item.name === column.name)
        })

        column.visible = item.visible
      })
    } else {
      // For the case when the columns are not loaded
      state.columns = [...new Set(payload.columns)]
    }
  }
}
