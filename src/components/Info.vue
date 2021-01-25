<template>
  <span class="ui-info">
    <app-active-element ref="activeElement"
                        :id="'info-' + componentId"
                        class="ui-info_button">
      <app-icon :name="ICON_NAMES.INFO"></app-icon>
    </app-active-element>

    <b-tooltip custom-class="ui-info_tooltip"
               :target="'info-' + componentId"
               triggers="click">
      {{text}}
    </b-tooltip>
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

  .ui-info_tooltip.tooltip.b-tooltip {
    .arrow {
      display: none;
    }

    opacity: 1;

    .tooltip-inner {
      font-size: 12px;
      color: #7997C3;
      padding: 4px 8px;
      background: #FFFFFF;
      border: 1px solid #CDE0F1;
      border-radius: 4px;
    }
  }
</style>
