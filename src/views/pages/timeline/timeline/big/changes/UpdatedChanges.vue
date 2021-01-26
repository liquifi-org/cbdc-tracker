<template>
  <TimelineItem class="ui-big-timeline-item updated" :type="TIMELINE_CHANGE_TYPES.UPDATED">
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
      <TimelineArrow>
      </TimelineArrow>
      {{ getChangeShortText(change.valueOld) }}
      <app-info
        v-show="isChangeInfoShown(change.valueOld)"
        :text="change.valueOld"
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
