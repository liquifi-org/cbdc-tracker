<template>
  <div class="ui-news-item" :class="adaptiveType">
    <NewsItemHeader class="ui-news-item_header-under-image" :data="data"></NewsItemHeader>

    <app-image class="ui-news-item_image" :src="imageSrc" :alt="data.title">
      <template #fallback>
        <NewsImageFallback></NewsImageFallback>
      </template>
    </app-image>

    <NewsItemHeader class="ui-news-item_header-above-image" :data="data"></NewsItemHeader>

    <div class="ui-news-item_content">
      <main>{{abstract}}</main>
      <NewsItemFooter class="m-t-8" :data="data"></NewsItemFooter>
    </div>
  </div>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'
import NewsItemHeader from './NewsItemHeader'
import NewsItemFooter from './NewsItemFooter'
import NewsImageFallback from './NewsImageFallback'

export default {
  components: {
    NewsItemHeader,
    NewsItemFooter,
    NewsImageFallback
  },
  props: {
    data: Object,
    adaptiveType: String
  },
  data () {
    return {
      ICON_NAMES
    }
  },
  computed: {
    abstract () {
      return this.data.abstract
    },
    imageSrc () {
      return this.data.image
    }
  }
}
</script>

<style lang="scss">
  .ui-news-item {
    overflow: hidden;
    text-overflow: ellipsis;

    .ui-news-item_date {
      font-size: 12px;
      color: #7997C4;
    }

    .ui-news-item_source {
      a {
        font-size: 12px;
        color: $site-primary-color;
      }
    }

    main {
      font-size: 14px;
    }
  }

  .ui-news-item_image, .ui-news-item_tablet_image {
    text-align: center;
    height: 200px;
  }

  .ui-news-item, .ui-news-item.desktop {
    .ui-news-item_header-above-image, .ui-news-item_content, .ui-news-item_image  {
      width: auto;
      float: none;
      padding: 0;
      margin: 0;
    }

    .ui-news-item_header-under-image {
      display: none;
    }

    .ui-news-item_image {
      display: block;
      width: 25%;
      float: left;
    }

    .ui-news-item_header-above-image, .ui-news-item_content {
      padding: 0 0 0 16px;
      width: 75%;
      float: right;
    }
  }

  .ui-news-item.tablet {
    .ui-news-item_header-under-image, .ui-news-item_content, .ui-news-item_image  {
      width: auto;
      float: none;
      padding: 0;
      margin: 0;
    }

    .ui-news-item_header-above-image {
      display: none;
    }

    .ui-news-item_image {
      width: 35%;
      float: left;
    }

    .ui-news-item_header-under-image {
      display: block;
      float: none;
    }

    .ui-news-item_content {
      padding: 0 0 0 16px;
      width: 65%;
      float: right;
    }
  }

  .ui-news-item.mobile {
    .ui-news-item_header-above-image, .ui-news-item_content, .ui-news-item_image  {
      width: auto;
      float: none;
      padding: 0;
      margin: 0;
    }

    .ui-news-item_header-under-image {
      display: none;
    }

    .ui-news-item_image {
      width: 100%;
      margin-bottom: 16px;
    }

    .ui-news-item_image {
      display: block;
      height: 200px;
    }
  }
</style>
