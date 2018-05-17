import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import registerServiceWorker from './registerServiceWorker';

import './assets/less/reset.less'
import './assets/less/font.less'

ReactDOM.render(
  <App/>
  , document.getElementById('root'));
registerServiceWorker();
