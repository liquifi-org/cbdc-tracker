<template>
  <div>
    <div v-if="isMobileScreen" class="ui-historic-state">
      <div class="ui-historic-state_title">
        Historic state: <span class="ui-historic-state_mobile-date">{{dateText}}</span>
      </div>

      <div class="ui-historic-state_timeline">
        <div ref="timeline" class="ui-historic-state_timeline-line">
          <div ref="marker"
               class="ui-historic-state_timeline-marker"
               :style="{left: `${markerPosition}%`}"
               @touchstart="onTouchstartDragStart"
               @mousedown="onMouseDragStart">
            <div class="ui-historic-state_timeline-marker-circle"></div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between m-t-24">
        <div class="ui-historic-state_timeline-label">{{startYear}}</div>
        <div class="ui-historic-state_timeline-label">Now</div>
      </div>
    </div>

    <div v-else class="ui-historic-state">
      <div class="ui-historic-state_title">Historic state</div>

      <div class="ui-historic-state_timeline">
        <div class="ui-historic-state_timeline-label">{{startYear}}</div>

        <div ref="timeline" class="ui-historic-state_timeline-line">
          <div ref="marker"
               class="ui-historic-state_timeline-marker"
               :style="{left: `${markerPosition}%`}"
               @touchstart="onTouchstartDragStart"
               @mousedown="onMouseDragStart">
            <div class="ui-historic-state_timeline-marker-circle"
                 :id="'timeline-marker-' + componentId"></div>
          </div>
        </div>

        <div class="ui-historic-state_timeline-label">Now</div>
      </div>

      <b-tooltip ref="tooltip"
                 custom-class="ui-historic-state_tooltip"
                 :target="'timeline-marker-' + componentId"
                 triggers="manual"
                 :no-fade="true"
                 :fallback-placement="['top']"
                 show>
        <div class="ui-historic-state_tooltip-text"
             @touchstart="onTouchstartDragStart"
             @mousedown="onMouseDragStart">{{dateText}}</div>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import { DATE_FORMATS, DateParserService } from '@/services/dateParser.service'
import { mapActions, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_ACTION_TYPES } from '@/store/modules/dashboard/actions'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

const START_YEAR = 2014

export default {
  mixins: [screenSizeMixin],
  data () {
    const markerPosition = 100

    return {
      startYear: START_YEAR,
      markerPosition
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.DASHBOARD, {
      date: (state) => {
        return state.date
      },
      isLoading: (state) => {
        return state.isCurrenciesLoading
      }
    }),
    dateText () {
      const date = this.convertMarkerPositionToDate(this.markerPosition)
      const dateParserService = new DateParserService()
      return dateParserService.format(date, DATE_FORMATS.HISTORIC_STATE)
    }
  },
  watch: {
    date (value) {
      this.markerPosition = this.convertDateToMarkerPosition(value)
    }
  },
  created () {
    this.markerPosition = this.convertDateToMarkerPosition(this.date)
  },
  destroyed () {
    this.removeDragProcessListener()
  },
  methods: {
    ...mapActions(MODULE_NAMES.DASHBOARD, {
      fetchByDate: DASHBOARD_ACTION_TYPES.FETCH_CURRENCIES_DATA_BY_DATE
    }),
    onMouseDragStart (event) {
      event.preventDefault()

      if (this.isLoading) {
        return
      }

      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.onDragFinish)
    },
    onTouchstartDragStart (event) {
      event.preventDefault()

      if (this.isLoading) {
        return
      }

      document.addEventListener('touchmove', this.onDrag)
      document.addEventListener('touchend', this.onDragFinish)
    },
    onDrag (event) {
      let clientX = 0

      if (event.type === 'touchmove') {
        clientX = event.touches[0].clientX
      } else {
        clientX = event.clientX
      }

      const markerElement = this.$refs.marker
      const timelineElement = this.$refs.timeline

      const timelineRect = timelineElement.getBoundingClientRect()
      const timelineLeft = timelineRect.left
      const timelineWidth = timelineElement.clientWidth

      const markerRect = markerElement.getBoundingClientRect()
      const markerLeft = markerRect.left
      const movementX = markerRect.left - clientX

      let leftPx = (markerLeft - timelineLeft - movementX)
      leftPx = (leftPx < 0) ? 0 : leftPx
      leftPx = (leftPx > timelineElement.clientWidth) ? timelineElement.clientWidth : leftPx

      this.markerPosition = (leftPx / (timelineWidth / 100))
    },
    onDragFinish () {
      this.removeDragProcessListener()
      this.fetchByDate({ date: this.convertMarkerPositionToDate(this.markerPosition) })
    },
    convertMarkerPositionToDate (markerPosition) {
      const startDate = new Date(`1 January ${START_YEAR}`).getTime()
      const nowDate = new Date().getTime()

      return Math.round(startDate + (((nowDate - startDate) / 100) * markerPosition))
    },
    convertDateToMarkerPosition (date) {
      const startDate = new Date(`1 January ${START_YEAR}`).getTime()
      const nowDate = new Date().getTime()

      return Math.round((date - startDate) / ((nowDate - startDate) / 100))
    },
    removeDragProcessListener () {
      document.removeEventListener('mousemove', this.onDrag)
      document.removeEventListener('mouseup', this.onDragFinish)

      document.removeEventListener('touchmove', this.onDrag)
      document.removeEventListener('touchend', this.onDragFinish)
    }
  }
}
</script>

