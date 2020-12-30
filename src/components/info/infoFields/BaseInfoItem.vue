<script>
import InfoItemTitle from '../InfoItemTitle'

export default {
  components: {
    InfoItemTitle
  },
  props: {
    data: Object
  },
  computed: {
    value () {
      return this.data.value
    },
    title () {
      return this.data.title
    }
  }
}
</script>
