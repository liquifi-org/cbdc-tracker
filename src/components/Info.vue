<template>
  <span class="ui-info">
    <app-active-element ref="activeElement"
                        :id="'info-' + componentId"
                        class="ui-info_button">
      <app-icon :name="ICON_NAMES.INFO"></app-icon>
    </app-active-element>

    <app-tooltip trigger="click" :target="'info-' + componentId">
      {{text}}
    </app-tooltip>
  </span>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss">
  .ui-info {
    .ui-info_button {
      color: #7997C4;
    }
  }
</style>
