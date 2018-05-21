import { request } from './request'

export default class DetailServer {

  static getInfoData (id) {
    let url = `/detail/info/${id}`
    return request(url, {method: 'GET'})
  }

  static getCommentData (page, id) {
    let url = `/detail/comment/${page}/${id}`
    return request(url, {method: 'GET'})
  }
}