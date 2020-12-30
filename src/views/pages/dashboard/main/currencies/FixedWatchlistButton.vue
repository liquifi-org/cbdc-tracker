<template>
  <button class="ui-fixed-watchlist-button" @click="openWatchlistPage">
    <app-icon :name="ICON_NAMES.WATCHLIST_SELECTED_ITEM" title="Watchlist"></app-icon>
  </button>
</template>

<script>
export default {
  methods: {
    openWatchlistPage () {
      this.$router.push('/watchlist')
    }
  }
}
</script>

<style lang="scss">
  .ui-fixed-watchlist-button {
    border: none;
    padding: 0;
    z-index: 5000;
    position: fixed;
    right: 24px;
    bottom: 24px;
    width: 48px;
    height: 48px;
    background-color: $site-primary-color;
    border-radius: 100%;
    color: white;
    filter: drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.5));
  }
</style>
