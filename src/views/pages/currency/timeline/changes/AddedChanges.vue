<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.ADD"></app-icon> Added data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <AddedChange :change="change"></AddedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import AddedChange from '@/components/timeline/changes/AddedChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    AddedChange
  }
}
</script>

<style lang="scss">
  .ui-currency-timeline-item.added .ui-currency-timeline-item_header {
    color: $timeline-added-text-color;
  }
</style>
