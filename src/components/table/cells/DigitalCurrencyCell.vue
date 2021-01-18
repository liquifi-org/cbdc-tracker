<template>
  <div class="ui-table-cell-digital-currency">
    <app-watch-flag class="m-r-8" :isSelected="hasAtWatchlist" :isDisabled="isDisabled" @isSelectedChanged="changeHasAtWatchlist"></app-watch-flag>
    <app-link class="ui-table-cell-digital-currency_link" :href="url" :text="text"></app-link>
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'
import { TABLE_CELL_ACTIONS } from '@/components/table/constants'

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
      return this.displayData.text
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

<style lang="scss">
  .ui-table-cell-digital-currency {
    display: flex;
    vertical-align: center;

    .ui-table-cell-digital-currency_link {
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
