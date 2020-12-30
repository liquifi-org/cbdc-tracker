import { ScreenSizeService } from '@/services/screenSize.service'

export const screenSizeMixin = {
  data () {
    this.screenSizeService = new ScreenSizeService()
    this.screenSizeService.subscribe(this.getScreenSizeServiceObserver())

    return {
      isTabletScreen: this.screenSizeService.isTablet,
      isMobileScreen: this.screenSizeService.isMobile,
      isDesktopScreen: this.screenSizeService.isDesktop
    }
  },
  methods: {
    getScreenSizeServiceObserver () {
      if (!this._screenSizeServiceObserver) {
        this._screenSizeServiceObserver = () => {
          this.isTabletScreen = this.screenSizeService.isTablet
          this.isMobileScreen = this.screenSizeService.isMobile
          this.isDesktopScreen = this.screenSizeService.isDesktop

          this.onScreenResize && this.onScreenResize()
        }
      }

      return this._screenSizeServiceObserver
    }
  },
  destroyed () {
    this.screenSizeService.unsubscribe(this.getScreenSizeServiceObserver())
  }
}
