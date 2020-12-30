<template>
  <button :disabled="disabled" class="ui-icon-button ui-button-without-styles" @click="onClick" :title="text">
    <app-icon :name="name" :text="text" :height="height"></app-icon>
  </button>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    height: String,
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
  button.ui-icon-button {
    opacity: .8;
    color: $site-primary-color;

    &[disabled] {
      opacity: .4;
    }

    &:hover:not([disabled]) {
      opacity: 1;
    }
  }
</style>
