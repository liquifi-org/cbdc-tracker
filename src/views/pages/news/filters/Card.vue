<template>
  <app-card>
    <template #header>
      <div class="d-flex justify-content-between align-items-baseline">
        <app-title level="2">Tags</app-title> <app-clear-button :disabled="isLoading"
                                                                text="Clear filtering"
                                                                @click="onClearFilters"></app-clear-button>
      </div>
      Check tags to filter news
    </template>

    <FiltersContent class="m-t-16"></FiltersContent>
  </app-card>
</template>

<script>
import FiltersContent from './Content'
import { mapActions, mapGetters, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { NEWS_ACTION_TYPES } from '@/store/modules/news.module'

export default {
  components: {
    FiltersContent
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      isLoading: (state) => {
        return state.isLoading
      }
    }),
    ...mapGetters(MODULE_NAMES.NEWS, {
      lastUpdate: 'lastUpdate'
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      changeIsSelected: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_TAGS
    }),
    onClearFilters () {
      this.changeIsSelected({ selectedCurrencyTags: [] })
    }
  }
}
</script>
