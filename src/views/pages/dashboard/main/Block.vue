<template>
  <div>
    <app-card v-if="!isMobileScreen">
      <template #header>
        <Header></Header>
      </template>

      <div class="d-flex justify-content-center">
        <MapLegend v-if="isTabletScreen" class="m-b-16"></MapLegend>
      </div>

      <Map class="m-b-16"></Map>

      <HistoricState class="m-b-16"></HistoricState>

      <Currencies></Currencies>
    </app-card>

    <div v-else>
      <Header class="m-b-16"></Header>

      <b-row class="m-b-16">
        <b-col cols="12">
          <FiltersCard></FiltersCard>
        </b-col>
      </b-row>

      <HistoricState class="m-b-16"></HistoricState>

      <Currencies></Currencies>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Map from './map/Map'
import FiltersCard from '../filters/Card'
import HistoricState from './historicState/HistoricState'
import Currencies from './currencies/Block'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'
import MapLegend from '@/views/pages/dashboard/main/MapLegend'

export default {
  components: {
    Header,
    Map,
    MapLegend,
    HistoricState,
    Currencies,
    FiltersCard
  },
  mixins: [screenSizeMixin]
}
</script>
