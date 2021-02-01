import moment from 'moment'

// It correct place for choose, add or change date format.
export const DATE_FORMATS = {
  YEAR: 'YYYY',
  DEFAULT: 'DD/MM/YY',
  DATE: 'DD/MM/YY',
  HISTORIC_STATE: 'MMMM YYYY',
  NEWS_UPDATE: 'MMM, DD YY',
  MS_TIMESTAMP: 'x'
}

// Use this class for parse dates and never use moment(or like moment libraries) in others places.
export class DateParserService {
  format (date, format) {
    format = format || DATE_FORMATS.DEFAULT
    return date ? moment(parseInt(date)).format(format) : ''
  }

  getMonthNameByNumber (monthNumber) {
    return moment().month(monthNumber - 1).format('MMMM')
  }

  getMSTimestampFromDateObject (dateObject) {
    return moment({
      ...dateObject,
      month: (dateObject.month - 1)
    }).format(DATE_FORMATS.MS_TIMESTAMP)
  }
}
