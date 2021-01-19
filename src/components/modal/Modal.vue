<template>
  <b-modal ref="modal"
           :id="localId"
           :modal-class="['ui-modal', localStatus]"
           centered
           :hide-footer="hideFooter"
           :title="title">
    <slot></slot>
  </b-modal>
</template>

<script>
import { MODAL_STATUSES } from '@/components/modal/constants'

export default {
  props: {
    id: String,
    title: String,
    hideFooter: Boolean,
    status: String
  },
  computed: {
    localStatus () {
      return (this.status || MODAL_STATUSES.DEFAULT)
    },
    localId () {
      return (this.id || this.componentId)
    }
  },
  methods: {
    show () {
      this.$refs.modal.show()
    },
    hide () {
      this.$refs.modal.hide()
    }
  }
}
</script>

<style lang="scss">
.ui-modal.modal {
  .modal-header {
    background: $site-secondary-color;
    border-bottom: none;
    padding: 16px;
  }

  .modal-title {
    font-size: 14px;
    line-height: 14px;
    font-weight: 800;
    color: $site-primary-color;
  }

  .close {
    color: $site-primary-color;
    opacity: .7;
    line-height: 14px;

    &:hover {
      opacity: 1;
    }
  }

  &.danger {
    .modal-header {
      background: #FBECEC;
    }

    .modal-title {
      color: #D53E45;
    }

    .close {
      color: #D53E45;
    }
  }
}
</style>
