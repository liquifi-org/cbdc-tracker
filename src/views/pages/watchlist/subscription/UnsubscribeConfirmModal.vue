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
        Your subscription was successfully confirmed. You can edit list of currencies you watch on this page anytime.
      </template>

      <template v-if="hasError">
        Your subscription wasn’t successfully confirmed. Please repeat subscription again.
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
import { SubscribesHttpService } from '@/services/http/subscribesHttp.service'

const SUBSCRIBE_OPERATION_TYPES = {
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscribe',
  UPDATE: 'update'
}

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
  mounted () {
    this.subscribesHttpService = new SubscribesHttpService()

    const operation = this.$route.query.operation
    const verificationKey = this.$route.query.verificationKey

    if (operation) {
      this.showModal()

      switch (operation) {
        case SUBSCRIBE_OPERATION_TYPES.SUBSCRIBE: {
          this.confirmSubscribe(verificationKey)
        }
      }
    }
  },
  methods: {
    showModal () {
      this.$refs.modal.show()
    },
    hideModal () {
      this.$refs.modal.hide()
    },
    async confirmSubscribe (verificationKey) {
      this.isLoading = true
      this.hasError = false

      try {
        await this.subscribesHttpService.confirmSubscribe(verificationKey)
      } catch (error) {
        this.hasError = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
