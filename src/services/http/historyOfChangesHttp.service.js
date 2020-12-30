import { HttpService } from '@/services/http/http.service'

export class HistoryOfChangesHttpService {
  constructor () {
    this.httpSevice = new HttpService()
  }

  async getHistoryOfChanges (options) {
    options = options || {}
    let url = 'history-of-changes'

    const page = (options.page && (options.page - 1)) || 0
    url += `?page=${page}`

    const size = options.size || 10
    url += `&size=${size}`

    if (options.tags && options.tags.length) {
      const tagsString = options.tags.map((tag) => {
        return tag
      }).join(',')

      url += `&tags=${tagsString}`
    }

    return await this.httpSevice.get(url)
  }
}
