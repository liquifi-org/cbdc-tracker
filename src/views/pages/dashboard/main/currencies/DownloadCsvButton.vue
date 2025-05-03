<template>
  <div>
    <app-button :type="BUTTON_TYPES.SECONDARY" @click="downloadCsv">
      Download CSV
    </app-button>
  </div>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import Papa from 'papaparse'

export default {
  data () {
    return {
      BUTTON_TYPES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      currenciesData: (state) => {
        return state.currenciesData
      }
    }),
    ...mapState(MODULE_NAMES.CURRENCY_TABLE_SETTINGS, {
      columns: (state) => {
        return state.columns
      }
    })
  },
  methods: {
    downloadCsv () {
      const a = document.createElement('a')
      document.body.appendChild(a)
      const url = window.URL.createObjectURL(this.getCsvBlob())
      a.style = 'display: none'
      a.href = url
      a.download = 'cbdctracker.csv'
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    },
    getCsvBlob () {
      const csv = Papa.unparse({
        fields: this.columns.map(v => v.title),
        data: this.currenciesData.map(currency => {
          return this.columns.map((column) => {
            return (JSON.stringify(currency[column.name]) || '')
              .replaceAll('"', '')
              .replaceAll(',', ' ')
          })
        })
      }, {
        quotes: true,
        header: true
      })

      return new Blob([csv], { type: 'octet/stream' })
    }
  }
}
</script>

<style lang="scss">
</style>
