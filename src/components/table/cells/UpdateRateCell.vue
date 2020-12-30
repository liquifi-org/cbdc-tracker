<template>
  <app-update-rate :value="updateRate"></app-update-rate>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    updateRate () {
      return this.displayData.updateRate
    }
  }
}
</script>
