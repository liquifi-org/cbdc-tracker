<template>
  <div class="ui-сontributing-organizations-separator"></div>
</template>

<script>
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin]
}
</script>

<style lang="scss">
.ui-сontributing-organizations-separator {
  &:after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: $site-primary-color;
    opacity: 0.2;
  }
}

@media (min-width: $min-desktop-width) {
  .ui-сontributing-organizations-separator {
    &:before {
      content: '';
      display: inline-block;
      width: 136px;
      height: 12px;
      margin-right: 8px;
      background: linear-gradient(270deg, #0F4698 -7.72%, rgba(15, 70, 152, 0) 78.31%);
      opacity: 0.2;
      border-radius: 6px;
    }
  }
}
</style>
