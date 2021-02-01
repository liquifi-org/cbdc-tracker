<template>
  <app-active-element :disabled="disabled"
                      :title="text"
                      class="ui-icon-button"
                      @click="onClick">
    <app-icon :height="height" :name="name" :text="text"></app-icon>
  </app-active-element>
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
