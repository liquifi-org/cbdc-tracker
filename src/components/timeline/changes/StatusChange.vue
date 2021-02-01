<template>
  <div>
    {{change.valueOld || STATUS_NAMES.NONE}} <TimelineArrow></TimelineArrow> {{change.valueNew}}
  </div>
</template>

<script>
import BaseChange from './BaseChange'
import { STATUS_NAMES } from '@/constants/statuses'

export default {
  extends: BaseChange,
  data () {
    return {
      STATUS_NAMES
    }
  }
}
</script>
