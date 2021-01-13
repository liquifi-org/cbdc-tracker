<template>
  <div class="ui-field-wrapper">
    <app-field-label :forAttribute="componentId" :text="label"></app-field-label>
    <b-form-select :id="componentId"
                   :class="{placeholder: !value}"
                   :value="value"
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
        { value: null, text: this.data.placeholder },
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
      if (value === this.value) {
        return
      }

      value = (value === this.data.placeholder) ? null : value

      this.$emit('changeValue', value)
    }
  }
}
</script>
