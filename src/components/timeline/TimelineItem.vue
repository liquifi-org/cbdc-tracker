<template>
  <div class="ui-timeline-item" :class="[type, isFullWidth && 'is-full-width']">
    <header class="ui-timeline-item_header">
      <slot name="header"></slot>
    </header>

    <main class="ui-timeline-item_main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    isFullWidth: Boolean
  }
}
</script>

<style lang="scss">
  .ui-timeline-item {
    display: inline-block;
    max-width: 100%;

    &.is-full-width {
      display: block;
    }

    .ui-timeline-item_header {
      padding: 8px 16px;
      margin-bottom: 2px;
      border-radius: 4px 4px 0 0;
      font-weight: bold;
      font-size: 12px;
    }

    .ui-timeline-item_main {
      padding: 8px 16px;
      border-radius: 0 0 4px 4px;
      font-size: 12px;
      color: $default-font-color;
    }

    .ui-timeline-item_label {
      &::after {
        content: ':';
      }
    }

    &.status {
      .ui-timeline-item_header {
        background: $timeline-status-header-background-color;
      }

      .ui-timeline-item_main {
        background: $timeline-status-main-background-color;
      }

      .ui-timeline-item_arrow {
        color: $timeline-status-text-color;
      }
    }

    &.added {
      .ui-timeline-item_header {
        background: $timeline-added-header-background-color;
      }

      .ui-timeline-item_main {
        background: $timeline-added-main-background-color;
      }

      .ui-timeline-item_label, .ui-info .ui-info_button {
        color: $timeline-added-text-color;
      }
    }

    &.deleted {
      .ui-timeline-item_header {
        background: $timeline-deleted-header-background-color;
      }

      .ui-timeline-item_main {
        background: $timeline-deleted-main-background-color;
      }

      .ui-timeline-item_label, .ui-info .ui-info_button {
        color: $timeline-deleted-text-color;
      }
    }

    &.updated {
      .ui-timeline-item_header {
        background: $timeline-updated-header-background-color;
      }

      .ui-timeline-item_main {
        background: $timeline-updated-main-background-color;
      }

      .ui-timeline-item_label, .ui-timeline-item_arrow, .ui-info .ui-info_button {
        color: $timeline-updated-text-color;
      }
    }
  }
</style>
