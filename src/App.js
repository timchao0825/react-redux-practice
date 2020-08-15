import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// import Index from './pages/Index';
// import Test from './pages/Test';
import Comment from './pages/Comment';

import './assets/css/layout.scss';

// redux
import { store } from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    {/* <Index /> */}
    {/* <Test /> */}
    <Comment likedText="cancel" unlikedText="like" />
  </Provider>,
  document.getElementById('App')
);
