<template>
  <Status :statusName="statusName"></Status>
</template>

<script>
import Status from '@/components/status/Status'
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  components: {
    Status
  },
  computed: {
    statusName () {
      return this.displayData.statusName
    }
  }
}
</script>
