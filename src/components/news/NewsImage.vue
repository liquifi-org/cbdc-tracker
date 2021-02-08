<template>
  <div ref="wrapper"
       class="ui-news-image-wrapper"
       :class="[adaptiveType, isHorizontalImageShown && 'isHorizontalImageShown']">
    <template v-show="!isFallbackShown">
      <img ref="horizontalImage"
           :alt="alt"
           class="ui-news-horizontal-image"
           @load="onHorizontalImageLoad"
           @error="onHorizontalImageError">

      <img ref="verticalImage" :alt="alt" class="ui-news-vertical-image">
    </template>

    <NewsImageFallback></NewsImageFallback>
  </div>
</template>

<script>
import { LoadFileService } from '@/services/loadFile.service'
import NewsImageFallback from '@/components/news/NewsImageFallback'

export default {
  components: {
    NewsImageFallback
  },
  props: {
    src: String,
    alt: String,
    adaptiveType: String
  },
  data () {
    return {
      isFallbackShown: true,
      isHorizontalImageShown: true
    }
  },
  async mounted () {
    await this.showImg()
  },
  async update () {
    await this.showImg()
  },
  watch: {
    async src () {
      await this.showImg()
    }
  },
  methods: {
    onHorizontalImageLoad () {
      this.isFallbackShown = false
      this.checkImageSize()
    },
    onHorizontalImageError () {
      this.isFallbackShown = true
    },
    async showImg () {
      try {
        if (!this.src) {
          return
        }

        const file = await this.downloadImg()

        const reader = new window.FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const imageDataUrl = reader.result
          this.$refs.horizontalImage.setAttribute('src', imageDataUrl)
          this.$refs.verticalImage.setAttribute('src', imageDataUrl)
        }
      } catch (error) {
        console.warn(error)
      }
    },
    async downloadImg () {
      const downloadFileService = new LoadFileService()
      return await downloadFileService.getFileResponse(this.src, {
        isExternalResource: true
      })
    },
    checkImageSize () {
      const wrapperRect = this.$refs.wrapper.getBoundingClientRect()
      const horizontalImageRect = this.$refs.horizontalImage.getBoundingClientRect()

      this.isHorizontalImageShown = (horizontalImageRect.width >= wrapperRect.width)
    }
  }
}
</script>

<style lang="scss">
.ui-news-image-wrapper {
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 200px;

  .ui-news-vertical-image {
    opacity: 1;
  }

  .ui-news-horizontal-image {
    opacity: 0;
  }

  &.isHorizontalImageShown {
    .ui-news-vertical-image {
      opacity: 0;
    }

    .ui-news-horizontal-image {
      opacity: 1;
    }
  }

  .ui-news-horizontal-image, .ui-news-vertical-image {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .ui-news-horizontal-image {
    height: 100%;
  }

  .ui-news-vertical-image {
    width: 100%;
  }
}

.ui-news-image-wrapper, .ui-news-image-wrapper.desktop {
  padding: 0;
  margin: 0;
  width: 25%;
  float: left;
}

.ui-news-image-wrapper.tablet {
  padding: 0;
  margin: 0;
  width: 35%;
  float: left;
}

.ui-news-image-wrapper.mobile {
  float: none;
  padding: 0;
  margin: 0 0 16px 0;
  width: 100%;
  height: 200px;
}
</style>
