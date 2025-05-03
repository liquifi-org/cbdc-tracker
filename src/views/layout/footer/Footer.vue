<template>
  <footer class="ui-page-footer">
    <div class="ui-page-footer_copyright">CBDC Tracker © 2021-2025</div>

    <div v-if="false" class="ui-page-footer-contacts">
      <router-link class="ui-page-footer-contact" to="/">
        <app-icon :name="ICON_NAMES.GITHUB"></app-icon>
      </router-link>

      <router-link class="ui-page-footer-contact" to="/">
        <app-icon :name="ICON_NAMES.TWITTER"></app-icon>
      </router-link>

      <router-link class="ui-page-footer-contact" to="/">
        <app-icon :name="ICON_NAMES.FACEBOOK"></app-icon>
      </router-link>

      <router-link class="ui-page-footer-contact" to="/">
        <app-icon :name="ICON_NAMES.INSTAGRAM"></app-icon>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { ICON_NAMES } from '@/components/icons/constants'

export default {
  data () {
    return {
      ICON_NAMES
    }
  }
}
</script>

<style lang="scss">
   .ui-page-footer {
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 64px;
     padding: 0 64px;
     background: $site-primary-color;
     box-shadow: 0 0 16px rgba(244, 248, 252, 0.3);
     color: #FFFFFF;
   }

   .ui-page-footer_copyright {
     opacity: 0.75;
   }

   .ui-page-footer-contact {
     color: #FFFFFF;
     opacity: 0.75;
     font-size: 16px;
     margin-left: 16px;

     &:hover {
       color: #FFFFFF;
       opacity: 1;
     }
   }

   @media (max-width: $max-mobile-width) {
     .ui-page-footer {
       padding: 20px 16px;
       flex-direction: column;
     }

     .ui-page-footer_copyright {
       order: 1;
       opacity: 0.75;
     }

     .ui-page-footer-contact {
       order: 0;
       color: #FFFFFF;
       opacity: 0.75;
       font-size: 16px;
       margin-left: 16px;

       &:hover {
         color: #FFFFFF;
         opacity: 1;
       }
     }
   }
</style>
