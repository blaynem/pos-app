import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
  	<App />
	</Provider>,
  document.getElementById('root')
);
