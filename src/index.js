import React from 'react';
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import './index.css';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);