<style lang="scss">
  .ui-historic-state {
    width: 100%;
    border: $card-line-border;
    border-radius: 8px;
    padding: 12px 16px;
  }

  .ui-historic-state_title {
    color: #7997C4;
  }

  .ui-historic-state_timeline {
    display: flex;
    align-items: center;
    margin-top: 40px;

    &> * {
      &:not(:first-of-type) {
        margin-left: 34px;
      }

      &:not(:last-of-type) {
        margin-right: 34px;
      }
    }
  }

  .ui-historic-state_timeline-line {
    position: relative;
    flex: 1;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      background: #CDE0F1;
      opacity: 0.5;
      border-radius: 2px;
    }
  }

  .ui-historic-state_timeline-marker {
    position: absolute;
  }

  .ui-historic-state_timeline-marker-circle {
    position: absolute;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: $site-primary-color;
    cursor: grabbing;
  }

  .ui-historic-state_timeline-label {
    font-weight: bold;
    font-size: 12px;
    color: #C4D4E4;
  }

  .ui-historic-state_tooltip.tooltip.b-tooltip {
    opacity: 1;
    z-index: 500;

    .tooltip-inner {
      background-color: $site-primary-color;
      border-radius: 8px;
    }

    &.bs-tooltip-top {
      .tooltip-inner {
        margin-bottom: 9px;
      }

      .arrow {
        padding-bottom: 16px;
      }

      .arrow::before {
        border-top-color: $site-primary-color;
      }
    }

    &.bs-tooltip-bottom {
      .tooltip-inner {
        margin-top: 9px;
      }

      .arrow {
        padding-top: 16px;
      }

      .arrow::before {
        border-bottom-color: $site-primary-color;
      }
    }

    .ui-historic-state_tooltip-text {
      padding: 8px 12px;
      font-weight: bold;
      color: #FFFFFF;
      cursor: grabbing;
    }
  }

  @media (max-width: $max-mobile-width) {
    .ui-historic-state_timeline {
      margin-top: 24px;
    }

    .ui-historic-state_timeline-marker-circle {
      top: -14px;
      left: -16px;
      width: 32px;
      height: 32px;
      background-color: rgba(15, 70, 152, 0.3);

      &:before {
        content: '';
        display: block;
        margin: 12px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: $site-primary-color;
        cursor: grabbing;
      }
    }

    .ui-historic-state_mobile-date {
      color: $site-primary-color;
      font-weight: bold;
    }
  }
</style>
