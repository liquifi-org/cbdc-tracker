<template>
    <b-tooltip :custom-class="'ui-tooltip' + ' ' + (customClass || '')"
               placement="top"
               :target="target"
               :triggers="trigger || 'hover'">
      <slot></slot>
    </b-tooltip>
</template>

<script>
export default {
  props: {
    target: String,
    trigger: String,
    customClass: String
  }
}
</script>

<style lang="scss">
  .ui-tooltip.tooltip.b-tooltip {
    .arrow {
      display: none;
    }

    opacity: 1;

    .tooltip-inner {
      padding: 4px 8px;
      background: #FFFFFF;
      border: 1px solid #CDE0F1;
      border-radius: 4px;

      color: #0B2041;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
    }
  }
</style>
