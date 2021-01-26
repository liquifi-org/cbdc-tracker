<template>
  <app-active-element class="ui-table-header-cell"
          :title="title"
          :disabled="!isSortable"
          @click="toggleSort">
    <app-icon :name="ICON_NAMES.WATCHLIST"></app-icon>
    <span class="ui-table-header-cell_text m-l-8">{{ title }}</span> <SortIcon class="m-l-4"
                                                                               :direction="sortDirection"></SortIcon>
  </app-active-element>
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
