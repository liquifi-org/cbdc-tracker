<template>
  <app-modal ref="modal"
             :status="modalStatus"
             :hideFooter="true"
             :title="title">
    <div v-if="isLoading">
      <app-spinner hint="Please wait"></app-spinner>
    </div>

    <template v-else>
      <template v-if="isConfirmed">
        <template v-if="!hasError">
          You are successfully unsubscribed. Your watchlist will be saved on the site. If you want to subscribe for
          updates on your e-mail, you can do it from this page anytime.
        </template>

        <template v-if="hasError">
          There was some mistake while unsubscribe. Please repeat again.
        </template>

        <app-button class="m-t-16"
                    :type="confirmedButtonType"
                    :isBlock="true"
                    @click="hide">Ok
        </app-button>
      </template>

      <template v-else>
        Do you really want to unsubscribe? Your watchlist will be saved on the site. If you want to subscribe for
        updates on your e-mail, you can do it from this page anytime.

        <div class="ui-unsubscribe-confirm m-t-16">
          <app-button class="m-r-16"
                      :type="BUTTON_TYPES.TEXT"
                      :isBlock="true"
                      @click="hide">Cancel
          </app-button>

          <app-button :type="BUTTON_TYPES.PRIMARY"
                      :isBlock="true"
                      @click="onUnsubscribeClick">Unsubscribe
          </app-button>
        </div>
      </template>
    </template>
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
      isConfirmed: false,
      hasError: false,
      isLoading: false,
      BUTTON_TYPES
    }
  },
  computed: {
    modalStatus () {
      return this.hasError ? MODAL_STATUSES.DANGER : MODAL_STATUSES.DEFAULT
    },
    title () {
      return this.hasError ? 'Subscription error' : 'Unsubscribe'
    },
    confirmedButtonType () {
      return this.hasError ? BUTTON_TYPES.DANGER : BUTTON_TYPES.PRIMARY
    }
  },
  methods: {
    async onUnsubscribeClick () {
      await this.confirmUnsubscribe()
    },
    show () {
      this.$refs.modal.show()
    },
    hide () {
      this.$refs.modal.hide()
    },
    async confirmUnsubscribe () {
      this.isLoading = true
      this.hasError = false

      try {
        const subscribesHttpService = new SubscribesHttpService()
        await subscribesHttpService.confirmUnsubscribe(this.verificationKey)
      } catch (error) {
        this.hasError = true
      } finally {
        this.isLoading = false
        this.isConfirmed = true
      }
    }
  }
}
</script>

<style lang="scss">
.ui-unsubscribe-confirm {
  display: flex;
  justify-content: space-between;

  .btn-block + .btn-block {
    margin-top: 0;
  }
}
</style>
