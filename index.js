import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import * as reducers from './src/reducers';
import * as actions from './src/actions';

import Items from './src/containers/App';
import Options from './src/containers/options';

const reducer = combineReducers({
  ...reducers
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
