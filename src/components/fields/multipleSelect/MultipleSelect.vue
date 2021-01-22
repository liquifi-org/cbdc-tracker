<template>
  <div class="ui-field-wrapper ui-field-multiselect-wrapper">
    <app-field-label :forAttribute="componentId"
                     :text="localLabel"></app-field-label>

    <multiselect :id="componentId"
                 :value="localValue"
                 :multiple="true"
                 :placeholder="localPlaceholder"
                 :options="options"
                 @input="onInput"
                 selectLabel=""
                 deselectLabel=""
                 selectedLabel=""></multiselect>
  </div>
</template>

<script>
import BaseInput from '../BaseInput'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  extends: BaseInput,
  components: {
    Multiselect
  },
  computed: {
    options () {
      return this.data.settings.possibleValues
    }
  },
  methods: {
    onInput (value) {
      if (JSON.stringify(value) === JSON.stringify(this.localValue)) {
        return
      }

      this.$emit('changeValue', value)
    }
  }
}
</script>

<style lang="scss">
.ui-field-wrapper.ui-field-multiselect-wrapper .multiselect {
  .multiselect__tags {
    border-color: $input-border-color;
    background-color: $input-background-color;
  }

  &.multiselect--active {
    .multiselect__tags {
      background-color: white;
    }
  }

  .multiselect__tag {
    background-color: $site-primary-color;
  }

  .multiselect__tag-icon {
    &:after {
      color: white;
    }

    &:hover {
      background-color: #EC8596;
    }
  }

  .multiselect__option {
    &.multiselect__option--highlight {
      background-color: $site-primary-color;

      &.multiselect__option--selected {
        background-color: #EC8596;
      }
    }
  }

  .multiselect__placeholder {
    color: $input-placeholder-color;
    font-size: 16px;
  }
}
</style>
