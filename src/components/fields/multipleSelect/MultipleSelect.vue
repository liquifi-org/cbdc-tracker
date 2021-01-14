<template>
  <div>
    <app-field-label :forAttribute="componentId" :text="localLabel" @click="onLabelClick"></app-field-label>
    <TagifyInput ref="tagifyInput" :id="componentId" :value="localValue" :placeholder="localPlaceholder" :possibleValues="possibleValues" @change="onChange"></TagifyInput>
  </div>
</template>

<script>
import BaseInput from '../BaseInput'
import TagifyInput from './TagifyInput'

export default {
  extends: BaseInput,
  components: {
    TagifyInput
  },
  computed: {
    possibleValues () {
      return this.data.settings.possibleValues
    }
  },
  methods: {
    onChange (value) {
      if (JSON.stringify(value) === JSON.stringify(this.localValue)) {
        return
      }

      this.$emit('changeValue', value)
    },
    onLabelClick () {
      this.$refs.tagifyInput.focus()
    }
  }
}
</script>
