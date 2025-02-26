import { getUrlHostname } from '@/utils/getUrlHostname'

export class LinkParserService {
  parseStringToObjectArray (str) {
    let links = str ? str.split('\n') : []

    links = links.map((link) => link.trim())

    links = links.filter((link) => {
      return !!link
    })

    return links.map((link) => {
      return {
        href: link,
        text: getUrlHostname(link)
      }
    })
  }
}
