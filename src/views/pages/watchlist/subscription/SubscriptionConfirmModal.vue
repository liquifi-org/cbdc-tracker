<template>
  <app-modal ref="modal"
             :status="modalStatus"
             :hideFooter="true"
             :title="title">
    <div v-if="isLoading">
      <app-spinner hint="Please wait"></app-spinner>
    </div>

    <template v-else>
      <template v-if="operation === SUBSCRIBE_OPERATION_TYPES.SUBSCRIBE">
        <template v-if="!hasError">
          Your subscription was successfully confirmed. You can edit list of currencies you watch on this page anytime.
        </template>

        <template v-if="hasError">
          Your subscription wasn’t successfully confirmed. Please repeat subscription again.
        </template>
      </template>

      <template v-if="operation === SUBSCRIBE_OPERATION_TYPES.UPDATE">
        <template v-if="!hasError">
          Your subscription was successfully updated. You can edit list of currencies you watch on this page anytime.
        </template>

        <template v-if="hasError">
          Your subscription wasn’t successfully updated. Please repeat update again.
        </template>
      </template>

      <template v-if="operation === SUBSCRIBE_OPERATION_TYPES.UNSUBSCRIBE">
        <template v-if="!hasError">
          You are successfully unsubscribed. Your watchlist will be saved on the site. If you want to subscribe for
          updates on your e-mail, you can do it from this page anytime.
        </template>

        <template v-if="hasError">
          There was some mistake while unsubscribe. Please repeat again.
        </template>
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
      hasError: false,
      operation: null,
      SUBSCRIBE_OPERATION_TYPES
    }
  },
  computed: {
    modalStatus () {
      return this.hasError ? MODAL_STATUSES.DANGER : BUTTON_TYPES.PRIMARY
    },
    title () {
      const title = (this.operation !== SUBSCRIBE_OPERATION_TYPES.UNSUBSCRIBE) ? 'Subscription settings' : 'Unsubscribe'
      return this.hasError ? 'Subscription error' : title
    },
    buttonType () {
      return this.hasError ? BUTTON_TYPES.DANGER : BUTTON_TYPES.PRIMARY
    }
  },
  mounted () {
    this.subscribesHttpService = new SubscribesHttpService()

    this.operation = this.$route.query.operation
    const verificationKey = this.$route.query.verificationKey

    if (this.operation) {
      this.showModal()

      switch (this.operation) {
        case SUBSCRIBE_OPERATION_TYPES.SUBSCRIBE:
          this.confirmUnsubscribe(verificationKey)
          break
        case SUBSCRIBE_OPERATION_TYPES.UPDATE:
          this.confirmUpdate(verificationKey)
          break
        case SUBSCRIBE_OPERATION_TYPES.UNSUBSCRIBE: {
          this.confirmUnsubscribe(verificationKey)
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
    },
    async confirmUnsubscribe (verificationKey) {
      this.isLoading = true
      this.hasError = false

      try {
        await this.subscribesHttpService.confirmUnsubscribe(verificationKey)
      } catch (error) {
        this.hasError = true
      } finally {
        this.isLoading = false
      }
    },
    async confirmUpdate (verificationKey) {
      this.isLoading = true
      this.hasError = false

      try {
        await this.subscribesHttpService.confirmUpdate(verificationKey)
      } catch (error) {
        this.hasError = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
