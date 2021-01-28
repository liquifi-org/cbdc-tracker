<template>
  <TimelineItem :isFullWidth="true" class="ui-small-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <div class="ui-small-timeline-item_header">
        <span class="ui-small-timeline-item_header-currency">{{ currency }}</span> <app-icon :name="ICON_NAMES.ADD"></app-icon> Added data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <AddedChange :change="change"></AddedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import AddedChange from '@/components/timeline/changes/AddedChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    AddedChange
  },
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
