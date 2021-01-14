<template>
  <div class="ui-field-wrapper">
    <app-field-label :forAttribute="componentId" :text="localLabel"></app-field-label>
    <b-form-input :id="componentId"
                  :placeholder="localPlaceholder"
                  trim
                  :value="localValue"
                  @input="onChange"></b-form-input>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  extends: BaseInput,
  methods: {
    onChange (value) {
      if (value === this.localValue) {
        return
      }

      this.$emit('changeValue', (value || null))
    }
  }
}
</script>
