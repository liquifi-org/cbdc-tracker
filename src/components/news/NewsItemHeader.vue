<template>
  <header>
    <div class="d-flex justify-content-start align-items-center m-b-8">
      <div class="ui-news-item_date m-r-16">
        <span><app-icon :name="ICON_NAMES.CALENDAR" text="Date"></app-icon> {{created}}</span>
      </div>

      <div class="ui-news-item_source">
        <a :href="sourceUrl"><app-icon :name="ICON_NAMES.SOURCE_LINK" text="Source"></app-icon> {{sourceName}}</a>
      </div>
    </div>

    <app-title level="3">{{title}}</app-title>
  </header>
</template>

<script>
import { DateParserService } from '@/services/dateParser.service'
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  props: {
    data: Object
  },
  data () {
    return {
      ICON_NAMES
    }
  },
  computed: {
    created () {
      const dateParser = new DateParserService()
      return dateParser.format(this.data.created)
    },
    sourceName () {
      return this.data.sourceName
    },
    sourceUrl () {
      return this.data.sourceUrl
    },
    title () {
      return this.data.title
    }
  }
}
</script>
