<template>
  <TagList :items="tags"
           :isSelectable="!isLoading"
           @changeIsSelected="changeIsSelected({ selectedCurrencyTags: $event })"></TagList>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { NEWS_ACTION_TYPES } from '@/store/modules/news.module'
import TagList from '@/components/currencyTags/CurrencyTagList'

export default {
  components: {
    TagList
  },
  computed: {
    ...mapState(MODULE_NAMES.NEWS, {
      currencyTags: (state) => {
        return state.currencyTags
      },
      selectedCurrencyTags: (state) => {
        return state.selectedCurrencyTags
      },
      isLoading: (state) => {
        return state.isLoading
      }
    }),
    tags () {
      return this.currencyTags.map((currencyTag) => {
        return {
          ...currencyTag,
          isSelected: this.selectedCurrencyTags.find((v) => {
            return (currencyTag.name === v.name)
          })
        }
      })
    }
  },
  methods: {
    ...mapActions(MODULE_NAMES.NEWS, {
      changeIsSelected: NEWS_ACTION_TYPES.FETCH_NEWS_BY_SELECTED_TAGS
    })
  }
}
</script>
