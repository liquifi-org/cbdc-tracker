<template>
  <div class="ui-big-timeline">
    <div class="ui-big-timeline_header">
      <div class="ui-big-timeline_header-offset"></div>

      <div class="ui-big-timeline_header-statuses">
        <div class="ui-big-timeline_header-status status">
          <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Status update
        </div>

        <div class="ui-big-timeline_header-status added">
          <app-icon :name="ICON_NAMES.ADD"></app-icon> Added data
        </div>

        <div class="ui-big-timeline_header-status updated">
          <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Updated data
        </div>

        <div class="ui-big-timeline_header-status deleted">
          <app-icon :name="ICON_NAMES.DELETE"></app-icon> Deleted data
        </div>
      </div>
    </div>

    <div class="ui-big-timeline_content">
      <div class="ui-big-timeline_timeline-border"></div>

      <div class="ui-big-timeline_events">
        <div class="ui-big-timeline_event" v-for="(item, index) in list" :key="index">
          <div class="ui-big-timeline_event-marker"></div>
          <MonthEvents :data="item"></MonthEvents>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthEvents from './MonthEvents'

export default {
  props: {
    list: Array
  },
  components: {
    MonthEvents
  }
}
</script>

<style lang="scss">
$big-timeline-height: 40px;
$big-timeline-line-block-width: 32px;

.ui-big-timeline {
}

.ui-big-timeline_header {
  display: flex;
  position: sticky;
  z-index: 200;
  top: 0;
}

.ui-big-timeline_header-offset {
  height: $big-timeline-height;
  width: $big-timeline-line-block-width;
  background-color: $timeline-status-header-background-color;
}

.ui-big-timeline_header-statuses {
  display: flex;
  width: calc(100% - #{$big-timeline-line-block-width});
}

.ui-big-timeline_header-status {
  height: $big-timeline-height;
  width: 25%;
  line-height: $big-timeline-height;
  font-weight: bold;
  font-size: 12px;
  padding-left: 16px;

  &.status {
    background-color: $timeline-status-header-background-color;
    color: $timeline-status-text-color;
  }

  &.added {
    background-color: $timeline-added-header-background-color;
    color: $timeline-added-text-color;
  }

  &.deleted {
    background-color: $timeline-deleted-header-background-color;
    color: $timeline-deleted-text-color;
  }

  &.updated {
    background-color: $timeline-updated-header-background-color;
    color: $timeline-updated-text-color;
  }
}

.ui-big-timeline_content {
  display: flex;
}

.ui-big-timeline_timeline-border {
  float: left;
  width: $big-timeline-line-block-width;
  min-height: 100%;
  opacity: 0.5;

  &::before {
    content: '';
    margin: 16px 14px 0 14px;
    background: #CDE0F1;
    width: 4px;
    min-height: calc(100% - 16px);
    display: block;
  }
}

.ui-big-timeline_events {
  width: 100%;
}

.ui-big-timeline_event {
  display: flex;
  width: calc(100% + #{$big-timeline-line-block-width});
  margin-left: -#{$big-timeline-line-block-width};

  &:not(:last-of-type) {
    border-bottom: $card-line-border;
  }
}

.ui-big-timeline_event-marker {
  width: 16px;
  height: 16px;
  background: rgba(205, 224, 241, .3);
  border-radius: 100%;
  margin: 6px 8px 10px 8px;
  padding: 6px;
  z-index: 100;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: $site-primary-color;
    border-radius: 100%;
    display: block;
  }
}

.ui-big-timeline_month-events {
  flex: 1;
}

.ui-big-timeline_event {
  &:not(:last-of-type) {
    .ui-big-timeline_event-marker {
      border-bottom: $card-line-border;
    }
  }
}
</style>
