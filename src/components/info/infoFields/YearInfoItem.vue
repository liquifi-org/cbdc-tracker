<template>
  <div class="ui-info-item">
    <InfoItemTitle :title="title"></InfoItemTitle>
    <div class="ui-info-item_data">{{ year }}</div>
  </div>
</template>

<script>
import { DATE_FORMATS, DateParserService } from '@/services/dateParser.service'
import BaseInfoItem from './BaseInfoItem'

export default {
  extends: BaseInfoItem,
  computed: {
    year () {
      const dateParser = new DateParserService()
      return dateParser.format(this.value, DATE_FORMATS.YEAR)
    }
  }
}
</script>
