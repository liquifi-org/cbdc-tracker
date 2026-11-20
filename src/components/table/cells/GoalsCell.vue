<template>
  <div class="ui-table-cell-goals">
    <span v-if="isTruncated"
          :id="targetId"
          class="ui-table-cell-goals_preview">{{ preview }}</span>
    <template v-else>{{ text }}</template>

    <b-popover v-if="isTruncated"
               :target="targetId"
               triggers="hover"
               placement="auto"
               container="body"
               custom-class="ui-table-cell-goals_popover">
      {{ text }}
    </b-popover>
  </div>
</template>

<script>
import BaseCell from '@/components/table/cells/BaseCell'

const VISIBLE_WORD_COUNT = 7

export default {
  extends: BaseCell,
  computed: {
    text () {
      return this.displayData.text || ''
    },
    words () {
      return this.text.trim().split(/\s+/).filter(Boolean)
    },
    isTruncated () {
      return this.words.length > VISIBLE_WORD_COUNT
    },
    preview () {
      return `${this.words.slice(0, VISIBLE_WORD_COUNT).join(' ')}...`
    },
    targetId () {
      return `goals-${this.componentId}`
    }
  }
}
</script>

<style lang="scss">
  .ui-table-cell-goals_preview {
    cursor: default;
    border-bottom: 1px dotted #7997C3;
  }

  .ui-table-cell-goals_popover.popover {
    max-width: 320px;
    border: 1px solid #CDE0F1;
    box-shadow: 0 4px 16px rgba(22, 50, 79, 0.08);

    .arrow {
      display: none;
    }

    .popover-body {
      color: #16324F;
      font-size: 14px;
      line-height: 20px;
      padding: 8px 12px;
    }
  }
</style>
