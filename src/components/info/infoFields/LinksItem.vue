<template>
  <div class="ui-info-item links">
    <InfoItemTitle :title="title"></InfoItemTitle>

    <div v-for="(link, index) in links" :key="index">
      <app-link :href="link"></app-link>
    </div>
  </div>
</template>

<script>
import BaseInfoItem from './BaseInfoItem'

export default {
  extends: BaseInfoItem,
  computed: {
    links () {
      return this.value.split('\n')
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
