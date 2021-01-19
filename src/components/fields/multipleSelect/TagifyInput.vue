<template>
  <div class="ui-tag-input">
    <input :id="id" ref="input" :placeholder="placeholder" @change="onChange">
  </div>
</template>

<script>
import Tagify from '@yaireo/tagify/dist/tagify.min.js'
import '@yaireo/tagify/dist/tagify.css'

export default {
  props: {
    value: null,
    possibleValues: null,
    placeholder: null,
    id: [String, Number]
  },
  computed: {
    fieldValue () {
      return this.parseValueToFieldValue(this.value)
    }
  },
  watch: {
    fieldValue (newVal) {
      newVal ? this.tagify.loadOriginalValues(newVal) : this.tagify.removeAllTags()
    },
    possibleValues (newVal) {
      if (this.tagify) {
        this.tagify.settings.whitelist = newVal
      }
    }
  },
  mounted () {
    const possibleValues = (this.possibleValues || [])
    const value = (this.localLabel || [])

    // We need values from value in whitelist because we can have value before possibleValues
    const whitelist = [...possibleValues, ...value]

    this.tagify = new Tagify(this.$refs.input, {
      enforceWhitelist: true,
      whitelist,
      dropdown: {
        enabled: 0, // Minimum characters input for showing a suggestions list. false will not render a suggestions list.
        maxItems: null
      }
    })

    this.fieldValue && this.tagify.addTags(JSON.parse(this.fieldValue))
  },
  methods: {
    onChange (event) {
      this.$emit('change', this.parseFieldValueToValue(event.currentTarget.value))
    },
    parseFieldValueToValue (fieldValue) {
      let newValue = null

      if (fieldValue) {
        const tagifyValue = JSON.parse(fieldValue)

        newValue = tagifyValue.map((v) => {
          return v.value
        })
      }

      return newValue
    },
    parseValueToFieldValue (value) {
      if (value) {
        return JSON.stringify(value.map((v) => {
          return {
            value: v
          }
        }))
      } else {
        return ''
      }
    },
    focus () {
      this.$el.querySelector('.tagify__input').focus()
    }
  }
}
</script>

<style lang="scss">
.ui-tag-input {
  tags {
    background-color: $input-background-color;
    border-radius: 4px;
    border-color: $input-border-color;
    overflow: hidden;

    &.tagify--focus {
      background-color: white;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  tags:hover {
    border-color: $input-border-color;
  }

  .tagify__tag-text {
    white-space: nowrap;
  }

  .tagify__input {
    font-size: 16px;
  }

  .tagify__input:empty::before {
    color: $input-placeholder-color;
  }

  --input-color: $input-color;
}
</style>
