<template>
  <button class="ui-table-header-cell ui-button-without-styles"
          :title="title"
          :disabled="!isSortable"
          v-on:click="toggleSort">
    <span class="ui-table-header-cell_text">{{ title }}</span> <SortIcon class="m-l-4"
                                                                         :direction="sortDirection"></SortIcon>
  </button>
</template>

<script>
import BaseHeaderCell from '@/components/table/headerCells/BaseHeaderCell'

export default {
  extends: BaseHeaderCell
}
</script>
