<template>
  <b-navbar class="ui-layout-header" :class="{'isNavbarExpanded': isNavbarExpanded}" toggleable="md">
    <b-navbar-brand>
      <router-link to="/" title="Visit the main page" @click="onLickClick">
        <Logo></Logo>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle ref="navbarToggle" target="nav-collapse" @click="onNavbarToggleClick">
      <template #default="{ expanded }">
        <app-icon v-if="expanded" :name="ICON_NAMES.CLOSE_MENU"></app-icon>
        <app-icon v-else :name="ICON_NAMES.MENU"></app-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <HeaderLink class="flex-right" route="/" text="Dashboard" @click="onLickClick"></HeaderLink>
        <HeaderLink class="flex-right" route="/watchlist" text="Watchlist" @click="onLickClick"></HeaderLink>
        <HeaderLink class="flex-right" route="/news" text="News" @click="onLickClick"></HeaderLink>
        <HeaderLink class="flex-right" route="/timeline" text="Timeline" @click="onLickClick"></HeaderLink>
        <HeaderLink class="flex-right" href="/cbdc-tracker-whitepaper.pdf" text="Whitepaper" @click="onLickClick"></HeaderLink>

        <div class="ui-layout-header-footer">
          <Footer></Footer>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from './Logo'
import HeaderLink from './HeaderLink'
import Footer from '@/views/layout/footer/Footer'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    Logo,
    HeaderLink,
    Footer
  },
  data () {
    return {
      isNavbarExpanded: false
    }
  },
  methods: {
    onNavbarToggleClick () {
      this.isNavbarExpanded = !this.$refs.navbarToggle.toggleState
    },
    onScreenResize (event) {
      this.isNavbarExpanded = this.isMobileScreen ? this.isNavbarExpanded : false
    },
    onLickClick () {
      if (this.isMobileScreen) {
        this.$refs.navbarToggle.$el.click()
      } else {
        this.isNavbarExpanded = false
      }
    }
  }
}
</script>

<style lang="scss">
  nav.ui-layout-header.navbar {
    max-height: 128px;
    padding-left: 64px;
    padding-right: 64px;
    padding-bottom: 80px;
    margin-bottom: -64px;
    background: $site-primary-color;

    .navbar-nav {
      > * {
        margin-left: 40px;
      }
    }

    .ui-layout-header-footer {
      display: none;
    }

    a:focus {
      outline-color: white;
    }

    @media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
      padding-left: 47px;
      padding-right: 47px;
    }

    @media (max-width: $max-mobile-width) {
      width: 100%;
      box-sizing: border-box;
      max-height: none;
      padding: 4px 31px;
      margin-bottom: 16px;
      align-items: start;

      &.isNavbarExpanded {
        position: fixed;
        top: 0;
        z-index: 9999;

        .ui-layout-header-footer {
          display: flex;
          align-items: flex-end;
          flex: 1;
        }

        .ui-page-footer {
          box-shadow: none;
          flex: 1;
        }
      }

      .navbar-nav {
        height: calc(100vh - 48px);
        margin-top: 40px;

        > * {
          margin-left: 0;
          margin-bottom: 32px;
        }
      }

      button.navbar-toggler {
        height: 40px;
        line-height: 100%;
        padding: 0;
        border: none;
        color: white;
      }
    }
  }
</style>
