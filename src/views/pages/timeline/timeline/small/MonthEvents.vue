<template>
  <div>
    <app-title :level="4">{{ month }} {{ year }}</app-title>

    <div v-for="(changesItem, index) in changesList" :key="index">
      <div class="m-b-16" v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.STATUS].length">
        <StatusChanges :tag="changesItem.tag"
                       :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.STATUS]"></StatusChanges>
      </div>

      <div class="m-b-16" v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.ADDED].length">
        <AddedChanges :tag="changesItem.tag"
                      :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.ADDED]"></AddedChanges>
      </div>

      <div class="m-b-16" v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.UPDATED].length">
        <UpdatedChanges :tag="changesItem.tag"
                        :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.UPDATED]"></UpdatedChanges>
      </div>

      <div class="m-b-16" v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.DELETED].length">
        <DeletedChanges :tag="changesItem.tag"
                        :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.DELETED]"></DeletedChanges>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineChangesService } from '@/services/timelineChanges.service'
import { DateParserService } from '@/services/dateParser.service'
import StatusChanges from './changes/StatusChanges'
import AddedChanges from './changes/AddedChanges'
import DeletedChanges from './changes/DeletedChanges'
import UpdatedChanges from './changes/UpdatedChanges'
import { TIMELINE_CHANGE_TYPES } from '@/constants/timeline'

export default {
  components: {
    StatusChanges,
    AddedChanges,
    DeletedChanges,
    UpdatedChanges
  },
  props: {
    data: Object
  },
  data () {
    return {
      TIMELINE_CHANGE_TYPES
    }
  },
  computed: {
    year () {
      return this.data.year
    },
    month () {
      const dateParserService = new DateParserService()
      return dateParserService.getMonthNameByNumber(this.data.month)
    },
    changesList () {
      const timelineChangesService = new TimelineChangesService()

      return this.data.tags.map((tagItem) => {
        return {
          tag: tagItem.tag,
          changes: timelineChangesService.splitByType(tagItem.changes)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.ui-small-timeline-item.added .ui-small-timeline-item_header {
  color: $timeline-added-text-color;
}

.ui-small-timeline-item.deleted .ui-small-timeline-item_header {
  color: $timeline-deleted-text-color;
}

.ui-small-timeline-item.status .ui-small-timeline-item_header {
  color: $timeline-status-text-color;
}

.ui-small-timeline-item.updated .ui-small-timeline-item_header {
  color: $timeline-updated-text-color;
}

.ui-small-timeline-item_header-currency {
  color: $default-font-color;
}
</style>
