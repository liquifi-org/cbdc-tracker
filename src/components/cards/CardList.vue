<template>
  <div class="ui-card-list" :class="{'hasMoreItems': hasMoreItems, 'isLoading': isLoading}">
    <header>
      <slot name="header"></slot>
    </header>

    <app-card class="ui-card-list_card" v-for="(item, index) in items" :key="index">
      <slot name="item" v-bind:item="item">
        {{item}}
      </slot>
    </app-card>

    <div class="ui-card-list_show-more-wrapper text-center">
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
      return (this.localTotalItemsCount > this.items.length)
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
  .ui-card-list {
    .ui-card-list_card {
      margin-bottom: 16px;
    }

    &:not(.hasMoreItems) {
      .ui-card-list_show-more-wrapper {
        display: none;
      }
    }

    &.isLoading {
      .ui-card-list_show-more-wrapper {
        display: block;
      }
    }
  }
</style>
