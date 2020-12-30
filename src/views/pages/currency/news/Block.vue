<template>
  <NewsCard :newsList="newsList"
            :totalElements="totalElements"
            :isLoading="isLoading"
            @showMoreNews="fetchNextNews"></NewsCard>
</template>

<script>
import NewsCard from '@/components/news/NewsBlock'
import { mapActions, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { CURRENCY_PAGE_ACTION_TYPES } from '@/store/modules/currencyPage/actions'

export default {
  components: {
    NewsCard
  },
  computed: {
    ...mapState(MODULE_NAMES.CURRENCY_PAGE, {
      newsList: (state) => {
        return state.news.list
      },
      totalElements: (state) => {
        return state.news.totalElements
      },
      isLoading: (state) => {
        return state.news.isLoading
      }
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.CURRENCY_PAGE, {
      fetchNextNews: CURRENCY_PAGE_ACTION_TYPES.FETCH_NEXT_NEWS
    })
  }
}
</script>
