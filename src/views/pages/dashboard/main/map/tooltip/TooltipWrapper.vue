<template>
  <div>
    <component v-bind:is="tooltipContentComponent"></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tooltipContentComponent: this.$root.tooltipContentComponent
    }
  }
}
</script>
