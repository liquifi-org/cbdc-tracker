<template>
  <div class="ui-list-card" :class="{'hasMoreItems': hasMoreItems, 'isLoading': isLoading}">
    <app-card class="ui-list-card_card">
      <template v-if="hasHeader" #header>
        <slot name="header"></slot>
      </template>

      <div>
        <div class="ui-list-card_item" v-for="(item, index) in items" :key="index">
          <slot name="item" v-bind:item="item">
            {{item}}
          </slot>

          <app-card-line class="ui-list-card_item-line m-t-16 m-b-16"></app-card-line>
        </div>
      </div>
    </app-card>

    <div class="ui-list-card_show-more-wrapper text-center">
      <app-show-more-button :isBlock="isMobileScreen"
                            :isLoading="isLoading"
                            :text="showMoreButtonText"
                            class="m-t-16 m-b-16"
                            @click="onShowMoreClick"></app-show-more-button>
    </div>
  </div>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  props: {
    items: Array,
    totalItemsCount: Number,
    showMoreButtonText: String,
    isLoading: Boolean
  },
  computed: {
    localTotalItemsCount () {
      return this.totalItemsCount || this.items.length
    },
    localShowMoreButtonText () {
      return this.showMoreButtonText || 'Show more'
    },
    localIsLoading () {
      return this.isLoading || false
    },
    hasMoreItems () {
      return (this.localTotalItemsCount > this.items.length) && (this.items.length > 0)
    },
    hasHeader () {
      return !!this.$slots.header && !!this.$scopedSlots.header
    }
  },
  methods: {
    onShowMoreClick () {
      this.$emit('showMore')
    }
  }
}
</script>

<style lang="scss">
  .ui-list-card {
    .card-body {
      min-height: 150px;
    }

    .ui-list-card_item:last-of-type {
      .ui-list-card_item-line {
        display: none;
      }
    }

    &:not(.hasMoreItems) {
      .ui-list-card_show-more-wrapper {
        display: none;
      }
    }

    &.isLoading {
      .card-body {
        min-height: auto;
      }

      .ui-list-card_show-more-wrapper {
        display: block;
      }
    }
  }
</style>
