<script>
import TimelineArrow from '@/components/timeline/TimelineArrow'
import TimelineLabel from '@/components/timeline/TimelineLabel'
import { getChangeValueComponent } from '@/components/timeline/changeValue/getChangeValueComponent'

export default {
  components: {
    TimelineArrow,
    TimelineLabel
  },
  props: {
    change: Object
  },
  computed: {
    valueComponent () {
      return getChangeValueComponent(this.change.property)
    }
  }
}
</script>
