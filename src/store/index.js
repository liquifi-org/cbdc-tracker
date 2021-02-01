import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from './modules/dashboard/index'
import watchlistPage from './modules/watchlistPage/index'
import timelinePage from './modules/timelinePage.module'
import watchlist from './modules/watchlist.module'
import news from './modules/news/index'
import currencyPage from './modules/currencyPage/index'
import currencyTableSettings from './modules/currencyTableSettings/index'
import { createSaveUserSettingsPlugin } from '@/store/saveUserSettingsPlugin/createSaveUserSettingsPlugin'
import { LocalStorageSaveService } from '@/services/localStorageSave.service'
import { SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES } from '@/store/saveUserSettingsPlugin/constants'

const saveUserSettingsPlugin = createSaveUserSettingsPlugin(new LocalStorageSaveService())

Vue.use(Vuex)

export const MODULE_NAMES = {
  DASHBOARD: 'dashboard',
  WATCHLIST_PAGE: 'watchlistPage',
  TIMELINE_PAGE: 'timelinePage',
  WATCHLIST: 'watchlist',
  NEWS: 'news',
  CURRENCY_PAGE: 'currencyPage',
  CURRENCY_TABLE_SETTINGS: 'currencyTableSettings'
}

export default new Vuex.Store({
  mutations: {
    [SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.INITIALIZE_LOAD_SAVED_DATA] () {}
  },
  modules: {
    [MODULE_NAMES.DASHBOARD]: dashboard,
    [MODULE_NAMES.WATCHLIST_PAGE]: watchlistPage,
    [MODULE_NAMES.TIMELINE_PAGE]: timelinePage,
    [MODULE_NAMES.WATCHLIST]: watchlist,
    [MODULE_NAMES.NEWS]: news,
    [MODULE_NAMES.CURRENCY_PAGE]: currencyPage,
    [MODULE_NAMES.CURRENCY_TABLE_SETTINGS]: currencyTableSettings
  },
  plugins: [saveUserSettingsPlugin]
})
