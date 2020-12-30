<template>
  <div class="d-flex justify-content-between align-items-center">
    <template v-if="!isMobileScreen">
      <div>
        <app-title level="2">News</app-title>
        <app-arrow-link text="Go to all news" route="/news"></app-arrow-link>
      </div>

      <div>
        <PreviousButton :disabled="isPreviousButtonDisabled"
                        class="m-r-16"
                        @click="fetchPreviousPage"></PreviousButton>
        <NextButton :disabled="isNextButtonDisabled"
                    @click="fetchNextPage">></NextButton>
      </div>
    </template>

    <template v-else>
      <app-title level="2">News</app-title>
      <app-arrow-link text="Go to all news" route="/news"></app-arrow-link>
    </template>
  </div>
</template>

<script>
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import { mapActions, mapGetters } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_ACTION_TYPES } from '@/store/modules/dashboard/actions'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    NextButton,
    PreviousButton
  },
  computed: {
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      isPreviousButtonDisabled: 'isPreviousNewsButtonDisabled',
      isNextButtonDisabled: 'isNextNewsButtonDisabled'
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.DASHBOARD, {
      fetchPreviousPage: DASHBOARD_ACTION_TYPES.FETCH_NEWS_PREVIOUS_PAGE,
      fetchNextPage: DASHBOARD_ACTION_TYPES.FETCH_NEWS_NEXT_PAGE
    })
  }
}
</script>
