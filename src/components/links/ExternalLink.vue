<template>
  <app-link class="ui-external-link" :href="href" :text="title">
    {{text}} <app-icon class="ui-external-link_icon" :name="ICON_NAMES.EXTERNAL_LINK" :text="text"></app-icon>
  </app-link>
</template>

<script>
export default {
  props: {
    href: String,
    text: String
  },
  computed: {
    title () {
      return this.text
    }
  }
}
</script>

<style lang="scss">
  .ui-external-link_icon {
    margin-left: 8px;
  }
</style>
