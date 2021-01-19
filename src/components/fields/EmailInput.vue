<template>
  <div :class="['ui-field-wrapper', (state === false) && 'is-invalid']">
    <app-field-label :forAttribute="componentId" :text="localLabel"></app-field-label>

    <b-form-group invalid-feedback="Сheck if the address is correct"
                  :state="state">
      <b-form-input :id="componentId"
                    :placeholder="localPlaceholder"
                    autocomplete="email"
                    trim
                    :value="localValue"
                    :state="state"
                    @input="onChange"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default {
  extends: BaseInput,
  methods: {
    onChange (value) {
      if (value === this.localValue) {
        return
      }

      this.$emit('changeValue', (value || null))
    },
    validate () {
      if (!!this.localValue && !EMAIL_REGEX.test(this.localValue)) {
        return false
      }

      return BaseInput.methods.validate.call(this)
    }
  }
}
</script>
