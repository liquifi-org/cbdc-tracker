<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item updated" :type="TIMELINE_CHANGE_TYPES.UPDATED">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Updated data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <UpdatedChange :change="change"></UpdatedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import UpdatedChange from '@/components/timeline/changes/UpdatedChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    UpdatedChange
  }
}
</script>

<style lang="scss">
  .ui-currency-timeline-item.updated .ui-currency-timeline-item_header {
    color: $timeline-updated-text-color;
  }
</style>
