<template>
  <div>
    <app-active-element class="ui-sort-dropdown"
                        ref="button"
                        :id="'popover-'+componentId">
      <template v-if="activeItem">
        {{activeItem.title}}<SortIcon class="m-l-8" :direction="activeItem.direction"></SortIcon>
      </template>
    </app-active-element>

    <b-popover custom-class="ui-sort-dropdown_popover"
               :target="'popover-'+componentId"
               triggers="click"
               placement="bottom"
               :show.sync="popoverShow">
        <button v-for="(item, index) in items" :key="index" @click="onClick(item)"
                ref="items"
                class="ui-sort-dropdown_item" :class="{'active': item.isActive}">
          {{item.title}}<SortIcon class="m-l-8" :direction="item.direction"></SortIcon>
        </button>
    </b-popover>
  </div>
</template>

<script>
import { SORT_DIRECTIONS } from '@/constants/sortDirections'
import SortIcon from '@/components/icons/bootstrap/Sort'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'

const DEFAULT_SORT_ITEM = {
  title: 'Sort by Last update (newest first)',
  name: null,
  direction: SORT_DIRECTIONS.ASC
}

export default {
  components: {
    SortIcon
  },
  props: {
    columns: Array,
    sort: null
  },
  data () {
    return {
      localSort: this.sort,
      popoverShow: false
    }
  },
  computed: {
    sortableColumns () {
      return this.columns.filter((column) => {
        return column.sortable
      })
    },
    items () {
      const items = [{
        ...DEFAULT_SORT_ITEM,
        isActive: this.isActiveItem(DEFAULT_SORT_ITEM)
      }]

      return this.sortableColumns.reduce((memo, column) => {
        const baseItem = {
          title: column.title,
          name: column.name
        }

        const ascItem = {
          ...baseItem,
          title: this.getItemTitle(column, SORT_DIRECTIONS.ASC),
          direction: SORT_DIRECTIONS.ASC,
          isActive: this.isActiveItem({
            ...baseItem,
            direction: SORT_DIRECTIONS.ASC
          })
        }

        memo.push(ascItem)

        const descItem = {
          ...baseItem,
          title: this.getItemTitle(column, SORT_DIRECTIONS.DESC),
          direction: SORT_DIRECTIONS.DESC,
          isActive: this.isActiveItem({
            ...baseItem,
            direction: SORT_DIRECTIONS.DESC
          })
        }

        memo.push(descItem)

        return memo
      }, items)
    },
    activeItem () {
      return this.items.find((item) => {
        return item.isActive
      })
    }
  },
  methods: {
    onClick (item) {
      this.popoverShow = false

      this.localSort = item.name ? { name: item.name, direction: item.direction } : null
      this.$emit('sortChanged', this.localSort)
    },
    isActiveItem (item) {
      const sort = this.localSort

      if (sort) {
        return (item.name === sort.name) && (item.direction === sort.direction)
      } else {
        return (item.name === DEFAULT_SORT_ITEM.name)
      }
    },
    getItemTitle (column, direction) {
      const title = `Sort by ${column.title}`

      switch (column.name) {
        case CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR: {
          return (direction === SORT_DIRECTIONS.ASC) ? `${title} (oldest first)` : `${title} (newest first)`
        }
        default: {
          return (direction === SORT_DIRECTIONS.ASC) ? `${title} (A to Z)` : `${title} (Z to A)`
        }
      }
    }
  }
}
</script>

<style lang="scss">
.ui-sort-dropdown {
  color: $site-primary-color;
  opacity: .8;

  &:hover {
    opacity: 1;
  }
}

.ui-sort-dropdown_popover.popover {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;
  min-width: 300px;
  max-width: 90vw;

  .popover-body {
    padding: 0;
  }

  .arrow {
    display: none;
  }
}

.ui-sort-dropdown_item {
  display: block;
  padding: 8px 16px;
  border: 1px solid #CDE0F1;
  background: none;
  box-sizing: border-box;
  width: 100%;
  text-align: right;
  color: $site-primary-color;

  &:not(:last-of-type) {
    border-bottom: none;
  }

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }

  &.active {
    background-color: #F3F6F9;
  }

  &:focus {
    outline: none;
    border: 1px solid $site-primary-color;
  }
}
</style>
