import { DATE_FORMATS, DateParserService } from '@/services/dateParser.service'

export const getDashboardLastUpdateDateFromHistoryOfChanges = (historyOfChangesList) => {
  const item = historyOfChangesList[0]
  const dateParser = new DateParserService()

  const month = item.month
  const year = item.year

  const dateFromHistoryOfChanges = dateParser.getMSTimestampFromDateObject({
    year,
    month
  })

  const manualUpdateDate = process.env.VUE_APP_MANUAL_UPDATE_DATE

  const shownDate = (manualUpdateDate > dateFromHistoryOfChanges) ? manualUpdateDate : dateFromHistoryOfChanges
  return dateParser.format(shownDate, DATE_FORMATS.HISTORIC_STATE)
}
