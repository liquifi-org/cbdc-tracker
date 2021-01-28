<template>
  <div class="ui-info-item links">
    <InfoItemTitle :title="title"></InfoItemTitle>

    <div v-for="(link, index) in links" :key="index">
      <app-link :href="link.href">
        {{link.text}}
      </app-link>
    </div>
  </div>
</template>

<script>
import BaseInfoItem from './BaseInfoItem'
import { LinkParserService } from '@/services/linkParser.service'

export default {
  extends: BaseInfoItem,
  computed: {
    links () {
      const linkParserService = new LinkParserService()
      return linkParserService.parseStringToObjectArray(this.value)
    }
  }
}
</script>

<style lang="scss">
  .ui-currency-info-item.links {
    a {
      color: $site-primary-color;
    }
  }
</style>
