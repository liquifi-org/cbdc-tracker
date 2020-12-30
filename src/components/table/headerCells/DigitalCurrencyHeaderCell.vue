<template>
  <button class="ui-table-header-cell ui-button-without-styles"
          :title="title"
          :disabled="!isSortable"
          v-on:click="toggleSort">
    <app-icon :name="ICON_NAMES.WATCHLIST"></app-icon>
    <span class="ui-table-header-cell_text m-l-8">{{ title }}</span> <SortIcon class="m-l-4"
                                                                               :direction="sortDirection"></SortIcon>
  </button>
</template>

<script>
import BaseHeaderCell from '@/components/table/headerCells/BaseHeaderCell'
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  extends: BaseHeaderCell,
  data () {
    return {
      ICON_NAMES
    }
  }
}
</script>
