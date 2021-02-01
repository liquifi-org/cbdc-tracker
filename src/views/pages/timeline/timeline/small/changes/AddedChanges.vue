<template>
  <TimelineItem :isFullWidth="true" class="ui-small-timeline-item added" :type="TIMELINE_CHANGE_TYPES.ADDED">
    <template #header>
      <div class="ui-small-timeline-item_header">
        <app-link class="ui-small-timeline-item_header-currency"
                  :href="currencyHref"
                  :text="currency">{{ currency }}</app-link> <app-icon :name="ICON_NAMES.ADD"></app-icon> Added data
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
import { getCurrencyRouteByTag } from '@/utils/getCurrencyRouteByTag'

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
