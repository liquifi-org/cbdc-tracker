<template>
  <TimelineItem class="ui-big-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <div class="ui-big-timeline-item_header">{{ currency }}</div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <TimelineLabel :text="change.title"></TimelineLabel>
      {{ getChangeShortText(change.valueNew) }}
      <app-info
        v-show="isChangeInfoShown(change.valueNew)"
        :text="change.valueNew"
      ></app-info>
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
