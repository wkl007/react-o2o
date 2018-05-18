import {request} from "./request";

export default class OrderListServer {

  static getOrderListData(username) {
    let url = `/orderList/${username}`;
    return request(url,{method:'GET'})
  }

  static sendComment(id, comment) {
    let url = `/submitComment`;
    let data = {
      id: id,
      comment: comment
    };
    return request(url, {
      method: 'POST',
      body: data
    })
  }
}