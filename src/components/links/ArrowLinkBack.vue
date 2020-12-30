<template>
  <router-link class="ui-arrow-link-back" :to="route" :title="title">
    <app-icon :name="ICON_NAMES.ARROW_LINK_BACK" :text="text"></app-icon> {{text}}
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
      return this.text || 'Back to page'
    }
  }
}
</script>

<style lang="scss">
  .ui-arrow-link-back, .ui-arrow-link-back:hover {
    color: $site-primary-color;
  }

  .ui-arrow-link-back {
    opacity: .8;

    &:hover {
      opacity: 1;
    }
  }
</style>
