<template>
  <span>
    {{shortText}} <app-info v-show="isChangeInfoShown" :text="value"></app-info>
  </span>
</template>

<script>
import { TIMELINE_MAX_TEXT_LENGTH } from '../constants'
import BaseValueChange from './BaseValueChange'

export default {
  extends: BaseValueChange,
  computed: {
    shortText () {
      return (this.value.length > TIMELINE_MAX_TEXT_LENGTH) ? `${this.value.slice(0, TIMELINE_MAX_TEXT_LENGTH)}...` : this.value
    },
    isChangeInfoShown () {
      return (this.value.length > TIMELINE_MAX_TEXT_LENGTH)
    }
  }
}
</script>
