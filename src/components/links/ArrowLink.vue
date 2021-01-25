<template>
  <router-link class="ui-arrow-link" :to="route" :title="title">
    {{text}} <app-icon :name="ICON_NAMES.ARROW_LINK" :text="text"></app-icon>
  </router-link>
</template>

<script>
export default {
  props: {
    route: String,
    text: String
  },
  computed: {
    title () {
      return this.text || 'Go to page'
    }
  }
}
</script>

<style lang="scss">
  .ui-arrow-link, .ui-arrow-link:hover {
    color: $site-primary-color;
  }
</style>
