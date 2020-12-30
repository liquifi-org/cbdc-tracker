<template>
  <div>
    <app-card v-if="!isMobileScreen">
      <template #header>
        <Header></Header>
      </template>

      <Map class="m-b-16"></Map>

      <Currencies></Currencies>
    </app-card>

    <div v-else>
      <Header class="m-b-16"></Header>

      <b-row class="m-b-16">
        <b-col cols="12">
          <FiltersCard></FiltersCard>
        </b-col>
      </b-row>

      <Currencies></Currencies>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Currencies from './currencies/Block'
import FiltersCard from '../filters/Card'
import { screenSizeMixin } from '@/mixins/screenSize.mixin'

export default {
  mixins: [screenSizeMixin],
  components: {
    Header,
    Currencies,
    FiltersCard
  }
}
</script>
