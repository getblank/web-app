import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import createStore from './createStore';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
