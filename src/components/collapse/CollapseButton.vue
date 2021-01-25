<template>
  <app-active-element v-b-toggle="target"
                      class="ui-collapse-button"
                      @click="onClick">
    <span v-if="!isTextRight && text" class="m-r-8">{{text}}</span>

    <app-icon v-if="!isExpanded" :name="ICON_NAMES.EXPAND"></app-icon>
    <app-icon v-if="isExpanded" :name="ICON_NAMES.COLLAPSE"></app-icon>

    <span v-if="isTextRight && text" class="m-l-8">{{text}}</span>
  </app-active-element>
</template>

<script>
export default {
  props: {
    collapseText: String,
    expandText: String,
    isTextRight: Boolean,
    target: String
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    text () {
      return this.isExpanded ? this.collapseText : this.expandText
    }
  },
  methods: {
    onClick () {
      this.isExpanded = !this.isExpanded
      this.isExpanded ? this.$emit('collapse') : this.$emit('expand')
      this.$emit('toggle', this.isExpanded)
    }
  }
}
</script>

<style lang="scss">
  .ui-collapse-button, .ui-collapse-button:hover {
    color: $site-primary-color;
  }

  .ui-collapse-button {
    opacity: .8;

    &:hover {
      opacity: 1;
    }
  }
</style>
