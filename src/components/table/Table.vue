<template>
  <div class="ui-table-wrapper">
    <b-table class="ui-table" :items="items" :fields="fields" :id="'table'+componentId" responsive no-border-collapse>
      <template #head()="data">
        <component v-bind:is="getHeaderCellComponent(data)"
                   :data="data"
                   :sort="sort"
                   @sortChanged="changeSort"
        ></component>
      </template>

      <template #cell()="data">
        <component v-bind:is="getCellComponent(data)"
                   :data="data"
                   @cellChanged="changeCell"></component>
      </template>
    </b-table>

    <div v-show="!isLoading && isEmpty">
      <slot name="empty"></slot>
    </div>

    <div v-show="isLoading" class="ui-table-spinner-wrapper">
      <app-spinner :hint="loadHint"></app-spinner>
    </div>

    <app-pagination v-show="!isLoading && !isEmpty"
                    :target="'table'+componentId"
                    :currentPage="currentPage"
                    :totalRows="totalRows"
                    :perPage="perPage"
                    @pageChanged="changePage"></app-pagination>
  </div>
</template>

<script>
import { CellComponentResolver } from '@/components/table/cellComponentResolver'

export default {
  props: {
    columns: Array,
    rows: Array,
    currentPage: Number,
    totalRows: Number,
    perPage: Number,
    sort: null,
    isLoading: Boolean,
    loadHint: String
  },
  computed: {
    fields () {
      return this.columns.map((column) => {
        return {
          ...column,
          sortable: false,
          key: column.name,
          label: column.title
        }
      })
    },
    items () {
      return this.isLoading ? [] : [...this.rows]
    },
    isEmpty () {
      return !(this.items && this.items.length)
    }
  },
  methods: {
    getCellComponent (data) {
      const key = data.field.key
      const type = data.item.cells[key].type

      return CellComponentResolver.getCellComponentByType(type)
    },
    getHeaderCellComponent (data) {
      return CellComponentResolver.getHeaderCellComponentByType(data.field.headerCellType)
    },
    changePage (page) {
      this.$emit('pageChanged', page)
    },
    changeSort (sort) {
      this.$emit('sortChanged', sort)
    },
    changeCell (data) {
      this.$emit('cellChanged', data)
    }
  }
}
</script>

<style lang="scss">
  $thead-header-background-color: $site-secondary-color;
  $table-border-color: #DBE6F1;

  .ui-table table {
    thead {
      tr {
        th {
          border: none;

          &:first-child {
            border-top-left-radius: 6px;
          }

          &:last-child {
            border-top-right-radius: 6px;
          }
        }
      }
    }

    thead, thead > tr > th.table-b-table-default.b-table-sticky-column {
      background: $thead-header-background-color;
    }

    th, td {
      font-size: 14px;

      &.b-table-sticky-column {
        border-right: 1px solid $table-border-color;
      }
    }

    th {
      vertical-align: middle;
    }

    td {
      border-top: none;
      border-bottom: 1px solid $table-border-color;
    }
  }

  .ui-table-spinner-wrapper {
    height: 460px;
    padding-top: 48px;
  }
</style>
