<template>
  <div>
    <component v-for="(item) in localItems" :key="item.name"
               :is="getInfoFieldComponent(item.name)"
               :data="item"></component>
  </div>
</template>

<script>
import TextInfoItem from './infoFields/TextInfoItem'
import { CURRENCY_FIELD_NAMES, CURRENCY_LINKS_FIELDS } from '@/constants/currencies'
import YearInfoItem from './infoFields/YearInfoItem'
import UpdateRateItem from './infoFields/UpdateRateItem'
import InteroperabilityValueItem from './infoFields/InteroperabilityValueItem'
import LinksItem from './infoFields/LinksItem'
import { isEmptyCurrencyField } from '@/utils/isEmptyCurrencyField'

export default {
  props: {
    items: Array
  },
  computed: {
    localItems () {
      return this.items.filter((infoField) => {
        return !isEmptyCurrencyField(infoField.value)
      })
    }
  },
  methods: {
    getInfoFieldComponent (infoFieldName) {
      if (CURRENCY_LINKS_FIELDS.includes(infoFieldName)) {
        return LinksItem
      }

      switch (infoFieldName) {
        case CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR:
          return YearInfoItem
        case CURRENCY_FIELD_NAMES.UPDATE_RATE:
          return UpdateRateItem
        case CURRENCY_FIELD_NAMES.INTEROPERABILITY:
          return InteroperabilityValueItem
        default:
          return TextInfoItem
      }
    }
  }
}
</script>

<style lang="scss">
  .ui-info-item {
    &:not(:first-of-type) {
      margin-top: 16px;
    }

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    .ui-info-item_title {
      font-size: 12px;
      color: #7997C4;
    }

    .ui-info-item_data {
      color: $default-font-color;
    }
  }
</style>
