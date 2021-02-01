<template>
  <app-active-element class="ui-clear-button"
                      :disabled="disabled"
                      @click="onClick">
    <app-icon :name="ICON_NAMES.CLEAR"></app-icon> <span class="ui-clear-button_text">{{localText}}</span>
  </app-active-element>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  name: 'ClearButton',
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
      return this.text || 'Clear'
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
  .ui-clear-button {
    color: $site-primary-color;

    &:hover {
      .ui-clear-button_text {
        text-decoration-line: underline;
      }
    }
  }
</style>
