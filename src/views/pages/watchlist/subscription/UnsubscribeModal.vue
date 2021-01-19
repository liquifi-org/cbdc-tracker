<template>
  <app-modal ref="modal"
             :status="modalStatus"
             :hideFooter="true"
             :title="title">
    <div v-if="isLoading">
      <app-spinner hint="Please wait"></app-spinner>
    </div>

    <template v-else>
      <template v-if="!hasError">
        Your updates were successfully saved. Please check your mail to confirm.
      </template>

      <template v-if="hasError">
        There was some mistake while unsubscribe. Please repeat again.
      </template>

      <app-button class="m-t-16"
                  :type="buttonType"
                  :isBlock="true"
                  @click="hideModal">Ok
      </app-button>
    </template>
  </app-modal>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { MODAL_STATUSES } from '@/components/modal/constants'

export default {
  data () {
    return {
      isLoading: false,
      hasError: false
    }
  },
  computed: {
    modalStatus () {
      return this.hasError ? MODAL_STATUSES.DANGER : BUTTON_TYPES.PRIMARY
    },
    title () {
      return this.hasError ? 'Subscription error' : 'Subscription settings'
    },
    buttonType () {
      return this.hasError ? BUTTON_TYPES.DANGER : BUTTON_TYPES.PRIMARY
    }
  },
  methods: {
    showModal () {
      this.$refs.modal.show()
    },
    hideModal () {
      this.$refs.modal.hide()
    }
  }
}
</script>
