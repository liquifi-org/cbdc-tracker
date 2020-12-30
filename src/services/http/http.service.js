import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

let instance
const BASE_URL = 'api/'

/**
 * Service to call HTTP request.
 * Use Axios.
 */
export class HttpService {
  constructor () {
    if (instance) {
      return instance
    }

    Vue.use(VueAxios, axios)
    instance = this
  }

  /**
   * Send the GET HTTP request
   * @param url
   * @param options
   * @returns {*}
   */
  async get (url, options) {
    options = options || {}

    if (!options.isExternalResource) {
      url = `${BASE_URL}${url}`
    }

    const config = {}

    if (options.responseType) {
      config.responseType = options.responseType
    }

    const response = await Vue.axios.get(url, config)
    return response.data
  }

  /**
   * Set the POST HTTP request
   * @param url
   * @param params
   * @returns {*}
   */
  async post (url, params) {
    const response = await Vue.axios.post(`${BASE_URL}${url}`, params)
    return response.data
  }

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  async put (url, params) {
    const response = await Vue.axios.put(`${BASE_URL}${url}`, params)
    return response.data
  }

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  async delete (url) {
    const response = await Vue.axios.delete(`${BASE_URL}${url}`)
    return response.data
  }
}
