import 'whatwg-fetch'
import 'es6-promise'

const BASE_URL = '/api';

export function request(url, options) {
  options.credentials = 'include';
  options.headers = {
    'Accept': 'application/json, text/plain, */*'
  };

  url=`${BASE_URL}${url}`;

  return new Promise((resolve, reject) => {
    fetch(url, options).then(res => {
      return res.json();
    }).then(data => {
      if (data.code === 0) {
        resolve(data)
      } else {
        if (data.code === 401) {
          //失败后的一种状态
        } else {
          //失败的另一种状态
        }
        reject(data) //返回失败数据
      }
    }).catch(err => {
      //捕获异常
      console.log(err.msg);
      reject(err);
    })
  })
}
