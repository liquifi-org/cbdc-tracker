<template>
  <span>
      <app-link v-for="(link, index) in links"
                class="m-r-4"
                :key="index"
                :href="link.href">
        {{link.text}}
      </app-link>
  </span>
</template>

<script>
import BaseValueChange from './BaseValueChange'
import { LinkParserService } from '@/services/linkParser.service'

export default {
  extends: BaseValueChange,
  computed: {
    links () {
      const linkParserService = new LinkParserService()
      return linkParserService.parseStringToObjectArray(this.value)
    }
  }
}
</script>
