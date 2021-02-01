<template>
  <div class="ui-field-wrapper ui-field-select-wrapper">
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

<style lang="scss">
.ui-field-select-wrapper select {
  min-height: $input-min-height;

  background-image:
    linear-gradient(45deg, transparent 50%, #7997C4 60%),
    linear-gradient(135deg, #7997C4 40%, transparent 50%) !important;
  background-position:
    calc(100% - 20px) 14px,
    calc(100% - 15px) 14px,
    100% 0;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
