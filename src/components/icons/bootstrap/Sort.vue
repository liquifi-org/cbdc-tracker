<template>
  <span :title="localText">
    <app-icon v-if="direction === SORT_DIRECTIONS.ASC" :name="ICON_NAMES.SORT_ASC" :text="localText"></app-icon>
    <app-icon v-if="direction === SORT_DIRECTIONS.DESC" :name="ICON_NAMES.SORT_DESC" :text="localText"></app-icon>
  </span>
</template>

<script>
import BaseCell from '../BaseIconWrapper'
import { SORT_DIRECTIONS } from '@/constants/sortDirections'

export default {
  extends: BaseCell,
  props: {
    direction: null
  },
  data () {
    return {
      SORT_DIRECTIONS
    }
  },
  computed: {
    localText () {
      if (this.text) {
        return this.text
      }

      switch (this.direction) {
        case SORT_DIRECTIONS.ASC:
          return 'Ascending'
        case SORT_DIRECTIONS.DESC:
          return 'Descending'
        default:
          return ''
      }
    }
  }
}
</script>
