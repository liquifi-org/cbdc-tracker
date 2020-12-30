import { SAVE_USER_SETTING_PLUGIN_GETTER_NAMES } from '@/store/saveUserSettingsPlugin/constants'

export const getters = {
  [SAVE_USER_SETTING_PLUGIN_GETTER_NAMES.SAVED_DATA] (state) {
    return {
      table: {
        sort: state.sort,
        columns: state.columns.map((column) => {
          return {
            name: column.name,
            visible: column.visible
          }
        })
      }
    }
  }
}
