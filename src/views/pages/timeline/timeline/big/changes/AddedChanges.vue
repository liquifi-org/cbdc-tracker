<template>
  <TimelineItem class="ui-big-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <app-link class="ui-big-timeline-item_header"
                :href="currencyHref"
                :text="currency">{{ currency }}</app-link>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <AddedChange :change="change"></AddedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'
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
    },
    currencyHref () {
      return getCurrencyRouteByTag(this.tag)
    }
  }
}
</script>
