<template>
  <div class="ui-layout">
    <Header></Header>
    <div class="ui-layout-content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header/Header'
import Footer from './footer/Footer'
import { SEO_META_OG, SEO_META_TWITTER } from '@/constants/seo'

export default {
  metaInfo () {
    return {
      meta: [...SEO_META_TWITTER, ...SEO_META_OG]
    }
  },
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
  .ui-layout {
    background-color: #F3F6F9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .ui-layout-content {
    padding: 0 49px 16px 49px;
    flex: 1;
  }

  @media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
    .ui-layout-content {
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @media (max-width: $max-mobile-width) {
    .ui-layout-content {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>
