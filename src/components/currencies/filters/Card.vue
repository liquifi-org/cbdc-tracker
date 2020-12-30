<template>
  <div class="ui-currency-filters">
    <app-card>
      <template #header>
        <div class="d-flex justify-content-between align-items-baseline">
          <app-title level="2">Filters</app-title> <app-clear-button @click="onClear"></app-clear-button>
        </div>
      </template>

      <FiltersContent ref="content"
                      :filters="filters"
                      :countriesWithCurrencies="countriesWithCurrencies"
                      @change="onChange"></FiltersContent>
    </app-card>
  </div>
</template>

<script>
import FiltersContent from './Content'

export default {
  props: {
    filters: Array,
    countriesWithCurrencies: Array
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

<style lang="scss">
  .ui-currency-filters {
    position: sticky;
    top: 0;
  }
</style>
