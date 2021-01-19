<template>
  <div>
    <app-card v-if="!isMobileScreen">
      <template #header>
        <app-title level="2">Subscription settings</app-title>
      </template>

      <b-row>
        <b-col class="m-b-4" cols="12" xxl="6">
          <p>Enter your e-mail to receive updates of the chosen currencies. If you have already subscribed, the list of
            currencies will be changed to the current state.</p>
          <p>Also you can cancel all the subscriptions.</p>
        </b-col>

        <b-col cols="12" xxl="6">
          <b-row class="d-flex justify-content-left align-items-bottom">
            <b-col cols="6">
              <app-email-input ref="emailInput"
                               class="m-b-16"
                               label="Your e-mail"
                               :value="email"
                               :state="emailInputState"
                               placeholder="Enter your e-mail..."
                               required
                               @changeValue="onEmailChange"></app-email-input>
            </b-col>

            <b-col cols="6">
              <app-button class="m-t-28"
                          :type="BUTTON_TYPES.PRIMARY"
                          @click="onSubscribeClick">Subscribe
              </app-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </app-card>

    <template v-if="isMobileScreen">
      <app-title level="2">Subscription settings</app-title>

      <b-row>
        <b-col class="m-b-4" cols="12">
          <p>Enter your e-mail to get new updates of chosen currencies. If you’ve already subscribed, list of currencies
            will be changed to the current state.</p>
          <p>Also you can cancel all subscribtions.</p>
        </b-col>

        <b-col cols="12">
          <app-email-input ref="emailInput"
                           class="m-b-16"
                           label="Your e-mail"
                           :value="email"
                           :state="emailInputState"
                           placeholder="Enter your e-mail..."
                           required
                           @changeValue="onEmailChange"></app-email-input>

          <app-button :type="BUTTON_TYPES.PRIMARY"
                      @click="onSubscribeClick"
                      :isBlock="true">Subscribe
          </app-button>
        </b-col>
      </b-row>
    </template>

    <SubscribeModal ref="subscribeModal"></SubscribeModal>
  </div>
</template>

<script>
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { mapActions, mapMutations, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { WATCHLIST_PAGE_ACTION_TYPES } from '@/store/modules/watchlistPage/actions'
import { WATCHLIST_PAGE_MUTATION_TYPES } from '@/store/modules/watchlistPage/mutations'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import SubscribeModal from './SubscribeModal'

export default {
  mixins: [screenSizeMixin],
  components: {
    SubscribeModal
  },
  data () {
    return {
      emailInputState: null,
      BUTTON_TYPES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.WATCHLIST_PAGE, {
      email: (state) => {
        return state.subscription.email
      }
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.WATCHLIST_PAGE, {
      subscribe: WATCHLIST_PAGE_ACTION_TYPES.SUBSCRIBE
    }),
    ...mapMutations(MODULE_NAMES.WATCHLIST_PAGE, {
      changeEmail: WATCHLIST_PAGE_MUTATION_TYPES.CHANGE_EMAIL
    }),
    async onSubscribeClick () {
      if (!this.validateEmail()) {
        return
      }

      const modal = this.$refs.subscribeModal

      try {
        modal.isLoading = true
        modal.hasError = false

        modal.showModal()
        await this.subscribe()

        modal.isLoading = false
      } catch (error) {
        console.log(error)
        modal.isLoading = false
        modal.hasError = true
      }
    },
    onEmailChange (email) {
      this.emailInputState = null
      this.changeEmail({ email })
    },
    validateEmail () {
      const isValid = this.$refs.emailInput.validate()
      this.emailInputState = isValid ? null : false
      return isValid
    }
  }
}
</script>
