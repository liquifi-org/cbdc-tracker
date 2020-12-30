<template>
  <button class="ui-button-without-styles ui-watch-flag" :class="{'isSelected': localIsSelected}"
          v-on:click="toggleIsSelected"
          :disabled="isDisabled">
    <app-icon v-if="localIsSelected" :name="ICON_NAMES.WATCHLIST_SELECTED_ITEM"></app-icon>
    <app-icon v-else :name="ICON_NAMES.WATCHLIST_UNSELECTED_ITEM"></app-icon>
  </button>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  props: {
    isSelected: Boolean,
    isDisabled: Boolean
  },
  data () {
    return {
      ICON_NAMES
    }
  },
  computed: {
    localIsSelected () {
      return this.isSelected
    }
  },
  methods: {
    toggleIsSelected () {
      if (this.isDisabled) {
        return
      }

      this.$emit('isSelectedChanged', !this.localIsSelected)
    }
  }
}
</script>

<style lang="scss">
  .ui-watch-flag {
    color: #67A8EF;

    &.isSelected {
      color: $site-primary-color;
    }
  }
</style>
