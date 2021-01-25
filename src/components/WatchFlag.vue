<template>
  <app-active-element :class="{'isSelected': localIsSelected}"
                      :disabled="isDisabled"
                      class="ui-watch-flag"
                      @click="toggleIsSelected">
    <app-icon v-if="localIsSelected" :name="ICON_NAMES.WATCHLIST_SELECTED_ITEM"></app-icon>
    <app-icon v-else :name="ICON_NAMES.WATCHLIST_UNSELECTED_ITEM"></app-icon>
  </app-active-element>
</template>

<script>
export default {
  props: {
    isSelected: Boolean,
    isDisabled: Boolean
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
