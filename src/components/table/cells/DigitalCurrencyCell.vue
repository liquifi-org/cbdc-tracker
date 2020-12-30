<template>
  <div>
    <app-watch-flag :isSelected="hasAtWatchlist" :isDisabled="isDisabled" @isSelectedChanged="changeHasAtWatchlist"></app-watch-flag>
    <app-link class="m-l-8" :href="url" :text="text"></app-link>
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'
import { TABLE_CELL_ACTIONS } from '@/components/table/constants'
import { CURRENCY_MOCK_NAME } from '@/constants/currencies'

export default {
  extends: BaseCell,
  computed: {
    hasAtWatchlist () {
      return this.displayData.hasAtWatchlist
    },
    isDisabled () {
      return this.displayData.isDisabled
    },
    text () {
      return this.displayData.text || CURRENCY_MOCK_NAME
    },
    url () {
      return this.displayData.url
    }
  },
  methods: {
    changeHasAtWatchlist (hasAtWatchlist) {
      this.$emit('cellChanged', {
        row: this.row,
        cell: this.cell,
        actionName: TABLE_CELL_ACTIONS.CHANGE_HAS_AT_WATCHLIST,
        payload: {
          hasAtWatchlist
        }
      })
    }
  }
}
</script>
