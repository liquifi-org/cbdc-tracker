<template>
  <TimelineItem :isFullWidth="true" class="ui-small-timeline-item deleted" :type="TIMELINE_CHANGE_TYPES.DELETED">
    <template #header>
      <div class="ui-small-timeline-item_header">
        <span class="ui-small-timeline-item_header-currency">{{ currency }}</span> <app-icon :name="ICON_NAMES.DELETE"></app-icon> Deleted data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <DeletedChange :change="change"></DeletedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import DeletedChange from '@/components/timeline/changes/DeletedChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    DeletedChange
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
