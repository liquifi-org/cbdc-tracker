<template>
  <app-card>
    <template #header>
      <div class="d-flex justify-content-between align-items-baseline">
        <app-title level="2">Filters</app-title>
        <app-clear-button @click="onClear"></app-clear-button>
      </div>
    </template>

    <FiltersContent ref="content"
                    :filters="filters"
                    :countriesWithCurrencies="countriesWithCurrencies"
                    :currencyFieldName="currencyFieldName"
                    :currencyNames="currencyNames"
                    :technologiesWithCurrencies="technologiesWithCurrencies"
                    @change="onChange"></FiltersContent>
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
    technologiesWithCurrencies: Array
  },
  components: {
    FiltersContent
  },
  methods: {
    onClear () {
      this.$refs.content.clear()
      this.$emit('clear')
    },
    onChange (event) {
      this.$emit('change', event)
    }
  }
}
</script>
