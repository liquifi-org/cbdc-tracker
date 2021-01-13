<template>
  <div class="ui-link-wrapper" :class="{block: isBlock}">
    <a v-if="isExternalLink"
       class="ui-link"
       :href="href"
       :title="localText"
       target="_blank"
       rel="noopener noreferrer">
      <slot>
        {{localText}}
      </slot>
    </a>

    <router-link v-else class="ui-link" :to="href" :title="localText">
      <slot>
        {{localText}}
      </slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    text: String,
    isBlock: Boolean
  },
  computed: {
    localText () {
      return this.text || this.href
    },
    isExternalLink () {
      return (this.href.startsWith('http://') || this.href.startsWith('https://'))
    }
  }
}
</script>

<style lang="scss">
  .ui-link, .ui-link:hover {
    color: $site-primary-color;
    opacity: .8;

    &:hover {
      opacity: 1;
    }
  }

  .ui-link-wrapper {
    display: inline-block;
    max-width: 100%;

    &.block {
      display: block;
    }
  }
</style>
