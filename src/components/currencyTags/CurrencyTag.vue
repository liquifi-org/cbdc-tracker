<template>
  <app-active-element class="ui-tag"
          :class="{'active': localIsSelected}"
          :disabled="!isSelectable && !isLinks"
          @click="onClick">
    <app-icon :name="ICON_NAMES.TAG"></app-icon> <span class="ui-tag-text">{{data.currency}}</span>
  </app-active-element>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'

export default {
  props: {
    data: Object,
    isSelectable: Boolean,
    isLinks: Boolean
  },
  data () {
    return {
      ICON_NAMES,
      localIsSelected: this.data.isSelected || false
    }
  },
  watch: {
    data (newVal) {
      this.localIsSelected = newVal.isSelected || false
    }
  },
  methods: {
    onClick () {
      if (this.isSelectable) {
        this.localIsSelected = !this.localIsSelected
        this.$emit('change', this.localIsSelected)
      }

      if (this.isLinks) {
        const route = getCurrencyRouteByTag(this.data)

        if (route !== this.$route.fullPath) {
          this.$router.push(route)
        }
      }
    }
  }
}
</script>

<style lang="scss">
  button.ui-tag {
    display: inline-block;
    padding: 2px 4px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #CDE0F1;
    border-radius: 4px;
    color: #CDE0F1;
    font-size: 12px;

    .ui-tag-text {
      color: $site-primary-color;
      opacity: .8;
    }

    &:hover:not([disabled]), &.active {
      color: $site-primary-color;
      border-color: $site-primary-color;

      .ui-tag-text {
        opacity: 1;
      }
    }
  }
</style>
