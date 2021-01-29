<template>
  <app-card class="ui-not-found-card">
    <div class="ui-not-found-card_content">
      <NotFoundImgSmall v-if="isMobileScreen"></NotFoundImgSmall>
      <NotFoundImg v-else></NotFoundImg>

      <div class="m-t-24">
        <app-link href="/">
          <app-button :type="BUTTON_TYPES.PRIMARY">
            Go to homepage <app-icon class="m-l-8" :name="ICON_NAMES.ARROW_RIGHT_SQUARE"></app-icon>
          </app-button>
        </app-link>
      </div>
    </div>
  </app-card>
</template>

<script>
import NotFoundImg from './NotFoundImg'
import NotFoundImgSmall from './NotFoundImgSmall'
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  components: {
    NotFoundImg,
    NotFoundImgSmall
  },
  mixins: [screenSizeMixin],
  data () {
    return {
      BUTTON_TYPES
    }
  }
}
</script>

<style lang="scss">
.ui-not-found-card {
  text-align: center;
}
.ui-not-found-card_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 176px);
}

.ui-not-found-card_text {
  padding: 40px 0 32px 0;
  font-size: 18px;
  line-height: 26px;
  color: #1A1D39;
}
</style>
