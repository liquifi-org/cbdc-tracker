<template>
  <b-button :block="isBlock" class="ui-button" :class="type" :disabled="disabled" @click="onClick">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    type: String,
    isBlock: Boolean,
    disabled: Boolean
  },
  methods: {
    onClick (event) {
      !this.disabled && this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
  button.ui-button.btn {
    border: none;
    font-weight: 800;
    font-size: 14px;
    padding: 12px 20px;
    border-radius: 8px;

    &.primary {
      background-color: $site-primary-color;
      color: white;

      &:active, &:focus, &:active:focus {
        background-color: $site-primary-color;
        color: white;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    }

    &.secondary {
      background-color: $site-secondary-color;
      color: $site-primary-color;

      &:active, &:focus, &:active:focus {
        background-color: $site-secondary-color;
        color: $site-primary-color;
        box-shadow: 0 0 0 0.2rem $site-primary-color;
      }
    }

    &.text {
      background-color: inherit;
      color: $site-primary-color;

      &:active, &:focus, &:active:focus {
        background-color: inherit;
        color: $site-primary-color;
        box-shadow: 0 0 0 0.2rem $site-primary-color;
      }
    }
  }
</style>
