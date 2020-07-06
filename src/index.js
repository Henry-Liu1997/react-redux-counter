//import packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//import component
import App from './App';

//import reducers
import countReducer from './countReducers';
import weatherReducer from './weatherReducer';
import modalReducer from './modalReducer';

//setup store
const middleware = [ReduxThunk];

const store = createStore(
  combineReducers({
    countState: countReducer,
    weatherState: weatherReducer,
    modalState: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
