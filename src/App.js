import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Index from './pages/index/Index'

import './assets/css/layout.scss';

// redux
import {store} from './store/configureStore';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('App')
)