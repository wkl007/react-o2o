import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import './assets/less/reset.less'
import './assets/less/font.less'

import App from './router/App'

//创建Redux的store对象
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
