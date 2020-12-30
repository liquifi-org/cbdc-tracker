<script>
import SortIcon from '@/components/icons/bootstrap/Sort'
import { SORT_DIRECTIONS } from '@/constants/sortDirections'

export default {
  components: {
    SortIcon
  },
  props: {
    data: Object,
    sort: null
  },
  computed: {
    title () {
      return this.data.field.title
    },
    columnName () {
      return this.data.field.name
    },
    isSortable () {
      return this.data.field.isSortable
    },
    localSort () {
      const hasSort = (this.sort && (this.sort.name === this.columnName))
      return hasSort ? this.sort : null
    },
    sortDirection () {
      return (this.localSort && this.localSort.direction)
    }
  },
  methods: {
    toggleSort () {
      if (!this.isSortable) {
        return
      }

      let sort = null

      if (!this.localSort) {
        sort = {
          name: this.columnName,
          direction: SORT_DIRECTIONS.ASC
        }
      } else {
        const direction = (this.sortDirection === SORT_DIRECTIONS.ASC) ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC

        sort = {
          ...this.localSort,
          direction
        }
      }

      this.$emit('sortChanged', sort)
    }
  }
}
</script>

<style lang="scss">
$table-header-text-color: $site-primary-color;

.ui-table-header-cell {
  min-width: 140px;
  display: flex;
  align-items: center;
  text-align: left;
  color: $table-header-text-color;
}

.ui-table-header-cell_text {
  flex: 1;
}
</style>
