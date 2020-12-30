<template>
  <div class="ui-field-wrapper">
    <app-field-label :forAttribute="componentId" :text="label"></app-field-label>
    <b-form-input :id="componentId" :placeholder="placeholder" :value="value" @input="onChange"></b-form-input>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  extends: BaseInput,
  methods: {
    onChange (value) {
      if (value === this.value) {
        return
      }

      this.$emit('changeValue', (value || null))
    }
  }
}
</script>
