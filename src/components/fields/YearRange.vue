<template>
  <div>
    <app-field-label :forAttribute="componentId" :text="label"></app-field-label>

    <b-input-group class="ui-year-range ui-field-wrapper">
      <b-form-input :id="componentId"
                    placeholder="From"
                    ref="fromInput"
                    :value="from"
                    @input="onChange"
                    v-mask="'####'"></b-form-input>

      <b-input-group-prepend is-text>-</b-input-group-prepend>

      <b-form-input placeholder="To"
                    ref="toInput"
                    :value="to"
                    @input="onChange"
                    v-mask="'####'"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  extends: BaseInput,
  computed: {
    from () {
      return this.value && this.value.from
    },
    to () {
      return this.value && this.value.to
    }
  },
  methods: {
    getFieldValue () {
      const fromFieldValue = this.$refs.fromInput.localValue || null
      const toFieldValue = this.$refs.toInput.localValue || null

      if (fromFieldValue || toFieldValue) {
        return {
          from: fromFieldValue,
          to: toFieldValue
        }
      } else {
        return null
      }
    },
    onChange () {
      const value = this.getFieldValue()

      if (JSON.stringify(value) === JSON.stringify(this.value)) {
        return
      }

      this.$emit('changeValue', value)
    }
  }
}
</script>

<style lang="scss">
  .ui-year-range {
    .input-group-text {
      border-left: 0;
      border-right: 0;
    }

    input:first-child {
      border-right: none;
    }

    input:last-child {
      border-left: none;
    }
  }
</style>
