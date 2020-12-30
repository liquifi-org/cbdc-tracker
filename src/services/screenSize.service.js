import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from '@/constants/breakpoints'
import { throttle } from 'lodash'

let instance

/**
 * Helper service for work with layout breakpoints.
 */
export class ScreenSizeService {
  constructor () {
    if (instance) {
      return instance
    }

    this.observers = []
    this.updateWidth()
    this.initialize()
  }

  initialize () {
    window.addEventListener('resize', throttle(this.onResize.bind(this), 60))
  }

  onResize () {
    this.updateWidth()
  }

  updateWidth () {
    const oldWidth = this.width
    this.width = document.body.clientWidth

    if (oldWidth === this.width) {
      return
    }

    if (this.width >= MIN_DESKTOP_WIDTH) {
      this.isDesktop = true
      this.isTablet = false
      this.isMobile = false
    } else if (this.width >= MIN_TABLET_WIDTH) {
      this.isDesktop = false
      this.isTablet = true
      this.isMobile = false
    } else {
      this.isDesktop = false
      this.isTablet = false
      this.isMobile = true
    }

    this.broadcast({
      isDesktop: this.isDesktop,
      isTablet: this.isTablet,
      isMobile: this.isMobile
    })
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter((subscriber) => {
      return (subscriber !== fn)
    })
  }

  broadcast (data) {
    this.observers.forEach((subscriber) => {
      subscriber(data)
    })
  }
}
