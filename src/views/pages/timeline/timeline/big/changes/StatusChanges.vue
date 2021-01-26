<template>
  <TimelineItem class="ui-big-timeline-item status" :type="TIMELINE_CHANGE_TYPES.STATUS">
    <template #header>
      <div class="ui-big-timeline-item_header">{{ currency }}</div>
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
