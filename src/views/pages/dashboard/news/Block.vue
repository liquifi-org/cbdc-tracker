<template>
  <div>
    <app-card v-if="!isMobileScreen">
      <template #header>
        <NewsHeader></NewsHeader>
      </template>

      <div class="ui-dashboard-news_content">
        <div v-if="isLoading" class="d-flex justify-content-center align-items-top m-t-32">
          <app-spinner :hint="loaderHint"></app-spinner>
        </div>

        <b-row v-else>
          <b-col cols="6"
                 xxl="3"
                 class="ui-news-item-wrapper"
                 v-for="(newsItem) in newsList" :key="newsItem.tag">
            <NewsItem :adaptiveType="NEWS_ITEM_ADAPTIVE_TYPE.MOBILE" :data="newsItem"></NewsItem>
          </b-col>
        </b-row>
      </div>
    </app-card>

    <div v-else>
      <NewsHeader class="m-b-16"></NewsHeader>

      <app-card v-if="isLoading" class="m-b-16">
        <app-spinner :hint="loaderHint"></app-spinner>
      </app-card>

      <div class="m-b-16" v-else>
        <app-card :class="{'m-b-16': !(index === newsList.length - 1)}" v-for="(newsItem, index) in newsList" :key="newsItem.tag">
          <NewsItem :adaptiveType="NEWS_ITEM_ADAPTIVE_TYPE.MOBILE" :data="newsItem"></NewsItem>
        </app-card>
      </div>

      <app-link href="/news" :isBlock="true">
        <app-button :type="BUTTON_TYPES.PRIMARY" :isBlock="true">
          Go to all news <app-icon class="m-l-8" :name="ICON_NAMES.ARROW_RIGHT_SQUARE"></app-icon>
        </app-button>
      </app-link>
    </div>
  </div>
</template>

<script>
import NewsHeader from './Header'
import NewsItem from '@/components/news/NewsItem'
import { NEWS_ITEM_ADAPTIVE_TYPE } from '@/components/news/constants'
import { mapActions, mapGetters, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'
import { DASHBOARD_ACTION_TYPES } from '@/store/modules/dashboard/actions'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import { BUTTON_TYPES } from '@/components/buttons/constants'

export default {
  mixins: [screenSizeMixin],
  components: {
    NewsItem,
    NewsHeader
  },
  data () {
    return {
      loaderHint: 'Please wait while news will be loaded',
      NEWS_ITEM_ADAPTIVE_TYPE,
      BUTTON_TYPES
    }
  },
  async created () {
    await this.fetchNews()
  },
  computed: {
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      newsList: 'newsList'
    }),
    ...mapState(MODULE_NAMES.DASHBOARD, {
      isLoading: (state) => {
        return state.news.isLoading
      }
    })
  },
  methods: {
    ...mapActions(MODULE_NAMES.DASHBOARD, {
      fetchNews: DASHBOARD_ACTION_TYPES.FETCH_NEWS_CURRENT_PAGE
    })
  }
}
</script>

<style lang="scss">
  .ui-dashboard-news_content {
    min-height: 435px;
  }

  .ui-news-item-wrapper {
    min-height: 435px;
  }

  @media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
    .ui-dashboard-news_content {
      height: 870px;
    }
  }
</style>
