import 'whatwg-fetch'
import 'es6-promise'

//let qs = require('qs');

const BASE_URL = '/api';

export function request(url, options) {
  options.credentials = 'include';
  options.headers = {
    'Accept': 'application/json, text/plain, */*',
  };

  if (options.method === 'POST') {
    //根据后端接受什么形式的数据选择对应的body与headers
    options.body = JSON.stringify(options.body);
    options.headers = {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
    /* options.body = qs.stringify(options.body);
       options.headers={
       'Accept': 'application/json, text/plain, *!/!*',
       'Content-Type': 'application/x-www-form-urlencoded'
       }
     */
  }

  url = `${BASE_URL}${url}`;

  return new Promise((resolve, reject) => {
    fetch(url, options).then(res => {
      return res.json();
    }).then(data => {
      resolve(data)
    }).catch(err => {
      //捕获异常
      console.log(err.msg);
      reject(err);
    })
  })
}
