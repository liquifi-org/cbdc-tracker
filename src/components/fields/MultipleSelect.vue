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
import BaseInput from './BaseInput'
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
      value = (value && value.length) ? value : null

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
  min-height: $input-min-height;

  .multiselect__tags {
    font-size: 16px;
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
      background-color: #7997C3;

      &:after {
        color: white;
      }
    }
  }

  .multiselect__option {
    &.multiselect__option--selected {
      background-color: #F3F6F9;
    }

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

  .multiselect__select:before {
    border-color: #7997C4 transparent transparent;
  }

  .multiselect__content-wrapper {
    z-index: 5000;
  }
}
</style>
