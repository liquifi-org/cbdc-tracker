import { HttpService } from './http/http.service'

export class LoadFileService {
  constructor () {
    this.httpService = new HttpService()
  }

  async getFileResponse (url, options) {
    if (!url) {
      throw new Error('LoadFileService: Unknown url.')
    }

    return await this.httpService.get(url, {
      ...options,
      responseType: 'blob'
    })
  }
}
