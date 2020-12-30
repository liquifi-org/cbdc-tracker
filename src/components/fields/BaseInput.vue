<script>
export default {
  props: {
    data: Object
  },
  computed: {
    value () {
      return this.data.value
    },
    label () {
      return this.data.label
    },
    placeholder () {
      return this.data.placeholder
    }
  }
}
</script>
