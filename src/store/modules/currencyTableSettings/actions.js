import { CurrenciesHttpService } from '@/services/http/currenciesHttp.service'
import { CURRENCY_TABLE_SETTINGS_MUTATION_TYPES } from './mutations'

export const CURRENCY_TABLE_SETTINGS_ACTION_TYPES = {
  FETCH_TABLE_COLUMNS: 'fetchTableColumns'
}

const currenciesHttpService = new CurrenciesHttpService()

export const actions = {
  async [CURRENCY_TABLE_SETTINGS_ACTION_TYPES.FETCH_TABLE_COLUMNS] ({ commit }) {
    commit(CURRENCY_TABLE_SETTINGS_MUTATION_TYPES.TABLE_CHANGE_COLUMNS, {
      columns: await currenciesHttpService.getCurrencyColumns()
    })
  }
}
