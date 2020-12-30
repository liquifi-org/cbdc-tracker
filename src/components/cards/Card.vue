<template>
  <b-card class="ui-card" :class="{hasHeader, hasContent}">
    <header class="ui-card_header">
      <slot name="header"></slot>
      <app-card-line v-if="hasHeader && hasContent" class="m-t-16"></app-card-line>
    </header>

    <slot></slot>
  </b-card>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  data () {
    return {
      hasHeader: false,
      hasContent: false
    }
  },
  update () {
    this.updateHasContent()
  },
  mounted () {
    this.updateHasContent()
  },
  methods: {
    onScreenResize () {
      this.updateHasContent()
    },
    checkForSlotContent (slotName) {
      slotName = slotName || 'default'
      return !!this.$scopedSlots[slotName] && !!this.$scopedSlots[slotName]()
    },
    updateHasContent () {
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.hasHeader = this.checkForSlotContent('header')
          this.hasContent = this.checkForSlotContent()
        })
      })
    }
  }
}
</script>

<style lang="scss">
  .ui-card.card {
    border: none;
    border-radius: 8px;

    .card-header {
      background-color: inherit;
      padding: 0;
      border: none;
    }

    .card-body {
      padding: 16px;
    }

    .ui-card_header {
      margin: -16px -16px 0 -16px;
      padding: 16px 16px 0 16px;
      border-radius: 8px 8px 0 0;
    }

    &.hasHeader.hasContent {
      .ui-card_header {
        margin-bottom: 16px;
      }
    }
  }
</style>
