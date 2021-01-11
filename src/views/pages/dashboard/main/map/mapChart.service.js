import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import worldLow from '@amcharts/amcharts4-geodata/worldLow'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { ANTARCTICA_COUNTRY_CODE } from './countries'
import { STATUS_BORDER_COLOR, STATUS_COLOR, STATUS_NAMES } from '@/constants/statuses'

am4core.useTheme(am4themesAnimated)

const MAP_CHART_CONFIG = {
  draggable: true,
  resizable: true,
  excludePolygonSeries: [ANTARCTICA_COUNTRY_CODE] // Antarctica is excluded in non-globe projection
}

export class MapChartService {
  constructor (mapWrapperElement, options) {
    this.options = options || {}
    this.mapWrapperElement = mapWrapperElement

    this.resetChart(this.options.countriesDataMap || new Map())
  }

  resetChart (countriesDataMap) {
    this.destroy()

    const mapChart = am4core.create(this.mapWrapperElement, am4maps.MapChart)

    // Set projection
    // https://www.amcharts.com/docs/v4/chart-types/map/#Setting_projection
    // instead of Miller, you can use Mercator or many other projections available: https://www.amcharts.com/demos/map-using-d3-projections/
    mapChart.projection = new am4maps.projections.Miller()
    mapChart.seriesContainer.draggable = MAP_CHART_CONFIG.draggable

    // Zoom
    mapChart.seriesContainer.resizable = MAP_CHART_CONFIG.resizable
    mapChart.zoomControl = new am4maps.ZoomControl()
    mapChart.zoomControl.align = 'right'
    mapChart.zoomControl.valign = 'middle'
    mapChart.chartContainer.wheelable = false // Disabling mouse wheel zoom

    const polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries())
    // Excluded countries in non-globe projection
    polygonSeries.exclude = MAP_CHART_CONFIG.excludePolygonSeries
    // Make map load polygon data (state shapes and names) from GeoJSON
    mapChart.geodata = worldLow
    polygonSeries.useGeodata = true

    // Configure series tooltip
    const polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipHTML = '{tooltipTemplate}'
    polygonSeries.calculateVisualCenter = true
    polygonTemplate.tooltipPosition = 'fixed'
    polygonSeries.tooltip.label.interactionsEnabled = true
    polygonSeries.tooltip.hoverOnFocus = true
    polygonSeries.tooltip.keepTargetHover = true
    polygonSeries.tooltip.getFillFromObject = false
    polygonSeries.tooltip.contentWidth = 500
    polygonSeries.tooltip.background.fill = am4core.color('#FFFFFF')
    polygonSeries.tooltip.label.padding(0, 0, 0, 0)

    // Default values for countries(use for countries without currencies)
    polygonSeries.status = STATUS_NAMES.NONE
    polygonTemplate.fill = this.getColorByStatus(polygonSeries.status)
    polygonTemplate.stroke = this.getBorderColorByStatus(polygonSeries.status)

    // Bind properties to keys in data
    polygonTemplate.propertyFields.fill = 'fill'
    polygonTemplate.propertyFields.stroke = 'stroke'

    // On over event change fill color to stroke color
    polygonTemplate.events.on('over', function (event) {
      event.target.fill = event.target.dataItem.dataContext.stroke || polygonTemplate.stroke
    })

    // On out event back fill color
    polygonTemplate.events.on('out', function (event) {
      event.target.fill = event.target.dataItem.dataContext.fill || polygonTemplate.fill
    })

    this.polygonSeries = polygonSeries
    this.mapChart = mapChart
    this.isCreated = true

    if (countriesDataMap.size) {
      this.updateCountriesData(countriesDataMap)
    } else {
      this.countriesDataMap = countriesDataMap
    }
  }

  updateCountriesData (countriesDataMap) {
    this.countriesDataMap = countriesDataMap

    if (!this.isCreated) {
      console.warn('Try update map chart that didn\'t create')
    }

    if (!this.countriesDataMap.size) {
      this.resetChart(countriesDataMap)
      return
    }

    this.polygonSeries.data = Array.from(this.countriesDataMap, (v) => {
      const item = v[1]

      const country = this.countriesDataMap.get(item.id)
      const color = this.getColorByStatus(country.status)
      const borderColor = this.getBorderColorByStatus(country.status)

      return {
        id: country.id,
        fill: am4core.color(color),
        stroke: am4core.color(borderColor),
        tooltipTemplate: this.getTooltipTemplate(country)
      }
    })
  }

  updateTooltipTemplates () {
    this.polygonSeries.data.forEach((item) => {
      const country = this.countriesDataMap.get(item.id)

      if (country) {
        item.tooltipTemplate = this.getTooltipTemplate(country)
      }
    })
  }

  getColorByStatus (status) {
    return STATUS_COLOR[status]
  }

  getBorderColorByStatus (status) {
    return STATUS_BORDER_COLOR[status]
  }

  getTooltipTemplate (country) {
    return (this.options.getTooltipTemplate && country && this.options.getTooltipTemplate(country)) || null
  }

  destroy () {
    if (this.isCreated) {
      this.mapChart.dispose()
    }

    this.isCreated = false
  }
}
