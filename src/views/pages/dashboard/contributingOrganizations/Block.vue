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

    <div class="ui-сontributing-organizations_item-filter">
      <svg id="svg">
        <defs>
          <filter id="blue-filter">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values="0.25 0   0   0   0
                        0   0.42  0   0   0
                        0   0   0.68  0   0
                        0   0   0   1   0 "/>
          </filter>
        </defs>
      </svg>
    </div>
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

@media (min-width: $min-desktop-width) {
  .ui-сontributing-organizations_items {
    margin: 0 32px;
  }
}

.ui-сontributing-organizations_item {
  min-width: 10%;
  max-width: 15%;
  filter: grayscale(100%);

  &:hover {
    filter: none;
  }

  .ui-сontributing-organizations_item-logo {
    width: 100%;
  }
}

.ui-сontributing-organizations_item-filter {
  display: none;
}
</style>
