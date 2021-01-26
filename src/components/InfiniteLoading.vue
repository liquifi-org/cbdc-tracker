<template>
  <infinite-loading ref="infiniteLoading" @infinite="onInfinite">
    <template #no-more>
      <slot name="no-more">
        <div></div>
      </slot>
    </template>

    <template #spinner>
      <slot name="spinner">
        <app-spinner></app-spinner>
      </slot>
    </template>

    <template #error>
      <slot name="fallback">
        Error
      </slot>
    </template>
  </infinite-loading>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    InfiniteLoading
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onInfinite () {
      !this.isLoading && this.$emit('next')
    },
    load () {
      this.isLoading = true
    },
    loaded () {
      this.isLoading = false
      this.$refs.infiniteLoading.stateChanger.loaded()
    },
    complete () {
      this.isLoading = false
      this.$refs.infiniteLoading.stateChanger.complete()
    },
    error () {
      this.isLoading = false
      this.$refs.infiniteLoading.stateChanger.error()
    }
  }
}
</script>
