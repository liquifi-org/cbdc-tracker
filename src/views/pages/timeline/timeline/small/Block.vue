<template>
  <div class="ui-small-timeline">
    <div class="ui-small-timeline_content">
      <div class="ui-small-timeline_timeline-border"></div>

      <div class="ui-small-timeline_events">
        <div class="ui-small-timeline_event" v-for="(item, index) in list" :key="index">
          <div class="ui-small-timeline_event-marker"></div>
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
  .ui-small-timeline_content {
    display: flex;
  }

  .ui-small-timeline_timeline-border {
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

  .ui-small-timeline_events {
    width: calc(100% - 25px);
    float: right;
  }

  .ui-small-timeline_event {
    position: relative;
  }

  .ui-small-timeline_event-marker {
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
