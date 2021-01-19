<template>
  <div>
    <app-field-label :forAttribute="componentId" :text="localLabel"></app-field-label>

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
      return this.localValue && this.localValue.from
    },
    to () {
      return this.localValue && this.localValue.to
    }
  },
  methods: {
    getFieldValue () {
      const fromFieldValue = parseInt(this.$refs.fromInput.localValue) || null
      const toFieldValue = parseInt(this.$refs.toInput.localValue) || null

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

      if (JSON.stringify(value) === JSON.stringify(this.localValue)) {
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
