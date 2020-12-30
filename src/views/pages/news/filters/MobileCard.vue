<template>
  <app-card>
    <div class="d-flex justify-content-between">
      <app-title level="2">Tags {{tagsCount}}</app-title>

      <div>
        <app-clear-button v-if="isFiltersExpanded"
                          class="m-r-16"
                          :disabled="isLoading"
                          text="Clear filtering"
                          @click="onClearFilters"></app-clear-button>

        <app-collapse-button :target="'filters' + componentId" @toggle="onToggleFilters"></app-collapse-button>
      </div>
    </div>

    <app-collapse-block :id="'filters' + componentId">
      <app-card-line class="m-t-16 m-b-16"></app-card-line>

      <FiltersContent class="m-t-16"></FiltersContent>
    </app-collapse-block>
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
  data () {
    return {
      isFiltersExpanded: false
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      isLoading: (state) => {
        return state.isLoading
      },
      selectedCurrencyTags: (state) => {
        return state.selectedCurrencyTags
      }
    }),
    ...mapGetters(MODULE_NAMES.NEWS, {
      lastUpdate: 'lastUpdate'
    }),
    tagsCount () {
      const tagsCount = this.selectedCurrencyTags.length
      return tagsCount ? `(${tagsCount})` : ''
    }
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      changeIsSelected: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_TAGS
    }),
    onToggleFilters (isExpanded) {
      this.isFiltersExpanded = isExpanded
    },
    onClearFilters () {
      this.changeIsSelected({ selectedCurrencyTags: [] })
    }
  }
}
</script>
