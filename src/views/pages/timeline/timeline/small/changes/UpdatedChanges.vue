<template>
  <TimelineItem :isFullWidth="true" class="ui-small-timeline-item updated" :type="TIMELINE_CHANGE_TYPES.UPDATED">
    <template #header>
      <div class="ui-small-timeline-item_header">
        <app-link class="ui-small-timeline-item_header-currency"
                  :href="currencyHref"
                  :text="currency">{{ currency }}</app-link> <app-icon :name="ICON_NAMES.UPDATE"></app-icon> Updated data
      </div>
    </template>

    <div v-for="(change, index) in changes" :key="index">
      <UpdatedChange :change="change"></UpdatedChange>
    </div>
  </TimelineItem>
</template>

<script>
import BaseTimelineChanges from '@/components/timeline/BaseTimelineChanges'
import { getCurrencyMockNameByTag } from '@/utils/getCurrencyMockNameByTag'
import UpdatedChange from '@/components/timeline/changes/UpdatedChange'
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'

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
