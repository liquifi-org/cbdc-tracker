import { uniqueId, isUndefined } from 'lodash'

export class BaseEventEmitter {
  constructor (element) {
    this.element = element

    !this.hasEmittersForElement() && this.onInit()
    this.addMarkInDom()
  }

  onInit () {
    throw Error('Need override this.onInit')
  }

  onDestroy () {
  }

  getEventName () {
    throw Error('Need override this.getEventName')
  }

  getEmitterId () {
    this.emitterId = this.emitterId || uniqueId(this.getEmitterIdPrefixForDom())
    return this.emitterId
  }

  hasEmittersForElement () {
    return !isUndefined(this.element.dataset[this.getHasEmitterAttributeName()])
  }

  addMarkInDom () {
    this.element.dataset[this.getHasEmitterAttributeName()] = ''
    this.element.dataset[this.getEmitterId()] = ''
  }

  removeMarkInDom () {
    delete this.element.dataset[this.getEmitterId()]

    const hasEmitterAttributeName = this.getHasEmitterAttributeName()

    const datasetKeys = Object.keys(this.element.dataset)
    const hasEmitters = datasetKeys.find((dataAttributeName) => {
      return dataAttributeName.startsWith(this.getEmitterIdPrefixForDom())
    })

    !hasEmitters && delete this.element.dataset[hasEmitterAttributeName]
  }

  getPrefixForDom () {
    return this.getEventName().replace(':', '')
  }

  getEmitterIdPrefixForDom () {
    return `${this.getPrefixForDom()}EmitterId`
  }

  getHasEmitterAttributeName () {
    return `${this.getPrefixForDom()}HasEmitter`
  }

  destroy () {
    this.removeMarkInDom()
    !this.hasEmittersForElement() && this.onDestroy()
  }
}
