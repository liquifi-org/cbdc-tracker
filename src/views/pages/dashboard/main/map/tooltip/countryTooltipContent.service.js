import Vue from 'vue'
import TooltipWrapper from './TooltipWrapper'
import TooltipContent from './TooltipContent'
import router from '@/router'

export class CountryTooltipContentService {
  getTemplate (country, watchlist) {
    return this.generateTemplateFromComponent(TooltipContent, {
      router,
      data: {
        country,
        watchlist
      }
    })
  }

  generateTemplateFromComponent (component, options = {}) {
    const componentInstance = new Vue({
      ...options,
      data () {
        return {
          ...options.data,
          tooltipContentComponent: component
        }
      },
      render: h => h(TooltipWrapper)
    })

    const divElement = document.createElement('div')
    divElement.style.display = 'none'

    const componentElement = document.createElement('div')
    divElement.appendChild(componentElement)

    componentInstance.$mount(componentElement)

    const bodyElement = document.querySelector('body')
    bodyElement.appendChild(divElement)

    const template = divElement.innerHTML

    bodyElement.removeChild(divElement)

    return template
  }
}
