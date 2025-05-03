import { CELL_TYPES, HEADER_CELL_TYPES } from '@/components/table/constants'
import TextCell from '@/components/table/cells/TextCell'
import DigitalCurrencyCell from '@/components/table/cells/DigitalCurrencyCell'
import StatusCell from '@/components/table/cells/StatusCell'
import DigitalCurrencyHeaderCell from '@/components/table/headerCells/DigitalCurrencyHeaderCell'
import TextHeaderCell from '@/components/table/headerCells/TextHeaderCell'
import YearCell from '@/components/table/cells/YearCell'
import UpdateRateCell from '@/components/table/cells/UpdateRateCell'
import InteroperabilityValueCell from '@/components/table/cells/InteroperabilityValueCell'
import LinksCell from '@/components/table/cells/LinksCell'
import CountryCell from '@/components/table/cells/CountryCell.vue'

export class CellComponentResolver {
  static getCellComponentByType (cellType) {
    switch (cellType) {
      case CELL_TYPES.DIGITAL_CURRENCY:
        return DigitalCurrencyCell
      case CELL_TYPES.STATUS:
        return StatusCell
      case CELL_TYPES.YEAR:
        return YearCell
      case CELL_TYPES.UPDATE_RATE:
        return UpdateRateCell
      case CELL_TYPES.INTEROPERABILITY_VALUE:
        return InteroperabilityValueCell
      case CELL_TYPES.LINKS:
        return LinksCell
      case CELL_TYPES.COUNTRY:
        return CountryCell
      case CELL_TYPES.TEXT:
      default:
        return TextCell
    }
  }

  static getHeaderCellComponentByType (cellType) {
    switch (cellType) {
      case HEADER_CELL_TYPES.DIGITAL_CURRENCY:
        return DigitalCurrencyHeaderCell
      case HEADER_CELL_TYPES.TEXT:
      default:
        return TextHeaderCell
    }
  }
}
