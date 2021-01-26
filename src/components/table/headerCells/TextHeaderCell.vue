<template>
  <app-active-element class="ui-table-header-cell"
                      :title="title"
                      :disabled="!isSortable"
                      @click="toggleSort">
    <span class="ui-table-header-cell_text">{{ title }}</span> <SortIcon class="m-l-4"
                                                                         :direction="sortDirection"></SortIcon>
  </app-active-element>
</template>

<script>
import BaseHeaderCell from '@/components/table/headerCells/BaseHeaderCell'

export default {
  extends: BaseHeaderCell
}
</script>
