<template>
  <span class="ui-status" :class="statusName" :id="'status-' + componentId">
    <span class="ui-status_rect"></span>
    <span class="ui-status_text">{{ statusName }}</span>

    <app-tooltip v-if="description" :target="'status-' + componentId">
      {{ description }}
    </app-tooltip>
  </span>
</template>

<script>
import { STATUS_DESCRIPTION } from '@/constants/statuses'

export default {
  props: {
    statusName: String
  },
  computed: {
    description () {
      return STATUS_DESCRIPTION[this.statusName]
    }
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

  &.Inactive {
    .ui-status_rect {
      background-color: $status-inactive-secondary-color;
      border-color: $status-inactive-primary-color;
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
