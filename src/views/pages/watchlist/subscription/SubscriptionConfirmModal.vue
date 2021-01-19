<template>
  <div>
    <SubscribeModal v-if="operation === SUBSCRIBE_OPERATION_TYPES.SUBSCRIBE"
                    ref="modal"
                    :verificationKey="verificationKey"></SubscribeModal>

    <UnsubscribeModal v-if="operation === SUBSCRIBE_OPERATION_TYPES.UNSUBSCRIBE"
                      ref="modal"
                      :verificationKey="verificationKey"></UnsubscribeModal>

    <UpdateModal v-if="operation === SUBSCRIBE_OPERATION_TYPES.UPDATE"
                 ref="modal"
                 :verificationKey="verificationKey"></UpdateModal>
  </div>
</template>

<script>
import { SubscribesHttpService } from '@/services/http/subscribesHttp.service'
import { SUBSCRIBE_OPERATION_TYPES } from '@/views/pages/watchlist/subscription/constants'
import SubscribeModal from './confirmModals/Subscribe'
import UnsubscribeModal from './confirmModals/Unsubscribe'
import UpdateModal from './confirmModals/Update'

export default {
  components: {
    SubscribeModal,
    UnsubscribeModal,
    UpdateModal
  },
  data () {
    return {
      operation: null,
      verificationKey: null,
      SUBSCRIBE_OPERATION_TYPES
    }
  },
  created () {
    this.subscribesHttpService = new SubscribesHttpService()

    this.operation = this.$route.query.operation
    this.verificationKey = this.$route.query.verificationKey
  },
  mounted () {
    this.operation && this.show()
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
