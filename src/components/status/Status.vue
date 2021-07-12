<template>
  <span class="ui-status" :class="statusName">
    <span class="ui-status_rect"></span>
    <span class="ui-status_text">{{ statusName }}</span>
  </span>
</template>

<script>
export default {
  props: {
    statusName: String
  }
}
</script>

<style lang="scss">
.ui-status {
  display: flex;
  align-items: center;
  justify-content: left;
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

  &.Proof {
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
