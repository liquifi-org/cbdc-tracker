<template>
  <div class="ui-big-timeline_month-events">
    <div class="ui-big-timeline_month-events-content">
      <div :class="TIMELINE_CHANGE_TYPES.STATUS" class="ui-big-timeline_month-events-content-item">
        <div class="ui-big-timeline_month-events-header">
          <app-title :level="4">{{ month }} {{ year }}</app-title>
        </div>

        <div v-for="(changesItem, index) in changesList"
             :key="index + TIMELINE_CHANGE_TYPES.STATUS">
          <StatusChanges v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.STATUS].length"
                         :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.STATUS]"
                         :tag="changesItem.tag"
                         class="m-b-8"></StatusChanges>
        </div>
      </div>

      <div :class="TIMELINE_CHANGE_TYPES.ADDED" class="ui-big-timeline_month-events-content-item">
        <div v-for="(changesItem, index) in changesList"
             :key="index + TIMELINE_CHANGE_TYPES.ADDED">
          <AddedChanges v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.ADDED].length"
                        :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.ADDED]"
                        :tag="changesItem.tag"
                        class="m-b-8"></AddedChanges>
        </div>
      </div>

      <div :class="TIMELINE_CHANGE_TYPES.UPDATED"
           class="ui-big-timeline_month-events-content-item">
        <div v-for="(changesItem, index) in changesList"
             :key="index + TIMELINE_CHANGE_TYPES.UPDATED">
          <UpdatedChanges v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.UPDATED].length"
                          :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.UPDATED]"
                          :tag="changesItem.tag"
                          class="m-b-8"></UpdatedChanges>
        </div>
      </div>

      <div :class="TIMELINE_CHANGE_TYPES.DELETED"
           class="ui-big-timeline_month-events-content-item">
        <div v-for="(changesItem, index) in changesList"
             :key="index + TIMELINE_CHANGE_TYPES.DELETED">
          <DeletedChanges v-if="changesItem.changes[TIMELINE_CHANGE_TYPES.DELETED].length"
                          :changes="changesItem.changes[TIMELINE_CHANGE_TYPES.DELETED]"
                          :tag="changesItem.tag"
                          class="m-b-8"></DeletedChanges>
        </div>
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
$big-timeline_month-events-header-height: 30px;

.ui-big-timeline_month-events-content {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.ui-big-timeline_month-events-header {
  height: $big-timeline_month-events-header-height;
  padding-top: 8px;
  box-sizing: border-box;
}

.ui-big-timeline_month-events-content-item {
  width: 25%;
  padding: 0 16px;

  &:not(:last-of-type) {
    border-right: $card-line-border;
  }

  &.updated, &.added, &.deleted {
    padding-top: $big-timeline_month-events-header-height;
  }
}

.ui-big-timeline-item_header {
  color: $default-font-color;
}
</style>
