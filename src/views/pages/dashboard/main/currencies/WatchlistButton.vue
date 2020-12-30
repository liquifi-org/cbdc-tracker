<template>
  <app-button :type="BUTTON_TYPES.SECONDARY" @click="openWatchlistPage">
    <app-icon :name="ICON_NAMES.WATCHLIST"></app-icon>
    Watchlist ({{watchlistSize}})
  </app-button>
</template>

<script>
import { mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { BUTTON_TYPES } from '@/components/buttons/constants'

export default {
  data () {
    return {
      BUTTON_TYPES
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.WATCHLIST, {
      watchlist: (state) => {
        return state.list
      }
    }),
    watchlistSize () {
      return this.watchlist.length
    }
  },
  methods: {
    openWatchlistPage () {
      this.$router.push('/watchlist')
    }
  }
}
</script>
