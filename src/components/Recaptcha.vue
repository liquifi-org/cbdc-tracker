<template>
  <vue-recaptcha ref="recaptcha"
                 :sitekey="sitekey"
                 size="invisible"
                 @verify="onOk"
                 @expired="onExpired"
                 @error="onError">
  </vue-recaptcha>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import { Subject } from 'rxjs'
import { take } from 'rxjs/operators'

export default {
  components: { VueRecaptcha },
  data () {
    return {
      sitekey: process.env.VUE_APP_RECAPTCHA_SITEKEY,
      subject: new Subject()
    }
  },
  methods: {
    onOk (recaptchaToken) {
      this.subject.next(recaptchaToken)
      this.$emit('ok', recaptchaToken)
    },
    onExpired () {
      this.$refs.recaptcha.reset()
    },
    onError (error) {
      this.subject.error(error)
      this.$emit('error', error)
    },
    validate () {
      return new Promise((resolve, reject) => {
        this.subject.pipe(
          take(1)
        ).subscribe(resolve, reject)

        this.$refs.recaptcha.execute()
      })
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
