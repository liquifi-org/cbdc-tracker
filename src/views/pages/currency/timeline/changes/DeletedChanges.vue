<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item deleted" :type="TIMELINE_CHANGE_TYPES.DELETED">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.DELETE"></app-icon> Deleted data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <TimelineLabel :text="change.title"></TimelineLabel> {{getChangeShortText(change.valueOld)}} <app-info
        v-show="isChangeInfoShown(change.valueOld)"
        :text="change.valueOld"
      ></app-info>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'

export default {
  extends: BaseTimelineChanges
}
</script>

<style lang="scss">
  .ui-currency-timeline-item.deleted .ui-currency-timeline-item_header {
    color: $timeline-deleted-text-color;
  }
</style>
