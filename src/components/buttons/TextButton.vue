<template>
  <button class="ui-text-button" :disabled="disabled" @click="onClick">
    {{localText}}
  </button>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  props: {
    text: String,
    disabled: Boolean
  },
  data () {
    return {
      ICON_NAMES
    }
  },
  computed: {
    localText () {
      return this.text
    }
  },
  methods: {
    onClick () {
      !this.disabled && this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  .ui-text-button {
    @extend .ui-button-without-styles;
    color: $site-primary-color;

    &:hover {
      text-decoration-line: underline;
    }

    &:focus {
      outline: 0;
      text-decoration-line: underline;
    }
  }
</style>
