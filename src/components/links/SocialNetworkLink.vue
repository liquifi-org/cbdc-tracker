<template>
  <app-link class="ui-social-network-link" :href="href" :text="text">
    <app-icon class="ui-social-network-link_icon" :name="iconName" :text="text"></app-icon>
    <span class="ui-social-network-link_text">{{text}}</span>
  </app-link>
</template>

<script>
import { SOCIAL_NETWORKS_NAMES } from '@/constants/socialNetworks'
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  props: {
    socialNetwork: String,
    href: String,
    text: String
  },
  computed: {
    iconName () {
      switch (this.socialNetwork) {
        case SOCIAL_NETWORKS_NAMES.FACEBOOK:
          return ICON_NAMES.FACEBOOK
        case SOCIAL_NETWORKS_NAMES.GITHUB:
          return ICON_NAMES.GITHUB
        case SOCIAL_NETWORKS_NAMES.INSTAGRAM:
          return ICON_NAMES.INSTAGRAM
        case SOCIAL_NETWORKS_NAMES.LINKEDIN:
          return ICON_NAMES.LINKEDIN
        case SOCIAL_NETWORKS_NAMES.TWITTER:
          return ICON_NAMES.TWITTER
        case SOCIAL_NETWORKS_NAMES.TELEGRAM:
          return ICON_NAMES.TELEGRAM
        default:
          throw new Error(`SocialNetworkLink: Can\`t get icon for ${this.socialNetwork}`)
      }
    }
  }
}
</script>

<style lang="scss">
  .ui-social-network-link_icon {
    margin-right: 8px;
  }

  .ui-social-network-link:hover {
    text-decoration-line: none;

    .ui-social-network-link_text {
      text-decoration-line: underline;
    }
  }
</style>
