<template>
  <app-status :statusName="statusName"></app-status>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    statusName () {
      return this.displayData.statusName
    }
  }
}
</script>
