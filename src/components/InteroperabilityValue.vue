<template>
  <span class="ui-interoperability-value">
    {{text}} <app-info v-show="hint" :text="hint"></app-info>
  </span>
</template>

<script>
import { capitalize } from 'lodash'

// match[1] - text, match[4] - hint
const REGEXP = /^((Yes)|(No))?[ ]?(\((.)+\))?$/

export default {
  props: {
    value: String
  },
  computed: {
    text () {
      const matches = REGEXP.exec(this.value)
      return (matches && matches[1]) || ''
    },
    hint () {
      const matches = REGEXP.exec(this.value)
      const hint = (matches && matches[4]) || ''

      if (hint) {
        return capitalize(hint.slice(1, hint.length - 2))
      } else {
        return ''
      }
    }
  }
}
</script>
