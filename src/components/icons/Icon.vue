<template>
  <span class="ui-icon">
    <component v-bind:is="iconComponent"
               :text="text"></component>
  </span>
</template>

<script>
import { Resolver } from '@/components/icons/resolver'

export default {
  props: {
    name: String,
    text: String,
    height: String,
    width: String
  },
  computed: {
    iconComponent () {
      return this.name && Resolver.resolve(this.name)
    }
  }
}
</script>

<style lang="scss">
  .ui-icon {
    &svg, svg {
      fill: currentColor;
      height: 1em;
      width: 1em;
    }
  }
</style>
