<template>
  <app-icon-button :disabled="disabled"
                   style="font-size: 24px"
                   :name="ICON_NAMES.PREVIOUS_BUTTON"
                   @click="onClick"></app-icon-button>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  props: {
    disabled: Boolean
  },
  data () {
    return {
      ICON_NAMES
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
