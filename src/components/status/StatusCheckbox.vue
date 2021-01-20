<template>
  <button class="ui-status-checkbox" :class="statusName" @click="onClick">
    <span class="ui-status-checkbox_rect">
      <app-icon v-if="localValue" :name="ICON_NAMES.CHECK_MARK"></app-icon>
    </span>
    <span class="ui-status-checkbox_text">{{ localLabel }}</span>
  </button>
</template>

<script>
import BaseInput from '@/components/fields/BaseInput'

export default {
  extends: BaseInput,
  props: {
    statusName: String
  },
  computed: {
    localLabel () {
      return this.label || (this.data && this.data.label) || this.statusName
    }
  },
  methods: {
    onClick () {
      this.$emit('changeValue', !this.localValue)
    }
  }
}
</script>

<style lang="scss">
.ui-status-checkbox {
  @extend .ui-button-without-styles;
  @extend %ui-default-font;
  display: flex;
  align-items: center;
  justify-content: left;

  .ui-status-checkbox_rect {
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    border: 1px solid;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 9px;
  }

  &.Research {
    .ui-status-checkbox_rect {
      background-color: $status-research-secondary-color;
      border-color: $status-research-primary-color;
      color: $status-research-primary-color;
    }
  }

  &.Development {
    .ui-status-checkbox_rect {
      background-color: $status-development-secondary-color;
      border-color: $status-development-primary-color;
      color: $status-development-primary-color;
    }
  }

  &.Pilot {
    .ui-status-checkbox_rect {
      background-color: $status-pilot-secondary-color;
      border-color: $status-pilot-primary-color;
      color: $status-pilot-primary-color;
    }
  }

  &.Launched {
    .ui-status-checkbox_rect {
      background-color: $status-launched-secondary-color;
      border-color: $status-launched-primary-color;
      color: $status-launched-primary-color;
    }
  }

  &.Cancelled {
    .ui-status-checkbox_rect {
      background-color: $status-cancelled-secondary-color;
      border-color: $status-cancelled-primary-color;
      color: $status-cancelled-primary-color;
    }
  }

  &.None {
    .ui-status-checkbox_rect {
      background-color: $status-none-secondary-color;
      border-color: $status-none-primary-color;
      color: $status-none-primary-color;
    }
  }

  &:focus {
    outline: 0;

    .ui-status-checkbox_rect {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
}
</style>
