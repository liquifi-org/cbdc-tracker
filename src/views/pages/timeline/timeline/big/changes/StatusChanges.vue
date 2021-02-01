<template>
  <TimelineItem class="ui-big-timeline-item status" :type="TIMELINE_CHANGE_TYPES.STATUS">
    <template #header>
      <app-link class="ui-big-timeline-item_header"
                :href="currencyHref"
                :text="currency">{{ currency }}</app-link>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <StatusChange :change="change"></StatusChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'
import StatusChange from '@/components/timeline/changes/StatusChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    StatusChange
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
