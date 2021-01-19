<template>
  <vue-recaptcha ref="recaptcha"
                 :sitekey="sitekey"
                 size="invisible"
                 @verify="onOk"
                 @expired="onExpired">
  </vue-recaptcha>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

const RECAPTCHA_SITEKEY = '6LcSqzIaAAAAAEkPTV9gfMGMV0vPhXa7WMMCoVZE'

export default {
  components: { VueRecaptcha },
  data () {
    return {
      sitekey: RECAPTCHA_SITEKEY
    }
  },
  methods: {
    onOk (recaptchaToken) {
      this.$emit('ok', recaptchaToken)
    },
    onExpired () {
      this.$refs.recaptcha.reset()
    },
    validate () {
      this.$refs.recaptcha.execute()
    },
    reset () {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>

<style lang="scss">
.grecaptcha-badge {
  z-index: 500;
}
</style>
