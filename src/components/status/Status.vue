<template>
  <button class="ui-status"
          :class="[statusName, localIsSelected && 'active']"
          :disabled="disabled"
          @click="onClick">
    <span class="ui-status_rect"></span>
    <span class="ui-status_text">{{ statusName }}</span>
  </button>
</template>

<script>
export default {
  name: 'Status',
  props: {
    statusName: String,
    isSelected: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      localIsSelected: this.isSelected
    }
  },
  watch: {
    isSelected (value) {
      this.localIsSelected = value
    }
  },
  methods: {
    onClick () {
      if (this.disabled) {
        return
      }

      this.localIsSelected = !this.localIsSelected
      this.$emit('isSelectedChanged', this.localIsSelected)
    }
  }
}
</script>

<style lang="scss">
.ui-status {
  @extend .ui-button-without-styles;
  @extend %ui-default-font;
  display: flex;
  align-items: center;
  justify-content: left;
  opacity: .5;

  [disabled] {
    cursor: default;
  }

  &.active {
    opacity: 1;
  }
}

.ui-status_rect {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 2px;
  margin-right: 9px;
}

.ui-status {
  &.Research {
    .ui-status_rect {
      background-color: $status-research-secondary-color;
      border-color: $status-research-primary-color;
    }
  }

  &.Development {
    .ui-status_rect {
      background-color: $status-development-secondary-color;
      border-color: $status-development-primary-color;
    }
  }

  &.Pilot {
    .ui-status_rect {
      background-color: $status-pilot-secondary-color;
      border-color: $status-pilot-primary-color;
    }
  }

  &.Launched {
    .ui-status_rect {
      background-color: $status-launched-secondary-color;
      border-color: $status-launched-primary-color;
    }
  }

  &.Cancelled {
    .ui-status_rect {
      background-color: $status-cancelled-secondary-color;
      border-color: $status-cancelled-primary-color;
    }
  }

  &.None {
    .ui-status_rect {
      background-color: $status-none-secondary-color;
      border-color: $status-none-primary-color;
    }
  }
}
</style>
