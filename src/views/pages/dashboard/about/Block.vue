<template>
  <div>
    <div v-if="isMobileScreen" class="m-b-16">
      <app-title level="2">CBDC project</app-title>
      Current status of Central Bank Digital Currencies (CBDC) worldwide
    </div>

    <app-card class="ui-about">
      <template v-if="!isMobileScreen" #header>
        <app-title level="2">CBDC project</app-title>
        Current status of Central Bank Digital Currencies (CBDC) worldwide
      </template>

        <b-row>
        <b-col cols="12" xxl="6">
          <div class="m-b-12">
            <strong>Description</strong>
          </div>

          <strong>Cancelled</strong> Countries that cancelled or decommissioned a CBDC.<br>
          <strong>Research</strong> Countries that published multiple research reports about CBDC and started experimenting.<br>
          <strong>Pilot</strong> Countries piloting CBDC, e.g., for domestic interbank or international use cases, in a real environment with a limited number of parties.<br>
          <strong>Development</strong> Countries that already launched a small-scale pilot but currently prepare their CBDC for a full-scale launch.<br>
          <strong>Launched</strong> Countries that officially launched a CBDC.
        </b-col>

        <b-col cols="12" xxl="6">
          <div class="m-b-12" :class="{'m-t-16': isMobileScreen}">
            <strong>Publications</strong>
          </div>

          <div class="m-b-16">
            <div class="m-b-8">
              <app-external-link href="https://www.bcg.com/en-nl/publications/2020/get-ready-for-the-future-of-money"
                                 text="Get Ready for the Future of Money"></app-external-link>
            </div>

            <div>
              <app-external-link href="https://www.coindesk.com/central-bank-digital-currencies-need-decentralization"
                                 text="Central Bank Digital Currencies Need Decentralization"></app-external-link>
            </div>
          </div>

          <b-row>
            <b-col class="m-b-16" cols="12" md="8">
              <div>
                <strong>Key contributors</strong>
              </div>

              <div class="m-t-4">
                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/mikhalev/"
                                         text="Igor Mikhalev"></app-social-network-link>

                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/kaj-burchardi-b1030242/"
                                         text="Kaj Burchardi"></app-social-network-link>

                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/bihaosong/"
                                         text="Bihao Song"></app-social-network-link>

                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/igor-struchkov-7a4994163/"
                                         text="Igor Struchkov"></app-social-network-link>

                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/jonasgross94/"
                                         text="Jonas Gross"></app-social-network-link>

                <app-social-network-link class="ui-about_social-network-link"
                                         :socialNetwork="SOCIAL_NETWORKS_NAMES.LINKEDIN"
                                         href="https://www.linkedin.com/in/gourav-roy-6b5ab4a4/"
                                         text="Gourav Roy"></app-social-network-link>
              </div>
            </b-col>

            <b-col class="m-b-16" cols="12" md="4">
              <div class="m-b-12">
                <strong>Source</strong>
              </div>

              <app-social-network-link :socialNetwork="SOCIAL_NETWORKS_NAMES.GITHUB"
                                       href="https://github.com/liquifi-org/cbdc-tracker"
                                       text="Github"></app-social-network-link>
            </b-col>
          </b-row>

          MIT License, free for reproduction and distribution
        </b-col>
      </b-row>
    </app-card>
  </div>
</template>

<script>
import { SOCIAL_NETWORKS_NAMES } from '@/constants/socialNetworks'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  data () {
    return {
      SOCIAL_NETWORKS_NAMES
    }
  }
}
</script>

<style lang="scss">
  .ui-about {
    strong {
      font-weight: 800;
    }
  }

  .ui-about_social-network-link {
    margin-top: 8px;
    margin-right: 24px;
  }
</style>
