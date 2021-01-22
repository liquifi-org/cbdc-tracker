<template>
  <div ref="mapWrapper" class="ui-map-chart-wrapper"></div>
</template>

<script>
import { MapChartService } from './mapChart.service'
import { CountriesDataMapper } from './countriesDataMapper'
import { CountryTooltipContentService } from './tooltip/countryTooltipContent.service'
import { mapGetters, mapState } from 'vuex'
import { MODULE_NAMES } from '@/store'

export default {
  computed: {
    ...mapGetters(MODULE_NAMES.DASHBOARD, {
      currencies: 'filteredCurrencies'
    }),
    ...mapState(MODULE_NAMES.WATCHLIST, {
      watchlist: (state) => {
        return state.list
      }
    }),
    countriesDataMap () {
      const countriesDataMapper = new CountriesDataMapper()
      return countriesDataMapper.map(this.currencies)
    }
  },
  watch: {
    countriesDataMap () {
      this.mapChartService && this.mapChartService.updateCountriesData(this.countriesDataMap)
    },
    watchlist () {
      this.mapChartService && this.mapChartService.updateTooltipTemplates()
    }
  },
  mounted () {
    this.countryTooltipContentService = new CountryTooltipContentService()
    this.mapChartService = new MapChartService(this.$refs.mapWrapper, {
      countriesDataMap: this.countriesDataMap,
      getTooltipTemplate: (country) => {
        return this.countryTooltipContentService.getTemplate(country, this.watchlist)
      }
    })
  },
  beforeDestroy () {
    this.mapChartService && this.mapChartService.destroy()
  }
}
</script>

<style lang="scss">
  .ui-map-chart-wrapper {
    width: 100%;
    height: 580px;
    max-height: 100vh;
  }

  .ui-map-chart_zoom-button {
    font-size: 14px;
    line-height: 100%;
    color: $site-primary-color;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid $site-primary-color;
    text-align: center;
  }
</style>
