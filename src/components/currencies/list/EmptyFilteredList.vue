<template>
  <div>
    <app-card v-if="isMobileScreen" class="ui-empty-filtered-currencies-list">
      <div class="ui-empty-filtered-currencies-list_title">
        There are no currencies for chosen criteria
      </div>

      <div class="ui-empty-filtered-currencies-list_hint">
        Edit filters to watch currencies
        <app-icon class="m-l-8" :name="ICON_NAMES.ARROW_UP"></app-icon>
      </div>
    </app-card>

    <div v-else class="ui-empty-filtered-currencies-list">
      <div class="ui-empty-filtered-currencies-list_title">
        There are no currencies for chosen criteria
      </div>

      <div class="ui-empty-filtered-currencies-list_hint">
        Edit filters to watch currencies
        <app-icon class="m-l-8" :name="ICON_NAMES.ARROW_RIGHT"></app-icon>
      </div>

      <div class="m-t-24">
        <svg width="534" height="264" viewBox="0 0 534 264" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="56" width="332" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="56" y="56" width="332" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="56" y="112" width="332" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="56" y="168" width="332" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="56" y="224" width="332" height="40" rx="8" fill="#EEF6FD"/>
          <rect width="40" height="40" rx="8" fill="#EEF6FD"/>
          <rect y="56" width="40" height="40" rx="8" fill="#EEF6FD"/>
          <rect y="112" width="40" height="40" rx="8" fill="#EEF6FD"/>
          <rect y="168" width="40" height="40" rx="8" fill="#EEF6FD"/>
          <rect y="224" width="40" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="404" width="130" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="404" y="56" width="130" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="404" y="112" width="130" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="404" y="168" width="130" height="40" rx="8" fill="#EEF6FD"/>
          <rect x="404" y="224" width="130" height="40" rx="8" fill="#EEF6FD"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin]
}
</script>

<style lang="scss">
.ui-empty-filtered-currencies-list {
  padding: 48px 0 100px 0;
  text-align: center;
  width: 100%;
}

.ui-empty-filtered-currencies-list_title {
  margin: 0 48px 8px 48px;
  font-weight: bold;
  font-size: 18px;
  color: $site-primary-color;
}

.ui-empty-filtered-currencies-list_hint {
  color: #7997C4;
  margin: 0 8px;
}

@media (max-width: $max-mobile-width) {
  .ui-empty-filtered-currencies-list {
    padding: 24px 0;
  }

  .ui-empty-filtered-currencies-list_title {
    font-size: 16px;
  }
}
</style>
