<template>
  <div>
    <div v-for="(link, index) in links" :key="index">
      <app-link :href="link.href">
        <app-icon :name="ICON_NAMES.SOURCE_LINK" :text="link.href"></app-icon> {{ link.text }}
      </app-link>
    </div>
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'
import { LinkParserService } from '@/services/linkParser.service'

export default {
  extends: BaseCell,
  computed: {
    links () {
      const linkParserService = new LinkParserService()
      return linkParserService.parseStringToObjectArray(this.displayData.value)
    }
  }
}
</script>
