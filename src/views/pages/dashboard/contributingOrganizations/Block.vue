<template>
  <div>
    <div v-if="isMobileScreen" class="m-b-16">
      <app-title>{{ title }}</app-title>
    </div>

    <app-card class="ui-сontributing-organizations">
      <template v-if="!isMobileScreen" #header>
        <app-title>{{ title }}</app-title>
      </template>

      <div class="ui-сontributing-organizations_items">
        <div class="ui-сontributing-organizations_item">
          <app-link href="https://www.bcg.com/"
                    text="BCG">
            <BcgLogo class="ui-сontributing-organizations_item-logo"></BcgLogo>
          </app-link>
        </div>

        <div class="ui-сontributing-organizations_item">
          <app-link href="https://bcgplatinion.com/"
                    text="BCG Platinion">
            <BcgPlatinionLogo class="ui-сontributing-organizations_item-logo"></BcgPlatinionLogo>
          </app-link>
        </div>

        <div class="ui-сontributing-organizations_item">
          <app-link href="https://home.digital-euro-association.de/en"
                    text="DEA (Digital Euro Association)">
            <DeaLogo class="ui-сontributing-organizations_item-logo"></DeaLogo>
          </app-link>
        </div>

        <div class="ui-сontributing-organizations_item">
          <app-link href="http://firmshift.com/"
                    text="Firmshift">
            <FrimshiftLogo class="ui-сontributing-organizations_item-logo"></FrimshiftLogo>
          </app-link>
        </div>
      </div>
    </app-card>
  </div>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import BcgLogo from './Logos/Bcg.vue'
import BcgPlatinionLogo from './Logos/BcgPlatinion.vue'
import DeaLogo from './Logos/Dea.vue'
import FrimshiftLogo from './Logos/Frimshift.vue'

export default {
  mixins: [screenSizeMixin],
  components: {
    BcgLogo,
    BcgPlatinionLogo,
    DeaLogo,
    FrimshiftLogo
  },
  data () {
    return {
      title: 'Contributing Organizations'
    }
  }
}
</script>

<style lang="scss">
.ui-сontributing-organizations_items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: $min-tablet-width) and (max-width: $max-tablet-width) {
  .ui-сontributing-organizations_items {
    padding: 8px 0;
  }
}

@media (min-width: $min-desktop-width) {
  .ui-сontributing-organizations_items {
    padding: 32px;
  }
}

.ui-сontributing-organizations_item {
  max-width: 20%;

  .ui-сontributing-organizations_item-logo {
    .ui-сontributing-organizations_item-logo-img {
      max-width: 100%;
      max-height: 50px;

      &.default {
        display: inline;
      }

      &.hover {
        display: none;
      }
    }
  }

  &:hover {
    .ui-сontributing-organizations_item-logo-img {
      &.default {
        display: none;
      }

      &.hover {
        display: inline;
      }
    }
  }

  .ui-сontributing-organizations_item-logo {
    width: 100%;
  }
}

@media (max-width: $max-mobile-width) {
  .ui-сontributing-organizations_item {
    .ui-сontributing-organizations_item-logo {
      .ui-сontributing-organizations_item-logo-img {
        max-height: 20px;
      }
    }
  }
}
</style>
