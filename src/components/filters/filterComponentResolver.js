import YearRange from '@/components/fields/YearRange'
import Select from '@/components/fields/Select'
import MultipleSelect from '@/components/fields/MultipleSelect'
import StringInput from '@/components/fields/StringInput'
import { FILTER_TYPES } from '@/services/filter.service'

export class FilterComponentResolver {
  static getComponentByType (filterType) {
    switch (filterType) {
      case FILTER_TYPES.YEAR_RANGE:
        return YearRange
      case FILTER_TYPES.SELECT:
        return Select
      case FILTER_TYPES.MULTIPLE_SELECT:
        return MultipleSelect
      case FILTER_TYPES.STRING:
      default:
        return StringInput
    }
  }
}
