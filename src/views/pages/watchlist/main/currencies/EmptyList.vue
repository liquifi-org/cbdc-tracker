<template>
  <div>
    <template v-if="isMobileScreen">
      <app-card class="ui-empty-currencies-watchlist-list">
        <div class="ui-empty-filtered-currencies-list_title">
          Watchlist is empty
        </div>

        <div class="ui-empty-filtered-currencies-list_hint">
          Add digital currencies to see it in the Watchlist
        </div>
      </app-card>
    </template>

    <template v-else>
      <div class="ui-empty-currencies-watchlist-list">
        <div class="ui-empty-filtered-currencies-list_title">
          Add digital currencies to Watchlist
        </div>

        <div class="m-t-24">
          <svg width="332" height="264" viewBox="0 0 332 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.22448 34.8854C6.4516 35.2827 5.57647 34.5884 5.73206 33.7015L7.39152 24.2425L0.346856 17.5292C-0.311505 16.9018 0.0292951 15.7547 0.911274 15.6294L10.7082 14.2377L15.0765 5.58461C15.47 4.80513 16.5359 4.80513 16.9294 5.58461L21.2976 14.2377L31.0946 15.6294C31.9766 15.7547 32.3174 16.9018 31.659 17.5292L24.6143 24.2425L26.2738 33.7015C26.4294 34.5884 25.5543 35.2827 24.7814 34.8854L16.0029 30.3735L7.22448 34.8854Z" fill="#EEF6FD"/>
            <rect x="52" width="280" height="40" rx="8" fill="#EEF6FD"/>
            <path d="M7.22448 90.8854C6.4516 91.2827 5.57647 90.5884 5.73206 89.7015L7.39152 80.2425L0.346856 73.5292C-0.311505 72.9018 0.0292951 71.7547 0.911274 71.6294L10.7082 70.2377L15.0765 61.5846C15.47 60.8051 16.5359 60.8051 16.9294 61.5846L21.2976 70.2377L31.0946 71.6294C31.9766 71.7547 32.3174 72.9018 31.659 73.5292L24.6143 80.2425L26.2738 89.7015C26.4294 90.5884 25.5543 91.2827 24.7814 90.8854L16.0029 86.3735L7.22448 90.8854Z" fill="#EEF6FD"/>
            <rect x="52" y="56" width="280" height="40" rx="8" fill="#EEF6FD"/>
            <path d="M7.22448 146.885C6.4516 147.283 5.57647 146.588 5.73206 145.702L7.39152 136.243L0.346856 129.529C-0.311505 128.902 0.0292951 127.755 0.911274 127.629L10.7082 126.238L15.0765 117.585C15.47 116.805 16.5359 116.805 16.9294 117.585L21.2976 126.238L31.0946 127.629C31.9766 127.755 32.3174 128.902 31.659 129.529L24.6143 136.243L26.2738 145.702C26.4294 146.588 25.5543 147.283 24.7814 146.885L16.0029 142.374L7.22448 146.885Z" fill="#EEF6FD"/>
            <rect x="52" y="112" width="280" height="40" rx="8" fill="#EEF6FD"/>
            <path d="M7.22448 202.885C6.4516 203.283 5.57647 202.588 5.73206 201.702L7.39152 192.243L0.346856 185.529C-0.311505 184.902 0.0292951 183.755 0.911274 183.629L10.7082 182.238L15.0765 173.585C15.47 172.805 16.5359 172.805 16.9294 173.585L21.2976 182.238L31.0946 183.629C31.9766 183.755 32.3174 184.902 31.659 185.529L24.6143 192.243L26.2738 201.702C26.4294 202.588 25.5543 203.283 24.7814 202.885L16.0029 198.374L7.22448 202.885Z" fill="#EEF6FD"/>
            <rect x="52" y="168" width="280" height="40" rx="8" fill="#EEF6FD"/>
            <path d="M7.22448 258.885C6.4516 259.283 5.57647 258.588 5.73206 257.702L7.39152 248.243L0.346856 241.529C-0.311505 240.902 0.0292951 239.755 0.911274 239.629L10.7082 238.238L15.0765 229.585C15.47 228.805 16.5359 228.805 16.9294 229.585L21.2976 238.238L31.0946 239.629C31.9766 239.755 32.3174 240.902 31.659 241.529L24.6143 248.243L26.2738 257.702C26.4294 258.588 25.5543 259.283 24.7814 258.885L16.0029 254.374L7.22448 258.885Z" fill="#EEF6FD"/>
            <rect x="52" y="224" width="280" height="40" rx="8" fill="#EEF6FD"/>
          </svg>
        </div>

        <div class="m-t-32">
          <app-arrow-link-back route="/" text="Go back to the full list"></app-arrow-link-back>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin]
}
</script>

<style lang="scss">
.ui-empty-currencies-watchlist-list {
  padding: 48px 0 100px 0;
  text-align: center;
  width: 100%;
}

.ui-empty-currencies-watchlist-list_title {
  margin: 0 48px 8px 48px;
  font-weight: bold;
  font-size: 18px;
  color: $site-primary-color;
}

.ui-empty-currencies-watchlist-list_hint {
  color: #7997C4;
  margin: 0 8px;
}

@media (max-width: $max-mobile-width) {
  .ui-empty-currencies-watchlist-list {
    padding: 24px 0;
  }

  .ui-empty-currencies-watchlist-list_title {
    font-size: 16px;
  }
}
</style>
