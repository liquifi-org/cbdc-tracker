<template>
  <TimelineItem class="ui-big-timeline-item updated" :type="TIMELINE_CHANGE_TYPES.UPDATED">
    <template #header>
      <app-link class="ui-big-timeline-item_header"
                :href="currencyHref"
                :text="currency">{{ currency }}</app-link>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <UpdatedChange :change="change"></UpdatedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'
import UpdatedChange from '@/components/timeline/changes/UpdatedChange'

export default {
  extends: BaseTimelineChanges,
  components: {
    UpdatedChange
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
