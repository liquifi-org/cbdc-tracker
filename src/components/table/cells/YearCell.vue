<template>
  <div :title="year">{{ year }}</div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'
import { DateParserService, DATE_FORMATS } from '@/services/dateParser.service'

export default {
  extends: BaseCell,
  computed: {
    year () {
      return new DateParserService().format(this.displayData.timestamp, DATE_FORMATS.YEAR)
    }
  }
}
</script>
