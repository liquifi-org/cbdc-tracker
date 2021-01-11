<template>
  <b-row>
    <b-col :cols="localFieldCols" v-for="(filter) in localFilters" :key="filter.name">
      <component class="m-b-16"
                 v-bind:is="getFilterComponent(filter.type)"
                 :data="filter"
                 @changeValue="onChangeFilter({filter, value: $event})"></component>
    </b-col>
  </b-row>
</template>

<script>
import { FilterComponentResolver } from './filterComponentResolver'
import { BUTTON_TYPES } from '@/components/buttons/constants'
import { ClonerService } from '@/services/cloner.service'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'

export default {
  props: {
    filters: Array,
    countriesWithCurrencies: Array,
    fieldCols: String
  },
  data () {
    return {
      BUTTON_TYPES,
      localFilters: []
    }
  },
  computed: {
    localFieldCols () {
      return this.fieldCols || 12
    }
  },
  watch: {
    countriesWithCurrencies (newValue) {
      this.localFilters.forEach((filter) => {
        if (CURRENCY_FIELD_NAMES.COUNTRY === filter.name) {
          filter.settings.possibleValues = [...new Set(newValue)]
        }
      })
    }
  },
  mounted () {
    this.localFilters = this.getFiltersClone()
  },
  methods: {
    onChangeFilter ({ filter, value }) {
      this.localFilters.forEach((v) => {
        if (v.name === filter.name) {
          v.value = value
        }
      })

      this.$emit('change', { filters: this.localFilters })
    },
    getFilterComponent (type) {
      return FilterComponentResolver.getComponentByType(type)
    },
    clear () {
      this.localFilters = this.getFiltersClone()

      this.localFilters.forEach((v) => {
        v.value = null
      })
    },
    getFiltersClone () {
      const clonerService = new ClonerService()
      return clonerService.clone(this.filters)
    }
  }
}
</script>
