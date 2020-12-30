<template>
  <div :title="text">{{ text }}</div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    text () {
      return this.displayData.text
    }
  }
}
</script>
