import 'whatwg-fetch';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import 'normalize.css';
import rootReducer from './reducers';
import App from './components/App';
import './styles/index.css';

const history = createHistory();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
