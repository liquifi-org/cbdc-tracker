<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.ADD"></app-icon> Added data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <TimelineLabel :text="change.title"></TimelineLabel> {{getChangeShortText(change.valueNew)}} <app-info
        v-show="isChangeInfoShown(change.valueNew)"
        :text="change.valueNew"
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
  .ui-currency-timeline-item.added .ui-currency-timeline-item_header {
    color: $timeline-added-text-color;
  }
</style>
