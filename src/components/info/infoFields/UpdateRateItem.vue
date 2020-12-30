<template>
  <div class="ui-info-item">
    <InfoItemTitle :title="title"></InfoItemTitle>
    <div class="ui-info-item_data">
      <app-update-rate :value="value"></app-update-rate>
    </div>
  </div>
</template>

<script>
import BaseInfoItem from './BaseInfoItem'

export default {
  extends: BaseInfoItem
}
</script>
