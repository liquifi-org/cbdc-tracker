<template>
  <div>
    <TimelineLabel :text="change.title">
    </TimelineLabel> <template v-if="isOldValueShown"><component :is="valueComponent" :value="change.valueOld">
    </component> <TimelineArrow>
    </TimelineArrow></template> <component :is="valueComponent" :value="change.valueNew"></component>
  </div>
</template>

<script>
import BaseChange from './BaseChange'
import { CURRENCY_LINKS_FIELDS } from '@/constants/currencies'

export default {
  extends: BaseChange,
  computed: {
    isOldValueShown () {
      return !CURRENCY_LINKS_FIELDS.includes(this.change.property)
    }
  }
}
</script>
