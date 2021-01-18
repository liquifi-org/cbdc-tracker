<template>
  <label :for="forAttribute" class="ui-field-label" @click="onClick">{{text}}</label>
</template>

<script>
export default {
  props: {
    text: String,
    forAttribute: [String, Number]
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
  .ui-field-label {
    font-size: 14px;
    color: #7997C4;
  }

  .ui-field-wrapper.is-invalid .ui-field-label {
    color: #D53E45;
  }
</style>
