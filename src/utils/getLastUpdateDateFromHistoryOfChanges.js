import { DateParserService } from '@/services/dateParser.service'

export const getLastUpdateDateFromHistoryOfChanges = (historyOfChangesList) => {
  const item = historyOfChangesList[0]
  const dateParser = new DateParserService()

  const month = dateParser.getMonthNameByNumber(item.month)
  const year = item.year

  return `${month} ${year}`
}
