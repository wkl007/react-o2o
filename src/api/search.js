import { request } from './request'

export default class SearchServer {

  static getSearchData (page, cityName, category, keyword) {
    let keywordStr = keyword ? `/${keyword}` : ''
    let url = `/search/${page}/${cityName}/${category}${keywordStr}`
    return request(url, {method: 'GET'})
  }
}