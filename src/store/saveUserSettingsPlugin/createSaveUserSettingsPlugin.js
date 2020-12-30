import {
  SAVE_USER_SETTING_PLUGIN_GETTER_NAMES,
  SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES
} from '@/store/saveUserSettingsPlugin/constants'

class SaveUserSettingsPlugin {
  constructor (saveService, store) {
    store.subscribe((mutation) => {
      if (mutation.type === SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.INITIALIZE_LOAD_SAVED_DATA) {
        this.initialiseLoadSavedData(saveService, store)
        return
      }

      if (mutation.type.includes(SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.LOAD_SAVED_DATA)) {
        return
      }

      this.saveData(saveService, store)
    })
  }

  async saveData (saveService, store) {
    const data = this.selectData(store)
    await saveService.save(data)
  }

  async initialiseLoadSavedData (saveService, store) {
    const data = await saveService.load()

    if (data) {
      this.setDataToStore(store, data)
    }
  }

  setDataToStore (store, data) {
    const loadDataMutationName = SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.LOAD_SAVED_DATA

    Object.entries(data || {}).forEach(([path, value]) => {
      store.commit(`${path}${loadDataMutationName}`, value)
    })
  }

  selectData = (store) => {
    const savedData = {}
    const savedDataGetterName = SAVE_USER_SETTING_PLUGIN_GETTER_NAMES.SAVED_DATA

    const savedDataGetterObjects = Object.entries(store.getters || {}).filter(([getterName]) => {
      return getterName.includes(savedDataGetterName)
    }).map(([name, getter]) => {
      return {
        path: name.substr(0, name.length - savedDataGetterName.length),
        getter
      }
    })

    savedDataGetterObjects.forEach((getterObject) => {
      savedData[getterObject.path] = getterObject.getter
    })

    return savedData
  }
}

export function createSaveUserSettingsPlugin (saveService) {
  return (store) => {
    // eslint-disable-next-line no-unused-vars
    const saveUserSettingsPlugin = new SaveUserSettingsPlugin(saveService, store)
  }
}
