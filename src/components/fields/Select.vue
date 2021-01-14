<template>
  <div class="ui-field-wrapper">
    <app-field-label :forAttribute="componentId" :text="localLabel"></app-field-label>
    <b-form-select :id="componentId"
                   :class="{placeholder: !localValue}"
                   :value="localValue"
                   @input="onChange"
                   :options="options"></b-form-select>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  extends: BaseInput,
  computed: {
    options () {
      return [
        { value: null, text: this.localPlaceholder },
        ...this.data.settings.possibleValues.map((value) => {
          return {
            value,
            text: value
          }
        })
      ]
    }
  },
  methods: {
    onChange (value) {
      if (value === this.localLabel) {
        return
      }

      value = (value === this.localPlaceholder) ? null : value

      this.$emit('changeValue', value)
    }
  }
}
</script>
