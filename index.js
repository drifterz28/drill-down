import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './src/reducers';
import * as actions from './src/actions';

import Items from './src/containers/App';
import Options from './src/containers/options';

const logger = createLogger();

const reducer = combineReducers({
  ...reducers
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <Items />
  </Provider>,
  document.getElementById('drillItems')
);

render(
  <Provider store={store}>
    <Options />
  </Provider>,
  document.getElementById('drillDownOptions')
);
