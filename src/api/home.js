import {request} from "./request";

export default class HomeServer {

  static getAdData() {
    let url = '/homeAd';
    return request(url)
  }

  static getListData(city, page) {
    let url = `/homeList/${city}/${page}`;
    return request(url)
  }
}