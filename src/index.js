import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import reducer from './reducers';

// setup initial state
const defaultState = {
  count: 0,
  name: 'Henry',
};

//setup store

const store = createStore(reducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
