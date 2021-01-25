<template>
  <div class="ui-full-card-block" :class="{'to-bottom': toBottom}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    toBottom: Boolean
  }
}
</script>

<style lang="scss">
  .ui-full-card-block {
    margin: 0 -16px 0 -16px;

    &.to-bottom {
      margin-bottom: -16px;
    }
  }
</style>
