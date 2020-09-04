import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// global css
import './assets/css/layout.scss';
// page
import Index from './pages/reactTodo';
// redux
import { store } from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('App')
);
