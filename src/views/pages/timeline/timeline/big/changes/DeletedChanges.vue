<template>
  <TimelineItem class="ui-big-timeline-item deleted" :type="TIMELINE_CHANGE_TYPES.DELETED">
    <template #header>
      <app-link class="ui-big-timeline-item_header"
                :href="currencyHref"
                :text="currency">{{ currency }}</app-link>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <DeletedChange :change="change"></DeletedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'
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
    },
    currencyHref () {
      return getCurrencyRouteByTag(this.tag)
    }
  }
}
</script>
