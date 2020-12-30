<template>
  <app-button :type="BUTTON_TYPES.PRIMARY"
              class="ui-show-more-button" :class="{'isLoading': isLoading}"
              :isBlock="isBlock"
              :disabled="localIsDisabled"
              @click="onClick">
    <span v-show="!isLoading">{{text}} <app-icon class="ui-show-more-button_icon" :name="ICON_NAMES.SHOW_MORE"></app-icon></span>

    <app-spinner v-show="isLoading"></app-spinner>
  </app-button>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'

export default {
  props: {
    text: String,
    disabled: Boolean,
    isBlock: Boolean,
    isLoading: Boolean
  },
  data () {
    return {
      BUTTON_TYPES
    }
  },
  computed: {
    localIsDisabled () {
      return (this.isLoading && this.disabled)
    }
  },
  methods: {
    onClick (event) {
      !this.disabled && this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
  .ui-show-more-button, .ui-show-more-button:hover {
    color: white;
  }

  .ui-show-more-button {
    &.isLoading {
      background-color: white !important;

      .ui-spinner {
        font-size: 14px;
        padding: 0;
      }
    }
  }

  .ui-show-more-button_icon {
    margin-left: 8px;
  }
</style>
