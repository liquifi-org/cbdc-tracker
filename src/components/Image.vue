<template>
  <div class="ui-image-wrapper">
    <img v-show="isLoaded" ref="image" :alt="alt">

    <span v-show="!isLoaded">
      <slot name="fallback"></slot>
    </span>
  </div>
</template>

<script>
import { LoadFileService } from '@/services/loadFile.service'

export default {
  props: {
    src: String,
    alt: String
  },
  data () {
    return {
      isLoaded: false
    }
  },
  async mounted () {
    await this.showImg()
  },
  watch: {
    async src () {
      await this.showImg()
    }
  },
  methods: {
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
          this.$refs.image.setAttribute('src', imageDataUrl)
          this.isLoaded = true
        }
      } catch (error) {
        console.warn(error)
        this.isLoaded = false
      }
    },
    async downloadImg () {
      const downloadFileService = new LoadFileService()
      return await downloadFileService.getFileResponse(this.src, {
        isExternalResource: true
      })
    }
  }
}
</script>

<style lang="scss">
 .ui-image-wrapper {
   overflow: hidden;

   img {
     min-width: 100%;
     min-height: 100%;
   }
 }
</style>
