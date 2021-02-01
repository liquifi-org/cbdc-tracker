<script>
import TimelineItem from './TimelineItem'
import { TIMELINE_CHANGE_TYPES } from '@/constants/timeline'
import { STATUS_NAMES } from '@/constants/statuses'

export default {
  components: {
    TimelineItem
  },
  props: {
    changes: Array
  },
  data () {
    return {
      TIMELINE_CHANGE_TYPES,
      STATUS_NAMES
    }
  }
}
</script>
