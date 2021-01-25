<template>
  <TimelineItem :isFullWidth="true" class="ui-currency-timeline-item updated" :type="TIMELINE_CHANGE_TYPES.UPDATED">
    <template #header>
      <div class="ui-currency-timeline-item_header">
        <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Updated data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <TimelineLabel :text="change.title"></TimelineLabel> {{getChangeShortText(change.valueNew)}} <app-info
        v-show="isChangeInfoShown(change.valueNew)"
        :text="change.valueNew"
      ></app-info> <TimelineArrow>
      </TimelineArrow> {{getChangeShortText(change.valueOld)}} <app-info
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
  .ui-currency-timeline-item.updated .ui-currency-timeline-item_header {
    color: $timeline-updated-text-color;
  }
</style>
