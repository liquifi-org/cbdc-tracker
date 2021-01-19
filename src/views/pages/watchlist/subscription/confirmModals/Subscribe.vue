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
    </template>

    <app-button class="m-t-16"
                :type="buttonType"
                :isBlock="true"
                @click="hide">Ok
    </app-button>
  </app-modal>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { MODAL_STATUSES } from '@/components/modal/constants'
import { SubscribesHttpService } from '@/services/http/subscribesHttp.service'

export default {
  props: {
    operation: String,
    verificationKey: String
  },
  data () {
    return {
      hasError: false,
      isLoading: false
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
  async created () {
    await this.confirmSubscribe()
  },
  methods: {
    show () {
      this.$refs.modal.show()
    },
    hide () {
      this.$refs.modal.hide()
    },
    async confirmSubscribe () {
      this.isLoading = true
      this.hasError = false

      try {
        const subscribesHttpService = new SubscribesHttpService()
        await subscribesHttpService.confirmSubscribe(this.verificationKey)
      } catch (error) {
        this.hasError = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
