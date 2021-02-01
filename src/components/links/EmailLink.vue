<template>
  <a class="ui-mail-link" :href="'mailto:' + email" :title="email">
    <app-icon :name="ICON_NAMES.MAIL" :text="email" class="ui-mail-link_icon"></app-icon>
    <span class="ui-mail-link_text">{{ email }}</span>
  </a>
</template>

<script>
export default {
  props: {
    email: String
  }
}
</script>

<style lang="scss">
.ui-mail-link, .ui-mail-link:hover {
  color: $site-primary-color;

  .ui-social-network-link_text {
    text-decoration-line: underline;
  }
}

.ui-mail-link:hover {
  text-decoration-line: none;

  .ui-mail-link_text {
    text-decoration-line: underline;
  }
}

.ui-mail-link_icon {
  margin-right: 8px;
}
</style>
