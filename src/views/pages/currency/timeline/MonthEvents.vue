<template>
  <div>
    <app-title :level="4">{{month}} {{year}}</app-title>

    <div class="m-b-16" v-if="changes[TIMELINE_CHANGE_TYPES.STATUS].length">
      <StatusChanges :changes="changes[TIMELINE_CHANGE_TYPES.STATUS]"></StatusChanges>
    </div>

    <div class="m-b-16" v-if="changes[TIMELINE_CHANGE_TYPES.ADDED].length">
      <AddedChanges :changes="changes[TIMELINE_CHANGE_TYPES.ADDED]"></AddedChanges>
    </div>

    <div class="m-b-16" v-if="changes[TIMELINE_CHANGE_TYPES.UPDATED].length">
      <UpdatedChanges :changes="changes[TIMELINE_CHANGE_TYPES.UPDATED]"></UpdatedChanges>
    </div>

    <div class="m-b-16" v-if="changes[TIMELINE_CHANGE_TYPES.DELETED].length">
      <DeletedChanges :changes="changes[TIMELINE_CHANGE_TYPES.DELETED]"></DeletedChanges>
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
    changes () {
      const timelineChangesService = new TimelineChangesService()
      return timelineChangesService.splitByType(this.data.tags[0].changes)
    }
  }
}
</script>
