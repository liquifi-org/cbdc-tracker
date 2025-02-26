<template>
  <div :title="country">
    <app-icon v-if="crossBorderProject"
              :name="ICON_NAMES.CROSS_BORDER_PROJECT"
              class="ui-table-cell-country_cross-border-project m-r-4"></app-icon>{{country}}
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

export default {
  extends: BaseCell,
  computed: {
    country () {
      return this.displayData.country
    },
    crossBorderProject () {
      return this.displayData.crossBorderProject
    }
  }
}
</script>

<style>
.ui-table-cell-country_cross-border-project {
  vertical-align: text-bottom;
  color: #7997C4;
}
</style>
