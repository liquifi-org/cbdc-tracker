<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item status" :type="TIMELINE_CHANGE_TYPES.STATUS">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Status updated
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <StatusChange :change="change"></StatusChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import StatusChange from '@/components/timeline/changes/StatusChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    StatusChange
  }
}
</script>

<style lang="scss">
  .ui-currency-timeline-item.status .ui-currency-timeline-item_header {
    color: $timeline-status-text-color;
  }
</style>
