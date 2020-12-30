<script>
import TimelineItem from './TimelineItem'
import TimelineLabel from './TimelineLabel'
import TimelineArrow from './TimelineArrow'
import { TIMELINE_CHANGE_TYPES } from '@/constants/timeline'
import { TIMELINE_MAX_TEXT_LENGTH } from './constants'
import { STATUS_NAMES } from '@/constants/statuses'

export default {
  components: {
    TimelineItem,
    TimelineArrow,
    TimelineLabel
  },
  props: {
    changes: Array
  },
  data () {
    return {
      TIMELINE_CHANGE_TYPES,
      STATUS_NAMES
    }
  },
  methods: {
    getChangeShortText (text) {
      return (text.length > TIMELINE_MAX_TEXT_LENGTH) ? `${text.slice(0, TIMELINE_MAX_TEXT_LENGTH)}...` : text
    },
    isChangeInfoShown (text) {
      return (text.length > TIMELINE_MAX_TEXT_LENGTH)
    }
  }
}
</script>
