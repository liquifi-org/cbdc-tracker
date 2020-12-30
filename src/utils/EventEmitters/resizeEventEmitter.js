import ResizeSensor from 'css-element-queries/src/ResizeSensor'
import { BaseEventEmitter } from './baseEventEmitter'

export const RESIZE_EVENT_NAME = 'resize:element'

export class ResizeEventEmitter extends BaseEventEmitter {
  onInit () {
    this.oldWidth = this.element.clientWidth
    this.oldHeight = this.element.clientHeight

    this.resizeSensor = new ResizeSensor(this.element, () => {
      this.checkResize()
      this.oldWidth = this.element.clientWidth
      this.oldHeight = this.element.clientHeight
    })
  }

  onDestroy () {
    this.resizeSensor && this.resizeSensor.detach()
  }

  checkResize () {
    const newWidth = this.element.clientWidth
    const newHeight = this.element.clientHeight

    const isWidthChanged = (newWidth !== this.oldWidth)
    const isHeightChanged = (newHeight !== this.oldHeight)

    const isResize = (isWidthChanged || isHeightChanged)

    if (isResize) {
      const detail = {
        element: this.element,
        newWidth,
        newHeight,
        isWidthChanged,
        isHeightChanged
      }

      const event = new CustomEvent(this.getEventName(), { detail })

      this.element.dispatchEvent(event)
    }
  }

  getEventName () {
    return RESIZE_EVENT_NAME
  }
}
