<template>
  <app-card>
    <div class="d-flex justify-content-between">
      <app-title level="2">Filters {{filtersCount}}</app-title>

      <div>
        <app-clear-button v-if="isFiltersExpanded" class="m-r-16" @click="onClear"></app-clear-button>
        <app-collapse-button :target="'filters' + componentId" @toggle="onToggleFilters"></app-collapse-button>
      </div>
    </div>

    <app-collapse-block :id="'filters' + componentId">
      <app-card-line class="m-t-16 m-b-16"></app-card-line>

      <FiltersContent ref="content"
                      :filters="filters"
                      :countriesWithCurrencies="countriesWithCurrencies"
                      :currencyFieldName="currencyFieldName"
                      :currencyNames="currencyNames"
                      :technologiesWithCurrencies="technologiesWithCurrencies"
                      :technologyNameWithCurrencies="technologyNameWithCurrencies"
                      @change="onChange"></FiltersContent>
    </app-collapse-block>
  </app-card>
</template>

<script>
import FiltersContent from './Content'

export default {
  props: {
    filters: Array,
    countriesWithCurrencies: Array,
    currencyFieldName: String,
    currencyNames: Array,
    technologiesWithCurrencies: Array,
    technologyNameWithCurrencies: Array
  },
  data () {
    return {
      isFiltersExpanded: false
    }
  },
  components: {
    FiltersContent
  },
  computed: {
    filtersCount () {
      const filtersLength = this.filters.reduce((memo, filter) => {
        return filter.value ? (memo + 1) : memo
      }, 0)

      return filtersLength ? `(${filtersLength})` : ''
    }
  },
  methods: {
    onClear () {
      this.$refs.content.clear()
      this.$emit('clear')
    },
    onChange (event) {
      this.$emit('change', event)
    },
    onToggleFilters () {
      this.isFiltersExpanded = !this.isFiltersExpanded
    }
  }
}
</script>
