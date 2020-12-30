<template>
  <div class="ui-info-item">
    <InfoItemTitle :title="title"></InfoItemTitle>
    <div class="ui-info-item_data">
      <app-interoperability-value :value="value"></app-interoperability-value>
    </div>
  </div>
</template>

<script>
import BaseInfoItem from './BaseInfoItem'

export default {
  extends: BaseInfoItem
}
</script>
