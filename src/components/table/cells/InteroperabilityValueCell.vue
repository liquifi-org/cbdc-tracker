<template>
  <app-interoperability-value :value="value"></app-interoperability-value>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    value () {
      return this.displayData.value
    }
  }
}
</script>
