<template>
  <button class="ui-button-without-styles"
          :id="id"
          :disabled="disabled"
          :title="title"
          @click="onClick"
          @mouseup="onMouseup"
          @touchend="onTouchend">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    id: String,
    title: String
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    },
    onMouseup (event) {
      this.$emit('mouseup', event)
      this.blur()
    },
    onTouchend (event) {
      this.$emit('touchend', event)
      this.blur()
    },
    blur () {
      this.$el.blur()
    }
  }
}
</script>
