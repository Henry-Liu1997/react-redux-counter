//import packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//import component
import App from './App';

//import reducers
import countReducer from './countReducers';
import productReducer from './productReducer';
import modalReducer from './modalReducer';

//setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    porductState: productReducer,
    modalState: modalReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
