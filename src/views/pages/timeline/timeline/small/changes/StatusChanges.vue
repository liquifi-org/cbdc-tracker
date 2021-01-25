<template>
  <TimelineItem :isFullWidth="true" class="ui-small-timeline-item status" :type="TIMELINE_CHANGE_TYPES.STATUS">
    <template #header>
      <div class="ui-small-timeline-item_header">
        <span class="ui-small-timeline-item_header-currency">{{ currency }}</span> <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Status updated
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      {{ change.valueOld || STATUS_NAMES.NONE }}
      <TimelineArrow></TimelineArrow>
      {{ change.valueNew }}
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'

export default {
  extends: BaseTimelineChanges,
  props: {
    tag: Object
  },
  computed: {
    currency () {
      return this.tag.currency || getCurrencyMockNameByTag(this.tag)
    }
  }
}
</script>
