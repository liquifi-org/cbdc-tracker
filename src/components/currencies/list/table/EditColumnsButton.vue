<template>
  <div>
    <app-button ref="button" :id="'popover-'+componentId" :type="BUTTON_TYPES.SECONDARY">
      <app-icon :name="ICON_NAMES.EDIT_COLUMNS"></app-icon> Edit columns
    </app-button>

    <b-popover custom-class="ui-table-columns-popover"
               :target="'popover-'+componentId"
               triggers="click"
               placement="bottom"
               :show.sync="popoverShow"
               @show="onPopoverShow"
               @shown="onPopoverShown"
               @hidden="onPopoverHidden">
      <div class="ui-table-columns-popover_list">
        <b-form-checkbox ref="columnItems"
                         v-for="(column) in columns" :key="column.name"
                         class="ui-table-columns-popover_list-item"
                         @change="onColumnChange(column, $event)"
                         :checked="column.visible"
                         :disabled="!column.hideable">{{column.title}}</b-form-checkbox>
      </div>

      <div class="ui-table-columns-popover_footer">
        <app-button :type="BUTTON_TYPES.TEXT"
                    @click="onCancelClick">Cancel</app-button>
        <app-button :type="BUTTON_TYPES.PRIMARY"
                    class="float-right"
                    @click="onApplyClick">Apply</app-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'

export default {
  props: {
    columns: Array
  },
  data () {
    return {
      popoverShow: false,
      BUTTON_TYPES,
      changedColumnsMap: new Map()
    }
  },
  methods: {
    onCancelClick () {
      this.popoverShow = false
    },
    onApplyClick () {
      const changedColumns = Array.from(this.changedColumnsMap, (v) => {
        return {
          name: v[0],
          visible: v[1]
        }
      })

      this.popoverShow = false

      this.$emit('changeColumnsVisible', { changedColumns })
    },
    onPopoverShow () {
      this.changedColumnsMap = new Map()
    },
    onPopoverShown () {
      // Called just after the popover has been shown
      // Transfer focus to the column item(not disabled)
      const enabledColumnItems = this.$refs.columnItems.filter((columnItem) => {
        return !columnItem.disabled
      })

      if (enabledColumnItems.length) {
        const input = enabledColumnItems[0].$el.querySelector('input')
        this.focusRef(input)
      }
    },
    onPopoverHidden () {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    onColumnChange (column, value) {
      this.changedColumnsMap.set(column.name, value)
    },
    focusRef (ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus()
        })
      })
    }
  }
}
</script>

<style lang="scss">
.ui-table-columns-popover.popover {
  width: 310px;
  border: 1px solid #DBE6F1;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  .arrow {
    display: none;
  }

  .popover-body {
    padding: 0;
  }

  .ui-table-columns-popover_list {
    padding: 12px 16px;
    max-height: 400px;
    overflow-y: auto;
  }

  .ui-table-columns-popover_list-item {
    margin-bottom: 12px;
  }

  .ui-table-columns-popover_footer {
    border-top: 1px solid #DBE6F1;
    padding: 8px;
  }
}
</style>
