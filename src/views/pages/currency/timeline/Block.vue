<template>
  <div class="ui-currency-timeline-card" :class="{'hasMoreItems': hasMoreItems, 'isLoading': isLoading}">
    <template v-if="isMobileScreen">
      <div class="m-b-16">
        <app-title>Timeline</app-title>
        Last update: {{ lastUpdate }}
      </div>

      <app-card class="ui-currency-timeline-card_card">
        <div class="ui-currency-timeline-card_content">
          <div class="ui-currency-timeline-card_timeline-border"></div>

          <div class="ui-currency-timeline-card_events">
            <div class="ui-currency-timeline-card_event" v-for="(item, index) in list" :key="index">
              <div class="ui-currency-timeline-card_event-marker"></div>
              <MonthEvents :data="item"></MonthEvents>
            </div>
          </div>
        </div>
      </app-card>
    </template>

    <app-card v-else class="ui-currency-timeline-card_card">
      <template #header>
        <app-title>Timeline</app-title>
        Last update: {{ lastUpdate }}
      </template>

      <div class="ui-currency-timeline-card_content">
        <div class="ui-currency-timeline-card_timeline-border"></div>

        <div class="ui-currency-timeline-card_events">
          <div class="ui-currency-timeline-card_event" v-for="(item, index) in list" :key="index">
            <div class="ui-currency-timeline-card_event-marker"></div>
            <MonthEvents :data="item"></MonthEvents>
          </div>
        </div>
      </div>
    </app-card>

    <div class="ui-currency-timeline-card_show-more-wrapper text-center">
      <app-show-more-button :isBlock="isMobileScreen"
                            :isLoading="isLoading"
                            text="Show more events"
                            class="m-t-16 m-b-16"
                            @click="fetchNextTimeline"></app-show-more-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { CURRENCY_PAGE_ACTION_TYPES } from '@/store/modules/currencyPage/actions'
import MonthEvents from './MonthEvents'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    MonthEvents
  },
  computed: {
    ...mapState(MODULE_NAMES.CURRENCY_PAGE, {
      isLoading: (state) => {
        return state.timeline.isLoading
      },
      totalElements: (state) => {
        return state.timeline.totalElements
      }
    }),
    ...mapGetters(MODULE_NAMES.CURRENCY_PAGE, {
      list: 'listWithTitles',
      lastUpdate: 'lastUpdate'
    }),
    hasMoreItems () {
      return (this.totalElements > this.list.length)
    }
  },
  methods: {
    ...mapActions(MODULE_NAMES.CURRENCY_PAGE, {
      fetchNextTimeline: CURRENCY_PAGE_ACTION_TYPES.FETCH_NEXT_TIMELINE_PAGE
    })
  }
}
</script>

<style lang="scss">
  .ui-currency-timeline-card {
    .card-body {
      min-height: 150px;
    }

    .ui-currency-timeline-card_show-more-wrapper {
      height: 68px;
    }

    &:not(.hasMoreItems) {
      .ui-currency-timeline-card_show-more-wrapper {
        display: none;
      }
    }

    &.hasMoreItems {
      .ui-card.card {
        border: none;
      }

      .card-body {
        padding-bottom: 0;
      }
    }

    &.isLoading {
      .card-body {
        min-height: auto;
      }

      .ui-currency-timeline-card_card {
        min-height: auto;
      }

      .ui-currency-timeline-card_show-more-wrapper {
        display: block;
      }
    }
  }

  .ui-currency-timeline-card_content {
    padding-top: 16px;
    display: flex;
  }

  .ui-currency-timeline-card_timeline-border {
    float: left;
    min-width: 25px;
    min-height: 100%;
    opacity: 0.5;

    &::before {
      content: '';
      margin: 8px 0 0 6px;
      background: #CDE0F1;
      width: 4px;
      min-height: calc(100% - 8px);
      display: block;
    }
  }

  .ui-currency-timeline-card_events {
    width: calc(100% - 25px);
    float: right;
  }

  .ui-currency-timeline-card_event {
    position: relative;
  }

  .ui-currency-timeline-card_event-marker {
    position: absolute;
    left: -25px;
    width: 16px;
    height: 16px;
    background: rgba(205, 224, 241, .3);
    border-radius: 100%;
    padding: 6px;

    &::before {
      content: '';
      width: 4px;
      height: 4px;
      background: $site-primary-color;
      border-radius: 100%;
      display: block;
    }
  }
</style>
