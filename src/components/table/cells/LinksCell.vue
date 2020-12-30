<template>
  <div>
    <div v-for="(link, index) in links" :key="index">
      <app-link :href="link"></app-link>
    </div>
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    links () {
      const value = this.displayData.value
      return value ? value.split('\n') : []
    }
  }
}
</script>
